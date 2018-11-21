'use strict';
const to 					  = require('await-to-js').to;
const bcrypt                  = require('bcryptjs');
const jwt                     = require('jsonwebtoken');
const messageBird             = require('../helpers/messageBird');
const Joi                     = require('joi');

const User                    = require('../models/index').User;
const Campus_organization     = require('../models/index').Campus_organization;
const College_school          = require('../models/index').College_school;
const Course                  = require('../models/index').Course;
const Leadership_123_title    = require('../models/index').Leadership_123_title;
const Onetwoone_title         = require('../models/index').Onetwoone_title;
const Profile                 = require('../models/index').Profile;
const Purple_book_class_title = require('../models/index').Purple_book_class_title; 
const Volunteer_ministries    = require('../models/index').Volunteer_ministries;    

exports.temp = async (req, res) => {
    console.log('hello world!!');
    let result, data = [];
    try{
    result = await User.findAll();
    data.push(result);
    console.log(result);
    }catch(err){
        console.log(err);
    }

    result = await Campus_organization.findAll();
    data.push(result);
    
    result = await College_school.findAll();
    data.push(result);
    
    result = await Course.findAll();
    data.push(result);
    
    result = await Leadership_123_title.findAll();
    data.push(result);
    
    result = await Onetwoone_title.findAll();
    data.push(result);
        
    result = await Onetwoone_title.findAll();
    data.push(result);
    
    result = await Purple_book_class_title.findAll();
    data.push(result);
    
    result = await Volunteer_ministries.findAll();
    data.push(result);
    
    return res.json({message: 'Successful Registration', data}, 200)
}

const schema = Joi.object().keys({
    type:           Joi.string().required(),
    birthday:       Joi.date(),
    full_name:      Joi.string().required(),
    password:       Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    username:       Joi.string().alphanum().min(3).max(30).required(),
    contact_number: Joi.string().trim().regex(/^[0-9]{7,11}$/).required(),
    address:        Joi.string(),
    image_url:      Joi.string(),
    leader_id:      Joi.string(),
    email:          Joi.string().email(),
	verification_code: Joi.number()
});

exports.register = async (req, res) => {
	let hash, salt;
	
    let err, type, birthday, full_name, username, password, contact_number, address, image_url, leader_id, verification_code, new_user, result, Joi_result;

    if (req.body.type)           type           = req.body.type;
	else return res.status(400).json({success: 'Unsuccessful', message: 'Empty type field'}); 
    if (req.body.birthday)       birthday       = req.body.birthday;
    if (req.body.full_name)      full_name      = req.body.full_name;
	else return res.status(400).json({success: 'Unsuccessful', message: 'Empty full_name field'}); 
    if (req.body.username)       username       = req.body.username;
	else return res.status(400).json({success: 'Unsuccessful', message: 'Empty username field'}); 
    if (req.body.password)       password       = req.body.password;
	else return res.status(400).json({success: 'Unsuccessful', message: 'Empty password field'}); 
    if (req.body.contact_number) contact_number = req.body.contact_number;
	else return res.status(400).json({success: 'Unsuccessful', message: 'Empty contact number field'}); 
    if (req.body.address)        address        = req.body.address;
	else return res.status(400).json({success: 'Unsuccessful', message: 'Empty address field'}); 
    if (req.body.image_url)      image_url      = req.body.image_url;

    new_user = {
        type,
        full_name,
        username,
        password,
        contact_number,
        address,
        image_url,
        verification_code: Math.floor(1000 + Math.random() * 9000)
    };

    [err, Joi_result] = await to(Joi.validate(new_user, schema));
	if (err){
        console.log(err);
        return res.status(400).json({new_user, success: 'Unsuccessful', message: 'Validation Error'});
    }
	
	[err, salt] = await to(bcrypt.genSalt(10));
    if (err) return res.status(400).json({success: 'Unsuccessful', message: 'Unsuccessful salt generation'});
    
    [err, hash] = await to(bcrypt.hash(password, salt));
    if (err) return res.status(400).json({success: 'Unsuccessful', message: 'Unsuccessful hash generation'});
	console.log(password);
	console.log(hash);
	new_user.password = hash;
	
	[err, new_user] = await to(User.create(new_user));
	if (err){
        console.log(err);
        return res.status(400).json({new_user, success: 'Unsuccessful'});
    }
	if (!new_user) return res.status(400).json({new_user, success: 'Unsuccessful'});
    
	return res.status(201).json({new_user, success: 'Successful'});
}

exports.login =  async (req, res) => {
	
}

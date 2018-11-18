'use strict';

const bcrypt                  = require('bcryptjs');
const jwt                     = require('jsonwebtoken');
const messageBird             = require('../helpers/messageBird');

const User                    = require('../models/index').User;
const Campus_organization     = require('../models/index').Campus_organization;
const College_school	      = require('../models/index').College_school;
const Course			      = require('../models/index').Course;
const Leadership_123_title    = require('../models/index').Leadership_123_title;
const Onetwoone_title	      = require('../models/index').Onetwoone_title;
const Profile			      = require('../models/index').Profile;
const Purple_book_class_title = require('../models/index').Purple_book_class_title;	
const Volunteer_ministries    = require('../models/index').Volunteer_ministries;	


// username, password, number, name, email, address or victory los banos
exports.register = async (req, res) => {
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

exports.login =  async (req, res) => {
}

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

	try{
	let result = await User.findAll();
	console.log(result);
	}catch(err){
		console.log(err);
	}
	
    console.log('after');

	result = await Campus_organization.findAll();
	console.log(result);
	
	result = await College_school.findAll();
	console.log(result);
	
	result = await Course.findAll();
	console.log(result);
	
	result = await Leadership_123_title.findAll();
	console.log(result);
	
	result = await Onetwoone_title.findAll();
	console.log(result);
		
	result = await Onetwoone_title.findAll();
	console.log(result);
	
	result = await Purple_book_class_title.findAll();
	console.log(result);
	
	result = await Volunteer_ministries.findAll();
	console.log(result);
}

exports.login =  async (req, res) => {
}

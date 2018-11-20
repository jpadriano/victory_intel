'use strict';
const uuidv4 = require('uuid/v4');
let courses = ['BS Agriculture','BS Agricultural Biotechnology','BS Agricultural Chemistry','BS Food Technology','BA Communication Arts','BA Sociology','Bachelor of Arts in Philosophy','BS Applied Mathematics','BS Applied Physics','BS Biology','BS Chemistry','BS Agricultural Chemistry','BS Computer Science','BS Mathematics','BS Mathematics and Science Teaching','BS Statistics','BS Development Communication','BS Agricultural and Biosystems Engineering','BS Chemical Engineering','BS Civil Engineering','BS Electrical Engineering','BS Industrial Engineering','BS Agricultural Economics','BS Agribusiness Management','BS Economics','Certificate in Forestry','BS Forestry','BS Human Ecology','BS Nutrition','Doctor of Veterinary Medicine','Others'];
module.exports = {
  up: (queryInterface, Sequelize) => {
  let course_rows = [];
	for (let i in courses){
		course_rows.push({
			id: uuidv4(),
			course: courses[i],
			createdAt: new Date(),
			updatedAt: new Date()
		});
	}
	return queryInterface.bulkInsert('Courses', course_rows, {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

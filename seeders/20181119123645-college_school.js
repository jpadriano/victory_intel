'use strict';
let schools =  ['CAS','CAFS','CDC','CEM','CEAT','CFNR','CHE','CVM','LSPU','HIGHSCHOOL','CPAF'];
const uuidv4 = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
	let school_rows = [];
	for (let i in schools){
		school_rows.push({
			id: uuidv4(),
			name: schools[i],
			createdAt: new Date(),
			updatedAt: new Date()
		});
	}
	return queryInterface.bulkInsert('college_schools', school_rows, {});
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
	return queryInterface.bulkDelete('college_schools', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};

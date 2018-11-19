'use strict';
let uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
	// return queryInterface.bulkInsert('Campus_organizations', [{
		// id: uuidv4(),
		// organization
	// }], {});
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

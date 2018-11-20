'use strict';
let ministries = ['Admin Support','Communications','Kids','Music Team','Production Design','Technical & Stage Management','Ushering','None']
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
	let volunteer_ministries_rows = [];
	for (let i in ministries){
		volunteer_ministries_rows.push({
			id: uuidv4(),
			ministry: ministries[i],
			createdAt: new Date(),
			updatedAt: new Date()
		});
	}
	return queryInterface.bulkInsert('volunteer_ministries', volunteer_ministries_rows, {});
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

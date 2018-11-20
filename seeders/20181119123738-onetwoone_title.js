'use strict';
let titles = ['Not yet','Salvation','Lordship','Repentance','Baptism','Devotion','Church','Discipleship','Done'];
const uuidv4 = require('uuid/v4');
module.exports = {
  up: (queryInterface, Sequelize) => {
	let title_rows = [];
	for (let i in titles){
		title_rows.push({
			id: uuidv4(),
			title: titles[i],
			createdAt: new Date(),
			updatedAt: new Date()
		});
	}
	return queryInterface.bulkInsert('onetwoone_titles', title_rows, {});
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

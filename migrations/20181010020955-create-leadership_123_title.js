'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Leadership_123_titles', {
		id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		title: {
		  type:Sequelize.STRING(100),
		  allowNull:false
		},
		createdAt: {
		  type:Sequelize.DATE,
		  allowNull:true
		},
		updatedAt: {
		  type:Sequelize.DATE,
		  allowNull:true
		},
		deletedAt: {
		  type:Sequelize.DATE,
		  allowNull:true
		}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Leadership_123_titles');
  }
};
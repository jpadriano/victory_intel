'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Campus_organizations', {
		id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		user_id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		organization: {
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
    return queryInterface.dropTable('Campus_organizations');
  }
};
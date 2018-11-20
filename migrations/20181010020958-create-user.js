'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
		id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		type: {
		  type: Sequelize.STRING(16),
		  allowNull:false
		},
		full_name: {
		  type:Sequelize.STRING(128),
		  allowNull:false
		},
		username: {
		  type:Sequelize.STRING(64),
		  allowNull:false,
		  unique: true
		},
		password: {
		  type:Sequelize.STRING(64),
		  allowNull:false
		},
		contact_number: {
		  type:Sequelize.STRING(64),
		  allowNull:false
		},
		address: {
		  type:Sequelize.STRING(128),
		  allowNull:false
		},
		image_url: {
		  type:Sequelize.STRING(256),
		  allowNull:true,
		  unique: true
		},
		status: {
		  type:Sequelize.STRING(16),
		  defaultValue: null
		},
		leader_id: {
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		verification_code: {
		  type: Sequelize.STRING(4),
		  allowNull: true
		},
		createdAt: {
		  type:Sequelize.DATE,
		  allowNull:false
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
    return queryInterface.dropTable('Users');
  }
};
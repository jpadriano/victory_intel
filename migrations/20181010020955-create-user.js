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
		profile_id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		type: {
		  type: Sequelize.STRING(16),
		  notNull: true,
		  allowNull:false
		},
		full_name: {
		  type:Sequelize.STRING(128),
		  notNull: true,
		  allowNull:false
		},
		username: {
		  type:Sequelize.STRING(64),
		  notNull: true,
		  allowNull:false,
		  unique: true
		},
		password: {
		  type:Sequelize.STRING(64),
		  notNull: true,
		  allowNull:false
		},
		contact_number: {
		  type:Sequelize.STRING(64),
		  notNull: true,
		  allowNull:false
		},
		address: {
		  type:Sequelize.STRING(128),
		  notNull: true,
		  allowNull:false
		},
		image_url: {
		  type:Sequelize.STRING(256),
		  notNull: true,
		  allowNull:true,
		  unique: true
		},
		status: {
		  type:Sequelize.STRING(16),
		  allowNull:true,
		  defaultValue: null
		},
		leader_id: {
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		verification_code: {
		  type: Sequelize.STRING(4),
		  notNull: true,
		  allowNull: true
		},
		deletedAt: {
		  type:Sequelize.DATE,
		  notNull: true,
		  allowNull:true
		},
		createdAt: {
			type:Sequelize.DATE,
			notNull: true,
			allowNull:true
		},
		updatedAt: {
		  type:Sequelize.DATE,
		  notNull: true,
		  allowNull:true
		},
		deletedAt: {
		  type:Sequelize.DATE,
		  notNull: true,
		  allowNull:true
		}
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};
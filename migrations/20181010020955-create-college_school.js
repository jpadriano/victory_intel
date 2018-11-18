'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('College_schools', {
		id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		name: {
		  type:Sequelize.STRING(100),
		  notNull: true,
		  allowNull:false
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
    return queryInterface.dropTable('College_schools');
  }
};
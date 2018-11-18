'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Purple_book_class_titles', {
		id: {
		  primaryKey: true,
		  type: Sequelize.UUID,
		  defaultValue: Sequelize.UUIDV4,
		  allowNull:false
		},
		title: {
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
    return queryInterface.dropTable('Purple_book_class_titles');
  }
};
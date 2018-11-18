'use strict';
module.exports = (sequelize, Sequelize) => {
  const Purple_book_class_title = sequelize.define('Purple_book_class_title', {
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
  }, {});
  Purple_book_class_title.associate = function(models) {
  };
  return Purple_book_class_title;
};
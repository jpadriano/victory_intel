'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
	id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    course: {
      type:DataTypes.STRING(100),
      notNull: true,
      allowNull:false
    },
	createdAt: {
      type:DataTypes.DATE,
      notNull: true,
      allowNull:true
    },
	updatedAt: {
      type:DataTypes.DATE,
      notNull: true,
      allowNull:true
    },
    deletedAt: {
      type:DataTypes.DATE,
      notNull: true,
      allowNull:true
    }
  }, {});
  Course.associate = function(models) {
  };
  return Course;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const College_school = sequelize.define('College_school', {
	id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    name: {
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
  College_school.associate = function(models) {
  };
  return College_school;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const Onetwoone_title = sequelize.define('Onetwoone_title', {
	id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    title: {
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
  Onetwoone_title.associate = function(models) {
  };
  return Onetwoone_title;
};
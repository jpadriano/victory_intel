'use strict';
module.exports = (sequelize, DataTypes) => {
  const Leadership_123_title = sequelize.define('Leadership_123_title', {
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
  Leadership_123_title.associate = function(models) {
  };
  return Leadership_123_title;
};
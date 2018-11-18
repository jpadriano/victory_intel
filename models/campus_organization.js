'use strict';
module.exports = (sequelize, DataTypes) => {
  const Campus_organization = sequelize.define('Campus_organization', {
	id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
	user_id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull:false
    },
    organization: {
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
  Campus_organization.associate = function(models) {
  };
  return Campus_organization;
};
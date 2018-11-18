'use strict';
module.exports = (sequelize, Sequelize) => {
  const Volunteer_ministries = sequelize.define('Volunteer_ministries', {
	id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
    ministry: {
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
  Volunteer_ministries.associate = function(models) {
  };
  return Volunteer_ministries;
};
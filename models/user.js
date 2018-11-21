'use strict';

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
	id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
    type: {
      type: Sequelize.STRING(16),
      allowNull:true
    },
	birthday: {
      type: Sequelize.DATE,
      allowNull:true
    },
    full_name: {
      type:Sequelize.STRING(128),
      allowNull:false
    },
    username: {
      type:Sequelize.STRING(64),
      allowNull:false,
      unique: true
    },
    password: {
      type:Sequelize.STRING(64),
      allowNull:false
    },
	email: {
      type:Sequelize.STRING(64),
      allowNull:true
    },
    contact_number: {
      type:Sequelize.STRING(64),
      allowNull:true
    },
    address: {
      type:Sequelize.STRING(128),
      allowNull:true
    },
    image_url: {
      type:Sequelize.STRING(256),
      allowNull:true,
      unique: true
    },
	leader_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:true
    },
    verification_code: {
      type: Sequelize.STRING(4),
      allowNull: true
    },
	createdAt: {
      type:Sequelize.DATE,
      allowNull:false
    },
	updatedAt: {
      type:Sequelize.DATE,
      allowNull:true
    },
    deletedAt: {
      type:Sequelize.DATE,
      allowNull:true
    }
  }, {});
  User.associate = function(models) {
  };
  return User;
};
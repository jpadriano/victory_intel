'use strict';
module.exports = (sequelize, Sequelize) => {
  const Profile = sequelize.define('Profile', {
	id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
    birthday: {
      type: Sequelize.DATE,
      allowNull:false
    },
    victory_group_schedule_day: {
      type:Sequelize.STRING(10),
      allowNull:false
    },
    victory_group_schedule_day: {
      type:Sequelize.TIME,
      allowNull:false,
      unique: true
    },
    batch: {
      type:Sequelize.INTEGER,
      allowNull:false
    },
    college_school_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	course_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	expected_graduation: {
      type:Sequelize.DATE,
      allowNull:true
    },
	onetwoone_title_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	onetwoone_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	victory_weekend: {
      type:Sequelize.STRING(10),
      allowNull:false
    },
	purple_book_class_title_id: {
      type: Sequelize.STRING(10),
      allowNull:false
    },
	making_disciples_class: {
      type:Sequelize.STRING(10),
      allowNull:false
    },
	church_community: {
      type:Sequelize.STRING(10),
      allowNull:false
    },
	leadership_123_title_id: {
      type: Sequelize.STRING(64),
      allowNull:false
    },
	doing_121_with_others: {
      type:Sequelize.STRING(10),
      allowNull:false
    },
	staff_enc: {
      type:Sequelize.STRING(64),
      allowNull:false
    },
	ministry_group: {
      type:Sequelize.STRING(64),
      allowNull:false
    },
	topic: {
      type:Sequelize.STRING(64),
      allowNull:false
    },
	user_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	leader_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	lg_leader: {
      type:Sequelize.STRING(64),
      allowNull:false
    },
	vg_leader: {
      type:Sequelize.STRING(64),
      allowNull:false
    },
    createdAt: {
      type:Sequelize.DATE,
      allowNull:true
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
  Profile.associate = function(models) {
  };
  return Profile;
};
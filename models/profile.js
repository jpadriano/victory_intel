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
      notNull: true,
      allowNull:false
    },
    victory_group_schedule_day: {
      type:Sequelize.STRING(10),
      notNull: true,
      allowNull:false
    },
    victory_group_schedule_day: {
      type:Sequelize.TIME,
      notNull: true,
      allowNull:false,
      unique: true
    },
    batch: {
      type:Sequelize.INTEGER,
      notNull: true,
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
      notNull: true,
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
      notNull: true,
      allowNull:false
    },
	purple_book_class_title_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	making_disciples_class: {
      type:Sequelize.STRING(10),
      notNull: true,
      allowNull:false
    },
	church_community: {
      type:Sequelize.STRING(10),
      notNull: true,
      allowNull:false
    },
	leadership_123_title_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull:false
    },
	doing_121_with_others: {
      type:Sequelize.STRING(10),
      notNull: true,
      allowNull:false
    },
	staff_enc: {
      type:Sequelize.STRING(64),
      notNull: true,
      allowNull:false
    },
	ministry_group: {
      type:Sequelize.STRING(64),
      notNull: true,
      allowNull:false
    },
	lg_leader: {
      type:Sequelize.STRING(64),
      notNull: true,
      allowNull:false
    },
	vg_leader: {
      type:Sequelize.STRING(64),
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
  Profile.associate = function(models) {
  };
  return Profile;
};
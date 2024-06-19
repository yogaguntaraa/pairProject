'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserCourse.belongsTo(models.User);
      UserCourse.belongsTo(models.Course);
    }
  }
  UserCourse.init({
    UserId: DataTypes.INTEGER,
    CourseId: DataTypes.INTEGER,
    startDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'UserCourse',
  });
  return UserCourse;
};
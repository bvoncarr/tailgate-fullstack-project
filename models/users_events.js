'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users_Events.init({
    users_id: DataTypes.INTEGER,
    events_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Users_Events',
  });
  return Users_Events;
};
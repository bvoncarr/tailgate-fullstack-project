'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tailgate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tailgate.init({
    eventName: DataTypes.STRING,
    user: DataTypes.STRING,
    location: DataTypes.STRING,
    eventStartTime: DataTypes.STRING,
    eventDescription: DataTypes.STRING,
    BYOB: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'event',
  });
  return tailgate;
};
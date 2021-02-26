"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Physician extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Physician.belongsToMany(models.Patient, {
        through: "Appointment",
        foreignKey: "physicianId",
      });
    }
  }
  Physician.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Physician",
    }
  );
  return Physician;
};

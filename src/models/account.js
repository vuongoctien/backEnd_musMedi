'use strict';
const { STRING } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Account.hasOne(models.Doctor, { foreignKey: 'doctorId' })
      // Account.hasMany(models.Schedule, { foreignKey: 'doctorId', as: 'doctorData' })

      Account.hasMany(models.Booking, { foreignKey: 'patientID', as: 'patientData' })
      /** 1 Acc (ở đây là bệnh nhân) có thể có nhiều lịch book
       * tham chiếu đến foreignKey bảng kia, gọi đống data là patientData?
       * và ở đây không ghi target như bên Booking.js nữa */

    }
  }
  Account.init({
    nickName: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Account',
  });
  return Account;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Booking extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Booking.belongsTo(models.Account,
                { foreignKey: 'patientID', targetKey: 'id', as: 'patientData' })
            /** mỗi lịch book chỉ thuộc về 1 Account
         * tham chiếu từ foreignKey bảng này sang targetKey bảng kia, gọi đống tham chiếu là as?*/

            Booking.belongsTo(models.Schedule,
                { foreignKey: 'scheduleID', targetKey: 'id', as: 'scheduleData' })
        }
    }
    Booking.init({
        scheduleID: DataTypes.INTEGER,
        patientID: DataTypes.INTEGER,
        forWho: DataTypes.STRING,
        yourName: DataTypes.STRING,
        yourPhoneNumber: DataTypes.STRING,
        yourGmail: DataTypes.STRING,
        patientName: DataTypes.STRING,
        patientBirthday: DataTypes.STRING,
        patientGender: DataTypes.STRING,
        patientCCCD: DataTypes.STRING,
        reason: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};
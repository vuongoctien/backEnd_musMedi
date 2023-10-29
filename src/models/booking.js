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

        }
    }
    Booking.init({
        date: DataTypes.DATEONLY, // ngày khám
        clockTime: DataTypes.STRING, // giờ khám
        clinicID: DataTypes.INTEGER, // id CSYT
        dr_or_pk: DataTypes.BOOLEAN, // bsi hay goi dvu?
        dr_or_pk_ID: DataTypes.INTEGER, // ID bs or goi dvu
        //////////////////////////////////////////////////////////////
        forWho: DataTypes.BOOLEAN, // đặt cho ai?
        phoneNumber: DataTypes.STRING, // sđt ng đặt
        email: DataTypes.STRING, // email người đặt
        patientName: DataTypes.STRING, // tên bệnh nhân
        patientBirthday: DataTypes.STRING, // ngày sinh bệnh nhân
        patientGender: DataTypes.STRING, // giới tính bệnh nhân
        reason: DataTypes.TEXT, // Lý do khám
    }, {
        sequelize,
        modelName: 'Booking',
    });
    return Booking;
};
'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Doctor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {

        }
    }
    Doctor.init({ //bác sĩ
        name: DataTypes.STRING, // tên bác sĩ 
        position: DataTypes.STRING, // chức danh
        // specialtyID: DataTypes.INTEGER, // của chuyên khoa nào
        clinicID: DataTypes.INTEGER, // của cơ sở y tế nào?
        image: DataTypes.BLOB('long'),
        descriptionMarkdown: DataTypes.TEXT,
        descriptionHTML: DataTypes.TEXT,
        priceDefault: DataTypes.INTEGER, // giá mặc định
        nickName: DataTypes.STRING, // tài khoản
        password: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Doctor',
        freezeTableName: true
    });
    return Doctor;
};
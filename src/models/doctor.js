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
            Doctor.hasMany(models.Booking, { foreignKey: 'dr_or_pk_ID', as: 'doctorData' })
            /** 1 dortor có thể có nhiều lịch book
             * tham chiếu đến dr_or_pk_ID bảng kia, gọi đống data là doctorData?*/

            Doctor.hasMany(models.List_Specialty, { foreignKey: 'dr_or_pk_ID', as: 'doctorData2' })
            Doctor.belongsTo(models.Clinic,
                { foreignKey: 'clinicID', targetKey: 'id', as: 'clinicData' })
        }
    }
    Doctor.init({ //bác sĩ
        name: DataTypes.STRING, // tên bác sĩ 
        position: DataTypes.STRING, // chức danh (or packageType)
        clinicID: DataTypes.INTEGER, // của cơ sở y tế nào?
        image: DataTypes.BLOB('long'),
        intro: DataTypes.TEXT,
        thongtinkham: DataTypes.TEXT,
        descriptionMarkdown: DataTypes.TEXT,
        descriptionHTML: DataTypes.TEXT,
        priceDefault: DataTypes.INTEGER, // giá mặc định
        nickName: DataTypes.STRING, // tài khoản
        password: DataTypes.STRING,
        status: DataTypes.BOOLEAN,
        dr_or_pk: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Doctor',
        freezeTableName: true
    });
    return Doctor;
};
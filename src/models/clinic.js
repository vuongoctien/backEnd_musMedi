'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Clinic extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Clinic.hasMany(models.Doctor, { foreignKey: 'clinicID', as: 'clinicData' })
        }
    }
    Clinic.init({
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        province: DataTypes.STRING,
        descriptionMarkdown: DataTypes.TEXT,
        descriptionHTML: DataTypes.TEXT,
        nickName: DataTypes.STRING, // tài khoản
        password: DataTypes.STRING,
        status: DataTypes.BOOLEAN,

        /** ừ nhỉ trường hợp 1 hệ thống bệnh viện có nhiều cơ sở, minh không xử lý được
         * thôi không sao
         * trang bookingCare cũng có trường hợp Phòng Khám ACC - Chiropractic 2 chi nhánh
         * chỉ là nó cũng làm được như Hệ thống bệnh viện Hồng Ngọc, còn mình thì chịu
         */
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};
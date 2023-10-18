'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Medi_Package extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Medi_Package.init({ // gói dịch vụ
        name: DataTypes.STRING, // tên gói dịch vụ
        clinicID: DataTypes.INTEGER, // của cơ sở y tế nào?
        image: DataTypes.BLOB('long'),
        // specialtyID: DataTypes.INTEGER, // của chuyên khoa nào
        descriptionMarkdown: DataTypes.TEXT,
        descriptionHTML: DataTypes.TEXT,
        packageType: DataTypes.STRING, // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
        priceDefault: DataTypes.INTEGER, // giá mặc định
    }, {
        sequelize,
        modelName: 'Medi_Package',
    });
    return Medi_Package;
};
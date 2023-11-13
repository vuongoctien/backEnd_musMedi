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
        quantity_date: DataTypes.INTEGER,
        show_order: DataTypes.BOOLEAN,
    }, {
        sequelize,
        modelName: 'Clinic',
    });
    return Clinic;
};
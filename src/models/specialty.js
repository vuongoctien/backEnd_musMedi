'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Specialty.hasMany(models.List_Specialty, { foreignKey: 'specialtyID', as: 'specialtyData' })
        }
    }
    Specialty.init({
        name: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
        descriptionMarkdown: DataTypes.TEXT,
        descriptionHTML: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'Specialty',
    });
    return Specialty;
};
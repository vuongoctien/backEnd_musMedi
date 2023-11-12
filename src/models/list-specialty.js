'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class List_Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            List_Specialty.belongsTo(models.Doctor,
                { foreignKey: 'dr_or_pk_ID', targetKey: 'id', as: 'doctorData2' })
            List_Specialty.belongsTo(models.Specialty,
                { foreignKey: 'specialtyID', targetKey: 'id', as: 'specialtyData' })
        }
    }
    List_Specialty.init({ // gói dịch vụ
        specialtyID: DataTypes.INTEGER,
        dr_or_pk_ID: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'List_Specialty',
    });
    return List_Specialty;
};
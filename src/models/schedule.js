'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Schedule extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Schedule.belongsTo(models.Account, { foreignKey: 'doctorId', targetKey: 'id', as: 'doctorData' })
            Schedule.hasMany(models.Booking, { foreignKey: 'patientID', as: 'patientData' })
        }
    }
    Schedule.init({
        date: DataTypes.STRING,
        dr_or_pk: DataTypes.STRING,
        dr_or_pk_ID: DataTypes.INTEGER,
        clockTime: DataTypes.STRING,
        price: DataTypes.INTEGER,
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};
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

        }
    }
    Schedule.init({
        date: DataTypes.STRING,
        dr_or_pk: DataTypes.STRING,
        dr_or_pk_ID: DataTypes.INTEGER,
        clockTime: DataTypes.STRING,
        date: DataTypes.DATE,
        price: DataTypes.INTEGER,
        currentNumber: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Schedule',
    });
    return Schedule;
};
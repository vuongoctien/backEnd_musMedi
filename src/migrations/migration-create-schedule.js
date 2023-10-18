'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('schedules', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: { type: Sequelize.STRING },
            dr_or_pk: { type: Sequelize.STRING },
            dr_or_pk_ID: { type: Sequelize.INTEGER },
            clockTime: { type: Sequelize.STRING },
            date: { type: Sequelize.DATE },
            price: { type: Sequelize.INTEGER },
            currentNumber: { type: Sequelize.INTEGER },
            maxNumber: { type: Sequelize.INTEGER },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('schedules');
    }
};
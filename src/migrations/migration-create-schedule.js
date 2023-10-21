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
            date: { type: Sequelize.DATEONLY },
            dr_or_pk: { type: Sequelize.BOOLEAN },
            dr_or_pk_ID: { type: Sequelize.INTEGER },
            clockTime: { type: Sequelize.STRING },
            price: { type: Sequelize.STRING },
            // currentNumber: { type: Sequelize.INTEGER },
            // maxNumber: { type: Sequelize.INTEGER },
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
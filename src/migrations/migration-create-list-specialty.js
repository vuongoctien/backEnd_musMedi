'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('list_specialties', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            specialtyID: { type: Sequelize.INTEGER },
            dr_or_pk_ID: { type: Sequelize.INTEGER },
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
        await queryInterface.dropTable('list_specialties');
    }
};
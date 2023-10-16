'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('doctors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
            position: { type: Sequelize.STRING },
            // specialtyID: { type: Sequelize.INTEGER },
            clinicID: { type: Sequelize.INTEGER },
            image: { type: Sequelize.BLOB('long') },
            descriptionMarkdown: { type: Sequelize.TEXT },
            descriptionHTML: { type: Sequelize.TEXT },
            priceDefault: { type: Sequelize.INTEGER },
            nickName: { type: Sequelize.STRING },
            password: { type: Sequelize.STRING },
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
        await queryInterface.dropTable('doctors');
    }
};
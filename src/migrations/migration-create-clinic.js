'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('clinics', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
            address: { type: Sequelize.STRING },
            image: { type: Sequelize.BLOB('long') },
            province: { type: Sequelize.STRING },
            descriptionMarkdown: { type: Sequelize.TEXT },
            descriptionHTML: { type: Sequelize.TEXT },
            nickName: { type: Sequelize.STRING },
            password: { type: Sequelize.STRING },
            status: { type: Sequelize.BOOLEAN },
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
        await queryInterface.dropTable('clinics');
    }
};
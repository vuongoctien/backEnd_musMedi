'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('medi_packages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
            clinicID: { type: Sequelize.INTEGER },
            image: { type: Sequelize.BLOB('long') },
            intro: { type: Sequelize.TEXT },
            thongtinkham: { type: Sequelize.TEXT },
            descriptionMarkdown: { type: Sequelize.TEXT },
            descriptionHTML: { type: Sequelize.TEXT },
            packageType: { type: Sequelize.STRING },
            priceDefault: { type: Sequelize.INTEGER },
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
        await queryInterface.dropTable('medi_packages');
    }
};
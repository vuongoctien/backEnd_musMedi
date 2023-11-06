'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('doctor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING }, // tên bác sĩ 
            position: { type: Sequelize.STRING }, // chức danh (or packageType)
            clinicID: { type: Sequelize.INTEGER }, // của cơ sở y tế nào?
            image: { type: Sequelize.BLOB('long') },
            intro: { type: Sequelize.TEXT },
            thongtinkham: { type: Sequelize.TEXT },
            descriptionMarkdown: { type: Sequelize.TEXT },
            descriptionHTML: { type: Sequelize.TEXT },
            priceDefault: { type: Sequelize.INTEGER }, // giá mặc định
            nickName: { type: Sequelize.STRING }, // tài khoản
            password: { type: Sequelize.STRING },
            status: { type: Sequelize.BOOLEAN },
            dr_or_pk: { type: Sequelize.BOOLEAN },
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
        await queryInterface.dropTable('doctor');
    }
};
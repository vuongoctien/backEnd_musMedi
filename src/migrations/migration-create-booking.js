'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('bookings', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: { type: Sequelize.DATEONLY }, // ngày khám
            clockTime: { type: Sequelize.STRING }, // giờ khám
            clinicID: { type: Sequelize.INTEGER }, // id CSYT
            dr_or_pk: { type: Sequelize.BOOLEAN }, // bsi hay goi dvu?
            dr_or_pk_ID: { type: Sequelize.INTEGER }, // ID bs or goi dvu
            //////////////////////////////////////////////////////////////
            forWho: { type: Sequelize.BOOLEAN }, // đặt cho ai?
            phoneNumber: { type: Sequelize.STRING }, // sđt ng đặt
            email: { type: Sequelize.STRING }, // email người đặt
            patientName: { type: Sequelize.STRING }, // tên bệnh nhân
            patientBirthday: { type: Sequelize.STRING }, // ngày sinh bệnh nhân
            patientGender: { type: Sequelize.STRING }, // giới tính bệnh nhân
            reason: { type: Sequelize.TEXT }, // Lý do khám

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
        await queryInterface.dropTable('bookings');
    }
};
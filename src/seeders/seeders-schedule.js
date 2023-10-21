'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('schedules', [
            {
                date: "1980-11-30",
                dr_or_pk: 1,
                dr_or_pk_ID: 69,
                clockTime: '10:00 - 10:30',
                price: 'Chưa xác định',
                // currentNumber: 0,
                // maxNumber: 0,

                createdAt: new Date(),
                updatedAt: new Date()
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};

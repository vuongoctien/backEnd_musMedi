'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('accounts', [
            {
                nickName: 'VNTadmin7321',
                password: "$2a$10$el2VBJ6j8MtorzkpWO8RHelyG0FUntajsIM.3mb00TFkcE4UWFs8O", //bookingcare
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

/**
 * password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
 * password: "$2a$10$0EdeN7KzLEM8B/hHHss/IOrAthNr1ljx088uBrcz/OeDqSrYoYTHy", //123456
 * password: "$2a$10$aC2DSwIf7zfeZVng0x1RwOBNCzFdhTZs5Cr1VYqFcxkTfWf1sGrO.", //tiktok
 * password: "$2a$10$bRiwC..WvaChopsC.7Fv.OCMTTf2i2bBIoadpfUN7M0PNHFOn60m6", //buiquyen
 * password: "$2a$10$el2VBJ6j8MtorzkpWO8RHeEEsaZ7XHPDppmgxgLlIryHk6t7U0LX6", //thongminhtube

    
    


 */
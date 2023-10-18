'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('list_specialties', [
            {
                specialtyID: 2, // cơ xương khớp
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 2, // cơ xương khớp
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 4, // tiêu hóa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 4, // tiêu hóa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 10,// sản phụ khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 10,// sản phụ khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 17, // hô hấp - phổi
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 17, // hô hấp - phổi
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 19,  // nam học
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 19,  // nam học
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 21,// thận - tiết niệu
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 21,// thận - tiết niệu
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 10, // sản phụ khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 11, // siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 32, //chấn thương chỉnh hình
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 2, // cơ xương khớp
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 22, //nội khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 24,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 25,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 6,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 7,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 8,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 9,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 10,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 11,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 12,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 13,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 14,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 15,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 16,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 17,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 18,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 19,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 20,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 21,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 22,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 23,
                createdAt: new Date(),
                updatedAt: new Date()
            }
            , {
                specialtyID: 6,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 24,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null,{});
         */
    }
};
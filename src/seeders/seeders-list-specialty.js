'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('list_specialties', [
            {
                specialtyID: 2, // cơ xương khớp
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 1,
            },
            {
                specialtyID: 2, // cơ xương khớp
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 2,
            },
            {
                specialtyID: 4, // tiêu hóa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 3,
            },
            {
                specialtyID: 4, // tiêu hóa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 4,
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 5,
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 6,
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 7,
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 8,
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 9,
            },
            {
                specialtyID: 10,// sản phụ khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 10,
            },
            {
                specialtyID: 10,// sản phụ khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 11,
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 12,
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 13,
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 14,
            },
            {
                specialtyID: 11, //siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 15,
            },
            {
                specialtyID: 17, // hô hấp - phổi
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 16,
            },
            {
                specialtyID: 17, // hô hấp - phổi
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 17,
            },
            {
                specialtyID: 19,  // nam học
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 18,
            },
            {
                specialtyID: 19,  // nam học
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 19,
            },
            {
                specialtyID: 21,// thận - tiết niệu
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 20,
            },
            {
                specialtyID: 21,// thận - tiết niệu
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 21,
            },
            {
                specialtyID: 10, // sản phụ khoa
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 22,
            },
            {
                specialtyID: 11, // siêu âm thai
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 22,
            },
            {
                specialtyID: 32, //chấn thương chỉnh hình
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 23,
            },
            {
                specialtyID: 2, // cơ xương khớp
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 23,
            },
            {
                specialtyID: 32, //chấn thương chỉnh hình
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 24,
            },
            {
                specialtyID: 8, // y học cổ truyền
                dr_or_pk: 'Bác sĩ',
                dr_or_pk_ID: 25,
            },
            {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 1,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 2,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 3,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 4,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 5,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 6,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 7,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 8,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 9,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 10,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 11,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 12,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 13,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 14,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 15,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 16,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 17,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 18,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 19,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 20,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 21,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 22,
            }
            , {
                specialtyID: 1,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 23,
            }
            , {
                specialtyID: 6,
                dr_or_pk: 'Gói dịch vụ',
                dr_or_pk_ID: 24,
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
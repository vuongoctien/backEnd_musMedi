'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('medi_packages', [
            {//1
                name: 'Xét nghiệm ADN tại Trung tâm Novagen', // tên gói dịch vụ
                clinicID: 3, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Xét nghiệm', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//2
                name: 'Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT (NVGHP)', // tên gói dịch vụ
                clinicID: 3, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Xét nghiệm', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//3
                name: 'Mát xa tẩm quất hạng nặng', // tên gói dịch vụ
                clinicID: 4, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Khác', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//4
                name: 'Gói khám sức khỏe Chuyên sâu 2 (HN4)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//5
                name: 'Gói khám sức khỏe cơ bản (HN1)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//6
                name: 'Gói khám sức khỏe nâng cao (HN3)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//7
                name: 'Gói khám sức khỏe tiền hôn nhân (HN8)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//8
                name: 'Gói khám sức khỏe tổng quát cho Nhi nâng cao (HN7)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//9
                name: 'Gói tầm soát ung thư cổ tử cung (HN22)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//10
                name: 'Gói tầm soát ung thư dạ dày (HN30)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//11
                name: 'Gói tầm soát ung thư đại tràng (HN32)', // tên gói dịch vụ
                clinicID: 5, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//12
                name: 'Khám Tai mũi họng tại Phòng khám Gia đình Sài Gòn Việt Úc', // tên gói dịch vụ
                clinicID: 7, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//13
                name: 'Khám Phụ khoa tại Phòng khám Gia đình Sài Gòn Việt Úc', // tên gói dịch vụ
                clinicID: 7, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám Tiêu hóa tại Phòng khám Gia đình Sài Gòn Việt Úc', // tên gói dịch vụ
                clinicID: 7, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//14
                name: 'Gói khám sức khỏe hậu Covid-19 (VH52)', // tên gói dịch vụ
                clinicID: 8, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//15
                name: 'Phẫu thuật cắt amidan', // tên gói dịch vụ
                clinicID: 8, // của cơ sở y tế nào?
                descriptionMarkdown: '',
                descriptionHTML: '',
                packageType: 'Phẫu thuật', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
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

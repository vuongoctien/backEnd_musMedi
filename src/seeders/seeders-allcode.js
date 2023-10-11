'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('allcodes', [{
            keyMap: 'R1',
            type: 'ROLE',
            valueEn: 'Admin',
            valueVi: 'Quản trị viên',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'R2',
            type: 'ROLE',
            valueEn: 'Doctor',
            valueVi: 'Bác sĩ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'R3',
            type: 'ROLE',
            valueEn: 'Patient',
            valueVi: 'Bệnh nhân',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'S1',
            type: 'STATUS',
            valueEn: 'Cho duyet',
            valueVi: 'Chờ duyệt',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'S2',
            type: 'STATUS',
            valueEn: 'Chap nhan',
            valueVi: 'Chấp nhận',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'S3',
            type: 'STATUS',
            valueEn: 'Done',
            valueVi: 'Đã khám',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'S4',
            type: 'STATUS',
            valueEn: 'Canceled',
            valueVi: 'Đã hủy',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'S5',
            type: 'STATUS',
            valueEn: 'Khong den',
            valueVi: 'Không đến',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'S6',
            type: 'STATUS',
            valueEn: 'Tu choi',
            valueVi: 'Từ chối',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P0',
            type: 'POSITION',
            valueEn: 'Giáo chủ',
            valueVi: 'Giáo chủ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P1',
            type: 'POSITION',
            valueEn: 'Tử Sam Long Vương',
            valueVi: 'Tử Sam Long Vương',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P2',
            type: 'POSITION',
            valueEn: 'Bạch Mi Ưng Vương',
            valueVi: 'Bạch Mi Ưng Vương',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P3',
            type: 'POSITION',
            valueEn: 'Kim Mao Sư Vương',
            valueVi: 'Kim Mao Sư Vương',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P4',
            type: 'POSITION',
            valueEn: 'Thanh Dực Bức Vương',
            valueVi: 'Thanh Dực Bức Vương',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P5',
            type: 'POSITION',
            valueEn: 'Quang Minh Tả Sứ',
            valueVi: 'Quang Minh Tả Sứ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'P6',
            type: 'POSITION',
            valueEn: 'Quang Minh Hữu Sứ',
            valueVi: 'Quang Minh Hữu Sứ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T1',
            type: 'TIME',
            valueEn: '7:30 - 8:30',
            valueVi: '7:30 - 8:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T2',
            type: 'TIME',
            valueEn: '8:30 - 9:30',
            valueVi: '8:30 - 9:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T3',
            type: 'TIME',
            valueEn: '9:30 - 10:30',
            valueVi: '9:30 - 10:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T4',
            type: 'TIME',
            valueEn: '10:30 - 11:30',
            valueVi: '10:30 - 11:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T5',
            type: 'TIME',
            valueEn: '11:30 - 12:30',
            valueVi: '11:30 - 12:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T6',
            type: 'TIME',
            valueEn: '13:30 - 14:30',
            valueVi: '13:30 - 14:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T7',
            type: 'TIME',
            valueEn: '14:30 - 15:30',
            valueVi: '14:30 - 15:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T8',
            type: 'TIME',
            valueEn: '15:30 - 16:30',
            valueVi: '15:30 - 16:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'T9',
            type: 'TIME',
            valueEn: '16:30 - 17:30',
            valueVi: '16:30 - 17:30',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'M',
            type: 'GENDER',
            valueEn: 'Male',
            valueVi: 'Nam',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'F',
            type: 'GENDER',
            valueEn: 'Female',
            valueVi: 'Nữ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'O',
            type: 'GENDER',
            valueEn: 'Other',
            valueVi: 'Khác',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI1',
            type: 'PRICE',
            valueEn: '$1',
            valueVi: '$1',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI2',
            type: 'PRICE',
            valueEn: '$2',
            valueVi: '$2',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI3',
            type: 'PRICE',
            valueEn: '$3',
            valueVi: '$3',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI4',
            type: 'PRICE',
            valueEn: '$4',
            valueVi: '$4',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI5',
            type: 'PRICE',
            valueEn: '$5',
            valueVi: '$5',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI6',
            type: 'PRICE',
            valueEn: '$6',
            valueVi: '$6',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRI7',
            type: 'PRICE',
            valueEn: '$7',
            valueVi: '$7',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PAY1',
            type: 'PAYMENT',
            valueEn: 'Cash',
            valueVi: 'Tiền mặt',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PAY2',
            type: 'PAYMENT',
            valueEn: 'Credit card',
            valueVi: 'Thẻ ATM',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PAY3',
            type: 'PAYMENT',
            valueEn: 'All',
            valueVi: 'Tất cả',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO1',
            type: 'PROVINCE',
            valueEn: 'An Giang',
            valueVi: 'An Giang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO2',
            type: 'PROVINCE',
            valueEn: 'Bà Rịa Vũng Tàu',
            valueVi: 'Bà Rịa Vũng Tàu',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO3',
            type: 'PROVINCE',
            valueEn: 'Bình Dương',
            valueVi: 'Bình Dương',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO4',
            type: 'PROVINCE',
            valueEn: 'Bình Phước',
            valueVi: 'Bình Phước',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO5',
            type: 'PROVINCE',
            valueEn: 'Bình Thuận',
            valueVi: 'Bình Thuận',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO6',
            type: 'PROVINCE',
            valueEn: 'Bình Định',
            valueVi: 'Bình Định',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO7',
            type: 'PROVINCE',
            valueEn: 'Bạc Liêu',
            valueVi: 'Bạc Liêu',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO8',
            type: 'PROVINCE',
            valueEn: 'Bắc Giang',
            valueVi: 'Bắc Giang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO9',
            type: 'PROVINCE',
            valueEn: 'Bắc Kạn',
            valueVi: 'Bắc Kạn',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO10',
            type: 'PROVINCE',
            valueEn: 'Bắc Ninh',
            valueVi: 'Bắc Ninh',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO11',
            type: 'PROVINCE',
            valueEn: 'Bến Tre',
            valueVi: 'Bến Tre',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO12',
            type: 'PROVINCE',
            valueEn: 'Cao Bằng',
            valueVi: 'Cao Bằng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO13',
            type: 'PROVINCE',
            valueEn: 'Cà Mau',
            valueVi: 'Cà Mau',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO14',
            type: 'PROVINCE',
            valueEn: 'Cần Thơ',
            valueVi: 'Cần Thơ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO15',
            type: 'PROVINCE',
            valueEn: 'Điện Biên',
            valueVi: 'Điện Biên',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO16',
            type: 'PROVINCE',
            valueEn: 'Đà Nẵng',
            valueVi: 'Đà Nẵng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO17',
            type: 'PROVINCE',
            valueEn: 'Đắk Lắk',
            valueVi: 'Đắk Lắk',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO18',
            type: 'PROVINCE',
            valueEn: 'Đắk Nông',
            valueVi: 'Đắk Nông',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO19',
            type: 'PROVINCE',
            valueEn: 'Đồng Nai',
            valueVi: 'Đồng Nai',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO20',
            type: 'PROVINCE',
            valueEn: 'Đồng Tháp',
            valueVi: 'Đồng Tháp',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO21',
            type: 'PROVINCE',
            valueEn: 'Gia Lai',
            valueVi: 'Gia Lai',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO22',
            type: 'PROVINCE',
            valueEn: 'Hà Giang',
            valueVi: 'Hà Giang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO23',
            type: 'PROVINCE',
            valueEn: 'Hà Nam',
            valueVi: 'Hà Nam',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO24',
            type: 'PROVINCE',
            valueEn: 'Hà Nội',
            valueVi: 'Hà Nội',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO25',
            type: 'PROVINCE',
            valueEn: 'Hà Tĩnh',
            valueVi: 'Hà Tĩnh',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO26',
            type: 'PROVINCE',
            valueEn: 'Hòa Bình',
            valueVi: 'Hòa Bình',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO27',
            type: 'PROVINCE',
            valueEn: 'Hưng Yên',
            valueVi: 'Hưng Yên',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO28',
            type: 'PROVINCE',
            valueEn: 'Hải Dương',
            valueVi: 'Hải Dương',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO29',
            type: 'PROVINCE',
            valueEn: 'Hải Phòng',
            valueVi: 'Hải Phòng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO30',
            type: 'PROVINCE',
            valueEn: 'Hậu Giang',
            valueVi: 'Hậu Giang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO31',
            type: 'PROVINCE',
            valueEn: 'Khánh Hòa',
            valueVi: 'Khánh Hòa',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO32',
            type: 'PROVINCE',
            valueEn: 'Kiên Giang',
            valueVi: 'Kiên Giang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO33',
            type: 'PROVINCE',
            valueEn: 'Kon Tum',
            valueVi: 'Kon Tum',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO34',
            type: 'PROVINCE',
            valueEn: 'Lai Châu',
            valueVi: 'Lai Châu',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO35',
            type: 'PROVINCE',
            valueEn: 'Long An',
            valueVi: 'Long An',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO36',
            type: 'PROVINCE',
            valueEn: 'Lào Cai',
            valueVi: 'Lào Cai',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO37',
            type: 'PROVINCE',
            valueEn: 'Lâm Đồng',
            valueVi: 'Lâm Đồng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO38',
            type: 'PROVINCE',
            valueEn: 'Lạng Sơn',
            valueVi: 'Lạng Sơn',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO39',
            type: 'PROVINCE',
            valueEn: 'Nam Định',
            valueVi: 'Nam Định',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO40',
            type: 'PROVINCE',
            valueEn: 'Nghệ An',
            valueVi: 'Nghệ An',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO41',
            type: 'PROVINCE',
            valueEn: 'Ninh Bình',
            valueVi: 'Ninh Bình',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO42',
            type: 'PROVINCE',
            valueEn: 'Ninh Thuận',
            valueVi: 'Ninh Thuận',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO43',
            type: 'PROVINCE',
            valueEn: 'Phú Thọ',
            valueVi: 'Phú Thọ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO44',
            type: 'PROVINCE',
            valueEn: 'Phú Yên',
            valueVi: 'Phú Yên',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO45',
            type: 'PROVINCE',
            valueEn: 'Quảng Bình',
            valueVi: 'Quảng Bình',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO46',
            type: 'PROVINCE',
            valueEn: 'Quảng Nam',
            valueVi: 'Quảng Nam',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO47',
            type: 'PROVINCE',
            valueEn: 'Quảng Ngãi',
            valueVi: 'Quảng Ngãi',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO48',
            type: 'PROVINCE',
            valueEn: 'Quảng Ninh',
            valueVi: 'Quảng Ninh',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO49',
            type: 'PROVINCE',
            valueEn: 'Quảng Trị',
            valueVi: 'Quảng Trị',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO50',
            type: 'PROVINCE',
            valueEn: 'Sóc Trăng',
            valueVi: 'Sóc Trăng',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO51',
            type: 'PROVINCE',
            valueEn: 'Sơn La',
            valueVi: 'Sơn La',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO52',
            type: 'PROVINCE',
            valueEn: 'Thanh Hóa',
            valueVi: 'Thanh Hóa',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO53',
            type: 'PROVINCE',
            valueEn: 'Thành phố Hồ Chí Minh',
            valueVi: 'Thành phố Hồ Chí Minh',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO54',
            type: 'PROVINCE',
            valueEn: 'Thái Bình ',
            valueVi: 'Thái Bình ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO55',
            type: 'PROVINCE',
            valueEn: 'Thái Nguyên',
            valueVi: 'Thái Nguyên',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO56',
            type: 'PROVINCE',
            valueEn: 'Thừa Thiên Huế',
            valueVi: 'Thừa Thiên Huế',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO57',
            type: 'PROVINCE',
            valueEn: 'Tiền Giang',
            valueVi: 'Tiền Giang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO58',
            type: 'PROVINCE',
            valueEn: 'Trà Vinh',
            valueVi: 'Trà Vinh',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO59',
            type: 'PROVINCE',
            valueEn: 'Tuyên Quang',
            valueVi: 'Tuyên Quang',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO60',
            type: 'PROVINCE',
            valueEn: 'Tây Ninh',
            valueVi: 'Tây Ninh',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO61',
            type: 'PROVINCE',
            valueEn: 'Vĩnh Long',
            valueVi: 'Vĩnh Long',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO62',
            type: 'PROVINCE',
            valueEn: 'Vĩnh Phúc ',
            valueVi: 'Vĩnh Phúc ',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            keyMap: 'PRO63',
            type: 'PROVINCE',
            valueEn: 'Yên Bái',
            valueVi: 'Yên Bái',
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
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


/** Phần chức danh anh ấy làm bị sai, không phải sai về code mà là sai về thực tế
 * 
 * 
 */
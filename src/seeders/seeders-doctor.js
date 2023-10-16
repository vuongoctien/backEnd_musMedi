'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('doctors', [
            {
                name: 'Nobi Nobita', // tên bác sĩ 
                position: 'Fake position',
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'nobita', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Shizuka Minamoto', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'shizuka', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Takeshi Goda', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'jaian', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Suneo Honekawa', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 1, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'suneo', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Lông Mày Dài', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien1', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Sư Phụ Bự', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien2', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'A Lượng', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien3', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Tiểu Sư Đệ', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien4', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Lệnh Hồ Xung', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'lenh_ho_xung', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nhạc Bất Quần', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'nhac_bat_quan', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nhạc Linh San', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'nhac_linh_san', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Đông Phương Bất Bại', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'dpbb', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nhậm Ngã Hành', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'nham_nga_hanh', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Lâm Bình Chi', // tên bác sĩ 
                position: 'Fake position', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'lam_binh_chi', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nguyễn Thắm', // tên bác sĩ 
                position: 'Tiến sĩ tâm lý', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 6, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'tham_nguyen', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nguyễn Thị Thúy Hằng', // tên bác sĩ 
                position: 'Thạc sĩ tâm lý học', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 6, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'hang_nguyen', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Lê Thế Hanh', // tên bác sĩ 
                position: 'Thạc sĩ tâm lý', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 6, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'hanh_le', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Đặng Minh Khuê', // tên bác sĩ 
                position: 'Thạc sĩ tâm lý học lâm sàng', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 6, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'khue_dang', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nguyễn Thị Thanh Vân', // tên bác sĩ 
                position: 'Thạc sĩ, Chuyên gia Tâm lý', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 6, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'van_nguyen', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Hoàng Lê Thủy', // tên bác sĩ 
                position: 'Chuyên gia Tâm lý', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 6, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'thuy_hoang', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Trần Thị Ánh Loan', // tên bác sĩ 
                position: 'Bác sĩ Chuyên khoa II', // chức danh
                //specialtyID: 22, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'loan_tran', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Lê Thụy Minh An', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ Chuyên khoa I', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'an_le', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nguyễn Anh Diễm Thúy', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'thuy_nguyen', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nguyễn Tuấn Anh', // tên bác sĩ 
                position: 'Bác sĩ Chuyên khoa I', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'anh_nguyen', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Lê Thị Tuyết Nhung', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 1, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'nhung_le', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            {
                name: 'Nhiêu Quang Thiện Nhân', // tên bác sĩ 
                position: 'Chuyên viên Tâm lý ', // chức danh
                //specialtyID: 39, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
                descriptionHTML: 'alo alo descriptionHTML hahaha',
                priceDefault: 250, // giá mặc định
                nickName: 'nhan_nhieu', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
            },
            // {
            //     name: '', // tên bác sĩ 
            //     position: 'Fake position', // chức danh
            //     //specialtyID: 0, // của chuyên khoa nào
            //     clinicID: 0, // của cơ sở y tế nào?
            //     image:'',
            //     descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
            //     descriptionHTML: 'alo alo descriptionHTML hahaha',
            //     priceDefault: 250, // giá mặc định
            //     nickName: '', // tài khoản
            // },
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
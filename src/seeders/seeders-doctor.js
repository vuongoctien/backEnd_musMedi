'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('doctor', [
            {
                name: 'Nobi Nobita', // tên bác sĩ 
                position: 'Giáo sư, Tiến sĩ, Bác sĩ',
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Nobi

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Nobi

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'nobita', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Shizuka Minamoto', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Shizzuka

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Shizzuka

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'shizuka', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Takeshi Goda', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Jaian

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Jaian

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'jaian', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Suneo Honekawa', // tên bác sĩ 
                position: 'Phó Giáo sư, Tiến sĩ, Giảng viên cao cấp', // chức danh
                //specialtyID: 1, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Xeko

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Xeko

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'suneo', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Lông Mày Dài', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Đại Sư Phụ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Đại Sư Phụ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien1', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sư Phụ Bự', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Nhị Sư Phụ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Nhị Sư Phụ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien2', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'A Lượng', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Đại sư huynh

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Đại sư huynh

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien3', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tiểu Sư Đệ', // tên bác sĩ 
                position: 'Bác sĩ cao cấp hạng 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 2, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem tiuểu đẹ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem tiuểu đẹ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: 'olongvien4', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sherlock Holmes', // tên bác sĩ 
                position: 'Giáo sư, Tiến sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 3, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Thám tử

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Thám tử

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'John Watson', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 3, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem trợ lý

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem trợ lý

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Thúy Kiều', // tên bác sĩ 
                position: 'Bác sĩ hạng 3', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Kiều

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Kiều

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Từ Hải', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến Sĩ, Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem chít đứng

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem chít đứng

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Kim Trọng', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Kim Trọng

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Kim Trọng

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Ron Weasley', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 5, // của chuyên khoa nào
                clinicID: 5, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Ron

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Ron

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Hermione Granger', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 5, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Hơ mai ô ni

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Hơ mai ô ni

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Quách Tĩnh', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Tĩnh ca ca

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Tĩnh ca ca

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Khưu Xử Cơ', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Đạo trưởng

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Đạo trưởng

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Dương Quá', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Quá nhi

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Quá nhi

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Doãn Chí Bình', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Doãn đại hiệp

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Doãn đại hiệp

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Quách Đại Hiệp', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Bắc hiệp

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Bắc hiệp

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Kim Luân Pháp Vương', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Ngũ luân

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Ngũ luân

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Trương Vô Kỵ', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem giáo chủ Minh Giáo

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem giáo chủ Minh Giáo

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Tạ Tốn', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Kim Mao Sư Vương

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Kim Mao Sư Vương

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Tử Sam Long Vương', // tên bác sĩ 
                position: 'Bác sĩ hạng 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Tử Sam 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Tử Sam 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Triệu Mẫn', // tên bác sĩ 
                position: 'Thạc sĩ, bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Mẫn x2 Đặc Mục Nhĩ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Mẫn x2 Đặc Mục Nhĩ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Trương Tam Phong', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Quân Bảo

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Quân Bảo

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Vi Nhất Tiếu', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem ThanhDực

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem ThanhDực

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Dương Tiêu', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Tả sứ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Tả sứ

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Ân Ly', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `
#### Lorem Thù Nhi

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*"`,
                descriptionHTML: `
#### Lorem Thù Nhi

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
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
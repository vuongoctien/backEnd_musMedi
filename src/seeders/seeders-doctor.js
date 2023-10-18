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
                descriptionMarkdown: `#### Lorem nobi dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem nobi dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem xuka dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem xuka dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem chaien dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem chaien dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem xeko dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem xeko dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem daiSuPhu dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem daiSuPhu dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem nhiSuPhu dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem nhiSuPhu dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem daiSuHuynh dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem daiSuHuynh dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem tieuDe dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem tieuDe dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
                descriptionMarkdown: `#### Lorem thamTu dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem thamTu dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'John Watson', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 3, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem troLy dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem troLy dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Thúy Kiều', // tên bác sĩ 
                position: 'Bác sĩ hạng 3', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem Kieu dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem Kieu dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Từ Hải', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến Sĩ, Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem ChetDung dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem ChetDung dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Kim Trọng', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem kimtrong dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem kimtrong dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Ron Weasley', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 5, // của chuyên khoa nào
                clinicID: 5, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem RON dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem RON dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Hermione Granger', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 5, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem HERMIONE dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem HERMIONE dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Quách Tĩnh', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem TinhKK dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem TinhKK dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Khưu Xử Cơ', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem daoTruong dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem daoTruong dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Dương Quá', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem QuaNhi dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem QuaNhi dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Doãn Chí Bình', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem Doan dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem Doan dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Quách Đại Hiệp', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem BacHiep dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem BacHiep dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Kim Luân Pháp Vương', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem 5luan dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem 5luan dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Trương Vô Kỵ', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem giaochuMinhGiao dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem giaochuMinhGiao dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Tạ Tốn', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem nghiaPhu dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem nghiaPhu dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Tử Sam Long Vương', // tên bác sĩ 
                position: 'Bác sĩ hạng 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem daiYTy dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem daiYTy dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Triệu Mẫn', // tên bác sĩ 
                position: 'Thạc sĩ, bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem Man2DacMucNhi dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem Man2DacMucNhi dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Trương Tam Phong', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem QuanBao dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem QuanBao dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Vi Nhất Tiếu', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem ThanhDucBucVuong dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem ThanhDucBucVuong dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Dương Tiêu', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem TaSu dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem TaSu dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
                priceDefault: 250, // giá mặc định
                nickName: '', // tài khoản
            },
            {
                name: 'Ân Ly', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: '',
                descriptionMarkdown: `#### Lorem ThuNhi dolor 

1. sit amet, consectetur adipiscing elit
2. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
3.  Ut enim ad minim veniam
4.  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat

* Duis aute irure dolor in reprehenderit 
* in voluptate velit esse cillum dolore eu f

****giat nulla pariaturu****. *Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim* id est laborum.*`,
                descriptionHTML: `<h4>Lorem ThuNhi dolor</h4>
<ol>
<li>sit amet, consectetur adipiscing elit</li>
<li>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
<li>Ut enim ad minim veniam</li>
<li>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
</ol>
<ul>
<li>Duis aute irure dolor in reprehenderit</li>
<li>in voluptate velit esse cillum dolore eu f</li>
</ul>
<p><strong><strong>giat nulla pariaturu</strong></strong>. <em>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</em> id est laborum.*</p>
`,
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
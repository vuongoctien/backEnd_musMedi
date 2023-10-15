'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clinics', [
      {
        name: 'Phòng khám Doraemon',
        address: 'Số 16 - 18 Phủ Doãn, Hoàn Kiếm',
        image: '',
        province: 'Hà Nội',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'doraemon',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Ô Long Viện',
        address: '200 Hoàng Quốc Việt, Cầu Giấy',
        image: '',
        province: 'Hà Nội',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'o_long_vien',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trung tâm Xét nghiệm ADN NOVAGEN cơ sở 1',
        address: '40 Cát Linh, Q. Đống Đa',
        image: '',
        province: 'Hà Nội',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'novagen',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh Viện Tiếu Ngạo Giang Hồ',
        address: '50 Nguyễn Chí Thanh, Q. Đống Đa',
        image: '',
        province: 'Hà Nội',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'tieu_ngao_giang_ho',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám đa khoa Hồng Ngọc cơ sở 5',
        address: 'Tầng 10, tòa nhà 70 tầng, tòa nhà Keangnam Hanoi Landmark Tower, khu đô thị Cầu Giấy, Mễ Trì, quận Nam Từ Liêm',
        image: '',
        province: 'Hà Nội',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'hong_ngoc_cs5',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viện Tâm lý Giáo dục BrainCare',
        address: 'Tầng 7, Toà nhà 59 Võ Chí Công, Nghĩa Đô, Cầu Giấy',
        image: '',
        province: 'Hà Nội',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'brain_care',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Gia đình Sài Gòn Việt Úc',
        address: 'Số 3 Tăng Bạt Hổ, Phường 12, Quận 5',
        image: '',
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'saigonvietuc',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trung tâm Y khoa Vạn Hạnh',
        address: '159 Trần Quốc Thảo, Phường 9, Quận 3',
        image: '',
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'van_hanh',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng Khám ACC - Chiropractic Quận 1 TP.HCM',
        address: '99 Nguyễn Du, Phường Bến Thành, Quận 1',
        image: '',
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'chiropractic_q1',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng Khám ACC - Chiropractic Quận 5 TP.HCM',
        address: 'Lầu 1, Tản Đà Court, 86 Tản Đà, Phường 11, Quận 5',
        image: '',
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'chiropractic_q5',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trung tâm trị liệu phục hồi Anh Hùng Xạ Điêu',
        address: 'Đ. Nguyễn Văn Cừ, Trang Hạ, Từ Sơn',
        image: '',
        province: 'Bắc Ninh',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'anh_hung_xa_dieu',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hệ thống Y khoa Chuyên sâu Thần Điêu Đại Hiệp',
        address: 'Phường Tân Thịnh, TP. Thái Nguyên',
        image: '',
        province: 'Thái Nguyên',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'than_dieu_dai_hiep',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nha khoa Ỷ Thiên Đồ Long Ký',
        address: '34 Lê Lợi, TP Huế',
        image: '',
        province: 'Huế',
        descriptionMarkdown: 'abc đây là descriptionMarkdown gì gì đó',
        descriptionHTML: 'alo alo descriptionHTML hahaha',
        nickName: 'y_thien_do_long_ky',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
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
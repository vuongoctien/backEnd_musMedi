'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clinics', [
      {
        name: 'Phòng khám Doraemon',
        address: 'Số 16 - 18 Phủ Doãn, Hoàn Kiếm',
        image: "",
        province: 'Hà Nội',
        descriptionMarkdown: `**Phòng khám Doraemon** là một trong những phòng khám tư nhân uy tín tại Hà Nội. Đây là phòng khám đa khoa đầu tiên áp dụng hệ thống quản lý chất lượng của Úc - *ACHS*`,
        descriptionHTML: `<p><strong>Phòng khám Doraemon</strong> là một trong những phòng khám tư nhân uy tín tại Hà Nội. Đây là phòng khám đa khoa đầu tiên áp dụng hệ thống quản lý chất lượng của Úc - <em>ACHS</em></p>`,
        nickName: 'doraemon',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Ô Long Viện',
        address: '200 Hoàng Quốc Việt, Cầu Giấy',
        image: "",
        province: 'Hà Nội',
        descriptionMarkdown: `**Phòng khám Ô Long Viện** được thành lập năm 2019, là phòng khám đa khoa tư nhân thuộc *Tổ hợp Y tế Mediplus* nhận được nhiều quan tâm từ người bệnh bởi chất lượng khám chữa bệnh, cơ sở vật chất khang trang, ứng dụng công nghệ 4.0 trong khám chữa bệnh giúp giảm thiểu quy trình, nâng cao hiệu quả khám chữa. `,
        descriptionHTML: `<p><strong>Phòng khám Ô Long Viện</strong> được thành lập năm 2019, là phòng khám đa khoa tư nhân thuộc <em>Tổ hợp Y tế Mediplus</em> nhận được nhiều quan tâm từ người bệnh bởi chất lượng khám chữa bệnh, cơ sở vật chất khang trang, ứng dụng công nghệ 4.0 trong khám chữa bệnh giúp giảm thiểu quy trình, nâng cao hiệu quả khám chữa.</p>`,
        nickName: 'o_long_vien',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hệ thống Y khoa chuyên sâu Sherlock Holmes',
        address: '40 Cát Linh, Q. Đống Đa',
        image: "",
        province: 'Hà Nội',
        descriptionMarkdown: `Với mục tiêu là đứng đầu về thương hiệu và uy tín trong hệ thống bệnh viện tư ở Hà Nội và khu vực phía Bắc, Hệ thống Y khoa chuyên sâu Sherlock Holmes cam kết:
        * Tuân thủ tất cả các tiêu chuẩn về vệ sinh an toàn và kiểm soát nhiễm khuẩn
        * Đội ngũ chuyên gia hàng đầu, cùng với việc áp dụng các phương pháp chẩn đoán tiên tiến
        * Mang đến cho bạn sự yên tâm tối đa khi đến với Bệnh Viện`,
        descriptionHTML: `<p>Với mục tiêu là đứng đầu về thương hiệu và uy tín trong hệ thống bệnh viện tư ở Hà Nội và khu vực phía Bắc, Hệ thống Y khoa chuyên sâu Sherlock Holmes cam kết:</p>
        <ul>
        <li>Tuân thủ tất cả các tiêu chuẩn về vệ sinh an toàn và kiểm soát nhiễm khuẩn</li>
        <li>Đội ngũ chuyên gia hàng đầu, cùng với việc áp dụng các phương pháp chẩn đoán tiên tiến</li>
        <li>Mang đến cho bạn sự yên tâm tối đa khi đến với Bệnh Viện</li>
        </ul>
        `,
        nickName: 'novagen',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh Viện Truyện Kiều Nguyễn Du',
        address: '50 Nguyễn Chí Thanh, Q. Đống Đa',
        image: "",
        province: 'Hà Nội',
        descriptionMarkdown: `Bệnh viện *Truyện Kiều Nguyễn Du* là một bệnh viện công lập, được thành lập từ năm 1901, cung cấp các dịch vụ khám chữa bệnh đa dạng, đáp ứng nhu cầu của người dân trên địa bàn Hà Nội và các tỉnh lân cận`,
        descriptionHTML: `<p>Bệnh viện <em>Truyện Kiều Nguyễn Du</em> là một bệnh viện công lập, được thành lập từ năm 1901, cung cấp các dịch vụ khám chữa bệnh đa dạng, đáp ứng nhu cầu của người dân trên địa bàn Hà Nội và các tỉnh lân cận</p>`,
        nickName: 'tieu_ngao_giang_ho',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viện Tâm lý Giáo dục Harry Potter',
        address: 'Tầng 10, tòa nhà 70 tầng, tòa nhà Keangnam Hanoi Landmark Tower, khu đô thị Cầu Giấy, Mễ Trì, quận Nam Từ Liêm',
        image: "",
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: `Xã hội càng phát triển con người gặp nhiều những áp lực, sự mất kết nối, mất cân bằng… ảnh hưởng đến sức khỏe tinh thần nghiêm trọng. Viện Tâm lý Giáo dục Harry Potter với đội ngũ chuyên gia là các tiến sỹ đầu ngành về tâm lý, sức khỏe tâm thần trên 15 năm kinh nghiệm, yêu nghề, tâm huyết với nghề  luôn trăn trở với những nỗi đau của cộng đồng cũng như xã hội đang gặp phải và luôn tìm giải pháp để chữa lành, để tháo gỡ. Harry Potter  ra đời với sứ mệnh ”Vì cộng đồng hạnh phúc hơn từng phút giây!`,
        descriptionHTML: `<p>Xã hội càng phát triển con người gặp nhiều những áp lực, sự mất kết nối, mất cân bằng… ảnh hưởng đến sức khỏe tinh thần nghiêm trọng. Viện Tâm lý Giáo dục Harry Potter với đội ngũ chuyên gia là các tiến sỹ đầu ngành về tâm lý, sức khỏe tâm thần trên 15 năm kinh nghiệm, yêu nghề, tâm huyết với nghề  luôn trăn trở với những nỗi đau của cộng đồng cũng như xã hội đang gặp phải và luôn tìm giải pháp để chữa lành, để tháo gỡ. Harry Potter  ra đời với sứ mệnh ”Vì cộng đồng hạnh phúc hơn từng phút giây!</p>`,
        nickName: 'hong_ngoc_cs5',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện Conan Detective',
        address: 'Tầng 7, Toà nhà 59 Võ Chí Công, Nghĩa Đô',
        image: "",
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: `(Đang cập nhật)`,
        descriptionHTML: `<p>(Đang cập nhật)</p>`,
        nickName: 'brain_care',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện Anh Hùng Xạ Điêu',
        address: 'Đ. Nguyễn Văn Cừ, Trang Hạ',
        image: "",
        province: 'Hải Phòng',
        descriptionMarkdown: `Bệnh viện **Anh Hùng Xạ Điêu** thành lập vào 2004, luôn muốn mang đến các dịch vụ chăm sóc sức khỏe tối ưu về mặt chất lượng với chi phí hợp lý`,
        descriptionHTML: `<p>Bệnh viện <strong>Anh Hùng Xạ Điêu</strong> thành lập vào 2004, luôn muốn mang đến các dịch vụ chăm sóc sức khỏe tối ưu về mặt chất lượng với chi phí hợp lý</p>`,
        nickName: 'anh_hung_xa_dieu',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hệ thống Y khoa Chuyên sâu Thần Điêu Đại Hiệp',
        address: 'Phường Tân Thịnh, Hòa Xuân',
        image: "",
        province: 'Đà Nẵng',
        descriptionMarkdown: `*  Là một địa chỉ khám chữa bệnh uy tín cho người dân Đà Nẵng và các tỉnh lân cận
        *  Bệnh viện có đội ngũ bác sĩ giỏi, giàu kinh nghiệm và trang thiết bị hiện đại`,
        descriptionHTML: `<ul>
        <li>Là một địa chỉ khám chữa bệnh uy tín cho người dân Đà Nẵng và các tỉnh lân cận</li>
        <li>Bệnh viện có đội ngũ bác sĩ giỏi, giàu kinh nghiệm và trang thiết bị hiện đại</li>
        </ul>
        `,
        nickName: 'than_dieu_dai_hiep',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Nha khoa Ỷ Thiên Đồ Long Ký',
        address: '34 Lê Lợi, Cần Giờ',
        image: "",
        province: 'Cần Thơ',
        descriptionMarkdown: `
        #### Phòng khám Nha khoa Ỷ Thiên Đồ Long Ký do giáo chủ Trương Vô Kỵ bảo kê
        Đây là một bệnh viện chuyên khoa răng hàm mặt lớn nhất ở miền Tây Nam Bộ. Là một địa chỉ khám chữa bệnh uy tín và đáng tin cậy cho người dân thành phố Cần Thơ và các tỉnh lân cận`,
        descriptionHTML: `<h4>Phòng khám Nha khoa Ỷ Thiên Đồ Long Ký do giáo chủ Trương Vô Kỵ bảo kê</h4>
        <p>Đây là một bệnh viện chuyên khoa răng hàm mặt lớn nhất ở miền Tây Nam Bộ. Là một địa chỉ khám chữa bệnh uy tín và đáng tin cậy cho người dân thành phố Cần Thơ và các tỉnh lân cận</p>
        `,
        nickName: 'y_thien_do_long_ky',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 0,
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
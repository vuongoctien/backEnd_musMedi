'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('specialties', [
      {
        name: 'Cơ xương khớp',
        image: "",
        descriptionHTML: `<ul>
        <li>Gout</li>
        <li>Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ</li>
        <li>Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân</li>
        <li>Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai</li>
        <li>Loãng xương, đau nhức xương</li>
        <li>Viêm xương, gai xương</li>
        <li>Viêm cơ, Teo cơ, chứng đau mỏi cơ</li>
        <li>Yếu cơ, Loạn dưỡng cơ</li>
        <li>Các chấn thương về cơ, xương, khớp</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `* Gout
        * Thoái hóa khớp: khớp gối, cột sống thắt lưng, cột sống cổ
        * Viêm khớp dạng thấp, Viêm đa khớp, Viêm gân
        * Tràn dịch khớp gối, Tràn dịch khớp háng, Tràn dịch khớp khủy, Tràn dịch khớp vai
        * Loãng xương, đau nhức xương
        * Viêm xương, gai xương
        * Viêm cơ, Teo cơ, chứng đau mỏi cơ
        * Yếu cơ, Loạn dưỡng cơ
        * Các chấn thương về cơ, xương, khớp
        * ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Da liễu',
        image: "",
        descriptionHTML: `<ul>
        <li>Bệnh vẩy nến, Da khô, Ngứa da</li>
        <li>Rám tàn nhang</li>
        <li>Mụn cóc sinh dục</li>
        <li>Nấm cơ thể, Nấm da đầu</li>
        <li>Nấm móng tay, móng chân</li>
        <li>Rụng tóc, hói đầu</li>
        <li>Viêm da dị ứng, Viêm da tiếp xúc, Viêm da tiết bã</li>
        <li>Viêm nang lông</li>
        <li>Xơ cứng bì</li>
        <li>Zona thần kinh</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `* Bệnh vẩy nến, Da khô, Ngứa da
        * Rám tàn nhang
        * Mụn cóc sinh dục
        * Nấm cơ thể, Nấm da đầu
        * Nấm móng tay, móng chân
        * Rụng tóc, hói đầu
        * Viêm da dị ứng, Viêm da tiếp xúc, Viêm da tiết bã
        * Viêm nang lông
        * Xơ cứng bì
        * Zona thần kinh
        * ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mắt',
        image: "",
        descriptionHTML: `<p><strong>Các bệnh về mắt</strong></p>
        <ul>
        <li>Tật khúc xạ</li>
        <li>Cận thị</li>
        <li>Nhược thị</li>
        <li>Viễn thị</li>
        <li>Lão thị</li>
        <li>Loạn thị</li>
        </ul>
        <p><strong>Các rối loạn về mắt</strong></p>
        <ul>
        <li>Hội chứng khô mắt</li>
        <li>Rối loạn ở hốc mắt</li>
        <li>Rối loạn tuyến lệ</li>
        <li>Tăng nhãn áp</li>
        </ul>
        <p><strong>Các bệnh lí khác về mắt</strong></p>
        <ul>
        <li>Lác mắt</li>
        <li>Viêm giác mạc</li>
        <li>Đục thủy tinh thể</li>
        <li>Dịch kính võng mạc</li>
        <li>Bong võng mạc</li>
        <li>Bệnh thoái hóa hoàng điểm tuổi già</li>
        </ul>
        `,
        descriptionMarkdown: `**Các bệnh về mắt**
        * Tật khúc xạ
        * Cận thị
        * Nhược thị
        * Viễn thị
        * Lão thị
        * Loạn thị
        
        **Các rối loạn về mắt**
        * Hội chứng khô mắt
        * Rối loạn ở hốc mắt
        * Rối loạn tuyến lệ
        * Tăng nhãn áp
        
        **Các bệnh lí khác về mắt**
        * Lác mắt
        * Viêm giác mạc
        * Đục thủy tinh thể
        * Dịch kính võng mạc
        * Bong võng mạc
        * Bệnh thoái hóa hoàng điểm tuổi già`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Răng hàm mặt',
        image: "",
        descriptionHTML: `<p>Khám tư vấn, điều trị các bệnh lý về răng, làm răng thẩm mỹ</p>
        <ul>
        <li>Nhổ răng</li>
        <li>Hàn răng</li>
        <li>Điều trị tủy</li>
        <li>Điều trị Viêm nha chu</li>
        <li>Bọc răng sứ</li>
        <li>Làm răng giả</li>
        <li>Dán sứ Veneer</li>
        <li>Niềng răng (nắn chỉnh răng)</li>
        </ul>
        `,
        descriptionMarkdown: `Khám tư vấn, điều trị các bệnh lý về răng, làm răng thẩm mỹ
        * Nhổ răng
        * Hàn răng
        * Điều trị tủy
        * Điều trị Viêm nha chu
        * Bọc răng sứ
        * Làm răng giả
        * Dán sứ Veneer
        * Niềng răng (nắn chỉnh răng)`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Tai mũi họng',
        image: "",
        descriptionHTML: `<h4>Các bệnh Tai Mũi Họng</h4>
        <ul>
        <li>Ù tai, đau tai, chảy máu tai</li>
        <li>Thủng màng nhĩ, điếc đột ngột</li>
        <li>Viêm tai giữa</li>
        <li>Amidan, V.A</li>
        <li>Viêm xoang</li>
        <li>Nghẹt mũi</li>
        <li>Hay bị chảy máu cam</li>
        <li>Đau cổ họng, khó nuốt</li>
        <li>Ho kéo dài</li>
        <li>Ngủ ngáy</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `
        #### Các bệnh Tai Mũi Họng
        
        * Ù tai, đau tai, chảy máu tai
        * Thủng màng nhĩ, điếc đột ngột
        * Viêm tai giữa
        * Amidan, V.A
        * Viêm xoang
        * Nghẹt mũi
        * Hay bị chảy máu cam
        * Đau cổ họng, khó nuốt
        * Ho kéo dài
        * Ngủ ngáy
        * ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sản phụ',
        image: "",
        descriptionHTML: `<p><em><strong>Khám và điều trị</strong></em></p>
        <ul>
        <li>Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh</li>
        <li>Tắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,</li>
        <li>Khám hiếm muộn, vô sinh</li>
        <li>Khám Phụ Khoa</li>
        <li>Khám thai sản</li>
        <li>Khám tiền hôn nhân, Tiền sinh</li>
        <li>Kiểm tra phụ khoa</li>
        <li>Loạn dưỡng vú</li>
        <li>Rong kinh kéo dài</li>
        <li>Siêu âm thai định kỳ</li>
        <li>Thai lưu</li>
        <li>U xơ tử cung, Viêm lộ tuyến</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `***Khám và điều trị***
        * Rối loạn kinh nguyệt, chậm kinh, đau bụng kinh   
        * Tắc hai vòi trứng, Đa nang buồng trứng, Chụp vòi trứng,       
        * Khám hiếm muộn, vô sinh   
        * Khám Phụ Khoa   
        * Khám thai sản   
        * Khám tiền hôn nhân, Tiền sinh   
        * Kiểm tra phụ khoa   
        * Loạn dưỡng vú   
        * Rong kinh kéo dài   
        * Siêu âm thai định kỳ   
        * Thai lưu
        * U xơ tử cung, Viêm lộ tuyến
        * ...`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nam học',
        image: "",
        descriptionHTML: `<p><em>Tư vấn, khám và điều trị các Bệnh chuyên khoa Nam học</em></p>
        <ul>
        <li>Mãn dục nam giới, Suy sinh dục nam</li>
        <li>Viêm đường tiết niệu – sinh dục</li>
        <li>Viêm nhiễm: viêm bao quy đầu, viêm tinh hoàn</li>
        <li>Bệnh lý bao quy đầu: hẹp, dài bao quy đầu</li>
        <li>Rối loạn chức năng sinh dục: xuất tinh sớm, rối loạn cương dương, rối loạn xuất tinh, Xuất tinh kèm máu…</li>
        <li>Bệnh xã hội: lậu, giang mai, sùi mào gà, herpes…</li>
        <li>Các trường hợp sẩn ngứa, sẩn cục cơ quan sinh dục</li>
        <li>Xuất tinh ngược, Viêm tinh hoàn</li>
        <li>Các bệnh lý liên quan đến hiếm muộn</li>
        <li>Tinh hoàn ẩn</li>
        <li>...</li>
        </ul>
        `,
        descriptionMarkdown: `*Tư vấn, khám và điều trị các Bệnh chuyên khoa Nam học*

        * Mãn dục nam giới, Suy sinh dục nam
        * Viêm đường tiết niệu – sinh dục
        * Viêm nhiễm: viêm bao quy đầu, viêm tinh hoàn
        * Bệnh lý bao quy đầu: hẹp, dài bao quy đầu
        * Rối loạn chức năng sinh dục: xuất tinh sớm, rối loạn cương dương, rối loạn xuất tinh, Xuất tinh kèm máu…
        * Bệnh xã hội: lậu, giang mai, sùi mào gà, herpes…
        * Các trường hợp sẩn ngứa, sẩn cục cơ quan sinh dục
        * Xuất tinh ngược, Viêm tinh hoàn
        * Các bệnh lý liên quan đến hiếm muộn
        * Tinh hoàn ẩn
        * ...`,
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
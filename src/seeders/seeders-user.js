// email: 'vuongoctien@example.com',
//       password: "12345",
//       firstName: 'Vuong',
//       lastName: 'Ngoc Tien',
//       address: 'Ha Noi',
//       gender: 0,
//       typeRole: 'ROLE',
//       keyRole: 'R1',
//       createdAt: new Date(),
//       updatedAt: new Date()

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      email: 'vuongoctien@gmail.com',
      password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
      firstName: 'Vương',
      lastName: 'Ngọc Tiến',
      address: 'Đông Sàng - Đường Lâm - Sơn Tây - Hà Nội',
      phoneNumber: '0973251401',
      gender: 'M',
      image: '',
      roleId: 'R1',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'nguyenbatinh@gmail.com',
      password: "$2a$10$0EdeN7KzLEM8B/hHHss/IOrAthNr1ljx088uBrcz/OeDqSrYoYTHy", //123456
      firstName: 'Tuệ',
      lastName: 'Tĩnh',
      address: 'Nghĩa Phú - Cẩm Giàng - Hải Dương',
      phoneNumber: '1330-1385...?',
      gender: 'M',
      image: '',
      roleId: 'R2',
      positionId: 'P2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'lehuutrac@gmail.com',
      password: "$2a$10$aC2DSwIf7zfeZVng0x1RwOBNCzFdhTZs5Cr1VYqFcxkTfWf1sGrO.", //tiktok
      firstName: 'Hải Thượng',
      lastName: 'Lãn Ông',
      address: 'Văn Xá - Liêu Xá - Đường Hào - Thượng Hồng - Hải Dương',
      phoneNumber: '1720-1791',
      gender: 'M',
      image: '',
      roleId: 'R2',
      positionId: 'P3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'hodacdi@gmail.com',
      password: "$2a$10$bRiwC..WvaChopsC.7Fv.OCMTTf2i2bBIoadpfUN7M0PNHFOn60m6", //buiquyen
      firstName: 'Hồ',
      lastName: 'Đắc Di',
      address: 'Tí về có internet thì check địa chỉ',
      phoneNumber: '19001984',
      gender: 'O',
      image: '',
      roleId: 'R2',
      positionId: 'P4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'phamngocthach@gmail.com',
      password: "$2a$10$bRiwC..WvaChopsC.7Fv.OCyQzVhcf.Sf8BHPYm/P9w78GwXKHni6", //zalozal0
      firstName: 'Phạm',
      lastName: 'Ngọc Thạch',
      address: 'Quy Nhơn - Bình Định',
      phoneNumber: '19091968',
      gender: 'M',
      image: '',
      roleId: 'R2',
      positionId: 'P0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'dangvanngu@gmail.com',
      password: "$2a$10$el2VBJ6j8MtorzkpWO8RHeEYltcGKu0hzxT.iw4Cdd6stGy2T4g/y", //vb2tnus
      firstName: 'Đặng',
      lastName: 'Văn Ngữ',
      address: 'An Cựu, Huế',
      phoneNumber: '19101967',
      gender: 'M',
      image: '',
      roleId: 'R2',
      positionId: 'P0',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'tonthattung@gmail.com',
      password: "$2a$10$el2VBJ6j8MtorzkpWO8RHelyG0FUntajsIM.3mb00TFkcE4UWFs8O", //bookingcare 
      firstName: 'Tôn',
      lastName: 'Thất Tùng',
      address: 'Hoa Thanh Quế',
      phoneNumber: '19121982',
      gender: 'M',
      image: '',
      roleId: 'R2',
      positionId: 'P1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'dangvanchung@gmail.com',
      password: "$2a$10$el2VBJ6j8MtorzkpWO8RHeEEsaZ7XHPDppmgxgLlIryHk6t7U0LX6", //thongminhtube
      firstName: 'Đặng',
      lastName: 'Văn Chung',
      address: 'Sa Đéc - Đồng Tháp',
      phoneNumber: '19131999?',
      gender: 'M',
      image: '',
      roleId: 'R2',
      positionId: 'P2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'lethique@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Lê Thị',
      lastName: 'Què',
      address: 'SSC Napoli',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'tathingua@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Tạ Thị',
      lastName: 'Ngứa',
      address: 'Ajax Amsterdam',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'quachthiviem@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Quách Thị',
      lastName: 'Viêm',
      address: 'Tottenham Hospur',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'hoangthibong@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Hoàng Thị',
      lastName: 'Bỏng',
      address: 'Liverpool',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'vuthinhuc@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Vũ Thị',
      lastName: 'Nhức',
      address: 'Sevilla',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'chuthirat@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Chu Thị',
      lastName: 'Rát',
      address: 'Newcastle United',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'kieuthidau@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Kiều Thị',
      lastName: 'Đau',
      address: 'Inter Milan',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'ngothimet@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Ngô Thị',
      lastName: 'Mệt',
      address: 'Manchester City',
      phoneNumber: '1900100?',
      gender: 'F',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'trinhquocdau@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Trịnh Quốc',
      lastName: 'Nôn',
      address: 'Manchester United',
      phoneNumber: '1900100?',
      gender: 'O',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'letrongbuot@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Lê Trọng',
      lastName: 'Buốt',
      address: 'Arsenal',
      phoneNumber: '1900100?',
      gender: 'O',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'nguyenminhcut@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Nguyễn Minh',
      lastName: 'Cụt',
      address: 'Chelsea',
      phoneNumber: '1900100?',
      gender: 'O',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'tonquangman@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Tôn Quang',
      lastName: 'Mẩn',
      address: 'Juvetus',
      phoneNumber: '1900100?',
      gender: 'O',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'lyminhsung@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Lý Minh',
      lastName: 'Sưng',
      address: 'AC Milan',
      phoneNumber: '1900100?',
      gender: 'O',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'trinhphuongdut@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Trịnh Phương',
      lastName: 'Đứt',
      address: 'Borussia Dortmund',
      phoneNumber: '1900100?',
      gender: 'O',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'dinhvande@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Đinh Văn',
      lastName: 'Đẻ',
      address: 'Paris Saint-Germain',
      phoneNumber: '1900100?',
      gender: 'M',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'vuongvantramcam@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Vương Văn',
      lastName: 'Trầm Cảm',
      address: 'Bayern Munich',
      phoneNumber: '1900100?',
      gender: 'M',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'luuvanquan@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Lưu Văn',
      lastName: 'Quặn',
      address: 'Aletico Madrid',
      phoneNumber: '1900100?',
      gender: 'M',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'nongvangay@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Nông Văn',
      lastName: 'Gãy',
      address: 'Real Madrid',
      phoneNumber: '1900100?',
      gender: 'M',
      image: '',
      roleId: 'R3',
      positionId: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }
      ,
    {
      email: 'havanloet@gmail.com',
      password: "$2a$10$gM4e91FqJpi12r.huvlo0uoPPdNLyBKadRvm2jmOtuMBIgXJYq8fa", //benhnhan
      firstName: 'Hà Văn',
      lastName: 'Loét',
      address: 'Barcelona',
      phoneNumber: '1900100?',
      gender: 'M',
      image: '',
      roleId: 'R3',
      positionId: '',
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
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
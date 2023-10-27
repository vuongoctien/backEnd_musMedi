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
                image: "data:image/jpeg;base64,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",
                intro: `Nguyên Trưởng khoa Cơ xương khớp, Bệnh viện E Hà Nội
Được phong tặng Danh hiệu Thầy thuốc Ưu tú
Bác sĩ khám cho người bệnh từ 16 tuổi trở lên`,
                thongtinkham: `GIÁ KHÁM:
                + Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 150.000đ
               
               GIÁ DỊCH VỤ LIÊN QUAN:
               +Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
               + Siêu âm khớp (Tùy thuộc vào 1 khớp hay 2 khớp): 264.000đ - 528.000đ
               
               LOẠI BẢO HIỂM ÁP DỤNG.
               + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
               + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Nobi Nobita**

                * Bác sĩ Chuyên Khoa Trị Liệu Thần Kinh Cột Sống
                * Cử nhân Khoa học về Vận động học, chuyên ngành Tiền vật lý trị liệu tại Đại học bang San Diego - Mỹ
                * Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Đại học Life Chiropractic College - Mỹ (2010)
                * Bác sĩ đã từng hành nghề ở Mỹ, Singapore và Indonesia.
                * Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật.
                
                Bác sĩ Eric đề ra sứ mệnh cho bản thân là “Hướng dẫn, điều trị, và truyền cảm hứng cho càng nhiều gia đình càng tốt trong việc giữ vững sức khỏe tối ưu thông qua phương pháp tự nhiên về trị liệu thần kinh cột sống”.
                
                Bác sĩ Eric cho rằng việc dành thời gian để giải thích cho bệnh nhân về chẩn đoán bệnh là tối quan trọng, qua đó bệnh nhân có thể hiểu chính xác những nguyên nhân dẫn đến bệnh trạng của mình. Ông luôn đưa ra phác đồ điều trị cụ thể cho từng bệnh nhân và theo sát các bước trong tiến trình phục hồi cũng như trong giai đoạn phòng ngừa việc tái đau trở lại.
                
                Bác sĩ Eric là người yêu công việc chăm sóc bệnh nhân của mình. Ngoài ra, những lúc rãnh rỗi ông thích đi du lịch, lặn biển, tập thể dục, chơi bóng chày, và dành thời gian với gia đình của mình. Mục tiêu của Bác sĩ Eric là giúp bệnh nhân có được một cuộc sống không còn đau đớn và giúp cơ thể họ vận động hết khả năng vốn có với sức khỏe tối ưu.
                
                **Bác sĩ khám và điều trị**
                
                * Thoát vị đĩa đệm
                * Thoái hóa đốt sống cổ, lưng
                * Đau dây thần kinh tọa
                * Hội chứng rễ dây thần kinh
                * Đau đầu
                * Chứng đau vai
                * Đau khuỷu tay
                * Đau cổ tay
                * Cong vẹo cột sống
                * Đau thắt lưng
                * Đau đầu gối
                * Các chứng đau bàn chân
                * Đau mắt cá
                * Chấn thương thể thao
                * Phục hồi chức năng
                * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt`,
                descriptionHTML: `<p><strong>Bác sĩ Nobi Nobita</strong></p>
                <ul>
                <li>Bác sĩ Chuyên Khoa Trị Liệu Thần Kinh Cột Sống</li>
                <li>Cử nhân Khoa học về Vận động học, chuyên ngành Tiền vật lý trị liệu tại Đại học bang San Diego - Mỹ</li>
                <li>Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Đại học Life Chiropractic College - Mỹ (2010)</li>
                <li>Bác sĩ đã từng hành nghề ở Mỹ, Singapore và Indonesia.</li>
                <li>Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật.</li>
                </ul>
                <p>Bác sĩ Eric đề ra sứ mệnh cho bản thân là “Hướng dẫn, điều trị, và truyền cảm hứng cho càng nhiều gia đình càng tốt trong việc giữ vững sức khỏe tối ưu thông qua phương pháp tự nhiên về trị liệu thần kinh cột sống”.</p>
                <p>Bác sĩ Eric cho rằng việc dành thời gian để giải thích cho bệnh nhân về chẩn đoán bệnh là tối quan trọng, qua đó bệnh nhân có thể hiểu chính xác những nguyên nhân dẫn đến bệnh trạng của mình. Ông luôn đưa ra phác đồ điều trị cụ thể cho từng bệnh nhân và theo sát các bước trong tiến trình phục hồi cũng như trong giai đoạn phòng ngừa việc tái đau trở lại.</p>
                <p>Bác sĩ Eric là người yêu công việc chăm sóc bệnh nhân của mình. Ngoài ra, những lúc rãnh rỗi ông thích đi du lịch, lặn biển, tập thể dục, chơi bóng chày, và dành thời gian với gia đình của mình. Mục tiêu của Bác sĩ Eric là giúp bệnh nhân có được một cuộc sống không còn đau đớn và giúp cơ thể họ vận động hết khả năng vốn có với sức khỏe tối ưu.</p>
                <p><strong>Bác sĩ khám và điều trị</strong></p>
                <ul>
                <li>Thoát vị đĩa đệm</li>
                <li>Thoái hóa đốt sống cổ, lưng</li>
                <li>Đau dây thần kinh tọa</li>
                <li>Hội chứng rễ dây thần kinh</li>
                <li>Đau đầu</li>
                <li>Chứng đau vai</li>
                <li>Đau khuỷu tay</li>
                <li>Đau cổ tay</li>
                <li>Cong vẹo cột sống</li>
                <li>Đau thắt lưng</li>
                <li>Đau đầu gối</li>
                <li>Các chứng đau bàn chân</li>
                <li>Đau mắt cá</li>
                <li>Chấn thương thể thao</li>
                <li>Phục hồi chức năng</li>
                <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
                </ul>                
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
                image: "data:image/jpeg;base64,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",
                intro: `Nguyên Phó Chủ nhiệm Bộ môn Nội tim mạch, Bệnh viện Trung ương Quân đội 108
Chuyên gia hàng đầu về nội tim mạch với hơn 30 năm kinh nghiệm
Bác sĩ khám cho người bệnh từ 18 tuổi trở lên`,
                thongtinkham: `GIÁ KHÁM:  
                + Giá khám chưa bao gồm chi phí chụp chiếu xét nghiệm: 300.000đ
                
                GIÁ DỊCH VỤ LIÊN QUAN: 
                + Tổng phân tích tế bào máu ngoại vi(Theo chỉ định của bác sĩ): 156.000đ
                + Siêu âm Doppler tim, van tim (Theo chỉ định của bác sĩ): 600.000đ
                + X-Quang tim phổi (Theo chỉ định của bác sĩ): 210.000đ
                
                LOẠI BẢO HIỂM ÁP DỤNG
                + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
                + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Shizuka Minamoto**
                * Bác sĩ có 20 năm kinh nghiệm Trị liệu thần kinh cột sống
                * Bác sĩ có 5 năm làm giảng viên tại trường LACC
                * Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)
                
                **Khám và điều trị**
                * Thoát vị đĩa đệm
                * Thoái hóa đốt sống cổ, lưng
                * Đau dây thần kinh tọa
                * Hội chứng rễ dây thần kinh
                * Đau đầu
                * Chứng đau vai
                * Đau khuỷu tay
                * Đau cổ tay
                * Cong vẹo cột sống
                * Đau thắt lưng
                * Đau đầu gối
                * Các chứng đau bàn chân
                * Đau mắt cá
                * Chấn thương thể thao
                * Phục hồi chức năng
                * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt
                
                **Qúa trình công tác**
                * 5 năm làm giảng viên tại trường LACC
                * Thành viên đội y tế của đội tuyển Olympic Trung Quốc trong 2 kì 2018 - 2020
                * Năm 2019, Bác sĩ vinh dự là diễn giả của Đại học Thể dục Thể Thao Bắc Kinh
                * Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)
                * Qúa trình đào tạo
                * Tốt nghiệp Đại học Bang New York
                * Tốt nghiệp trường Los Angeles College of Chiropractic (LACC) chuyên về Trị liệu thần kinh cột sống tại miền Nam bang California`,
                descriptionHTML: `<p><strong>Bác sĩ Shizuka Minamoto</strong></p>
                <ul>
                <li>Bác sĩ có 20 năm kinh nghiệm Trị liệu thần kinh cột sống</li>
                <li>Bác sĩ có 5 năm làm giảng viên tại trường LACC</li>
                <li>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</li>
                </ul>
                <p><strong>Khám và điều trị</strong></p>
                <ul>
                <li>Thoát vị đĩa đệm</li>
                <li>Thoái hóa đốt sống cổ, lưng</li>
                <li>Đau dây thần kinh tọa</li>
                <li>Hội chứng rễ dây thần kinh</li>
                <li>Đau đầu</li>
                <li>Chứng đau vai</li>
                <li>Đau khuỷu tay</li>
                <li>Đau cổ tay</li>
                <li>Cong vẹo cột sống</li>
                <li>Đau thắt lưng</li>
                <li>Đau đầu gối</li>
                <li>Các chứng đau bàn chân</li>
                <li>Đau mắt cá</li>
                <li>Chấn thương thể thao</li>
                <li>Phục hồi chức năng</li>
                <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
                </ul>
                <p><strong>Qúa trình công tác</strong></p>
                <ul>
                <li>5 năm làm giảng viên tại trường LACC</li>
                <li>Thành viên đội y tế của đội tuyển Olympic Trung Quốc trong 2 kì 2018 - 2020</li>
                <li>Năm 2019, Bác sĩ vinh dự là diễn giả của Đại học Thể dục Thể Thao Bắc Kinh</li>
                <li>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</li>
                <li>Qúa trình đào tạo</li>
                <li>Tốt nghiệp Đại học Bang New York</li>
                <li>Tốt nghiệp trường Los Angeles College of Chiropractic (LACC) chuyên về Trị liệu thần kinh cột sống tại miền Nam bang California</li>
                </ul>                
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
                image: "data:image/jpeg;base64,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",
                intro: `Là chuyên gia đầu ngành về gan mật
Được phong tăng Danh hiệu thầy thuốc nhân dân
Tham gia giảng dạy về bệnh lý gan mật tại Bệnh viện Quân Y 103`,
                thongtinkham: `GIÁ KHÁM: 
                + Chưa bao gồm chi phí chụp chiếu, xét nghiệm: 300.000đ
                
               GIÁ DỊCH VỤ LIÊN QUAN: 
                + Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
                + HBs Ag test nhanh (Theo chỉ định của bác sĩ): 126.000đ
                + HBsAg định lượng (Theo chỉ định của bác sĩ): 1.104.000đ
                + HBsAb test nhanh (Theo chỉ định của bác sĩ): 96.000đ
                + HBsAb định lượng (Theo chỉ định của bác sĩ): 300.000đ
                + HBeAg test nhanh (Theo chỉ định của bác sĩ): 132.000đ
                + Siêu âm ổ bụng (Theo chỉ định của bác sĩ): 354.000đ - 440.000đ
                
                LOẠI BẢO HIỂM ÁP DỤNG
                + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
                + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Takeshi Goda**
                * Bác sĩ có kinh nghiệm trên 20 năm trong trị liệu thần kinh cột sống
                * Tốt nghiệp Trường Đại học Trị liệu Thần kinh Cột sống New York (1996)
                * Ông từng làm việc về Trị liệu thần kinh cột sống tại Peru trong 2 năm 
                * Ông là bác sĩ đầu tiên ở khu vực Đông Nam Á đạt chứng nhận về phương pháp kéo dãn giảm áp cột sống Kennedy trong việc điều trị thoát vị đĩa đệm
                
                Bác sĩ Timothy từng tham gia chương trình tình nguyện và áp dụng Phương pháp trị liệu thần kinh cột sống để khám chữa chữa bệnh cho nhiều bệnh nhân ở các nước kém phát triển như Haiti, Ecuador, Jamaica và Cộng Hòa Dominica. Ông cũng là người mang những phương thức trị liệu phục hồi chức năng mơi đến với Việt Nam.
                
                **Khám và điều trị**
                * Trị liệu thần kinh cột sống
                * Thoát vị đĩa đệm
                * Đau dây thần kinh tọa
                * Đau đầu
                * Chứng đau vai
                * Đau khuỷu tay
                * Đau cổ tay
                * Cong vẹo cột sống
                * Chấn thương cột sống
                * Thoái hóa đốt sống cổ, lưng
                * Đau thắt lưng
                * Đau đầu gối
                * Các chứng đau bàn chân
                * Đau mắt cá
                * Dị tật bàn chân bẹt ở trẻ em`,
                descriptionHTML: `<p><strong>Bác sĩ Takeshi Goda</strong></p>
                <ul>
                <li>Bác sĩ có kinh nghiệm trên 20 năm trong trị liệu thần kinh cột sống</li>
                <li>Tốt nghiệp Trường Đại học Trị liệu Thần kinh Cột sống New York (1996)</li>
                <li>Ông từng làm việc về Trị liệu thần kinh cột sống tại Peru trong 2 năm</li>
                <li>Ông là bác sĩ đầu tiên ở khu vực Đông Nam Á đạt chứng nhận về phương pháp kéo dãn giảm áp cột sống Kennedy trong việc điều trị thoát vị đĩa đệm</li>
                </ul>
                <p>Bác sĩ Timothy từng tham gia chương trình tình nguyện và áp dụng Phương pháp trị liệu thần kinh cột sống để khám chữa chữa bệnh cho nhiều bệnh nhân ở các nước kém phát triển như Haiti, Ecuador, Jamaica và Cộng Hòa Dominica. Ông cũng là người mang những phương thức trị liệu phục hồi chức năng mơi đến với Việt Nam.</p>
                <p><strong>Khám và điều trị</strong></p>
                <ul>
                <li>Trị liệu thần kinh cột sống</li>
                <li>Thoát vị đĩa đệm</li>
                <li>Đau dây thần kinh tọa</li>
                <li>Đau đầu</li>
                <li>Chứng đau vai</li>
                <li>Đau khuỷu tay</li>
                <li>Đau cổ tay</li>
                <li>Cong vẹo cột sống</li>
                <li>Chấn thương cột sống</li>
                <li>Thoái hóa đốt sống cổ, lưng</li>
                <li>Đau thắt lưng</li>
                <li>Đau đầu gối</li>
                <li>Các chứng đau bàn chân</li>
                <li>Đau mắt cá</li>
                <li>Dị tật bàn chân bẹt ở trẻ em</li>
                </ul>
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
                image: "data:image/png;base64,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",
                intro: `Nguyên Trưởng khoa Sản bệnh, Bệnh viện Phụ sản Hà Nội.
Nguyên Phó Trường khoa phụ trách phòng Đẻ, Bệnh viện Phụ sản Hà Nội
Bác sĩ chỉ khám và tư vấn thai, không siêu âm thai, không khám phụ khoa `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 400.000đ
                Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ
                
                GIÁ DỊCH VỤ LIÊN QUAN: 
                Tổng phân tích tế bào máu ngoại vi bằng máy đếm tổng trở [18TS- bằng máy đếm tự động]: 156.000đ
                 + Tổng phân tích nước tiểu (Theo chỉ định của bác sĩ): 78.000đ
                 + Siêu âm ổ bụng (Tùy vào loại thường hay 4D): 354.000đ - 440.000đ
                 + Soi cổ tử cung (Theo chỉ định của bác sĩ): 300.000đ
                 + Siêu âm đầu dò âm đạo (Theo chỉ định của bác sĩ): 354.000đ
                 + HPV IgG test nhanh (Theo chỉ định của bác sĩ): 120.000đ
                
                 + Siêu âm thai 3 tháng đầu (màu 4D): 400.000đ
                 + Siêu âm thai 3 tháng đầu (thường): 264.000đ
                 + Siêu âm thai 3 tháng giữa (màu 4D): 450.000đ
                 + Siêu âm thai 3 tháng giữa (thường): 354.000đ
                 + Siêu âm thai 3 tháng cuối (màu 4D): 450.000đ
                 + Siêu âm thai 3 tháng cuối (thường): 354.000đ
                
                 LOẠI BẢO HIỂM ÁP DỤNG
                 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
                 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Suneo Hokenawa**

                * Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ
                * Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống
                * Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)
                * Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng
                * Tham gia các chuyên đề sức khỏe trên báo chí truyền hình
                
                Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.
                
                **Khám và điều trị**
                * Thoát vị đĩa đệm
                * Thoái hóa cột sống
                * Đau thần kinh tọa
                * Đau thắt lưng
                * Chấn thương thể thao
                * Phục hồi chức năng
                * Vẹo cột sống
                * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt
                * Đau đầu
                * Đau vai
                * Đau cổ tay, khuỷu tay
                * Đau đầu gối
                * Đau bàn chân
                * Đau mắt cá chân`,
                descriptionHTML: `<p><strong>Bác sĩ Suneo Hokenawa</strong></p>
                <ul>
                <li>Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ</li>
                <li>Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống</li>
                <li>Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)</li>
                <li>Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng</li>
                <li>Tham gia các chuyên đề sức khỏe trên báo chí truyền hình</li>
                </ul>
                <p>Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.</p>
                <p><strong>Khám và điều trị</strong></p>
                <ul>
                <li>Thoát vị đĩa đệm</li>
                <li>Thoái hóa cột sống</li>
                <li>Đau thần kinh tọa</li>
                <li>Đau thắt lưng</li>
                <li>Chấn thương thể thao</li>
                <li>Phục hồi chức năng</li>
                <li>Vẹo cột sống</li>
                <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
                <li>Đau đầu</li>
                <li>Đau vai</li>
                <li>Đau cổ tay, khuỷu tay</li>
                <li>Đau đầu gối</li>
                <li>Đau bàn chân</li>
                <li>Đau mắt cá chân</li>
                </ul>
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
                image: "data:image/jpeg;base64,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",
                intro: `Gần 40 năm kinh nghiệm lĩnh vực Tiêu hóa - Gan - Mật
Từng học tập và tu nghiệp tại Liên Xô
Từng công tác tại Bệnh viện An Bình và Bệnh viện Đại học Y Dược TP. Hồ Chí Minh
Bác sĩ nhận khám từ 15 tuổi trở lên `,
                thongtinkham: `TIÊU HOÁ: 300.000đ, BỆNH VIÊM GAN: 300.000đ
                Bệnh nhân sử dụng Bảo hiểm tư nhân vui lòng đến khám trước 15h hàng ngày
                
                 LOẠI BẢO HIỂM ÁP DỤNG
                 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
                 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Lông mày dài**

                * Tốt nghiệp Trường Đào tạo Chuyên khoa Thần kinh Cột sống Palmer - Hoa Kỳ (2014)
                * Bác sĩ Chuyên khoa Trị liệu Thần kinh Cột sống từng làm việc tại Hoa Kỳ, Ấn Độ, Campuchia
                * Cử nhân Khoa học chuyên ngành Sinh học Con người, Trường Đại học bang Michigan (2012)
                
                BS. Luke không ngừng nâng cao kiến thức và tham dự những khóa học chuyên sâu và hội thảo Chuyên ngành Thần kinh Cột sống trong điều trị Chấn thương Thể Thao, sử dụng Băng dán Cơ trong thể thao, kỹ thuật nắn chỉnh Flexion-Distraction và kỹ thuật Graston.
                
                Bác sĩ Luke mang tới nhiều kĩ thuật để giúp những bệnh nhân đạt được sức khỏe tốt nhất. Bác sĩ tin rằng cột sống là bộ phận quan trọng nhất trong cơ thể và nếu cột sống có thể thực hiện tối đa chức năng thì cả cơ thể có thể hoạt động một cách tốt nhất. Bác sĩ sử dụng triết lý này khi nói chuyện và tư vấn cho bệnh nhân những lợi ích của Trị liệu Thần kinh Cột sống có thể mang lại cho tình trạng riêng biệt của họ.
                
                **Khám và điều trị**
                * Thoát vị đĩa đệm
                * Thoái hóa đốt sống cổ, lưng
                * Đau dây thần kinh tọa
                * Hội chứng rễ dây thần kinh
                * Đau đầu
                * Chứng đau vai
                * Đau khuỷu tay
                * Đau cổ tay
                * Cong vẹo cột sống
                * Đau thắt lưng
                * Đau đầu gối
                * Các chứng đau bàn chân
                * Đau mắt cá
                * Chấn thương thể thao
                * Phục hồi chức năng
                * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt`,
                descriptionHTML: `<p><strong>Bác sĩ Lông mày dài</strong></p>
                <ul>
                <li>Tốt nghiệp Trường Đào tạo Chuyên khoa Thần kinh Cột sống Palmer - Hoa Kỳ (2014)</li>
                <li>Bác sĩ Chuyên khoa Trị liệu Thần kinh Cột sống từng làm việc tại Hoa Kỳ, Ấn Độ, Campuchia</li>
                <li>Cử nhân Khoa học chuyên ngành Sinh học Con người, Trường Đại học bang Michigan (2012)</li>
                </ul>
                <p>BS. Luke không ngừng nâng cao kiến thức và tham dự những khóa học chuyên sâu và hội thảo Chuyên ngành Thần kinh Cột sống trong điều trị Chấn thương Thể Thao, sử dụng Băng dán Cơ trong thể thao, kỹ thuật nắn chỉnh Flexion-Distraction và kỹ thuật Graston.</p>
                <p>Bác sĩ Luke mang tới nhiều kĩ thuật để giúp những bệnh nhân đạt được sức khỏe tốt nhất. Bác sĩ tin rằng cột sống là bộ phận quan trọng nhất trong cơ thể và nếu cột sống có thể thực hiện tối đa chức năng thì cả cơ thể có thể hoạt động một cách tốt nhất. Bác sĩ sử dụng triết lý này khi nói chuyện và tư vấn cho bệnh nhân những lợi ích của Trị liệu Thần kinh Cột sống có thể mang lại cho tình trạng riêng biệt của họ.</p>
                <p><strong>Khám và điều trị</strong></p>
                <ul>
                <li>Thoát vị đĩa đệm</li>
                <li>Thoái hóa đốt sống cổ, lưng</li>
                <li>Đau dây thần kinh tọa</li>
                <li>Hội chứng rễ dây thần kinh</li>
                <li>Đau đầu</li>
                <li>Chứng đau vai</li>
                <li>Đau khuỷu tay</li>
                <li>Đau cổ tay</li>
                <li>Cong vẹo cột sống</li>
                <li>Đau thắt lưng</li>
                <li>Đau đầu gối</li>
                <li>Các chứng đau bàn chân</li>
                <li>Đau mắt cá</li>
                <li>Chấn thương thể thao</li>
                <li>Phục hồi chức năng</li>
                <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
                </ul>
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
                image: "data:image/jpeg;base64,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",
                intro: `Gần 30 năm kinh nghiệm lĩnh vực Nội Tổng quát - Da liễu
Hiện công tác tại Phòng khám Bệnh viện Đại học Y Dược 1
Từng công tác tại Bệnh viện Trưng Vương
                Bác sĩ nhận khám từ 15 tuổi trở lên `,
                thongtinkham: `Giá khám: 250.000đ
                Bệnh nhân sử dụng Bảo hiểm tư nhân vui lòng đến khám trước 15h hàng ngày
                 LOẠI BẢO HIỂM ÁP DỤNG
                 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
                 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Tiến sĩ, Bác sĩ Sư Phụ Bự**
                * 20 năm kinh nghiệm lĩnh vực Tim mạch
                * Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
                * Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức
                
                **Khám và điều trị**
                
                Các bệnh lý Nội Tim mạch:
                
                * Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)
                * Tăng huyết áp, hạ huyết áp
                * Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu
                * Xơ vữa động mạch
                * Điều trị bệnh mạch vành
                * Bệnh van tim (Hẹp hở van tim)
                * Bệnh cơ tim
                * Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh
                * Khám bệnh mạch máu ngoại biên
                * Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch
                * Tư vấn sử dụng thuốc chống đông máu
                * Tư vấn bệnh tăng huyết áp
                * Điều trị bệnh tăng huyết áp
                * Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...
                
                **Quá trình công tác**
                
                * Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
                **
                Quá trình đào tạo**
                * Tiến sĩ Y khoa - Đại học Y Hà Nội
                * Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ
                * Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia
                * Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội
                
                **Sách và các công trình nghiên cứu, báo cáo khoa học**
                * Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản
                * 3 công trình khoa học
                * 30 bài báo khoa học chuyên ngành`,
                descriptionHTML: `<p><strong>Tiến sĩ, Bác sĩ Sư Phụ Bự</strong></p>
                <ul>
                <li>20 năm kinh nghiệm lĩnh vực Tim mạch</li>
                <li>Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai</li>
                <li>Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức</li>
                </ul>
                <p><strong>Khám và điều trị</strong></p>
                <p>Các bệnh lý Nội Tim mạch:</p>
                <ul>
                <li>Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)</li>
                <li>Tăng huyết áp, hạ huyết áp</li>
                <li>Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li>
                <li>Xơ vữa động mạch</li>
                <li>Điều trị bệnh mạch vành</li>
                <li>Bệnh van tim (Hẹp hở van tim)</li>
                <li>Bệnh cơ tim</li>
                <li>Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh</li>
                <li>Khám bệnh mạch máu ngoại biên</li>
                <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch</li>
                <li>Tư vấn sử dụng thuốc chống đông máu</li>
                <li>Tư vấn bệnh tăng huyết áp</li>
                <li>Điều trị bệnh tăng huyết áp</li>
                <li>Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...</li>
                </ul>
                <p><strong>Quá trình công tác</strong></p>
                <ul>
                <li>Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
                **
                Quá trình đào tạo**</li>
                <li>Tiến sĩ Y khoa - Đại học Y Hà Nội</li>
                <li>Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ</li>
                <li>Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia</li>
                <li>Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội</li>
                </ul>
                <p><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></p>
                <ul>
                <li>Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản</li>
                <li>3 công trình khoa học</li>
                <li>30 bài báo khoa học chuyên ngành</li>
                </ul>
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
                image: "data:image/jpeg;base64,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",
                intro: `Từng là bác sĩ tại Bộ Tổng tham mưu, Bộ Quốc Phòng
30 năm kinh nghiệm trong khám và điều trị bệnh lý về Mắt
Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ) `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 350.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

Khám & Nội soi Tai Mũi họng
Đã bao gồm nội soi Tai Mũi họng
400.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ
GIÁ DỊCH VỤ LIÊN QUAN:
Đo nhĩ lượng (Theo chỉ định của bác sĩ): 150.000đ
Đo thính lực (Theo chỉ định của bác sĩ): 150.000đ
Làm thuốc tai, mũi, thanh quản (Theo chỉ định của bác sĩ): 250.000đ
Lấy dị vật tai:	400.000đ
Khí dung mũi họng (bao gồm thuốc) (Theo chỉ định của bác sĩ): 600.000đ
Tổng phân tích tế bào máu ngoại vi (bằng máy đếm laser) (Theo chỉ định của bác sĩ): 100.000đ
Thời gian máu chảy phương pháp Duke (Theo chỉ định của bác sĩ) : Chưa xác định

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Thạc sĩ, Bác sĩ A Lượng**
                * Gần 15 năm kinh nghiệm lĩnh vực Tim mạch
                * Hiện đang công tác tại Bệnh viện Tim Hà Nội
                * Từng công tác tại Bệnh viện đa khoa Xanh Pôn
                * Từng học tập và tu nghiệp ở nước ngoài: Pháp
                
                
                #### **Khám và điều trị**
                
                
                **Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:**
                
                * Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp
                * Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo
                * Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …
                
                **Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:**
                
                * Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)
                
                **Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:**
                
                * Bệnh lý thận  - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )
                * Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)
                * Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)
                * Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)
                * Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)
                
                **Quá trình công tác**
                * Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)
                * Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)
                
                **Quá trình đào tạo**
                * Chương trình đào tạo sau đại học Việt Pháp (2012)
                * Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)
                * Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)
                
                **Chứng chỉ trong nước hoặc nước ngoài**
                * Siêu âm các bệnh lý mạch máu - MEVAH, Cộng hoà Pháp ( năm 2012)
                * Siêu âm tổng quát, siêu âm tim mạch, siêu âm bệnh lý tim trẻ em, Bệnh viện Tim mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viên Tim Hà Nội
                
                **Sách và các công trình nghiên cứu, báo cáo khoa học**
                * Đánh giá kết quả sớm của phương pháp Nong van hai lá bằng bóng INOUE trong điều trị bệnh hẹp van hai lá khít tái phát sau nong (Luận văn tốt nghiệp Thạc sỹ - Đại học Y Hà Nội) (2010)
                
                **Thành viên các Hội khoa học, tổ chức chuyên môn**
                * Hội viên hội tim mạch Việt Nam`,
                descriptionHTML: `<p><strong>Thạc sĩ, Bác sĩ A Lượng</strong></p>
                <ul>
                <li>Gần 15 năm kinh nghiệm lĩnh vực Tim mạch</li>
                <li>Hiện đang công tác tại Bệnh viện Tim Hà Nội</li>
                <li>Từng công tác tại Bệnh viện đa khoa Xanh Pôn</li>
                <li>Từng học tập và tu nghiệp ở nước ngoài: Pháp</li>
                </ul>
                <h4><strong>Khám và điều trị</strong></h4>
                <p><strong>Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:</strong></p>
                <ul>
                <li>Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp</li>
                <li>Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo</li>
                <li>Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …</li>
                </ul>
                <p><strong>Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:</strong></p>
                <ul>
                <li>Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)</li>
                </ul>
                <p><strong>Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:</strong></p>
                <ul>
                <li>Bệnh lý thận  - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )</li>
                <li>Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)</li>
                <li>Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)</li>
                <li>Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)</li>
                <li>Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)</li>
                </ul>
                <p><strong>Quá trình công tác</strong></p>
                <ul>
                <li>Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)</li>
                <li>Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)</li>
                </ul>
                <p><strong>Quá trình đào tạo</strong></p>
                <ul>
                <li>Chương trình đào tạo sau đại học Việt Pháp (2012)</li>
                <li>Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)</li>
                <li>Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)</li>
                </ul>
                <p><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></p>
                <ul>
                <li>Siêu âm các bệnh lý mạch máu - MEVAH, Cộng hoà Pháp ( năm 2012)</li>
                <li>Siêu âm tổng quát, siêu âm tim mạch, siêu âm bệnh lý tim trẻ em, Bệnh viện Tim mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viên Tim Hà Nội</li>
                </ul>
                <p><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></p>
                <ul>
                <li>Đánh giá kết quả sớm của phương pháp Nong van hai lá bằng bóng INOUE trong điều trị bệnh hẹp van hai lá khít tái phát sau nong (Luận văn tốt nghiệp Thạc sỹ - Đại học Y Hà Nội) (2010)</li>
                </ul>
                <p><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></p>
                <ul>
                <li>Hội viên hội tim mạch Việt Nam</li>
                </ul>
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
                image: "data:image/jpeg;base64,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",
                intro: `Bác sĩ tư vấn dinh dưỡng cho phụ nữ mang thai và trẻ em
Nhiều năm kinh nghiệm trong lĩnh vực Tư vấn dinh dưỡng`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 250.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

 1 Siêu âm (bụng, tuyến giáp, cổ, tuyến vú, phần mềm…) 196.000
2 3 Siêu âm đầu dò âm đạo, trực tràng 287.000
3 4 Siêu âm Doppler màu tim hoặc mạch máu 300.000
4 18.0010.0069 Siêu âm Doppler u tuyến, hạch vùng cổ 291.000
5 18.0021.0069 Siêu âm Doppler các khối u trong ổ bụng 291.000
6 18.0022.0069 Siêu âm Doppler gan lách 291.000
7 18.0032.0069 Siêu âm Doppler tử cung, buồng trứng qua đường bụng 291.000
8 18.0055.0069 Siêu âm Doppler tuyến vú 291.000
9 18.0058.0069 Siêu âm Doppler tinh hoàn, mào tinh hoàn hai bên 291.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ cao câp hạng 1 Tiểu Sư Đệ**

                * Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần
                * Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương
                * Khám và điều trị
                
                **Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:**
                
                * Các vấn đề tâm lý ở trẻ
                * Tâm thần học liên quan đến sự phát triển của trẻ
                * Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan
                * Động kinh trẻ em và các vấn đề liên quan
                
                **Ngoài ra bác sĩ nhận khám và điều trị về:**
                
                * Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ
                * Rối loạn tiền đình
                * Rối loạn thần kinh thực vật
                * Trầm cảm
                * Rối loạn lưỡng cực cảm xúc
                * Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm
                * Sa sút trí tuệ
                * Rối loạn tăng động giảm chú ý (ADHD)
                * Nghiện game
                * Nghiện rượu, thuốc lá
                * Nghiện ma túy tổng hợp
                * Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân
                * Khó tập trung công việc
                * Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài
                
                **Quá trình công tác**
                * Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)
                * Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)
                * Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)
                * Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)
                
                **Quá trình đào tạo**
                * Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)
                * Tốt nghiệp Đại học Y Hà Nội (1998)`,
                descriptionHTML: `<p><strong>Bác sĩ cao câp hạng 1 Tiểu Sư Đệ</strong></p>
                <ul>
                <li>Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần</li>
                <li>Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương</li>
                <li>Khám và điều trị</li>
                </ul>
                <p><strong>Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:</strong></p>
                <ul>
                <li>Các vấn đề tâm lý ở trẻ</li>
                <li>Tâm thần học liên quan đến sự phát triển của trẻ</li>
                <li>Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan</li>
                <li>Động kinh trẻ em và các vấn đề liên quan</li>
                </ul>
                <p><strong>Ngoài ra bác sĩ nhận khám và điều trị về:</strong></p>
                <ul>
                <li>Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ</li>
                <li>Rối loạn tiền đình</li>
                <li>Rối loạn thần kinh thực vật</li>
                <li>Trầm cảm</li>
                <li>Rối loạn lưỡng cực cảm xúc</li>
                <li>Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm</li>
                <li>Sa sút trí tuệ</li>
                <li>Rối loạn tăng động giảm chú ý (ADHD)</li>
                <li>Nghiện game</li>
                <li>Nghiện rượu, thuốc lá</li>
                <li>Nghiện ma túy tổng hợp</li>
                <li>Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân</li>
                <li>Khó tập trung công việc</li>
                <li>Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài</li>
                </ul>
                <p><strong>Quá trình công tác</strong></p>
                <ul>
                <li>Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)</li>
                <li>Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)</li>
                <li>Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)</li>
                <li>Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)</li>
                </ul>
                <p><strong>Quá trình đào tạo</strong></p>
                <ul>
                <li>Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)</li>
                <li>Tốt nghiệp Đại học Y Hà Nội (1998)</li>
                </ul>                
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
                image: "data:image/jpeg;base64,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",
                intro: `Hơn 30 năm kinh nghiệm lĩnh vực Nhi khoa
Hiện là Trưởng khoa Nhi kiêm phụ trách Đơn vị tiêm chủng – Phòng khám Bệnh viện Đại học Y Dược 1`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 300.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

10 Siêu âm đàn hồi mô giáp 350.000
11 Siêu âm đàn hồi mô vú 350.000
12 Siêu âm đàn hồi tinh hoàn 350.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Chuyên khoa I Sherlock Homles **
                * Hơn 20 năm kinh nghiệm trong lĩnh vực Tim mạch
                * Từng công tác tại Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương
                * Hiện đang công tác tại Khoa Tim mạch, Bệnh viện FV
                
                **Khám và điều trị **
                * Bệnh tim thiếu máu cục bộ
                * Suy tim
                * Siêu âm tim
                * Tim mạch can thiệp
                
                **Quá trình công tác **
                * Bác sĩ Điều trị Cấp cao, Khoa Tim mạch, Bệnh viện FV, TP.HCM (2017)
                * Bác sĩ Điều trị Cấp cao, Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương (2011 - 2017)
                * Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Hoàn Mỹ Cửu Long, Cần Thơ (2007 - 2011)
                * Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Đa khoa Trung ương Cần Thơ (2006 - 2007)
                
                **Quá trình đào tạo**
                
                * Chuyên khoa cấp 1, Lão Khoa, Đại học Y Dược TP. HCM (2006) 
                * Tốt nghiệp Đại học Y Dược, Cần Thơ (2001)
                
                **Chứng chỉ trong nước và ngoài nước**
                * Bằng tim Mạch Can Thiệp, Viện Tim TP. HCM  (2011 - 2012)
                * Bằng hồi sức cấp cứu, Bệnh viện Chợ Rẫy TP. HCM (2006)
                * Bằng tim mạch và siêu âm tim, Trường y Phạm Ngọc Thạch TP. HCM (2005 - 2006)`,
                descriptionHTML: `<p>**Bác sĩ Chuyên khoa I Sherlock Homles **</p>
                <ul>
                <li>Hơn 20 năm kinh nghiệm trong lĩnh vực Tim mạch</li>
                <li>Từng công tác tại Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương</li>
                <li>Hiện đang công tác tại Khoa Tim mạch, Bệnh viện FV</li>
                </ul>
                <p>**Khám và điều trị **</p>
                <ul>
                <li>Bệnh tim thiếu máu cục bộ</li>
                <li>Suy tim</li>
                <li>Siêu âm tim</li>
                <li>Tim mạch can thiệp</li>
                </ul>
                <p>**Quá trình công tác **</p>
                <ul>
                <li>Bác sĩ Điều trị Cấp cao, Khoa Tim mạch, Bệnh viện FV, TP.HCM (2017)</li>
                <li>Bác sĩ Điều trị Cấp cao, Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương (2011 - 2017)</li>
                <li>Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Hoàn Mỹ Cửu Long, Cần Thơ (2007 - 2011)</li>
                <li>Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Đa khoa Trung ương Cần Thơ (2006 - 2007)</li>
                </ul>
                <p><strong>Quá trình đào tạo</strong></p>
                <ul>
                <li>Chuyên khoa cấp 1, Lão Khoa, Đại học Y Dược TP. HCM (2006)</li>
                <li>Tốt nghiệp Đại học Y Dược, Cần Thơ (2001)</li>
                </ul>
                <p><strong>Chứng chỉ trong nước và ngoài nước</strong></p>
                <ul>
                <li>Bằng tim Mạch Can Thiệp, Viện Tim TP. HCM  (2011 - 2012)</li>
                <li>Bằng hồi sức cấp cứu, Bệnh viện Chợ Rẫy TP. HCM (2006)</li>
                <li>Bằng tim mạch và siêu âm tim, Trường y Phạm Ngọc Thạch TP. HCM (2005 - 2006)</li>
                </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'sherlock', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'John Watson', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 3, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `10 năm kinh nghiệm lĩnh vực Tai mũi họng
Hiện đang công tác tại Phòng khám Bệnh viện Đại học Y Dược 1
Bác sĩ nhận khám từ 15 tuổi trở lên  `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

1 18.0124.0016 Chụp Xquang thực quản cổ nghiêng 255.000
2 18.0130.0017 Chụp Xquang thực quản dạ dày 224.000
3 18.0131.0017 Chụp Xquang ruột non 224.000
4 18.0132.0018 Chụp Xquang đại tràng 290.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `Tiến sĩ, Bác sĩ John Watson
                * Bác sĩ có 20 năm kinh nghiệm trong thăm khám và điều trị khoa Tai Mũi Họng
                * Từng công tác tại khoa Tai Mũi Họng, Bệnh Viện Đại học Y Dược TP. HCM
                * Hiện đang là trưởng Khoa Tai Mũi Họng, Bệnh Viện FV
                
                **Khám và điều trị**
                
                * Phẫu thuật nội soi xoang
                * Phẫu thuật nội soi nền sọ
                * Phẫu thuật Tai, Ngáy và Ngưng thở khi ngủ
                
                **Quá trình công tác** 
                
                * Trưởng Khoa Tai mũi họng, Bệnh Viện FV (2021 - nay)
                * Bác sĩ điều trị cấp cao, Khoa Tai mũi họng, Bệnh Viện Đại học Y Dược TP. HCM (2007)
                * Bác sĩ nội trú, Khoa Tai mũi họng, Đại học Y Dược TP. HCM (2002-2006)
                
                **Qúa trình đào tạo**
                * Tiến sĩ Y học, Tai Mũi Họng, Đại học Y Dược TP. HCM (2021)
                * Tai mũi họng – Phẫu thuật đầu và cổ, Bệnh Viện Đại học Texas, San Antonio, Hoa Kỳ (2015)
                * Nội soi xoang và phẫu thuật sọ não, Bệnh Viện Khoa học Thần Kinh, Chapel Hill, Bắc Carolina, Hoa Kỳ, (2015)
                * Phẫu thuật xoang nâng cao, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 4 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2014)
                * Phẫu thuật xoang cơ bản, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 3 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2013)
                * Thạc sĩ Y học, Đại học Y Dược TP. HCM (2010)
                * Chuyên khoa Cấp I, Tai Mũi Họng, Đại học Y Dược TP. HCM (2007)
                * Đại học Y Dược, Thành phố Hồ Chí Minh TP. HCM (2002)`,
                descriptionHTML: `<p>Tiến sĩ, Bác sĩ John Watson</p>
                <ul>
                <li>Bác sĩ có 20 năm kinh nghiệm trong thăm khám và điều trị khoa Tai Mũi Họng</li>
                <li>Từng công tác tại khoa Tai Mũi Họng, Bệnh Viện Đại học Y Dược TP. HCM</li>
                <li>Hiện đang là trưởng Khoa Tai Mũi Họng, Bệnh Viện FV</li>
                </ul>
                <p><strong>Khám và điều trị</strong></p>
                <ul>
                <li>Phẫu thuật nội soi xoang</li>
                <li>Phẫu thuật nội soi nền sọ</li>
                <li>Phẫu thuật Tai, Ngáy và Ngưng thở khi ngủ</li>
                </ul>
                <p><strong>Quá trình công tác</strong></p>
                <ul>
                <li>Trưởng Khoa Tai mũi họng, Bệnh Viện FV (2021 - nay)</li>
                <li>Bác sĩ điều trị cấp cao, Khoa Tai mũi họng, Bệnh Viện Đại học Y Dược TP. HCM (2007)</li>
                <li>Bác sĩ nội trú, Khoa Tai mũi họng, Đại học Y Dược TP. HCM (2002-2006)</li>
                </ul>
                <p><strong>Qúa trình đào tạo</strong></p>
                <ul>
                <li>Tiến sĩ Y học, Tai Mũi Họng, Đại học Y Dược TP. HCM (2021)</li>
                <li>Tai mũi họng – Phẫu thuật đầu và cổ, Bệnh Viện Đại học Texas, San Antonio, Hoa Kỳ (2015)</li>
                <li>Nội soi xoang và phẫu thuật sọ não, Bệnh Viện Khoa học Thần Kinh, Chapel Hill, Bắc Carolina, Hoa Kỳ, (2015)</li>
                <li>Phẫu thuật xoang nâng cao, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 4 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2014)</li>
                <li>Phẫu thuật xoang cơ bản, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 3 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2013)</li>
                <li>Thạc sĩ Y học, Đại học Y Dược TP. HCM (2010)</li>
                <li>Chuyên khoa Cấp I, Tai Mũi Họng, Đại học Y Dược TP. HCM (2007)</li>
                <li>Đại học Y Dược, Thành phố Hồ Chí Minh TP. HCM (2002)</li>
                </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'anhtroly', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Thúy Kiều', // tên bác sĩ 
                position: 'Bác sĩ hạng 3', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gần 30 năm kinh nghiệm lĩnh vực Sản phụ khoa
Hiện công tác tại Khoa Phụ sản - Phòng khám Bệnh viện Đại học Y Dược 1 
Bác sĩ nhận khám từ 15 tuổi trở lên `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

1 22.0021.1219 Co cục máu đông (Tên khác: Co cục máu) 34.000
2 1220 Công thức nhiễm sắc thể (Karyotype) máu ngoại vi 1.343.000
3 Xác định mức độ stress oxy hóa tinh trùng 1.300.000
4 Xét nghiệm vi mất đoạn trên nhiễm sắc thể Y 1.100.000
5 Kỹ thuật đánh giá phân mãnh DNA tinh trùng 1.700.000
6 22.0077.1233 Định lượng PIVKA (Proteins Induced by Vitamin K
Antagonism or Absence)– [Máu] 1.751.000
7 22.0023.1239 Định lượng D-Dimer 458.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Chuyên khoa I Thúy Kiều**
                * Hơn 15 năm kinh nghiệm trong lĩnh vực Sản phụ khoa và Siêu âm thai
                * Từng công tác tại Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương
                * Đang công tác tại Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM
                
                **Khám và điều trị**
                
                * Phẫu thuật nội soi phụ khoa
                * Siêu âm bơm nước buồng tử cung
                * Soi cổ tử cung
                * Thai kỳ nguy cơ cao
                * Y học bào thai
                
                 **Quá trình công tác**
                
                * Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện FV  (2011 - nay)
                * Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM (2017 - nay) 
                * Bác sĩ Điều trị Cấp cao, Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương (2008 - 2017)
                * Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Hùng Vương TP. HCM (2007 - 2017)
                
                **Quá trình đào tạo** 
                
                * Bằng chuyên khoa cấp 1, Chuyên ngành Sản & Phụ khoa, Đại học Y Dược TP. HCM (2016) 
                * Tốt nghiệp Đại học Y Khoa, TP. HCM (2006)
                
                **Chứng chỉ trong nước và ngoài nước**
                * Đánh giá cổ tử cung & Theo dõi tiền sản, Tổ chức Y học Thai Nhi, London, Anh (2010)
                * Sàng lọc thai nhi từ tuần 11 - 13, Tổ chức Y học Thai Nhi, London, Anh (2009)
                * Siêu âm chẩn đoán trong Sản phụ khoa, Phạm Ngọc Thạch TP. HCM  (2008)
                * Thai kỳ nguy cơ cao, Bệnh viện Từ Dũ & Bệnh viện Nepean, Sydney, Úc (2008)`,
                descriptionHTML: `<p><strong>Bác sĩ Chuyên khoa I Thúy Kiều</strong></p>
                <ul>
                <li>Hơn 15 năm kinh nghiệm trong lĩnh vực Sản phụ khoa và Siêu âm thai</li>
                <li>Từng công tác tại Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương</li>
                <li>Đang công tác tại Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM</li>
                </ul>
                <p><strong>Khám và điều trị</strong></p>
                <ul>
                <li>Phẫu thuật nội soi phụ khoa</li>
                <li>Siêu âm bơm nước buồng tử cung</li>
                <li>Soi cổ tử cung</li>
                <li>Thai kỳ nguy cơ cao</li>
                <li>Y học bào thai</li>
                </ul>
                <p><strong>Quá trình công tác</strong></p>
                <ul>
                <li>Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện FV  (2011 - nay)</li>
                <li>Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM (2017 - nay)</li>
                <li>Bác sĩ Điều trị Cấp cao, Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương (2008 - 2017)</li>
                <li>Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Hùng Vương TP. HCM (2007 - 2017)</li>
                </ul>
                <p><strong>Quá trình đào tạo</strong></p>
                <ul>
                <li>Bằng chuyên khoa cấp 1, Chuyên ngành Sản &amp; Phụ khoa, Đại học Y Dược TP. HCM (2016)</li>
                <li>Tốt nghiệp Đại học Y Khoa, TP. HCM (2006)</li>
                </ul>
                <p><strong>Chứng chỉ trong nước và ngoài nước</strong></p>
                <ul>
                <li>Đánh giá cổ tử cung &amp; Theo dõi tiền sản, Tổ chức Y học Thai Nhi, London, Anh (2010)</li>
                <li>Sàng lọc thai nhi từ tuần 11 - 13, Tổ chức Y học Thai Nhi, London, Anh (2009)</li>
                <li>Siêu âm chẩn đoán trong Sản phụ khoa, Phạm Ngọc Thạch TP. HCM  (2008)</li>
                <li>Thai kỳ nguy cơ cao, Bệnh viện Từ Dũ &amp; Bệnh viện Nepean, Sydney, Úc (2008)</li>
                </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'thuykieu', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Từ Hải', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến Sĩ, Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gần 15 kinh nghiệm lĩnh vực Nội Tổng quát
Hiện là Trưởng khoa Nội Tổng Quát - Phòng khám Bệnh viện Đại học Y Dược 1
Từng công tác tại các bệnh viện lớn: Bệnh viện Nhân dân Gia Định, Bệnh viện FV, Bệnh viện Columbia Asia Bình Dương,...
Bác sĩ nhận khám từ 15 tuổi trở lên `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

Phẫu thuật tái tạo trán lõm bằng xi măng xương Chưa bao
gồm xương nhân tạo, vật liệu tạo hình hộp sọ, đinh, nẹp,
vít, lưới tital, ghim, ốc, màng não nhân tạo, vật liệu cầm
máu sinh học : 300.000đ

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Nobi Nobita**

 * Bác sĩ Chuyên Khoa Trị Liệu Thần Kinh Cột Sống
 * Cử nhân Khoa học về Vận động học, chuyên ngành Tiền vật lý trị liệu tại Đại học bang San Diego - Mỹ
 * Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Đại học Life Chiropractic College - Mỹ (2010)
 * Bác sĩ đã từng hành nghề ở Mỹ, Singapore và Indonesia.
 * Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật.
 
 Bác sĩ Eric đề ra sứ mệnh cho bản thân là “Hướng dẫn, điều trị, và truyền cảm hứng cho càng nhiều gia đình càng tốt trong việc giữ vững sức khỏe tối ưu thông qua phương pháp tự nhiên về trị liệu thần kinh cột sống”.
 
 Bác sĩ Eric cho rằng việc dành thời gian để giải thích cho bệnh nhân về chẩn đoán bệnh là tối quan trọng, qua đó bệnh nhân có thể hiểu chính xác những nguyên nhân dẫn đến bệnh trạng của mình. Ông luôn đưa ra phác đồ điều trị cụ thể cho từng bệnh nhân và theo sát các bước trong tiến trình phục hồi cũng như trong giai đoạn phòng ngừa việc tái đau trở lại.
 
 Bác sĩ Eric là người yêu công việc chăm sóc bệnh nhân của mình. Ngoài ra, những lúc rãnh rỗi ông thích đi du lịch, lặn biển, tập thể dục, chơi bóng chày, và dành thời gian với gia đình của mình. Mục tiêu của Bác sĩ Eric là giúp bệnh nhân có được một cuộc sống không còn đau đớn và giúp cơ thể họ vận động hết khả năng vốn có với sức khỏe tối ưu.
 
 **Bác sĩ khám và điều trị**
 
 * Thoát vị đĩa đệm
 * Thoái hóa đốt sống cổ, lưng
 * Đau dây thần kinh tọa
 * Hội chứng rễ dây thần kinh
 * Đau đầu
 * Chứng đau vai
 * Đau khuỷu tay
 * Đau cổ tay
 * Cong vẹo cột sống
 * Đau thắt lưng
 * Đau đầu gối
 * Các chứng đau bàn chân
 * Đau mắt cá
 * Chấn thương thể thao
 * Phục hồi chức năng
 * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt`,
                descriptionHTML: `<p><strong>Bác sĩ Nobi Nobita</strong></p>
 <ul>
 <li>Bác sĩ Chuyên Khoa Trị Liệu Thần Kinh Cột Sống</li>
 <li>Cử nhân Khoa học về Vận động học, chuyên ngành Tiền vật lý trị liệu tại Đại học bang San Diego - Mỹ</li>
 <li>Tốt nghiệp Bác sĩ Thần kinh Cột sống tại Đại học Life Chiropractic College - Mỹ (2010)</li>
 <li>Bác sĩ đã từng hành nghề ở Mỹ, Singapore và Indonesia.</li>
 <li>Chữa bệnh Thần kinh Cột sống không dùng thuốc hay phẫu thuật.</li>
 </ul>
 <p>Bác sĩ Eric đề ra sứ mệnh cho bản thân là “Hướng dẫn, điều trị, và truyền cảm hứng cho càng nhiều gia đình càng tốt trong việc giữ vững sức khỏe tối ưu thông qua phương pháp tự nhiên về trị liệu thần kinh cột sống”.</p>
 <p>Bác sĩ Eric cho rằng việc dành thời gian để giải thích cho bệnh nhân về chẩn đoán bệnh là tối quan trọng, qua đó bệnh nhân có thể hiểu chính xác những nguyên nhân dẫn đến bệnh trạng của mình. Ông luôn đưa ra phác đồ điều trị cụ thể cho từng bệnh nhân và theo sát các bước trong tiến trình phục hồi cũng như trong giai đoạn phòng ngừa việc tái đau trở lại.</p>
 <p>Bác sĩ Eric là người yêu công việc chăm sóc bệnh nhân của mình. Ngoài ra, những lúc rãnh rỗi ông thích đi du lịch, lặn biển, tập thể dục, chơi bóng chày, và dành thời gian với gia đình của mình. Mục tiêu của Bác sĩ Eric là giúp bệnh nhân có được một cuộc sống không còn đau đớn và giúp cơ thể họ vận động hết khả năng vốn có với sức khỏe tối ưu.</p>
 <p><strong>Bác sĩ khám và điều trị</strong></p>
 <ul>
 <li>Thoát vị đĩa đệm</li>
 <li>Thoái hóa đốt sống cổ, lưng</li>
 <li>Đau dây thần kinh tọa</li>
 <li>Hội chứng rễ dây thần kinh</li>
 <li>Đau đầu</li>
 <li>Chứng đau vai</li>
 <li>Đau khuỷu tay</li>
 <li>Đau cổ tay</li>
 <li>Cong vẹo cột sống</li>
 <li>Đau thắt lưng</li>
 <li>Đau đầu gối</li>
 <li>Các chứng đau bàn chân</li>
 <li>Đau mắt cá</li>
 <li>Chấn thương thể thao</li>
 <li>Phục hồi chức năng</li>
 <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'tuhai', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kim Trọng', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Hơn 40 năm kinh nghiệm lĩnh vực Nội tiết
Nguyên Phó Giám đốc Bệnh viện Nội tiết Trung Ương
Nguyên Ủy viên Ban Chấp hành – Phó Tổng thư ký Hội Nội tiết – Đái tháo đường Việt Nam`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

1 10.0427.0441
Lấy u cơ, xơ…thực quản đường ngực Chưa bao gồm kẹp
khóa mạch máu, máy cắt nối tự động và ghim khâu máy,
dao siêu âm, Stent.
 15.441.000
Chưa bao gồm kẹp khóa mạch máu,
máy cắt nối tự động và ghim khâu
máy, dao siêu âm, Stent.
2 10.0428.0441
Lấy u cơ, xơ…thực quản đường cổ hoặc đường bụng
Chưa bao gồm kẹp khóa mạch máu, máy cắt nối tự động
và ghim khâu máy, dao siêu âm, Stent.
 15.441.000
Chưa bao gồm kẹp khóa mạch máu,
máy cắt nối tự động và ghim khâu
máy, dao siêu âm, Stent

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Shizuka Minamoto**
 * Bác sĩ có 20 năm kinh nghiệm Trị liệu thần kinh cột sống
 * Bác sĩ có 5 năm làm giảng viên tại trường LACC
 * Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)
 
 **Khám và điều trị**
 * Thoát vị đĩa đệm
 * Thoái hóa đốt sống cổ, lưng
 * Đau dây thần kinh tọa
 * Hội chứng rễ dây thần kinh
 * Đau đầu
 * Chứng đau vai
 * Đau khuỷu tay
 * Đau cổ tay
 * Cong vẹo cột sống
 * Đau thắt lưng
 * Đau đầu gối
 * Các chứng đau bàn chân
 * Đau mắt cá
 * Chấn thương thể thao
 * Phục hồi chức năng
 * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt
 
 **Qúa trình công tác**
 * 5 năm làm giảng viên tại trường LACC
 * Thành viên đội y tế của đội tuyển Olympic Trung Quốc trong 2 kì 2018 - 2020
 * Năm 2019, Bác sĩ vinh dự là diễn giả của Đại học Thể dục Thể Thao Bắc Kinh
 * Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)
 * Qúa trình đào tạo
 * Tốt nghiệp Đại học Bang New York
 * Tốt nghiệp trường Los Angeles College of Chiropractic (LACC) chuyên về Trị liệu thần kinh cột sống tại miền Nam bang California`,
                descriptionHTML: `<p><strong>Bác sĩ Shizuka Minamoto</strong></p>
 <ul>
 <li>Bác sĩ có 20 năm kinh nghiệm Trị liệu thần kinh cột sống</li>
 <li>Bác sĩ có 5 năm làm giảng viên tại trường LACC</li>
 <li>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</li>
 </ul>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Thoát vị đĩa đệm</li>
 <li>Thoái hóa đốt sống cổ, lưng</li>
 <li>Đau dây thần kinh tọa</li>
 <li>Hội chứng rễ dây thần kinh</li>
 <li>Đau đầu</li>
 <li>Chứng đau vai</li>
 <li>Đau khuỷu tay</li>
 <li>Đau cổ tay</li>
 <li>Cong vẹo cột sống</li>
 <li>Đau thắt lưng</li>
 <li>Đau đầu gối</li>
 <li>Các chứng đau bàn chân</li>
 <li>Đau mắt cá</li>
 <li>Chấn thương thể thao</li>
 <li>Phục hồi chức năng</li>
 <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
 </ul>
 <p><strong>Qúa trình công tác</strong></p>
 <ul>
 <li>5 năm làm giảng viên tại trường LACC</li>
 <li>Thành viên đội y tế của đội tuyển Olympic Trung Quốc trong 2 kì 2018 - 2020</li>
 <li>Năm 2019, Bác sĩ vinh dự là diễn giả của Đại học Thể dục Thể Thao Bắc Kinh</li>
 <li>Có chứng chỉ hành nghề tại Việt Nam, Philippines, bang California và bang Texas (Mỹ)</li>
 <li>Qúa trình đào tạo</li>
 <li>Tốt nghiệp Đại học Bang New York</li>
 <li>Tốt nghiệp trường Los Angeles College of Chiropractic (LACC) chuyên về Trị liệu thần kinh cột sống tại miền Nam bang California</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'kimtrong', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ron Weasley', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 5, // của chuyên khoa nào
                clinicID: 5, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Hơn 30 năm kinh nghiệm lĩnh vực Sản phụ khoa
Từng công tác tại Bệnh viện Nhân dân 115, Bệnh viện Từ Dũ
Từng tu nghiệp tại Pháp`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

1 02.0272.2044 Nội soi dạ dày làm Clotest 768.000
2 02.0304.0134 Nội soi thực quản - dạ dày - tá tràng có sinh thiết 1.010.000 Đã bao gồm chi phí Test HP

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Takeshi Goda**
 * Bác sĩ có kinh nghiệm trên 20 năm trong trị liệu thần kinh cột sống
 * Tốt nghiệp Trường Đại học Trị liệu Thần kinh Cột sống New York (1996)
 * Ông từng làm việc về Trị liệu thần kinh cột sống tại Peru trong 2 năm 
 * Ông là bác sĩ đầu tiên ở khu vực Đông Nam Á đạt chứng nhận về phương pháp kéo dãn giảm áp cột sống Kennedy trong việc điều trị thoát vị đĩa đệm
 
 Bác sĩ Timothy từng tham gia chương trình tình nguyện và áp dụng Phương pháp trị liệu thần kinh cột sống để khám chữa chữa bệnh cho nhiều bệnh nhân ở các nước kém phát triển như Haiti, Ecuador, Jamaica và Cộng Hòa Dominica. Ông cũng là người mang những phương thức trị liệu phục hồi chức năng mơi đến với Việt Nam.
 
 **Khám và điều trị**
 * Trị liệu thần kinh cột sống
 * Thoát vị đĩa đệm
 * Đau dây thần kinh tọa
 * Đau đầu
 * Chứng đau vai
 * Đau khuỷu tay
 * Đau cổ tay
 * Cong vẹo cột sống
 * Chấn thương cột sống
 * Thoái hóa đốt sống cổ, lưng
 * Đau thắt lưng
 * Đau đầu gối
 * Các chứng đau bàn chân
 * Đau mắt cá
 * Dị tật bàn chân bẹt ở trẻ em`,
                descriptionHTML: `<p><strong>Bác sĩ Takeshi Goda</strong></p>
 <ul>
 <li>Bác sĩ có kinh nghiệm trên 20 năm trong trị liệu thần kinh cột sống</li>
 <li>Tốt nghiệp Trường Đại học Trị liệu Thần kinh Cột sống New York (1996)</li>
 <li>Ông từng làm việc về Trị liệu thần kinh cột sống tại Peru trong 2 năm</li>
 <li>Ông là bác sĩ đầu tiên ở khu vực Đông Nam Á đạt chứng nhận về phương pháp kéo dãn giảm áp cột sống Kennedy trong việc điều trị thoát vị đĩa đệm</li>
 </ul>
 <p>Bác sĩ Timothy từng tham gia chương trình tình nguyện và áp dụng Phương pháp trị liệu thần kinh cột sống để khám chữa chữa bệnh cho nhiều bệnh nhân ở các nước kém phát triển như Haiti, Ecuador, Jamaica và Cộng Hòa Dominica. Ông cũng là người mang những phương thức trị liệu phục hồi chức năng mơi đến với Việt Nam.</p>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Trị liệu thần kinh cột sống</li>
 <li>Thoát vị đĩa đệm</li>
 <li>Đau dây thần kinh tọa</li>
 <li>Đau đầu</li>
 <li>Chứng đau vai</li>
 <li>Đau khuỷu tay</li>
 <li>Đau cổ tay</li>
 <li>Cong vẹo cột sống</li>
 <li>Chấn thương cột sống</li>
 <li>Thoái hóa đốt sống cổ, lưng</li>
 <li>Đau thắt lưng</li>
 <li>Đau đầu gối</li>
 <li>Các chứng đau bàn chân</li>
 <li>Đau mắt cá</li>
 <li>Dị tật bàn chân bẹt ở trẻ em</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'ron', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Hermione Granger', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 5, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `30 năm kinh nghiệm lĩnh vực Tim mạch
Từng công tác tại  Khoa Tim – Khớp – Nội tiết Bệnh viện 175
Hiện là Bác sĩ tại Phòng khám Đại học Y Dược 1
Bác sĩ nhận khám từ 15 tuổi trở lên `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

 10.0311.0439 Tán sỏi ngoài cơ thể Lần 1 9.888.000
10.0311.0439 Tán sỏi ngoài cơ thể Lần 2 6.888.000
10.0311.0439 Tán sỏi ngoài cơ thể Lần 3 2.388.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Suneo Hokenawa**

 * Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ
 * Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống
 * Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)
 * Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng
 * Tham gia các chuyên đề sức khỏe trên báo chí truyền hình
 
 Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.
 
 **Khám và điều trị**
 * Thoát vị đĩa đệm
 * Thoái hóa cột sống
 * Đau thần kinh tọa
 * Đau thắt lưng
 * Chấn thương thể thao
 * Phục hồi chức năng
 * Vẹo cột sống
 * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt
 * Đau đầu
 * Đau vai
 * Đau cổ tay, khuỷu tay
 * Đau đầu gối
 * Đau bàn chân
 * Đau mắt cá chân`,
                descriptionHTML: `<p><strong>Bác sĩ Suneo Hokenawa</strong></p>
 <ul>
 <li>Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ</li>
 <li>Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống</li>
 <li>Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)</li>
 <li>Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng</li>
 <li>Tham gia các chuyên đề sức khỏe trên báo chí truyền hình</li>
 </ul>
 <p>Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.</p>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Thoát vị đĩa đệm</li>
 <li>Thoái hóa cột sống</li>
 <li>Đau thần kinh tọa</li>
 <li>Đau thắt lưng</li>
 <li>Chấn thương thể thao</li>
 <li>Phục hồi chức năng</li>
 <li>Vẹo cột sống</li>
 <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
 <li>Đau đầu</li>
 <li>Đau vai</li>
 <li>Đau cổ tay, khuỷu tay</li>
 <li>Đau đầu gối</li>
 <li>Đau bàn chân</li>
 <li>Đau mắt cá chân</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'hermi1', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Quách Tĩnh', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Phó Trưởng khoa Thần kinh, Bệnh viện Bạch Mai
Phó Chủ nhiệm Bộ môn Thần kinh, Đại học Y khoa Hà Nội
Bác sĩ với hơn 30 năm kinh nghiệm trong nghề`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

 03.3011.0331 Laser sàn chậu 6.230.000
2 03.3012.0331 Điều trị bớt sắc tố, chứng tăng sắc tố bằng laser: YAGKTP, Rubi, 1PL... 6.230.000
3 13.0155.0334 Cắt đốt sùi mào gà/ mụn cóc/ mụn thịt âm hộ; âm đạo;
tầng sinh môn 3.383.000
4 21.0047.0126 Đo niệu dòng đồ 360.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Lông mày dài**

 * Tốt nghiệp Trường Đào tạo Chuyên khoa Thần kinh Cột sống Palmer - Hoa Kỳ (2014)
 * Bác sĩ Chuyên khoa Trị liệu Thần kinh Cột sống từng làm việc tại Hoa Kỳ, Ấn Độ, Campuchia
 * Cử nhân Khoa học chuyên ngành Sinh học Con người, Trường Đại học bang Michigan (2012)
 
 BS. Luke không ngừng nâng cao kiến thức và tham dự những khóa học chuyên sâu và hội thảo Chuyên ngành Thần kinh Cột sống trong điều trị Chấn thương Thể Thao, sử dụng Băng dán Cơ trong thể thao, kỹ thuật nắn chỉnh Flexion-Distraction và kỹ thuật Graston.
 
 Bác sĩ Luke mang tới nhiều kĩ thuật để giúp những bệnh nhân đạt được sức khỏe tốt nhất. Bác sĩ tin rằng cột sống là bộ phận quan trọng nhất trong cơ thể và nếu cột sống có thể thực hiện tối đa chức năng thì cả cơ thể có thể hoạt động một cách tốt nhất. Bác sĩ sử dụng triết lý này khi nói chuyện và tư vấn cho bệnh nhân những lợi ích của Trị liệu Thần kinh Cột sống có thể mang lại cho tình trạng riêng biệt của họ.
 
 **Khám và điều trị**
 * Thoát vị đĩa đệm
 * Thoái hóa đốt sống cổ, lưng
 * Đau dây thần kinh tọa
 * Hội chứng rễ dây thần kinh
 * Đau đầu
 * Chứng đau vai
 * Đau khuỷu tay
 * Đau cổ tay
 * Cong vẹo cột sống
 * Đau thắt lưng
 * Đau đầu gối
 * Các chứng đau bàn chân
 * Đau mắt cá
 * Chấn thương thể thao
 * Phục hồi chức năng
 * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt`,
                descriptionHTML: `<p><strong>Bác sĩ Lông mày dài</strong></p>
 <ul>
 <li>Tốt nghiệp Trường Đào tạo Chuyên khoa Thần kinh Cột sống Palmer - Hoa Kỳ (2014)</li>
 <li>Bác sĩ Chuyên khoa Trị liệu Thần kinh Cột sống từng làm việc tại Hoa Kỳ, Ấn Độ, Campuchia</li>
 <li>Cử nhân Khoa học chuyên ngành Sinh học Con người, Trường Đại học bang Michigan (2012)</li>
 </ul>
 <p>BS. Luke không ngừng nâng cao kiến thức và tham dự những khóa học chuyên sâu và hội thảo Chuyên ngành Thần kinh Cột sống trong điều trị Chấn thương Thể Thao, sử dụng Băng dán Cơ trong thể thao, kỹ thuật nắn chỉnh Flexion-Distraction và kỹ thuật Graston.</p>
 <p>Bác sĩ Luke mang tới nhiều kĩ thuật để giúp những bệnh nhân đạt được sức khỏe tốt nhất. Bác sĩ tin rằng cột sống là bộ phận quan trọng nhất trong cơ thể và nếu cột sống có thể thực hiện tối đa chức năng thì cả cơ thể có thể hoạt động một cách tốt nhất. Bác sĩ sử dụng triết lý này khi nói chuyện và tư vấn cho bệnh nhân những lợi ích của Trị liệu Thần kinh Cột sống có thể mang lại cho tình trạng riêng biệt của họ.</p>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Thoát vị đĩa đệm</li>
 <li>Thoái hóa đốt sống cổ, lưng</li>
 <li>Đau dây thần kinh tọa</li>
 <li>Hội chứng rễ dây thần kinh</li>
 <li>Đau đầu</li>
 <li>Chứng đau vai</li>
 <li>Đau khuỷu tay</li>
 <li>Đau cổ tay</li>
 <li>Cong vẹo cột sống</li>
 <li>Đau thắt lưng</li>
 <li>Đau đầu gối</li>
 <li>Các chứng đau bàn chân</li>
 <li>Đau mắt cá</li>
 <li>Chấn thương thể thao</li>
 <li>Phục hồi chức năng</li>
 <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'quachtinh', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khưu Xử Cơ', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 7, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Chuyên gia đầu ngành về Nội tiết - Đái tháo đường
Nguyên Viện trưởng Bệnh viện 103 - Học viện Quân Y
Chủ tịch Hội Nội tiết – Đái tháo đường Việt Nam
Bác sĩ nhận khám từ 15 tuổi trở lên `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

1 17.0026.0220 Điều trị bằng máy kéo giãn cột sống 106.000
2 17.0011.0237 Điều trị bằng tia hồng ngoại 86.000
3 17.0008.0253 Điều trị bằng siêu âm 105.000
4 17.0001.0254 Điều trị bằng sóng ngắn 93.000
5 17.0091.0262 Tập mạnh cơ đáy chậu (cơ sàn chậu, Pelvis floor) 702.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Suneo Hokenawa**

 * Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ
 * Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống
 * Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)
 * Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng
 * Tham gia các chuyên đề sức khỏe trên báo chí truyền hình
 
 Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.
 
 **Khám và điều trị**
 * Thoát vị đĩa đệm
 * Thoái hóa cột sống
 * Đau thần kinh tọa
 * Đau thắt lưng
 * Chấn thương thể thao
 * Phục hồi chức năng
 * Vẹo cột sống
 * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt
 * Đau đầu
 * Đau vai
 * Đau cổ tay, khuỷu tay
 * Đau đầu gối
 * Đau bàn chân
 * Đau mắt cá chân`,
                descriptionHTML: `<p><strong>Bác sĩ Suneo Hokenawa</strong></p>
 <ul>
 <li>Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ</li>
 <li>Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống</li>
 <li>Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)</li>
 <li>Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng</li>
 <li>Tham gia các chuyên đề sức khỏe trên báo chí truyền hình</li>
 </ul>
 <p>Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.</p>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Thoát vị đĩa đệm</li>
 <li>Thoái hóa cột sống</li>
 <li>Đau thần kinh tọa</li>
 <li>Đau thắt lưng</li>
 <li>Chấn thương thể thao</li>
 <li>Phục hồi chức năng</li>
 <li>Vẹo cột sống</li>
 <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
 <li>Đau đầu</li>
 <li>Đau vai</li>
 <li>Đau cổ tay, khuỷu tay</li>
 <li>Đau đầu gối</li>
 <li>Đau bàn chân</li>
 <li>Đau mắt cá chân</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'khuuxuco', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dương Quá', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Hơn 40 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Hậu môn Trực Tràng
Chuyên gia đầu ngành về Hậu môn Trực tràng
Nguyên chủ nhiệm khoa Ngoại – Bệnh viện Y học Cổ truyền Trung`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

Nội soi dạ dày làm Clotest 768.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Suneo Hokenawa**

 * Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ
 * Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống
 * Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)
 * Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng
 * Tham gia các chuyên đề sức khỏe trên báo chí truyền hình
 
 Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.
 
 **Khám và điều trị**
 * Thoát vị đĩa đệm
 * Thoái hóa cột sống
 * Đau thần kinh tọa
 * Đau thắt lưng
 * Chấn thương thể thao
 * Phục hồi chức năng
 * Vẹo cột sống
 * Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt
 * Đau đầu
 * Đau vai
 * Đau cổ tay, khuỷu tay
 * Đau đầu gối
 * Đau bàn chân
 * Đau mắt cá chân`,
                descriptionHTML: `<p><strong>Bác sĩ Suneo Hokenawa</strong></p>
 <ul>
 <li>Bác sĩ Hoisang Gong sinh ra ở Hàn Quốc và lớn lên ở Mỹ</li>
 <li>Bác sĩ chuyên khoa Trị liệu Thần kinh Cột sống</li>
 <li>Tốt nghiệp trường Đại học Life ở Marietta, Georgia, Mỹ (2012)</li>
 <li>Bác sĩ từng làm việc nhiều năm về trị liệu chấn thương thể thao và mô mềm, đau cổ và đau lưng</li>
 <li>Tham gia các chuyên đề sức khỏe trên báo chí truyền hình</li>
 </ul>
 <p>Trong quá trình học tập và nghiên cứu tại Đại học Life University, Bác sĩ Hoisang đã không ngừng trau dồi và nâng cao kỹ năng qua việc tham gia nhiều hội thảo, bao gồm hội thảo về chuyên môn chỉnh nắn đốt sống cổ Gonstead và Graston.</p>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Thoát vị đĩa đệm</li>
 <li>Thoái hóa cột sống</li>
 <li>Đau thần kinh tọa</li>
 <li>Đau thắt lưng</li>
 <li>Chấn thương thể thao</li>
 <li>Phục hồi chức năng</li>
 <li>Vẹo cột sống</li>
 <li>Bệnh lý về phát triển ở trẻ em: vẹo cột sống, dị tật bàn chân bẹt</li>
 <li>Đau đầu</li>
 <li>Đau vai</li>
 <li>Đau cổ tay, khuỷu tay</li>
 <li>Đau đầu gối</li>
 <li>Đau bàn chân</li>
 <li>Đau mắt cá chân</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'duongqua', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Doãn Chí Bình', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Chuyên gia về Nội khoa và Hồi sức Cấp cứu 
Công tác tại khoa Hồi sức Cấp cứu A9, Bệnh viện Bạch Mai 
Bác sĩ nhận khám từ 18 tuổi trở lên`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

24 1214 Gây mê 1.949.000
25 1214 Giảm đau nội soi dạ dày, đại tràng 1.250.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Chuyên khoa I Sherlock Homles **
 * Hơn 20 năm kinh nghiệm trong lĩnh vực Tim mạch
 * Từng công tác tại Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương
 * Hiện đang công tác tại Khoa Tim mạch, Bệnh viện FV
 
 **Khám và điều trị **
 * Bệnh tim thiếu máu cục bộ
 * Suy tim
 * Siêu âm tim
 * Tim mạch can thiệp
 
 **Quá trình công tác **
 * Bác sĩ Điều trị Cấp cao, Khoa Tim mạch, Bệnh viện FV, TP.HCM (2017)
 * Bác sĩ Điều trị Cấp cao, Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương (2011 - 2017)
 * Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Hoàn Mỹ Cửu Long, Cần Thơ (2007 - 2011)
 * Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Đa khoa Trung ương Cần Thơ (2006 - 2007)
 
 **Quá trình đào tạo**
 
 * Chuyên khoa cấp 1, Lão Khoa, Đại học Y Dược TP. HCM (2006) 
 * Tốt nghiệp Đại học Y Dược, Cần Thơ (2001)
 
 **Chứng chỉ trong nước và ngoài nước**
 * Bằng tim Mạch Can Thiệp, Viện Tim TP. HCM  (2011 - 2012)
 * Bằng hồi sức cấp cứu, Bệnh viện Chợ Rẫy TP. HCM (2006)
 * Bằng tim mạch và siêu âm tim, Trường y Phạm Ngọc Thạch TP. HCM (2005 - 2006)`,
                descriptionHTML: `<p>**Bác sĩ Chuyên khoa I Sherlock Homles **</p>
 <ul>
 <li>Hơn 20 năm kinh nghiệm trong lĩnh vực Tim mạch</li>
 <li>Từng công tác tại Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương</li>
 <li>Hiện đang công tác tại Khoa Tim mạch, Bệnh viện FV</li>
 </ul>
 <p>**Khám và điều trị **</p>
 <ul>
 <li>Bệnh tim thiếu máu cục bộ</li>
 <li>Suy tim</li>
 <li>Siêu âm tim</li>
 <li>Tim mạch can thiệp</li>
 </ul>
 <p>**Quá trình công tác **</p>
 <ul>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Tim mạch, Bệnh viện FV, TP.HCM (2017)</li>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương (2011 - 2017)</li>
 <li>Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Hoàn Mỹ Cửu Long, Cần Thơ (2007 - 2011)</li>
 <li>Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Đa khoa Trung ương Cần Thơ (2006 - 2007)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Chuyên khoa cấp 1, Lão Khoa, Đại học Y Dược TP. HCM (2006)</li>
 <li>Tốt nghiệp Đại học Y Dược, Cần Thơ (2001)</li>
 </ul>
 <p><strong>Chứng chỉ trong nước và ngoài nước</strong></p>
 <ul>
 <li>Bằng tim Mạch Can Thiệp, Viện Tim TP. HCM  (2011 - 2012)</li>
 <li>Bằng hồi sức cấp cứu, Bệnh viện Chợ Rẫy TP. HCM (2006)</li>
 <li>Bằng tim mạch và siêu âm tim, Trường y Phạm Ngọc Thạch TP. HCM (2005 - 2006)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'doanchibinh', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Quách Đại Hiệp', // tên bác sĩ 
                position: 'Thạc sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gần 30 năm kinh nghiệm về chuyên khoa Thần kinh - Cột sống
Bác sĩ từng công tác tại Bệnh viện Phương Đông - 79 Thành Thái, P14, Q10, Tp. HCM
Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên
`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

15 02.0295.0498 Nội soi can thiệp - cắt 1 polyp ống tiêu hóa < 1cm 2.500.000
16 02.0296.0500 Nội soi can thiệp - cắt polyp ống tiêu hóa > 1cm hoặc nhiều
polyp 3.000.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Tiến sĩ, Bác sĩ Sư Phụ Bự**
 * 20 năm kinh nghiệm lĩnh vực Tim mạch
 * Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
 * Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức
 
 **Khám và điều trị**
 
 Các bệnh lý Nội Tim mạch:
 
 * Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)
 * Tăng huyết áp, hạ huyết áp
 * Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu
 * Xơ vữa động mạch
 * Điều trị bệnh mạch vành
 * Bệnh van tim (Hẹp hở van tim)
 * Bệnh cơ tim
 * Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh
 * Khám bệnh mạch máu ngoại biên
 * Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch
 * Tư vấn sử dụng thuốc chống đông máu
 * Tư vấn bệnh tăng huyết áp
 * Điều trị bệnh tăng huyết áp
 * Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...
 
 **Quá trình công tác**
 
 * Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
 **
 Quá trình đào tạo**
 * Tiến sĩ Y khoa - Đại học Y Hà Nội
 * Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ
 * Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia
 * Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội
 
 **Sách và các công trình nghiên cứu, báo cáo khoa học**
 * Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản
 * 3 công trình khoa học
 * 30 bài báo khoa học chuyên ngành`,
                descriptionHTML: `<p><strong>Tiến sĩ, Bác sĩ Sư Phụ Bự</strong></p>
 <ul>
 <li>20 năm kinh nghiệm lĩnh vực Tim mạch</li>
 <li>Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai</li>
 <li>Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức</li>
 </ul>
 <p><strong>Khám và điều trị</strong></p>
 <p>Các bệnh lý Nội Tim mạch:</p>
 <ul>
 <li>Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)</li>
 <li>Tăng huyết áp, hạ huyết áp</li>
 <li>Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li>
 <li>Xơ vữa động mạch</li>
 <li>Điều trị bệnh mạch vành</li>
 <li>Bệnh van tim (Hẹp hở van tim)</li>
 <li>Bệnh cơ tim</li>
 <li>Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh</li>
 <li>Khám bệnh mạch máu ngoại biên</li>
 <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch</li>
 <li>Tư vấn sử dụng thuốc chống đông máu</li>
 <li>Tư vấn bệnh tăng huyết áp</li>
 <li>Điều trị bệnh tăng huyết áp</li>
 <li>Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
 **
 Quá trình đào tạo**</li>
 <li>Tiến sĩ Y khoa - Đại học Y Hà Nội</li>
 <li>Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ</li>
 <li>Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia</li>
 <li>Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội</li>
 </ul>
 <p><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></p>
 <ul>
 <li>Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản</li>
 <li>3 công trình khoa học</li>
 <li>30 bài báo khoa học chuyên ngành</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'quachdaihiep', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Kim Luân Pháp Vương', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Trên 30 năm kinh nghiệm về chuyên khoa Nội - Nội Tim mạch
Nguyên Giám đốc Trung tâm Y tế huyện Chợ Gạo – Tiền Giang
Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

Cắt túi thừa thực quản cổ Chưa bao gồm kẹp khóa mạch
máu, máy cắt nối tự động và ghim khâu máy, dao siêu âm,
Stent.
 17.283.000

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Thạc sĩ, Bác sĩ A Lượng**
 * Gần 15 năm kinh nghiệm lĩnh vực Tim mạch
 * Hiện đang công tác tại Bệnh viện Tim Hà Nội
 * Từng công tác tại Bệnh viện đa khoa Xanh Pôn
 * Từng học tập và tu nghiệp ở nước ngoài: Pháp
 
 
 #### **Khám và điều trị**
 
 
 **Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:**
 
 * Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp
 * Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo
 * Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …
 
 **Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:**
 
 * Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)
 
 **Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:**
 
 * Bệnh lý thận  - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )
 * Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)
 * Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)
 * Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)
 * Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)
 
 **Quá trình công tác**
 * Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)
 * Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)
 
 **Quá trình đào tạo**
 * Chương trình đào tạo sau đại học Việt Pháp (2012)
 * Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)
 * Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)
 
 **Chứng chỉ trong nước hoặc nước ngoài**
 * Siêu âm các bệnh lý mạch máu - MEVAH, Cộng hoà Pháp ( năm 2012)
 * Siêu âm tổng quát, siêu âm tim mạch, siêu âm bệnh lý tim trẻ em, Bệnh viện Tim mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viên Tim Hà Nội
 
 **Sách và các công trình nghiên cứu, báo cáo khoa học**
 * Đánh giá kết quả sớm của phương pháp Nong van hai lá bằng bóng INOUE trong điều trị bệnh hẹp van hai lá khít tái phát sau nong (Luận văn tốt nghiệp Thạc sỹ - Đại học Y Hà Nội) (2010)
 
 **Thành viên các Hội khoa học, tổ chức chuyên môn**
 * Hội viên hội tim mạch Việt Nam`,
                descriptionHTML: `<p><strong>Thạc sĩ, Bác sĩ A Lượng</strong></p>
 <ul>
 <li>Gần 15 năm kinh nghiệm lĩnh vực Tim mạch</li>
 <li>Hiện đang công tác tại Bệnh viện Tim Hà Nội</li>
 <li>Từng công tác tại Bệnh viện đa khoa Xanh Pôn</li>
 <li>Từng học tập và tu nghiệp ở nước ngoài: Pháp</li>
 </ul>
 <h4><strong>Khám và điều trị</strong></h4>
 <p><strong>Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:</strong></p>
 <ul>
 <li>Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp</li>
 <li>Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo</li>
 <li>Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …</li>
 </ul>
 <p><strong>Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:</strong></p>
 <ul>
 <li>Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)</li>
 </ul>
 <p><strong>Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:</strong></p>
 <ul>
 <li>Bệnh lý thận  - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )</li>
 <li>Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)</li>
 <li>Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)</li>
 <li>Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)</li>
 <li>Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)</li>
 <li>Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Chương trình đào tạo sau đại học Việt Pháp (2012)</li>
 <li>Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)</li>
 <li>Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)</li>
 </ul>
 <p><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></p>
 <ul>
 <li>Siêu âm các bệnh lý mạch máu - MEVAH, Cộng hoà Pháp ( năm 2012)</li>
 <li>Siêu âm tổng quát, siêu âm tim mạch, siêu âm bệnh lý tim trẻ em, Bệnh viện Tim mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viên Tim Hà Nội</li>
 </ul>
 <p><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></p>
 <ul>
 <li>Đánh giá kết quả sớm của phương pháp Nong van hai lá bằng bóng INOUE trong điều trị bệnh hẹp van hai lá khít tái phát sau nong (Luận văn tốt nghiệp Thạc sỹ - Đại học Y Hà Nội) (2010)</li>
 </ul>
 <p><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></p>
 <ul>
 <li>Hội viên hội tim mạch Việt Nam</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'kimluanphapvuong', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Trương Vô Kỵ', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Hơn 30 năm kinh nghiệm trong lĩnh vực Tiêu hóa - Gan mật
Từng công tác khoa nội Tiêu hóa, Bệnh viện Đa khoa Tỉnh Nam Định
Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ

 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ cao câp hạng 1 Tiểu Sư Đệ**

 * Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần
 * Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương
 * Khám và điều trị
 
 **Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:**
 
 * Các vấn đề tâm lý ở trẻ
 * Tâm thần học liên quan đến sự phát triển của trẻ
 * Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan
 * Động kinh trẻ em và các vấn đề liên quan
 
 **Ngoài ra bác sĩ nhận khám và điều trị về:**
 
 * Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ
 * Rối loạn tiền đình
 * Rối loạn thần kinh thực vật
 * Trầm cảm
 * Rối loạn lưỡng cực cảm xúc
 * Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm
 * Sa sút trí tuệ
 * Rối loạn tăng động giảm chú ý (ADHD)
 * Nghiện game
 * Nghiện rượu, thuốc lá
 * Nghiện ma túy tổng hợp
 * Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân
 * Khó tập trung công việc
 * Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài
 
 **Quá trình công tác**
 * Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)
 * Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)
 * Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)
 * Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)
 
 **Quá trình đào tạo**
 * Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)
 * Tốt nghiệp Đại học Y Hà Nội (1998)`,
                descriptionHTML: `<p><strong>Bác sĩ cao câp hạng 1 Tiểu Sư Đệ</strong></p>
 <ul>
 <li>Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần</li>
 <li>Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương</li>
 <li>Khám và điều trị</li>
 </ul>
 <p><strong>Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:</strong></p>
 <ul>
 <li>Các vấn đề tâm lý ở trẻ</li>
 <li>Tâm thần học liên quan đến sự phát triển của trẻ</li>
 <li>Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan</li>
 <li>Động kinh trẻ em và các vấn đề liên quan</li>
 </ul>
 <p><strong>Ngoài ra bác sĩ nhận khám và điều trị về:</strong></p>
 <ul>
 <li>Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ</li>
 <li>Rối loạn tiền đình</li>
 <li>Rối loạn thần kinh thực vật</li>
 <li>Trầm cảm</li>
 <li>Rối loạn lưỡng cực cảm xúc</li>
 <li>Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm</li>
 <li>Sa sút trí tuệ</li>
 <li>Rối loạn tăng động giảm chú ý (ADHD)</li>
 <li>Nghiện game</li>
 <li>Nghiện rượu, thuốc lá</li>
 <li>Nghiện ma túy tổng hợp</li>
 <li>Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân</li>
 <li>Khó tập trung công việc</li>
 <li>Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)</li>
 <li>Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)</li>
 <li>Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)</li>
 <li>Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)</li>
 <li>Tốt nghiệp Đại học Y Hà Nội (1998)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'truongvoky', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tạ Tốn', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Bác sĩ từng công tác tại Khoa Ngoại Thần Kinh – Bệnh viện Chợ Rẫy
Tốt nghiệp Tiến sĩ Y học, Đại học Y Dược TP. Hồ Chí Minh 
Bác sĩ nhận khám cho bệnh nhân từ 10 tuổi trở lên`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `Tiến sĩ, Bác sĩ John Watson
 * Bác sĩ có 20 năm kinh nghiệm trong thăm khám và điều trị khoa Tai Mũi Họng
 * Từng công tác tại khoa Tai Mũi Họng, Bệnh Viện Đại học Y Dược TP. HCM
 * Hiện đang là trưởng Khoa Tai Mũi Họng, Bệnh Viện FV
 
 **Khám và điều trị**
 
 * Phẫu thuật nội soi xoang
 * Phẫu thuật nội soi nền sọ
 * Phẫu thuật Tai, Ngáy và Ngưng thở khi ngủ
 
 **Quá trình công tác** 
 
 * Trưởng Khoa Tai mũi họng, Bệnh Viện FV (2021 - nay)
 * Bác sĩ điều trị cấp cao, Khoa Tai mũi họng, Bệnh Viện Đại học Y Dược TP. HCM (2007)
 * Bác sĩ nội trú, Khoa Tai mũi họng, Đại học Y Dược TP. HCM (2002-2006)
 
 **Qúa trình đào tạo**
 * Tiến sĩ Y học, Tai Mũi Họng, Đại học Y Dược TP. HCM (2021)
 * Tai mũi họng – Phẫu thuật đầu và cổ, Bệnh Viện Đại học Texas, San Antonio, Hoa Kỳ (2015)
 * Nội soi xoang và phẫu thuật sọ não, Bệnh Viện Khoa học Thần Kinh, Chapel Hill, Bắc Carolina, Hoa Kỳ, (2015)
 * Phẫu thuật xoang nâng cao, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 4 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2014)
 * Phẫu thuật xoang cơ bản, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 3 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2013)
 * Thạc sĩ Y học, Đại học Y Dược TP. HCM (2010)
 * Chuyên khoa Cấp I, Tai Mũi Họng, Đại học Y Dược TP. HCM (2007)
 * Đại học Y Dược, Thành phố Hồ Chí Minh TP. HCM (2002)`,
                descriptionHTML: `<p>Tiến sĩ, Bác sĩ John Watson</p>
 <ul>
 <li>Bác sĩ có 20 năm kinh nghiệm trong thăm khám và điều trị khoa Tai Mũi Họng</li>
 <li>Từng công tác tại khoa Tai Mũi Họng, Bệnh Viện Đại học Y Dược TP. HCM</li>
 <li>Hiện đang là trưởng Khoa Tai Mũi Họng, Bệnh Viện FV</li>
 </ul>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Phẫu thuật nội soi xoang</li>
 <li>Phẫu thuật nội soi nền sọ</li>
 <li>Phẫu thuật Tai, Ngáy và Ngưng thở khi ngủ</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Trưởng Khoa Tai mũi họng, Bệnh Viện FV (2021 - nay)</li>
 <li>Bác sĩ điều trị cấp cao, Khoa Tai mũi họng, Bệnh Viện Đại học Y Dược TP. HCM (2007)</li>
 <li>Bác sĩ nội trú, Khoa Tai mũi họng, Đại học Y Dược TP. HCM (2002-2006)</li>
 </ul>
 <p><strong>Qúa trình đào tạo</strong></p>
 <ul>
 <li>Tiến sĩ Y học, Tai Mũi Họng, Đại học Y Dược TP. HCM (2021)</li>
 <li>Tai mũi họng – Phẫu thuật đầu và cổ, Bệnh Viện Đại học Texas, San Antonio, Hoa Kỳ (2015)</li>
 <li>Nội soi xoang và phẫu thuật sọ não, Bệnh Viện Khoa học Thần Kinh, Chapel Hill, Bắc Carolina, Hoa Kỳ, (2015)</li>
 <li>Phẫu thuật xoang nâng cao, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 4 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2014)</li>
 <li>Phẫu thuật xoang cơ bản, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 3 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2013)</li>
 <li>Thạc sĩ Y học, Đại học Y Dược TP. HCM (2010)</li>
 <li>Chuyên khoa Cấp I, Tai Mũi Họng, Đại học Y Dược TP. HCM (2007)</li>
 <li>Đại học Y Dược, Thành phố Hồ Chí Minh TP. HCM (2002)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'taton', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Tử Sam Long Vương', // tên bác sĩ 
                position: 'Bác sĩ hạng 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Nguyên Trưởng khoa Tai mũi họng, Bệnh viện Trung ương quân đội 108
Ủy viên Ban chấp hành Hội Tai Mũi Họng Việt Nam
Bác sĩ khám từ 14 tuổi trở lên `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Chuyên khoa I Thúy Kiều**
 * Hơn 15 năm kinh nghiệm trong lĩnh vực Sản phụ khoa và Siêu âm thai
 * Từng công tác tại Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương
 * Đang công tác tại Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM
 
 **Khám và điều trị**
 
 * Phẫu thuật nội soi phụ khoa
 * Siêu âm bơm nước buồng tử cung
 * Soi cổ tử cung
 * Thai kỳ nguy cơ cao
 * Y học bào thai
 
  **Quá trình công tác**
 
 * Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện FV  (2011 - nay)
 * Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM (2017 - nay) 
 * Bác sĩ Điều trị Cấp cao, Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương (2008 - 2017)
 * Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Hùng Vương TP. HCM (2007 - 2017)
 
 **Quá trình đào tạo** 
 
 * Bằng chuyên khoa cấp 1, Chuyên ngành Sản & Phụ khoa, Đại học Y Dược TP. HCM (2016) 
 * Tốt nghiệp Đại học Y Khoa, TP. HCM (2006)
 
 **Chứng chỉ trong nước và ngoài nước**
 * Đánh giá cổ tử cung & Theo dõi tiền sản, Tổ chức Y học Thai Nhi, London, Anh (2010)
 * Sàng lọc thai nhi từ tuần 11 - 13, Tổ chức Y học Thai Nhi, London, Anh (2009)
 * Siêu âm chẩn đoán trong Sản phụ khoa, Phạm Ngọc Thạch TP. HCM  (2008)
 * Thai kỳ nguy cơ cao, Bệnh viện Từ Dũ & Bệnh viện Nepean, Sydney, Úc (2008)`,
                descriptionHTML: `<p><strong>Bác sĩ Chuyên khoa I Thúy Kiều</strong></p>
 <ul>
 <li>Hơn 15 năm kinh nghiệm trong lĩnh vực Sản phụ khoa và Siêu âm thai</li>
 <li>Từng công tác tại Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương</li>
 <li>Đang công tác tại Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM</li>
 </ul>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Phẫu thuật nội soi phụ khoa</li>
 <li>Siêu âm bơm nước buồng tử cung</li>
 <li>Soi cổ tử cung</li>
 <li>Thai kỳ nguy cơ cao</li>
 <li>Y học bào thai</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện FV  (2011 - nay)</li>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Đại học Y dược TP. HCM (2017 - nay)</li>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Siêu âm Sản phụ khoa, Bệnh viện Hùng Vương (2008 - 2017)</li>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Sản phụ khoa, Bệnh viện Hùng Vương TP. HCM (2007 - 2017)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Bằng chuyên khoa cấp 1, Chuyên ngành Sản &amp; Phụ khoa, Đại học Y Dược TP. HCM (2016)</li>
 <li>Tốt nghiệp Đại học Y Khoa, TP. HCM (2006)</li>
 </ul>
 <p><strong>Chứng chỉ trong nước và ngoài nước</strong></p>
 <ul>
 <li>Đánh giá cổ tử cung &amp; Theo dõi tiền sản, Tổ chức Y học Thai Nhi, London, Anh (2010)</li>
 <li>Sàng lọc thai nhi từ tuần 11 - 13, Tổ chức Y học Thai Nhi, London, Anh (2009)</li>
 <li>Siêu âm chẩn đoán trong Sản phụ khoa, Phạm Ngọc Thạch TP. HCM  (2008)</li>
 <li>Thai kỳ nguy cơ cao, Bệnh viện Từ Dũ &amp; Bệnh viện Nepean, Sydney, Úc (2008)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'tusamlongvuong', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Triệu Mẫn', // tên bác sĩ 
                position: 'Thạc sĩ, bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Bác sĩ Chẩn đoán hình ảnh, Bệnh viện Đa khoa Bảo Sơn
Hơn 10 năm kinh nghiệm trong chẩn đoán hình ảnh, siêu âm thai`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `Tiến sĩ, Bác sĩ John Watson
 * Bác sĩ có 20 năm kinh nghiệm trong thăm khám và điều trị khoa Tai Mũi Họng
 * Từng công tác tại khoa Tai Mũi Họng, Bệnh Viện Đại học Y Dược TP. HCM
 * Hiện đang là trưởng Khoa Tai Mũi Họng, Bệnh Viện FV
 
 **Khám và điều trị**
 
 * Phẫu thuật nội soi xoang
 * Phẫu thuật nội soi nền sọ
 * Phẫu thuật Tai, Ngáy và Ngưng thở khi ngủ
 
 **Quá trình công tác** 
 
 * Trưởng Khoa Tai mũi họng, Bệnh Viện FV (2021 - nay)
 * Bác sĩ điều trị cấp cao, Khoa Tai mũi họng, Bệnh Viện Đại học Y Dược TP. HCM (2007)
 * Bác sĩ nội trú, Khoa Tai mũi họng, Đại học Y Dược TP. HCM (2002-2006)
 
 **Qúa trình đào tạo**
 * Tiến sĩ Y học, Tai Mũi Họng, Đại học Y Dược TP. HCM (2021)
 * Tai mũi họng – Phẫu thuật đầu và cổ, Bệnh Viện Đại học Texas, San Antonio, Hoa Kỳ (2015)
 * Nội soi xoang và phẫu thuật sọ não, Bệnh Viện Khoa học Thần Kinh, Chapel Hill, Bắc Carolina, Hoa Kỳ, (2015)
 * Phẫu thuật xoang nâng cao, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 4 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2014)
 * Phẫu thuật xoang cơ bản, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 3 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2013)
 * Thạc sĩ Y học, Đại học Y Dược TP. HCM (2010)
 * Chuyên khoa Cấp I, Tai Mũi Họng, Đại học Y Dược TP. HCM (2007)
 * Đại học Y Dược, Thành phố Hồ Chí Minh TP. HCM (2002)`,
                descriptionHTML: `<p>Tiến sĩ, Bác sĩ John Watson</p>
 <ul>
 <li>Bác sĩ có 20 năm kinh nghiệm trong thăm khám và điều trị khoa Tai Mũi Họng</li>
 <li>Từng công tác tại khoa Tai Mũi Họng, Bệnh Viện Đại học Y Dược TP. HCM</li>
 <li>Hiện đang là trưởng Khoa Tai Mũi Họng, Bệnh Viện FV</li>
 </ul>
 <p><strong>Khám và điều trị</strong></p>
 <ul>
 <li>Phẫu thuật nội soi xoang</li>
 <li>Phẫu thuật nội soi nền sọ</li>
 <li>Phẫu thuật Tai, Ngáy và Ngưng thở khi ngủ</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Trưởng Khoa Tai mũi họng, Bệnh Viện FV (2021 - nay)</li>
 <li>Bác sĩ điều trị cấp cao, Khoa Tai mũi họng, Bệnh Viện Đại học Y Dược TP. HCM (2007)</li>
 <li>Bác sĩ nội trú, Khoa Tai mũi họng, Đại học Y Dược TP. HCM (2002-2006)</li>
 </ul>
 <p><strong>Qúa trình đào tạo</strong></p>
 <ul>
 <li>Tiến sĩ Y học, Tai Mũi Họng, Đại học Y Dược TP. HCM (2021)</li>
 <li>Tai mũi họng – Phẫu thuật đầu và cổ, Bệnh Viện Đại học Texas, San Antonio, Hoa Kỳ (2015)</li>
 <li>Nội soi xoang và phẫu thuật sọ não, Bệnh Viện Khoa học Thần Kinh, Chapel Hill, Bắc Carolina, Hoa Kỳ, (2015)</li>
 <li>Phẫu thuật xoang nâng cao, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 4 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2014)</li>
 <li>Phẫu thuật xoang cơ bản, Diễn đàn các Bác sĩ phẫu thuật xoang trẻ lần thứ 3 – Trung tâm Y khoa Saint Luke, Manila, Philippines (2013)</li>
 <li>Thạc sĩ Y học, Đại học Y Dược TP. HCM (2010)</li>
 <li>Chuyên khoa Cấp I, Tai Mũi Họng, Đại học Y Dược TP. HCM (2007)</li>
 <li>Đại học Y Dược, Thành phố Hồ Chí Minh TP. HCM (2002)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'trieuman', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Trương Tam Phong', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Nhiều năm kinh nghiệm khám và điều trị các bệnh lý Nội khoa
Tiến sĩ Viện hàn lâm Y học Nga, Viện hồi sức Đa khoa Mascova
Nguyên Phó Giám đốc Bệnh viện Hữu nghị Việt Xô
Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)  `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ cao câp hạng 1 Tiểu Sư Đệ**

 * Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần
 * Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương
 * Khám và điều trị
 
 **Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:**
 
 * Các vấn đề tâm lý ở trẻ
 * Tâm thần học liên quan đến sự phát triển của trẻ
 * Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan
 * Động kinh trẻ em và các vấn đề liên quan
 
 **Ngoài ra bác sĩ nhận khám và điều trị về:**
 
 * Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ
 * Rối loạn tiền đình
 * Rối loạn thần kinh thực vật
 * Trầm cảm
 * Rối loạn lưỡng cực cảm xúc
 * Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm
 * Sa sút trí tuệ
 * Rối loạn tăng động giảm chú ý (ADHD)
 * Nghiện game
 * Nghiện rượu, thuốc lá
 * Nghiện ma túy tổng hợp
 * Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân
 * Khó tập trung công việc
 * Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài
 
 **Quá trình công tác**
 * Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)
 * Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)
 * Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)
 * Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)
 
 **Quá trình đào tạo**
 * Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)
 * Tốt nghiệp Đại học Y Hà Nội (1998)`,
                descriptionHTML: `<p><strong>Bác sĩ cao câp hạng 1 Tiểu Sư Đệ</strong></p>
 <ul>
 <li>Hơn 20 năm kinh nghiệm lĩnh vực Sức khỏe tâm thần</li>
 <li>Hiện là Trưởng khoa Tâm thần trẻ em - Bệnh viện Tâm thần Ban ngày Mai Hương</li>
 <li>Khám và điều trị</li>
 </ul>
 <p><strong>Bác sĩ có thế mạnh khám và điều trị các vấn đề tâm thần học trẻ em như:</strong></p>
 <ul>
 <li>Các vấn đề tâm lý ở trẻ</li>
 <li>Tâm thần học liên quan đến sự phát triển của trẻ</li>
 <li>Rối loạn tăng động giảm chú ý (ADHD) và các vấn đề liên quan</li>
 <li>Động kinh trẻ em và các vấn đề liên quan</li>
 </ul>
 <p><strong>Ngoài ra bác sĩ nhận khám và điều trị về:</strong></p>
 <ul>
 <li>Rối loạn lo âu, hoa mắt chóng mặt: Mất ngủ, khó ngủ, khó duy trì giấc ngủ, dậy quá sớm, ngủ dậy vẫn thấy mệt, tỉnh dậy nhiều lần trong giấc ngủ</li>
 <li>Rối loạn tiền đình</li>
 <li>Rối loạn thần kinh thực vật</li>
 <li>Trầm cảm</li>
 <li>Rối loạn lưỡng cực cảm xúc</li>
 <li>Tâm thần phân liệt, có thể kích động, khả năng học tập lao động giảm dần, ngày càng thờ ơ, vô cảm</li>
 <li>Sa sút trí tuệ</li>
 <li>Rối loạn tăng động giảm chú ý (ADHD)</li>
 <li>Nghiện game</li>
 <li>Nghiện rượu, thuốc lá</li>
 <li>Nghiện ma túy tổng hợp</li>
 <li>Đau đầu, đau lưng, đau mỏi vai gáy, mệt mỏi mạn tính, mất ngủ, bồn chồn, dễ cáu kỉnh, tự đánh giá thấp bản thân</li>
 <li>Khó tập trung công việc</li>
 <li>Căng thẳng tâm lý, suy nghĩ tiêu cực, bi quan và tuyệt vọng kéo dài</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Trưởng khoa Tâm thần trẻ em và Tâm lý lâm sàng, Bệnh viện Tâm thần Ban ngày Mai Hương (2014 - nay)</li>
 <li>Phó Trưởng khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2011 - 2014)</li>
 <li>Bác sĩ điều trị khoa Khám bệnh, Bệnh viện Tâm thần Ban ngày Mai Hương (2006 - 2008)</li>
 <li>Bác sĩ điều trị, Bí thư chi đoàn TNCS Hồ Chí Minh, Bệnh viện Tâm thần Ban ngày Mai Hương (2000 - 2006)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Thạc sĩ chuyên ngành Tâm thần: chuyên sâu về tâm thần học trẻ em, Đại học Y Hà Nội (2008 - 2011)</li>
 <li>Tốt nghiệp Đại học Y Hà Nội (1998)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'truong3phong', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Vi Nhất Tiếu', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Bác sĩ có nhiều năm kinh nghiệm về khám và điều trị tiêu hóa 
Nguyên trưởng khoa thăm dò chức năng bệnh viện Đa khoa Đức Giang 
Bác sĩ nhận khám tù 16 tuổi trở lên `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Thạc sĩ, Bác sĩ A Lượng**
 * Gần 15 năm kinh nghiệm lĩnh vực Tim mạch
 * Hiện đang công tác tại Bệnh viện Tim Hà Nội
 * Từng công tác tại Bệnh viện đa khoa Xanh Pôn
 * Từng học tập và tu nghiệp ở nước ngoài: Pháp
 
 
 #### **Khám và điều trị**
 
 
 **Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:**
 
 * Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp
 * Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo
 * Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …
 
 **Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:**
 
 * Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)
 
 **Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:**
 
 * Bệnh lý thận  - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )
 * Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)
 * Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)
 * Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)
 * Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)
 
 **Quá trình công tác**
 * Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)
 * Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)
 
 **Quá trình đào tạo**
 * Chương trình đào tạo sau đại học Việt Pháp (2012)
 * Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)
 * Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)
 
 **Chứng chỉ trong nước hoặc nước ngoài**
 * Siêu âm các bệnh lý mạch máu - MEVAH, Cộng hoà Pháp ( năm 2012)
 * Siêu âm tổng quát, siêu âm tim mạch, siêu âm bệnh lý tim trẻ em, Bệnh viện Tim mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viên Tim Hà Nội
 
 **Sách và các công trình nghiên cứu, báo cáo khoa học**
 * Đánh giá kết quả sớm của phương pháp Nong van hai lá bằng bóng INOUE trong điều trị bệnh hẹp van hai lá khít tái phát sau nong (Luận văn tốt nghiệp Thạc sỹ - Đại học Y Hà Nội) (2010)
 
 **Thành viên các Hội khoa học, tổ chức chuyên môn**
 * Hội viên hội tim mạch Việt Nam`,
                descriptionHTML: `<p><strong>Thạc sĩ, Bác sĩ A Lượng</strong></p>
 <ul>
 <li>Gần 15 năm kinh nghiệm lĩnh vực Tim mạch</li>
 <li>Hiện đang công tác tại Bệnh viện Tim Hà Nội</li>
 <li>Từng công tác tại Bệnh viện đa khoa Xanh Pôn</li>
 <li>Từng học tập và tu nghiệp ở nước ngoài: Pháp</li>
 </ul>
 <h4><strong>Khám và điều trị</strong></h4>
 <p><strong>Khám và tư vấn chuyên sâu các bệnh lý Tim mạch:</strong></p>
 <ul>
 <li>Phát hiện và quản lý Tăng Huyết Áp đúng cách, tầm soát tư vấn kiển soát các yếu tố nguy cơ của Tăng Huyết Áp một cách hiệu quả, điều trị biến chứng Tăng Huyết Áp</li>
 <li>Sàng lọc bilan mỡ, tư vấn kiểm soát mỡ máu theo khuyến cáo</li>
 <li>Tầm soát và tư vấn điều trị bệnh lý van tim, cơ tim, bệnh mạch vành, nhồi máu cơ tim, đau ngực không ổn định, đau ngực ổn định, các bất thường nhịp tim, suy tim …</li>
 </ul>
 <p><strong>Khám, siêu âm và tư vấn chuyên sâu về bệnh lý mạch máu ngoại biên:</strong></p>
 <ul>
 <li>Bệnh lý động mạch chi trên, động mạch chi dưới, động mạch cảnh, động mạch thận… và bệnh lý hệ Tĩnh mạch nông – sâu chi trên, chi dưới (Suy tĩnh mạch, Huyết khối tĩnh mạch nông, sâu,...)</li>
 </ul>
 <p><strong>Tầm soát, khám và tư vấn các bệnh lý Nội khoa Tổng quát:</strong></p>
 <ul>
 <li>Bệnh lý thận  - tiết niệu (bệnh viêm cầu thận, suy thận cấp, suy thận mạn, sỏi thận… )</li>
 <li>Bệnh lý tiêu hoá, gan, mật (viêm gan, xơ gan, sỏi mật, bệnh lý dạ dày, ruột …)</li>
 <li>Bệnh lý thần kinh (đột quỵ nhồi máu não, xuất huyết não..)</li>
 <li>Bệnh chuyển hoá (tuyến giáp,đái tháo đường…)</li>
 <li>Bệnh lý hô hấp ( Viêm phổi, Viêm phế quản, COPD…)</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Bác sỹ Tim mạch, Bệnh viện Tim Hà Nội (2016 - Nay)</li>
 <li>Bác sỹ Tim mạch, Bệnh viện đa khoa Xanh Pôn (2006 - 2016)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Chương trình đào tạo sau đại học Việt Pháp (2012)</li>
 <li>Thạc sỹ chuyên ngành Nội - Tim Mạch, Trường Đại học Y Hà Nội (2010)</li>
 <li>Bác sĩ đa khoa, Đại học Y Hà Nội (1990 - 1996)</li>
 </ul>
 <p><strong>Chứng chỉ trong nước hoặc nước ngoài</strong></p>
 <ul>
 <li>Siêu âm các bệnh lý mạch máu - MEVAH, Cộng hoà Pháp ( năm 2012)</li>
 <li>Siêu âm tổng quát, siêu âm tim mạch, siêu âm bệnh lý tim trẻ em, Bệnh viện Tim mạch Quốc Gia, Bệnh viện Bạch Mai, Bệnh viên Tim Hà Nội</li>
 </ul>
 <p><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></p>
 <ul>
 <li>Đánh giá kết quả sớm của phương pháp Nong van hai lá bằng bóng INOUE trong điều trị bệnh hẹp van hai lá khít tái phát sau nong (Luận văn tốt nghiệp Thạc sỹ - Đại học Y Hà Nội) (2010)</li>
 </ul>
 <p><strong>Thành viên các Hội khoa học, tổ chức chuyên môn</strong></p>
 <ul>
 <li>Hội viên hội tim mạch Việt Nam</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'vinhattieu', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Dương Tiêu', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Nhiều năm kinh nghiệm khám và điều trị bệnh Da liễu
Tốt nghiệp Bác sĩ Chuyên khoa I chuyên ngành Da liễu - Đại học Y Hà Nội
Bác sĩ nhận khám từ 12 tuổi trở lên (Dưới 12 tuổi hỏi ý kiến bác sĩ)  `,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 200.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Tiến sĩ, Bác sĩ Sư Phụ Bự**
 * 20 năm kinh nghiệm lĩnh vực Tim mạch
 * Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
 * Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức
 
 **Khám và điều trị**
 
 Các bệnh lý Nội Tim mạch:
 
 * Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)
 * Tăng huyết áp, hạ huyết áp
 * Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu
 * Xơ vữa động mạch
 * Điều trị bệnh mạch vành
 * Bệnh van tim (Hẹp hở van tim)
 * Bệnh cơ tim
 * Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh
 * Khám bệnh mạch máu ngoại biên
 * Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch
 * Tư vấn sử dụng thuốc chống đông máu
 * Tư vấn bệnh tăng huyết áp
 * Điều trị bệnh tăng huyết áp
 * Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...
 
 **Quá trình công tác**
 
 * Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
 **
 Quá trình đào tạo**
 * Tiến sĩ Y khoa - Đại học Y Hà Nội
 * Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ
 * Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia
 * Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội
 
 **Sách và các công trình nghiên cứu, báo cáo khoa học**
 * Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản
 * 3 công trình khoa học
 * 30 bài báo khoa học chuyên ngành`,
                descriptionHTML: `<p><strong>Tiến sĩ, Bác sĩ Sư Phụ Bự</strong></p>
 <ul>
 <li>20 năm kinh nghiệm lĩnh vực Tim mạch</li>
 <li>Hiện là trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai</li>
 <li>Từng đào tạo và tu nghiệp tại nước ngoài: Hoa Kỳ, Australia, Cộng hòa Liên bang Đức</li>
 </ul>
 <p><strong>Khám và điều trị</strong></p>
 <p>Các bệnh lý Nội Tim mạch:</p>
 <ul>
 <li>Đau ngực trái, bệnh mạch vành (sau đặt stent, sau mổ bắc cầu)</li>
 <li>Tăng huyết áp, hạ huyết áp</li>
 <li>Rối loạn mỡ máu, Dinh dưỡng cho bệnh nhân rối loạn mỡ máu</li>
 <li>Xơ vữa động mạch</li>
 <li>Điều trị bệnh mạch vành</li>
 <li>Bệnh van tim (Hẹp hở van tim)</li>
 <li>Bệnh cơ tim</li>
 <li>Chẩn đoán bệnh tim bẩm sinh ở người lớn, đặc biệt tầm soát và điều trị bệnh tim bẩm sinh ở trẻ em, sơ sinh</li>
 <li>Khám bệnh mạch máu ngoại biên</li>
 <li>Tư vấn, phát hiện sớm và phòng ngừa các bệnh lý tim mạch</li>
 <li>Tư vấn sử dụng thuốc chống đông máu</li>
 <li>Tư vấn bệnh tăng huyết áp</li>
 <li>Điều trị bệnh tăng huyết áp</li>
 <li>Tư vấn dinh dưỡng và chế độ sinh hoạt, tập luyện cho bệnh nhân tăng huyết áp...</li>
 </ul>
 <p><strong>Quá trình công tác</strong></p>
 <ul>
 <li>Trưởng khoa Q2 - Viện Tim mạch - Bệnh viện Bạch Mai
 **
 Quá trình đào tạo**</li>
 <li>Tiến sĩ Y khoa - Đại học Y Hà Nội</li>
 <li>Đào tạo Fellow Course về Tim mạch can thiệp của Hội tim mạch can thiệp Hoa Kì (SCAI) - Las Vegas, Hoa Kỳ</li>
 <li>Đào tạo sau đại học về tim mạch người lớn - Bệnh viện Royal North Shore Hospital, Sydney, Australia</li>
 <li>Bác sĩ Đa khoa, hệ Bác sĩ Nội trú chuyên ngành Tim mạch - Đại học Y Hà Nội</li>
 </ul>
 <p><strong>Sách và các công trình nghiên cứu, báo cáo khoa học</strong></p>
 <ul>
 <li>Tham gia biên soạn 2 cuốn sách chuyên ngành đã xuất bản</li>
 <li>3 công trình khoa học</li>
 <li>30 bài báo khoa học chuyên ngành</li>
 </ul>
 `,
                priceDefault: 250, // giá mặc định
                nickName: 'duongtieu', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ân Ly', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Hơn 40 năm kinh nghiệm khám và điều trị về Nội tiết - Đái tháo đường - Tuyến giáp
Nguyên Trưởng khoa Nội tiết - Đái tháo đường, Bệnh viện Bạch Mai
Phó chủ tịch Hội Nội tiết và Đái tháo đường Việt Nam`,
                thongtinkham: `Giá khám chưa bao gồm chi phí chụp chiếu, xét nghiệm: 300.000đ
Bệnh viện có thanh toán bằng hình thức tiền mặt và quẹt thẻ



 LOẠI BẢO HIỂM ÁP DỤNG
 + Bảo hiểm Y tế nhà nước: Áp dụng cho bệnh nhân đăng ký khám chữa bệnh ban đầu tại bệnh viện hoặc có giấy chuyển viện từ đơn vị khác
 + Bảo hiểm bảo lãnh trực tiếp: Đối với các bảo hiểm không bảo lãnh trực tiếp, bệnh viện hỗ trợ xuất hóa đơn tài chính (hoá đơn đỏ) và hỗ trợ bệnh nhân hoàn thiện hồ sơ`,
                descriptionMarkdown: `**Bác sĩ Chuyên khoa I Sherlock Homles **
 * Hơn 20 năm kinh nghiệm trong lĩnh vực Tim mạch
 * Từng công tác tại Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương
 * Hiện đang công tác tại Khoa Tim mạch, Bệnh viện FV
 
 **Khám và điều trị **
 * Bệnh tim thiếu máu cục bộ
 * Suy tim
 * Siêu âm tim
 * Tim mạch can thiệp
 
 **Quá trình công tác **
 * Bác sĩ Điều trị Cấp cao, Khoa Tim mạch, Bệnh viện FV, TP.HCM (2017)
 * Bác sĩ Điều trị Cấp cao, Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương (2011 - 2017)
 * Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Hoàn Mỹ Cửu Long, Cần Thơ (2007 - 2011)
 * Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Đa khoa Trung ương Cần Thơ (2006 - 2007)
 
 **Quá trình đào tạo**
 
 * Chuyên khoa cấp 1, Lão Khoa, Đại học Y Dược TP. HCM (2006) 
 * Tốt nghiệp Đại học Y Dược, Cần Thơ (2001)
 
 **Chứng chỉ trong nước và ngoài nước**
 * Bằng tim Mạch Can Thiệp, Viện Tim TP. HCM  (2011 - 2012)
 * Bằng hồi sức cấp cứu, Bệnh viện Chợ Rẫy TP. HCM (2006)
 * Bằng tim mạch và siêu âm tim, Trường y Phạm Ngọc Thạch TP. HCM (2005 - 2006)`,
                descriptionHTML: `<p>**Bác sĩ Chuyên khoa I Sherlock Homles **</p>
 <ul>
 <li>Hơn 20 năm kinh nghiệm trong lĩnh vực Tim mạch</li>
 <li>Từng công tác tại Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương</li>
 <li>Hiện đang công tác tại Khoa Tim mạch, Bệnh viện FV</li>
 </ul>
 <p>**Khám và điều trị **</p>
 <ul>
 <li>Bệnh tim thiếu máu cục bộ</li>
 <li>Suy tim</li>
 <li>Siêu âm tim</li>
 <li>Tim mạch can thiệp</li>
 </ul>
 <p>**Quá trình công tác **</p>
 <ul>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Tim mạch, Bệnh viện FV, TP.HCM (2017)</li>
 <li>Bác sĩ Điều trị Cấp cao, Khoa Thông Tim Can Thiệp, Bệnh viện Nguyễn Tri Phương (2011 - 2017)</li>
 <li>Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Hoàn Mỹ Cửu Long, Cần Thơ (2007 - 2011)</li>
 <li>Bác sĩ Điều trị, Khoa Tim mạch, Bệnh viện Đa khoa Trung ương Cần Thơ (2006 - 2007)</li>
 </ul>
 <p><strong>Quá trình đào tạo</strong></p>
 <ul>
 <li>Chuyên khoa cấp 1, Lão Khoa, Đại học Y Dược TP. HCM (2006)</li>
 <li>Tốt nghiệp Đại học Y Dược, Cần Thơ (2001)</li>
 </ul>
 <p><strong>Chứng chỉ trong nước và ngoài nước</strong></p>
 <ul>
 <li>Bằng tim Mạch Can Thiệp, Viện Tim TP. HCM  (2011 - 2012)</li>
 <li>Bằng hồi sức cấp cứu, Bệnh viện Chợ Rẫy TP. HCM (2006)</li>
 <li>Bằng tim mạch và siêu âm tim, Trường y Phạm Ngọc Thạch TP. HCM (2005 - 2006)</li>
 </ul>                
`,
                priceDefault: 250, // giá mặc định
                nickName: 'anly', // tài khoản
                password: "$2a$10$3mbpyNnDTHW/cKZ8d/Himu3bm7mFkm0AZZza.uU1LxVFlU9dppx5K", //keckeckec
                status: 1,
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
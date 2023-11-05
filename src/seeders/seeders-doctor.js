'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('doctor', [
            {
                name: 'Hà Duy Kiên', // tên bác sĩ 
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
                name: 'Tôn Miu Lê', // tên bác sĩ 
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
                name: 'Thomas Tuchel', // tên bác sĩ 
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
                name: 'Leroy Sane', // tên bác sĩ 
                position: 'Phó Giáo sư, Tiến sĩ, Giảng viên cao cấp', // chức danh
                //specialtyID: 1, // của chuyên khoa nào
                clinicID: 1, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
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
                name: 'Vương Văn Đại', // tên bác sĩ 
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
                name: 'Mohamed Salah', // tên bác sĩ 
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
                name: 'Trent Alexander-Arnold', // tên bác sĩ 
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
                name: 'Jürgen Klopp', // tên bác sĩ 
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
                name: 'Miguel Almirón', // tên bác sĩ 
                position: 'Giáo sư, Tiến sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 3, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACoALYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD8b6KKK/uvU+PCiiijUAooopagFFFFF2AUUoYRlWztZNzI3ll9mByeOR/Kva/hT+x8978P1+IfxG1228F+A5oxLFdJLFcX2pxkP8sEMaNliUI+YMy9cKME+NnOfYHK4e0xEkv629WbYehVrPlpni8UUs3lxwwm4kmk2LCMlpj/AHUUfMzey816Vqf7IXxU07w5barH4D8TGwuEDKLe2NxMoPYxR5mX6Mua6/Tv2+vh/wDCTwjqP/Cr/hPNZy6e72yeJrydWvgkrErI0whZllYk8GRQqAhWBcgeH69+3F481p7zyNQOj2818l3LFZSzJHKI8bYm3uf3avuZQQzrv252hQPyLH+LtV174OlypP7XX0PYo5TQ2qbmn4s+G3if4eWMF9rnhXxJounzSeQtzqGl3NnFJL1KAzIis2Cp2kE8jn0xVMn2hxKY9ynACjbtHHBHQH2HFb/hj9tf4rHxNea3qGp6h4g024txbaxaXMEc2n6hbGVFPnQOhhldGmiCvIjOrSJksg2nK0CGz8WWtnBptzcNrVxCJZNLntnXyR28uYEiVWXDLjGAwHJBY/RcO+J2Fx1RxzK9GfTszlxWVqCvHYI5dhFaFlcfJ+NZ80Mum3LQT25tZozh0ZSrZ9wehqWK45r9HjWVWPOnzX2ZxcvL7pri44p0dx81Z4ueKfHc/LUVL2DU1HuPkpkF7slqj9o/d0xb3YK5al+UNTp7LVdifjWhFfecmfwriP7V8t60tK1j5vxrl1Kje5t6nafbZFb0GKKjl1PzFWiuaW5Z5rRUdFfSxlbU4ySio6KbqXVgJKPM2VHRUagSefTZJ8LTaQLtaSRY45Jo4ztWTdskyw4I+6V6kg+gqZPR3dl19BxjzOx9Of8ABOz9nnwf8ULbxP4y8XaXrGuWvgkoy6ZAiyW9/vilfDJsYu6mIKEbKuZlAViCKyv2ifiS/wC0NZ2+jaxq1ja69p/m21jYadpqz2NplFBjihxujt/JMADk70midP8ASFZWT0rWfGdj+yd+ypdf8IJrY/tDXNIsbhLtlS5uLsXKpNeXExKmNFzJaQpGdzYgA24kBNH9lb/gnd4o/arsIfE2ratND4Ya5dJ4tVuEC3cvBfakcYEyjzGIDeWOdwOSa/kHjziWWKzKpUqyvTTtFeh97lGVzlBU6e7PlG++Hei6iixDWNe1LT3ZS0VmsYhQRgQoo3NvwpUrkplkUsMsy52rfwN8MNXS8mt9N8cRMyNM6X1zHF5qMnlr5SRw4kkEjHjeoHPyyoT5f61/C/8A4J+eHfClvF9osdN1KO2bLG10r7Md4AyNxZmlHzj77E9ugFey+GP2L/Dfi29FreeEdEWzhj2rvg+yynbkf0r8xqcTR5+VK6PsKPBblDnm7M/FfxX8SvD2h6D4K8nTZNQ0vR7i607VY7KCSGCex2vmHbIcqJVkYBsDdJDKCCQScX4reB/B/wASv7FvPA88i+IJ0jttSsVYxpEyJEvmwqFJG9t7be0h39q/arWf2MfDC6ndQWfhq0iEcZjkXyd26PnjPfOSK+Ufiv8A8EudI1PxPNL4VsLXwzqOoO1qtq109j5m9WXajEPEXO7o8fpz2GlHiCE5pfD5mOI4PrQhzRfMux8k/Dn4fX2gSWOi+ObXSZPBt85t7bVLyEq2mQfZwsZU+S1xE7tJFs8pk2rG52zKkir5r8cPhvc/BT4oaloNxL9oWFlmguAyt58Uih1OVZl3DOxgrFQyMAzABj6H8cr7xr+zbAvhXxFaa9Dpvyyyx6okbzLjMcbRTxKpMZJK4UbcGTuTXlHi/wCMOr/EzwjoOn6s3mf8IaH020kZBHJJBKzXQaSRvnZyzOSv+NfufhdxNivrbw9Wd4M+BzeioJpxs0Zv9oUfb6zfN8uKP/d/vN6kdG6fQcUR3HzV/Q860Ftuz5zU3NPm87n3xWjLF5kVY2lvvYfWt9IvMtvxrhnW1DUxLtvIl2+2afYXH7z8afqVvz+FR6Nb/vP+BVjUqXjYcb3N2J98P40U261D7Cqx+o3f0ornNDhfm9qfH92mfN7UfN7V73tjLUlpkmd1N+b2o+b2o9sGofN7UfN7UfN7UfN7Ue2DUPm9qMYWRmbaPLba391hyPzxij5vagyxpDID/rnwg+h//VR7a6sxe9dcp9e/Dv4K3H7UV34DvtShkXQfCPhuzS5J3eX5gASOI47RxW8Kn3iSv1T/AGX/AIC3fwz+Fem+HdYijt51ka4SJM/u9+Nqtn+IKFDe+a8W/wCCCP7O2neIP2RI/FV/Z2t3e/abyeHziwWJlusROQPvbWR2APda0v2wPiH+0D8RfidqHhn4YadH4Q0fSUiabU5EjvNR1iSTY2EKKYrVFLEZYiUgPgg+WG/hnjOmnmdSH95n7Fw5y0qCqtNu3Q+5fDNvofgyGOOaG3kmKZcv1z0/pU0Ntp2pXjTWMcccjNyE6V+Suk/Cj9tT9nADW9F16+1q1upo1lt76WC+nkEgCspjljMwcEkkfIDn5SBhV+9/+CYH7Vniz9o7wf4jXxxov9nanoMqxzzGzNm00gyyloSB5Z/1gwCw4znnA+VrYNXR9JQx7nFpRkvXY+irWw0sSeTJD5jsuWPvXlvxy+GNnrgjjt18lpTt3ehrwT/gov8A8FZLj9kD4hyeFfCvw/j8Ua8qRSmENL50zSjcuxI1+fCFCRuHB6V8qaj/AMFFf2tPGM/9qz/D268K6fdtutw2hzPa3GPmw8czlghB24RkyVPIxzUsA5QtEn+1KVKVnudJ/wAFRf2fU+JPgaziulF5/ZTS2puCu4RnZmJSv8WCZCfRSxr8ufE2iz6Foc2n3rSNcR6tJ9r+ZWkEkVpbIuG+8zbpTuI+nav2u/Y9/ac0f9tfTtf0fxl4Wk8PeKNNt421nRZ2dre6tskG6tXIG5FYEFmUGMlV+YAO35o/8FXP2fP+Gbv2l30Pc0izPNEkrBR56KECPhe5QKWJ5Lbj3r9M8J3OGa06cj4fjGlGUfbI+Y7tmkl3Nt3MoLbd23OO27+nGc1Gn3qkEnm5b/aI/U0V/W3NZX82fl9MvafL5Z/Gt6wuP9FP1rlEuvIbb+NW4ta8hNv41x1a2prqa2ovvkz7VBpp8q5Mn90VSTVftkoStfSNK8u9ik/55nd+fH9Kx9sLlctClDrc95qEqx/dUUVa0fwxMurX5Sby0jlKY98A/wBaK86pW946Y0dDmPm9qPm9qPm9qPm9q932xz6h83tR83tR83tR83tR7YNQ+b2o+b2o+b2o+b2o9sGofN7Vp+CdGt/EvjPR9Lv7i4tdP1TUbS1upbfb50cTzpGzL/uh/wCL5dxT3rM+b2r039i3wJN8SP2uPhzpaQSXUf8AwkFpe3EEC7ppoLdjPOiL/GWhSVVXu7Rr/FXBmmLlSwlSpHom/wADpwdN1K8Kfd2P6BP2K/2fbP8AYe/Z48SeGtHk1C60GzvrW50N9Q2/bvJlhLrBcbfl81JJGU7ePmFeS/tR+I/iPquvR2vwn0fw3OtzcyGW/wBc1P7JbMQVXiPyz5xJXdsEkZ+TjLbWT6Z+Hvw/b43/ALJui6hZzRy2fiDb4hW1jh8pLRLjy5lttv8AeiUMGPd9571kaD8DLF/B39sNcW8FrK7PHO8rKSjRccD/ALZ/lX8N5hWnWxTxUlfm/wAz92ynD0YR9hezR8V6N8YfjlpQ8VaP8SrfwQwt9NMmgJbyxs2o3KSuAAEmAtUeF4ZFl33GwwtgTCQFPqn9nP4nXHwy8E6T/wAJNp4h1C8iImniTdKyhI9qtJgbsNuGeeABk4qpF4g8O6PqGqf2RdR69No919kuZndlt4rpydy+Y+F3LkMVUhsMD0Ipn7PVv4L+LGv69NN488G694m0kBb9NK1WG6hslLuNpMcjmJ+xDkMeMAcE+dWrzqzvCNme/QweHpR/eSujx79pLxfdW/xK0/XNPstP0zT9WvUt9T1CRolaENOcSyysCWiRQWMe0gYzjncnK2P7U/7Rktvq/wBn+F93rug6DKY7aRFtrGW7t9qj7RGzzyJMpO7MW+A7FjORkRJ6p4d8U6DoXxI1jw7ovi3wr4mtLGV0u9Fi1RYdWtHdh5bRwu3mBAwGBIpZiW5xtrtvgX4H8H/tAxTtpN0tvfWdzNa3Om+VHZyaTcI5MkMkYVSroxI75GDmjDymk77jxmW0KyVWLskZf7Llta6+ul+JtR8I32i64v7zyb0JFcRmQFJN8cJKLwwA+ZjtC8nivg3/AIL8fA3WPGnxEvviVZrpsOh+DvsOjXqTyGK5uLi4t7RpDBGf9aI5J4hJ6LcLX6TX/wAHNQ8H+JbbT1WT+0JpfLt8uzQ3iEgEOW9MEjHFfIP/AAccaafC/wCyl4fhNxFNcXnjuJ57SFfLufszQakSpf8Ai3y2aEJ626HvX3Hhria1LOKPL9p2+8+L4soUamGmnK9kfjDPvEnzeUG/iVDlVPcA+ncexApnze1WZreQqGlZmkYDdls+wGOwAwAPTFVVt/31f2J7Z+zjCW8UfjPKpP3drIelr543fhTxabI60tNst4/Grl7p/wAn4Vx+294PZ21MnRrf/Sh9a7rTLfzbXy/7xzXDpJ9ivVX15rptK1XZB+NctSpd2KjubIsP7Alz5PmeYOtFUjrH7z8KK8+V7nZHY8++b2o+b2qpRX0XtjzNS383tR83tVSij2walv5vaj5vaqlFHtg1Lfze1ej/ALHPxrj/AGav2tfhz8QLj7VJZ+FNct9TvIbRgs89tDIhmRNxA3mN32hSGJGOMhl8torDE0o4qm8PN2UtH8zWjUcKil5n9Vn7Fn7Ynwr/AGgtC1Pw94H8deBfFdwI38QtpujXokuLW3uZSJHniOHQtNMgKEAo05TA24HzD+0fB8S9dtbPwzo+oXXhPwlcLcXV5rtud1zawwyRxNGm/iJisw3Sn5VVVz82yvzJ/wCDfT4qXHw5/wCCmHhvS1bZZfEDR9T8L3h/upJbNdRt+FxaW4/4HX7caN4tZfEOuabIsIma6OoQxyHrIoMcy/ST7x9Q+K/kbjzh+OU4yOH5rxt7v3n7BwnmCqxlc8H8P/HD4c/D3SNH8E2fj3wLodna2wtYrBNVgkkkZl/eKV+825S+4n5n53fNuqbXbf8AZ/8AEHg+LQf+Eq8K2+g6fcB2sbG/bSbeBQRKmNrBkXMZJTGGBc9zXJ237J2m/sc/tW3XxW+GPg/w/wDZ/E3lW+s6RLFIv9kuJI3eeARkPDGw4K4cEljtGd6+4x/tox3mnR6d4+8E/DbxVrGnywMLxbcC3KqMrsSV53Uck/6wjJJ9Sfj4+y5T7T2eKm70qfMu17HAeJPHnwn0jWYbrwz8QPhxHry2phAub+0huEU/ejBkk8wO6hQV7kZ71yvxF1fX9U8QWfj34Yz6HD41t4M6laW0ypH4qhj5ClVJHnqAVjuM/IxVf4q9E+Nvxe8RfHL4Tap4X0nwL8MZNO8TWz2JEJe4isEaQt5rqdkWR2UshBGdzZCGP9hj/gnX4B/Y0+Gt5Bo8cc2r64WudY8QSfNO8XHmRQYCiFQrNtUKuWI4GaUo02vddmOrUq06bVRW8r3PYf2cvHFz8TfEUGraus1vbQ6dFdRNOMGMzsNshHYKobI7AvXwB/wcaahoeqfAHw/4mknjtte8T+JLXyLVp8zy6fBZ6gVZY+yK92ryN/ekhHavbf8AgpZ+1hF8Kf2Ivij4utZfsOoeJrE+GdB2J5EiyXqNbuxA5Xy4Dc3A9oAe9fgtqOo32pzLJf3V1dtsCxNPNJKyRjgKC/IHU4HHJ96/XPDDherXrU8ycrxpu5+dcV5nShWlQW8o2Kt3cpcx7o1kUKqqQ53c4HIPcHr+NU7X/X1Ndy7D+FQ2r756/omMrRT+f3s/MI6QUP5TesP4am1PoP8AdqtaS7CtaaP9oi8v+9XLKtqXT3Odm+/U1hIzSeXHud2OQifeNdZ4V+Gza9czCRjBb7ctKn+sz6L7/wCNeleGPCOm6Nbwx6fBbiSNNzSyf6xvd/8Aa/8ArVnKtoRU+I8nXStW0exW6ksbqGGZzGon+8SADke2D/OivS9d+MOmaJJIkEMWpapEyo6R9BGd2T+DAf8AfVFccq2p0w2Pnaiiiva9scoUUUUe2AKKKKPbAFFFFTOtoVTV5H0h/wAEgLryP+Cl/wAJFX/WPq0iH6NaXC/1r+hHUfBmneMfFEPiaFjD9oO2SVf7wJyG/wBnp+dfz0f8ElLea9/4KR/B2KP7v/CQK34+RNX70fDubUrY3TQtFMsaustnON0Nyu4/98sOzV/OHi/Wj9ep83Y/TOD6DnQnOPc1/GesaV4S1Zre6t5GW4O6NlT9y7HjIb8Koa/+z/8AC3xQ1vca54e0LU9QkgabdOvmsnptPY5B4968y/aR8A+LPjH4FuIdEhuxdQAi2Mc6fa4Mc4Ib7/XAI5IwO1fAfi/Q/jH4N11LeZfi5ZXcLtGzW3hi7JX2BXhh3yOOa/KqcqclY+5jiatKJ+q9x4n8H/Dp4baGz0WO1hiBjjjTbImFC4I9fm/lUPjp7Lxv8K4oVujZrfL9lt4j/wAtWUkA/gdq/wDA6/PX9mX4TfFj4g+MLOTXF+IS2Mab86np0lhG+0k5Jl5z7pzX3R8LvCuqXtxNfTNLCkcXl+a77jx2DnmMf7Tct07CuapiIJ8sRR56klKR8T/8F+PCsfgr9hz4Y6bHH5P2fxxGHj/55n+zrz5f+AjA/CvyW8rfED7Cv14/4OCJ/O/Y08FfLt2+P7ZScY3/APEuv+f89a/I6T/j3j/65r/Kv6Z8L63/AAiR9WfkvFVO2PkzLuEKSY9qrT/60fSrt71qkZdhr9E9sfMSvYt2V/8AZTt981sW2pyvZ3G3/U+WfN/3eK5z7R9a6n4caWvimx1jT1bbdSxxmFv+eb7m2/nyKzqVvdIjuevaRdxPp1t5P+q8lNv/AHyKl1Oy/wCEgspLEXV1YvOAPOgi3MRzlc+9cF8Gtd1L7bceG9Tt4WFkkrxr/wAtFkBXMY/38fpWj4c8b6peXU0SaXqU0k0hZpv+WIHmMu2T/ZGMD3BrllW0Noxbdif9nrSrXQYr6MXMdnr0JNvd+am14kDkquP9rcCf90UVveN/hu+talb31ncW9hdLEYZ3fq4O0hfwwT+NFZ+2NPYnzfH92nGXZTY/u0kmd1dntjLUR3LntSfN7UfN7UfN7Ue2HqIZvLo+00STfZfLbZcbpn8tGC7o3b+6Bg5bnoBnkV9EfBH/AIJPftF/tGWdvceGPhL4qNleHMd1qiDR7WQYB8xZL1oAyc9UDLwcEnIGVTMKVJc1SVio05T0ifO4cyVIkuwdq/RrwP8A8Gw3x98QGFvEGvfDbwvHwJFjvbvULqIfSODym6/wz44/E/S37On/AAa0+CtD1dG+JXxI8U+MEkO6G20eyXR4YnGOJJne4kcHPAQxH6dT5GI4qwlNPmlc0WFqJ3kfm/8A8Ef33/8ABTv4M/8AYak/9JZq/oH+G2hx63aTr/y1WWTH0zXzD8b/AIG/sef8ErPDF3oml658Pfh78UoWgl0m5uZF1HxHbTGZWRvMk8+e1V9skZlcJCoZmdtoYD6m+Clwt3bRTAYabdIw+YcsSR8rcqcEZHIzk96/CfEXNKWYYmFeOyR+j8Hx5aE35nPXGpXXhDxRNtlwxGPL9VUk5r3Lwl8ctD8TeBob+X7HDfW3yGKR/wB42AOQvof6GvNPH2lWs3iCzvLiXasMhGP+eYx979f0qG1+AHhy51uz16GS3e8mG/zn6suT/wDXr89pynF3jsfWVJUKy97dFv4q+OZ7jS5r6KLykcbwNm3O7jP6daPDWnyf8ItB5n3vKz+B5/rWX4+/s7Utdt7OG+juBHKNyp03en8q6+9Meg6P+6i8pfLwR6+9R7ObnzMcKkU1GJ+Y3/BxGPsv7JfgRf8AqfVP/lPuq/Jea4yv5/zNf0G+Ktb/AGc/jD+0dovwd+Pmu+CYofE1lPdadofiEGP+1ZJ91rH5N0Qi2k4bd5cqTxzswKR53OD5t+2d/wAGl/hG/wDCVxqHwE8Y6x4a1aSXz08P+KruNtNvE2gCGC5WD7TA3GcyiYc4JCgGv3HgHiHDYPLoYerpq9T8v4lw7eNlOJ+Fty+8ZqjL9+vqL9ov/gkX+0N+yzHdXHjT4S+MLfRowUk1GwtV1izES5PmPPYmSOKPry/l9MkAmvmmezt5nZ7VoWiY/wDLI5XI4ODjnp1y314wP1SjmFCtHnpTufLSp1E7so+XvrY8Fa23g7W49TbL20Z8uZF/1hU9dvv0qPSNF88598V0DaPJpehXl5bz/Z7qNFER9T5kZxVVK3uhG9zpfHPh69hhh1zR0a0v47cm7SP/AI+FiOSsn+8QcH2Aq58F9S1+z8JXOoatcNdaXcJvtYpP9ZcNnGV/2P6hqxPDvx4hg0trHU7OaG8Iy8g/1b9tx/Kr3inxxH5mjG1lhlt2hkLGPoG7g++MVyyxFlc1jG7sdrHqV/qjtLNdQ2POFt4/l8sYHU+vt9KKxdC8UWd1bbvoD+QorjljNTsjR0PA/m9qPm9qPm9q+lf+CXv/AATY8Tf8FMPjtP4asbiHRPBvh23XUfFXiK4T/R9CtC2NwyQrTyBHWNXLIu2R3AVS6+hjMdTo0nUq7I440+d8p4f8KPhF4u+PPjnTfCvgfw5rXifxNqUhFtZaXaSXE8owN3+ryVXplm2qByWX7y/ov4P/AOCLvwa/Y6+GWn+Mv20vi7Y+BtQ1URz2ng3wzdR3eozbSVeJ2jS4muCdyK62sQiQbS9wxJYUP2tf+Cx3gH9hPwfqHwP/AGIPD2jeHdB05fs+u/FGSNL/AFTxDc8mT7PLMgMiZ3L9qkVl+bMCQxxxu7f+CXn/AAQG8a/8FPDqnxa+OPjfxp4dsdauLe5tmuoX1HxJ4njl3j7dJJdM5ii2xgRvIkryhNwRUKNJ+c5pxRia0uWg7I9ClheVG14P/wCC5v7K37FN7FZ/s6fsp3MmpWrNH/bviXU4bXVpNxLHEhW9uJFYn5V80YBwFUDn374K/wDBU/8A4KDfts+JIrf4Z/su+B/C+gSYlOreKtPv7W2jiPQi5uLiBJD3KwRvJgg7cEV+gH7GX7BHwf8A+CY/wr1SX4f+D7bS49HtJbvUNUu4I7rXtWMcTv8APcsA0rOpYiIeXGM4EcRDEfi7+29/wda/Gn49Xd/o3wv0ez+EfhKSQql/Ii6tr8vXDNPcDyISV2FREm+PtM/DV83Uxdao/wB5K5t7Pl1P0S+Iun/8FCvCNjYw3HxN/Yr8P614jJjh02cX9i9w2OEtjcw5lcd0II+ua83tf+Cd/wC3Z+0xqUek/Gr9sTw14N8IyOnn6f8AD6MWtxcLubdC3lW1iFG3gM8kvOflbpX5Y/8ABHn4k3XjT/gsx8FPEnjHWtS8RaxrevTw3+pajcyXV5dzTWU8UbSzSM0kjbnUbnOcADoBX9O134ShkvHa3/1TOzr9CxI/QipUeZ+9sFr6Hzz+wt/wRe/Zv/ZC8WDXvBnh2bxh44VnkXxF4puf7T1KCbaQXTzFRYnYnh4YYWKlwXcAAej+NfhPefD3U7nxHpSzXml308kt9DHEn/EvZnZjtVVUeSSflOOh79a+ev8Aguv8Q/Fn7MX/AAT41b4geBfEWs+FfFnhvXtJutP1HTZSrwuLkIVlXBWSFkkkDROrRyrvR1Kk15z/AMEh/wDg5g8H/tUPpfgf44Lonw7+Il8Fs7DV4nZNA1yUqoAYkkWs787klYxE4KlCzRnz8zy+nXjyI9LBY54KWh9UeOreXU/DXn+XLJHKNzQQldqn1/vDjHArx/V4obeRYV1LVIY2+aaCPdwPfd/TivubXfgZZXdnJHp+63bbkQFs2uTzle3Oc/LgYIIC/dHiOsfse65r2usLjT4Vtw+fPL/uofcL618biMnxUZWpH3OBzzCTheq+U4T4YaLbW7JJaMjQ9VI6n/e969R8LfDu9+JuptD5jWukxgJeT7dzEH+CNf4mPGfQEGu20D4D6B8JvBtxq2q6tD9j0tGnur27lS3t7WNQNztvIXaB1dmUL/eALV+Y3/BSP/g6J8O/C6C+8F/s2aPpPjHVLWOWCbxnqdvKuiQMpAAsrc7Wuz8zZd/LgDbConifI9LB5C3aWIPIzHiRK8MOvmfo/wDtj/8ABPL4R/tqfs4r8LfH2i+bolrE/wDZN5aTrFqGhzYB+021wY5NjjgklWRvuujgDb+ecX7IX/BQn/gmFfSaf8BPiPon7Snwpi8uGw8NeLZo2vdMQdAy3U6NH5IAAFvdrG5JYxKFCD6l/wCCIXxb8a/tOf8ABLj4cfEL4geINQ8UeLfF0+tXuq6le4Ek7jWr+JAqqAiRrFHGqIgVERVVAFVRX1Lo9tFBrCw28kyTzFVUR/JySR98cqTnaOMZavqIxiopR2R8bKUpNyluz8zPh3/wdMWXwn+J03gH9qL4M/EH4LeNdPISU2kT31j/AHRM9u/k3IRiGIaEyhvvLuDV634t8EfsE/8ABbGBbux1j4c+JPGWpDeNQ0S7TQPFkb93eFlS5mAz925hnQkEbRyT+cvif/gu9o+o/Gj4mfBf9q74X6L8cvhFpvizWNJsL1rOCLxN4ctkuZkj8qQsgl8sBFDpLbyptJMzDaok0f8A4IGfs9/8FD7PVNY/ZO/aUN9fabaS3LeBvFmmst9prM2fLnIMV3DAWbYZBaXAJOTK/wB41GpVg705cr7mco8ysbf7dX/Btt8Vv2WYbvxJ8LZW+LXg2NnuWtYLbyfEWnxAfLm0j+W5VcEk2pEvJxbnqfgz+wY9b0690+6WZZryJoHEqGN1kyQQUKqVIZSCGG4EfNhsqPp/S/2h/wDgoX/wQo1qyj8Vx69c+Abe8Fpa2viOT/hJPDF+BkLBb3ys8lp5ihpFjjmt2IiUlW6V9peCPin+zR/wcmeDd2mmx+CX7VOnWzMkcrJK2tqiKSgddg1CDAxl0W6gwTt8vmb6zLuJqlJKniI3XcxlR0Pwk0rTZtW8UGxuv+PjL28n1Tkfogqpa6lJClx93ypGDnzP9Xksf1r6N/bM/wCCfvxV/YG/aJbRviJ4V1DRbbVjcDTdWt8yaTrWYnf/AEW6wFL85aOVVmAILqpYAfPPhfT01nVXuGUmO1tpbm7UnrHGN2PTllVeOPmr66njo10pU9jj9naVzY0+/utRu5YbHd5UYDtnpuIA49sAUVT8MadZy6ObzUYYZv3vkRu/ViFDP+ZYH8aK0+r31K+tW0M8RNcfu23bc+YAh+Ziobj8ifr0r9Fv2w/ipH/wTo/4Iy/Bn4G+ELxdP8X/ALS+k/8ACxviHdpKYb6XS7gRrp9j8nzpbyx4jZB1WzmA4levgL4S/Du4+LvxY8JeE7OTybzxZrlnotvIP+WclxMkKO3srOG/Cvt3/gsv4S1L9t7/AILo6R8IfCNq3mx2mgeDNMWP/lzhe3FyWX/ZgS7kB/6518vxXWcYQpHRhz3z/g3R/wCCNfh/x14XsP2ivilosWp2007P4M0HU7RWsisblW1SeE8T4cAQRH92NhlbgxV+3HgvV2f47+LLWZVWZtB0mcEZO+Rnv0JJPJJ2Dk8nrXn+g/D/AEnwH8Hv+EU8L2q2Oi6Doy6bo9rH/q7aGO38u3RfYIkY+ua+ffjv+3H4i8M/tf8Ah3wD4H0mGXXPi14G0S5i124kDw+HI/tsloJRAeJZWknZ0zwotnJDruA+RprS51H2tq/h+MQWNnfKsli0/lXcbfdm3biQ35AD3ev43/2rPhXL+z38fviB4MkZpF8F+J9T8PQu33pI7S8lt1J/CP8ALFf2SaFDDD5cyyTTWkeFt5ZpDLLKgJG53PLOQMsScgkg4IKj+aH/AIKU/soad8Y/+C9nxs8LyXmoWGhzayuvajNYwmadRd2VpM42gMFDXF0ibmGB5nRug48RWjSg6s3ZJXNKdNzlyxPnr/gkvoFzqP8AwVD/AGdms/8AXSePtJmb/rlFcLJJ/wCOBq/rB0QGbVm9I/kH4df1zX4Sf8ExP+CVHiD4K/8ABSz4J+OrHxBaeKPBdlq9/NPdT+XbXWnXEVndBA6GR43UTxxQq6FWLvjYuAK/fPT9Ml0nVJIbddOl1oszRwy58myQscs2eeeQvsBXPg8yo1qarYeV09zatQqUpcrPgH/g5yTZ/wAEi/FH/Yz6L/6VLX82dsNxZeQrRlSSflIPUFTwc/nX9E//AAdceLh4c/4JbWGnhv8AkZPiDpVgw7qUgvLgj84c/Qiv527WH7NcyR/88yR+tdkZczuYyvbU/dX/AINEP2gPHfi/wv8AFzwb4k8Wa1r3hTwRZ6PJ4f0jU7s3UGhC6e9SXyS37yJSsC4jX5ASSOWNftI+p280Qkj2bVQKm1w+dwTGffnoea/C3/gznsPtLftOSf8ATPwvB/33/bR/9lr9utNk+3RzSe2P1etDM/AP/g67+PnjK8/b30P4aL4i1Jfh/Z+DtN1S20Brx10+e6ae5V53gHySP+6RR5nACcc5z+XsN4kpUrJJI2SHLnJDBQMc84AxgemO2K/Rj/g7Fg/42n6L/wBk20v/ANL9Sr855IvsrLN6xsP++QrVMtgP6hf+Dd19/wDwRY+A/wD2DtS/9PN/X2PLbfbH2PF5kagOp/2gf8K+SP8Ag39sSv8AwRf+AaRp500mi3cm1huVRJqV6Rx77j/3zXsPib9oGH4l/AXxrq/ge/1b+0NBDQRPZ21udQRUcMLiCOdTExaMs0Yl+RysgZWVWAz5nHUajd2P5K/2/rWGT9uz4zXmn2//ABK5/iN4ge3/AOuf9pXAX9AK+sv+DbfwLefEr/gsD8PrzTxc2dj4K03Vtf1SS3mMMjwCyktVXK/My+fdW+5em0tXC/twfBmz8aftS/Eu3+FOg6j448c2Fxca/wCMJLDUPt2nWoaR2vIfs8kQd5/PmQyBJPlZWSOMjzNnsf8Awa+fELTPAH/BSXUPD8l5KmofELwpdaV4f1OI7oxcxyR301rcEEg7obWVsgkF4YsE1UanM7GlSFtT+i/4nfBrwj+1J8NfEXhXxh4d07xP4V8UwHT9W0e9G+CdWkDjIX50YPh1kH7yOWPepQqSf57P+Cy//BCLX/2AWs/jP8D4fEl38LdGKXt7MupSTat4CvkcbJ0mjxJJbB/LaOdd0kJRhJt4d/6OfhnrUniDSWuphi4ZSkv++pCt+orL06xsvEPh3UNH1Kxs9T0zVjcW19a3cYmhnhcujo8Z4ZCjOGUghlbB+UNVPQyPxn/4JXf8FhPC/wDwVX8GQ/sq/tfWNj4ov/EqrbeF/E8y/ZW1e5VWaGGZ12Lb6oOtvcxlRPjaMSEfaPzj/bt/4J9a1/wTn/aH+Ifw11y4k1hrZgNB1JgF/tPTZRJNDdbBwjNxG6jIEsUmCRg1H/wWK/Y6/wCHaP8AwUO8SeDvDv2228NzNbeKvB0trMRcadYTmSWJY3ySj20sc0IcnLrAJDzmvvL/AIKZePm/b9/4JWfsz/tTarax2niWGyvPB3i+WFdhubiJpiJXX+GLzrC7lRewvq9TI8VVoVuV/CzKtHmjY/JLw5rGiw+GrOG41T+z7oPNNJD5TNs3vwMj/ZVTj3orjpI5ptMRo4VmjJUJH3XG4Fj9cL+GKK/RPaM8qVHU+ov+CN3g228c/wDBVH4FWt1B5sFr4ph1Bv8Aet45biM/8BeEN+Fe3aF+1XZ/Dv8A4Or7jxhdWvnWVn8WZ/B08f8AciKy6C11/wABVzP+Feb/APBBOTy/+CuXwck/59JdZuv+/eiX8n/slcj8SU8n/g4Y18t/qW/aLuA6/wB4DxI4P5An86+J4oqc1dI9Sjsf09azaSeD9X1S3jO8SRHZb79u4xYK89uHxjvsxX59/C3xRN41/wCC6Ph/wvcWvl2vgTwDZ2tjc+bu/tRWfVLlptn/ACz2tOy7P+mGf4q+1rPx+/izwjpurR/vNQ09nt7hVk/1skW1WkZf7rqYpc/9NDX4v/sHf8FAfD+k/wDBwz8QPG+r3mnweFL59S0DTp7q4xaw/ZYxZ2Uzt/DFLIilh2EzN/DXhy6FVPhP6DPE3iux8EaNJq0zHfOjRw7T8xiADMy+6bHP/Aa/jh/bP+OVx+1Z+0D48+JWqC7hn8ba/dapBBOcvaWzvi3h/wCAQCNP+A1/WlrIj+KVx4dnuHZr7xb9mhtrUptk063EXnXQj/2pPnT2WNR2r+OLVre6027bTb2IQ3VjIbaVP7rISjD6ggj8K56u5VPY/TH/AINa77V/EH/BR3S/CK6zrEnhGTw5q+r3mhG9k/sy9njgjjWSS3DBC4Dr85GSFA7V/Ql4O1uHw38RvEfhl2U6jJCus2fzZ+02x/dMcZOPLkZVwTnE4r+fv/g1L0f7P/wVLmk/54+ANVm/Oezj/wDalf0UX839pfvv75H6ACuCWDpOsqy3OyNao1yPY/K//g7l1Rof+CfHw0tW4+2fEhJwv93ZpN8uPzmNfgKvzIX/AOemx/0Ffu//AMHgWobP2U/gvpv/AD8eKr24/wC+LEp/7Vr8JtI/0ld//TI/yFei/iRzy+I/bn/gzW0rGmftP3X/AD9X3hiH/v3Hqr/+z1+zttJjxXcW/wDtNJ+bA1+Rv/BnppHl/BL9oi5/5+vEekxf9+rSV/8A2ev1n8UXH9l66kv/AE0K/wDfRz/WqJP57P8Ag7AuftP/AAVf0v8A6Z/DTSl/8nL/APxr824+s3+63/oIr9Ff+Dpe5+2/8FYFi/59PAWiw/8Aka7b/wBmr86EUM81u3/LQlo/Zhkf1qZbbXEz+lb/AII9/EVPh5/wQb+BMMGvWPh7XPFtve+HNGubiYwk3lzq16isjhGIkjj810zgFlC/x15P+0T+0xF4J8RXegWvk6Xfa1N4vvPEekabPI1jpc8Og6hrOy48iYLGwksUQwsQ3lmeZk/fxsPXv+CTn7Oej/tB/wDBCL4H+HdchmZrvQbm7sby2ZI7vTbttQumWaB2YbZP3o5G1dodWbDgBvjX9kj9ojwr8J9R8Baho3hb45+E7m0v7e3vHu5tN1fTY7u0lt7hYmlmR4BLBJJFtjmZVWUADFXTwFPFL3aiUuzdl955mMzathp8jpNx7pXZ4H8JNb0HQ9S+Jmm+E7XSPDvjQXGlDxDeW2mJF/bM0lj9sLXUmS8g/wCJh5glmLOoiYMzKJmP5lf8E4vhrqXwA/4LzfDXwV4buri7Tw/8Uzp8VxcBVml0+K5eN5XC/LmayV2+X5T5uRwRX1f47/aY8Dw+ONY1q+8XeB7a8uhLbS2114g0lktC6xRXJ3W3+lvcNHDbQtNIzSFLQKr8FW4X/gkLrfhf9pX/AIOI/A3izwtZXbaHG+r67dT3FuLZtUuF0qaI3IhH+rEt1cJJg4Zi5chS5UOplNfCL9/KL7Wd2Xgc1hi/4UZJdbqx+6X7XPxj1T9lXwbr3ibSbOG/jXWoGnsJW2rqEDwTiSINg7CdokDAEBgm4MpYVN+yl+174H/bt+CXhb4pfD3VJtS8P69btujuU8u8025TImtLlcnbNG+QcEqw2sjPGyO3k3/BTDxPJd/ALxHazTLcWLJb3NpEw+W2eJLxGjb67QR7rXkn/Bt34Gl8A/8ABIL4ZyXFu1vda9PqmqyI/DFX1C4SNj/vRRxt9GFFrSPRPnD/AIO8/wBngeLvgJ8Kfi5p8Ja+8K6pceF9R2x5LwXqebbOzf3Y5reRP+3uuJ/4Jm+CIf2p/wDg1S/aE8HKrLfeBdZ1vUbTyX3SFrS0stTCJ7SqZoiP9qv0U/4LOfDzSfi3/wAEpPj5pOruLePT/Ck+v205P3brT83sG33MkCx/9tq+Av8Agzk8d2fxA8B/tG/C/W4IJdJvP7N1BbeX77RXUV5aXZP1VLZfxqYytNMUtj8U7jW1svMmVo28xhuaP7pb5gT+OM/WitDx/wDDPVPht431rw3eSRvfeHb+fSroJ0WaCV4pB/32jH8aK/RaOI9xHDLc+6P+Db/QBq//AAUw8+GDztR0/wADeILiy95jaGFR+Pnkf8Crj/2kvCc1x/wcF+IoPDthd6hfL8c1vUtLf/W3Zl1JLiUL9SZSfY0UV8lnn+8m8NIn7gQ3GrX+havY+H9SghuvEVmupaFc3JK2yX8aHypnI5COG2SEchJpGHzKtfzc/sbeD/8AhDf+Cg3gvw7428O3F01j4vtvD+u6DcQLI0u+Y2lzaSR/xAguhVf4cqvLLRRXl4jdFqTZ/S9+y74ri8CxfBnw/p8l1cWvhTw1/ZKvdhVukS2iFsHmVeFlIILgcFskcEV/Ld+0R4WuPhd+1N468M3h3X3hzxRqemXT/wB+WG8lRj+a/pRRWc/iRcT9Jf8Ag0j0c6v/AMFLfiFqLf6vS/hvfbv+2l/p6n/x0NX9EFjY/Z4/LPVSQfrnn9c0UUGkNz8av+DxjUdngr9m/Tf+frV/EFx/3xDpyf8AtWvxT0g/a33+ob/2aiiplsZ/aP3r/wCDQV/sP7MXx0k/6nGxH/lNWv1a8ZaZ59pJN/tbvyyf6UUVEJalH82P/ByDrv8Awk//AAVa8Xf9QfwroFp+dsJv/a1fCsPl39jAv/LWNZcfQ8f1oorSWwH9Tv8AwQO0mSz/AOCN/wACbSb7zaJPcxfWW+uZP/Zq+uNBu/smsRtwbjPlTfTqP50UVMUB/FpDfHULaa+YkyalPLdS57SM7b//AB8NX6Of8GpehQeKf+Co2vedH+80n4a6veQv6O19pkQ/R2/OiiqlruB9cf8ABff9suT4SahrWgWd5cR2eifDm91O4dU2/aNS1K/bTtLhVv4yIYtTkePuiFv4a9C/4N5f2k7b42f8Evvh9p5a3a78BTXfhTU2gTZGxgfz4yB3Jt5rclv4m3N3ooq38SArf8HH/wARdQ8K/wDBH7xt9hn+yz+LtV0uz1GXO1jBNdCVY1b/AG/s3zD+6rV8Gf8ABoL4rHgL/gpf4n0Nbpo4fE3w7ugLcD5JbmK806aNfcrE84J9WNFFc9TcUtjx3/gqp+z1pXw4/wCCyP7QmhWd19hszrQ1sbfvGTUre21CRfor3LL+FFFFfoOX/wC7x9Dhluf/2Q==",
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
                name: 'Loris Karius', // tên bác sĩ 
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
                name: 'İlkay Gündoğan', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
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
                name: 'Lê Văn Đỗ Kỳ', // tên bác sĩ 
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
                name: 'Xavier Hernández', // tên bác sĩ 
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
                name: 'Yann Sommer', // tên bác sĩ 
                position: 'Thạc sĩ, Chuyên gia tâm lý', // chức danh
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
                name: 'Lautaro Martínez', // tên bác sĩ 
                position: 'Chuyên viên tâm lý', // chức danh
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
                name: 'Kylian Mbappé', // tên bác sĩ 
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
                name: 'Hà Kim My', // tên bác sĩ 
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
                name: 'Sơn Hồng Minh', // tên bác sĩ 
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
                name: 'Richarlison', // tên bác sĩ 
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
                name: 'Mã Đình Sơn', // tên bác sĩ 
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
                name: 'Ange Postecoglou', // tên bác sĩ 
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
                name: 'Linh Hà Lan', // tên bác sĩ 
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
                name: 'Trung Lê Vinh', // tên bác sĩ 
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
                name: 'Lê Đô Sơn', // tên bác sĩ 
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
                name: 'Romelu Lakaka', // tên bác sĩ 
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
                name: 'Pep Guardiola', // tên bác sĩ 
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
                name: 'Rodrigo Hernández', // tên bác sĩ 
                position: 'Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgVFRYZGRgZHBoeHBwcHBgcGhwYHBoeHB8cGhgcIS4lIR4rHxgaJjgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHhISHz0rISc0MTYxNDQ0NTQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQxNDQ0NDQ0PTQ2NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQFBgcCAQj/xABGEAABAwEEBgYGCQIEBgMAAAABAAIRAwQSITEFQVFhcYEGEyKRocEHMrHR4fAUQlJygpKisvEjwjM0YsNDU3ODs/IVJWP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAnEQACAgIBAwMEAwAAAAAAAAAAAQIRAzEhBBJBIjJRYXGRsRNCof/aAAwDAQACEQMRAD8A7MiIgCIiAIiIAiIgCIiA+Ii5R6QvSQ6k59msZhzSW1K0A3XD1m0wcLwyLjMEEATiASOiaY07Z7I29aKzKYOUntH7rRLncgtStHpc0e31eufvbTj97mrhFqque4veXPc7NznFzidpJknmVGGEtLseRgeC5ZKj9CaO9KGjqpANR1In/mtIHNzbzRzIW22K30qzb9Goyo37THBw72lfkbrDOEncfeFc0bpGrQdfo1X0na3Mc5sgbYMEbilnKP1ui5V6NvSDUr1PotseC95/pVLrW3iBix4EAOMYGMTIzieqroao+oiIcCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiA1b0hae+h2Ko9joqP7FKM77p7Q+6A53JfnOnQe90Ma5xGOs5azGPNdc9N7LzrG3V/X/ANoZc1Q6M2QMpgAQY5qrLk7UX4odxzmnYXnNhEHGRt2HavTdE1ySBTdd712ajYqeb2g8lafSY1puRiNkclR/O/gu/hicMr6GrtxLIjb7lTZZHY4Y/PzyXX7VSbjgFq9ssrb2QXY5m9nJYV4NKDHS17XEOafWBIcHAy1wOo4BfpboPp/6bZGVjg8SyoNXWNiSNxBDhucF+edMWS6/DM+3cuqegqseptNLHs1GO/Oy7/trTF2jNONHVURFIgEREAREQBERAEREAREQBERAEREAREQBERAEREBzf0qWPrKtjAz/AKwGwE9WfYCq4YKTWtGJ8TCzXpDbJshAktrY7mkBpPeWjvWMtVPsuc0BzyIE7sv4WPP7jZg9pWGk2MMPkHZjyxyV6yWxlRt5juI2cloekNGVnva55a1pi9AxbF6RhEk9mCI14NWz6BodVRdIE3RJ2nVz1Sq5KKXBYrZFpu2U2EguEgrV61YON5skHdgsfSY60Wl4qODWgumZicSJAxOrLbryPym2qx0Oa0tLouZuDdRkZwNisUUiDk2X7To/rG3xm3E6uK3/ANDdku0rS+PWqtZxDGB3+4VqFmf2H3fsO/afcuiejFzRZCwHttqP6wRBDicOV0Nx9yuxspyrg3RERXFAREQBERAEREAREQBERAEREAREQBERAEREAREQGtdKhjTwnPuDmknkAsU2zgrZNOWS+0OiS0nuIgrAU6kNB3BY8sfU2zXil6VRXfo5mbgonUC5jg0ACDsA2a+K9Otge8nUMABrOUrH6QZUIcWvfdMBrYbdbrnASe9VUmXWzVaFluWm69uFT1CREuZgYPILNVbEGSbre4T3hazaWV2VGl7pDXlwOGBOeWuMFtZ0g2pTLgZIGJ26pXZLyEyloyz9p5jMQOJWW9EVc1alqqkQ+KbXiMnB9Rxg6x2vCNUnH1rRdY5zZJa1oAaCTeJDRgN5B4Ld/R/0eFjs0Ft19Qh7xrBugBpO6D3rTiXJnyvg2tERXmYIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiID4tW0xSu1Hb4d35+MraVrPSN0VGnVdE95hU5lcS3C/UazbrA/1qT3Mggua27225FuIkbcPFWupY5oLvpGMSQWR3/OYUjq0HNVrc68JbO/ZKyp0bLNR6R2Al92g57Z9YvLXGJOQG6M9m9WKNylZwwdp5gOcYkzBjDAasl9tlVjSZmfnYqrWEid/grFyRbSZu/o+pXnueR6rQJ3uPuaVv61H0etii/beE/lW3LTBekx5H6j6iIpkAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiL4SgC17TYBqQfsj2lZetXOIaBeg3ZyLokDgYPcVrVOo50ueTeJMzqIOUaoiIVGd0ki3CrdmEtNFzCYxGz54rE1NKXZaQder5hba9gKxtv0Sx4MgA7VnT+TTRoNoe577xMDerL7RdgL5WskPMZKtUZefKsu0crk6p6Oj/AEX/AHh+1bguIjpdUsLQ6ldcXEXmOm64QccMQRtHit96O9NBWZSNekaT6rL4iXMu33NaZzAIZemIhwWjHzEzZVUrNyRR06gcAQQQciCCDwIUimVhERAEREAREQBERAEREAREQBERAEREB8ReKlQNEkgDesHbNOZtpD8R8m+/uUowlLRCU1HZlrXbG0xLjjqAzPALC2m2uqYHst2DzKxxeXG8SSTmTmp2FaY4lHnyZ5ZXLjwZizVusEH12+I9+A5gKG12W/Lmet9Zu3VeA27R550qby0ggwQsjZ7SKmXZqDMZTGEtPLyM4KnNhTVeP0W4srT+v7MVdUNpxaQs1WoteTPZd+kneNR9uolYq2UHNMOEH28DrXmzxODPRhkjI1C2WIXroVO1WQDALbG2Iud2WknUAshZNEMpOvvAfUwhubGnVO12wZ7BrHceOU2dnkjFWzSbF0LaXNtFqHZGLKRzfGMvn1WDONeuBg7Y6lAtms8C+4XWNiIHDU3IxsAyJhZq2VW0+3V7Tzi1uE7i7MADUMY/1OxWHqPc833kFxHAAZw0bPavUw4kl9P2eZmzNu/P6KNhNSgZpPc3aMw47XNOBK2OwdKwYbXbdP2myW8xmPFYm6qlSitEscJbRmWSUdHQ6Fdr2hzXBzTrBBHgplzGg+pSdepuLTuyPEZHmtk0d0oMAVmfiaPEtPl3LNPp5R5XJphnjLfBtaKtZrUyo28xwcN3sI1HcVZVDVF4REQBERAEREAREQBERAfFQt+kAzstEu2ahx9ys2mrdaT3cVrx7RJJkyVbjgpcvRVkn28LZDWqOeZc4ndkBwCphkE8T8lXAcSCoKrO1hrHwy15LXHjgyPnkAcvYp2ZKFjdnhj4Kan84Qus4j1CrucQ7ZrHwOoyrMqGuMRz35btea4jrL1HSAIiqCdQI9YDftG7vlXqbQ5uLmup78hw1tdj7g1YBp2eB8irFJxGIJHKFXPCnothka2Zek3AimLo1kzPMnEcM9t3NULTbmtN2kQXY9oiQNtwZc++8vNptbnNjBoGENwH8bljnSNuO+PYuY8SW/wJ5W9fkqWk/WMlzsyTLiVYeyICicASOI4Z7cyrLxitDKEQ3YVd3L2q08YKBox1BEGROb8n3KdjezuAxUdfEZzuHvWO6W240bJVLTDi26OLuz5rrCXJPo/SLqRbVYey4jDU5pOvcZz5rotlrB7Q9uThPwO8ZLl2mKdywFzcCyhhuIbAW3dENIXi+kTkbw5xI8Qe9Zs8LXcaMMq4NrREWQ1BERAEREAREQBEXlxgIDGaTqSbuz2n4e1YlhgxtLverNapJvbTKq1sC07D8FsxxpUY5yt2fbQ3IqtUzHPy9+auPbIIVatgBzVkSto8cp8T3r3Tdx5pZ2F2QknIZ+MSOa9mi5rocCOM+a62tCns9BRWnVx+eHFTsZM4gAZk+ziq9oOXHhq2ri2Ho8j5wDvEKWhn8D5qB2GfiCPEKSzHH+fNdeji2WKjcFVgZQPylXKowVR/LvK5E7IrVKRDgROYzga9QVhmK8jMcRkI17TivhpOqPcxshrWtfULTBhxLWtvSCB2XucRjDYETKTlStiMe50iOvWY3AvYHbC5oPcSonM1ge5ZGz2I3GljKbGPAc1sgOuuEiWCnAPa+sXZCSVj7bZ2svXWdW4SXsFwgtN50sAcRNxpIgC9cdOJEVw6iLdFssDSshc/DmMsu/XwWsekR00qbdTqrR3yVn6FWTcd6wMZzgNh3jUNqwPpDb/Rp7qrT3NctDKY7Mn0rqf/AFtTeGN73tHmp9EWzqrVM4NcGngRdKpacN6yWZmuvXog8LwceQDVjdG2vrC94+vXN3gHF58AVCSu0TjwrO3r6sboK09ZRY7WBdPFuHkDzWRXntU6Nqdqz6iIuHQiIgCIiA+KppGpdYd+Hf8ACVbWK01U9VvPyHmpQVyRGbqLMe84BQVjt1+Xw9ild6vNQ1wS3DMYjiNXPJbUYmSNdhyUNSneEnKfIr7Z6gc2dRXuoZGwArumc2faVUtIIz1SXD9QOIVv/wCScQQ5rXDujxKpD51fAr61vzA8lFxT2SUpLRYtYFwFogGZGJg7yd2SpVsm8fI9/BTuJuluoxPL+SobQMBx46jqXYKjknZXe6N3Mt8F7sjpd8Sfgonu3/q8ivdhdLtvOfgpvRFbMjUyVV54/mCuVMlUe3j+VqgiTIRi4cRtJ78grOjXBtepTcY69jbhP2mBwc38rmuA1w7YoGYkDWNpnwGAX2vTDxdduIgkEOGTmuGIIORCZI9yo7CXa7KOkLbWpdVSbTDrl1lS866WMbda141XSMb+IF0jPLJWe0yyvaCf6dwtaYwc0Nwu7e1LRGciJVOtWrj1nMqDUXhzXgxE3mG6T+Ea9pnH6Tt1WrHWObAxaxoIbIyc7tFznDUSQBslZ4dM+66X3NEs8e0xodJa5hlzBdO8tbBy3jisd04tAdZ2O/1ifyuXsVeqe1w9Vzg1w+8d2GeoKHpfZrzWUxk+vTA4OkHzW5mSOybpFaCynZhro0H1P+45raTB+aoT+FQ9E7HLmM1U24/fqQPBsd5UelqgtFdrWmWvc3h1VCTI4ueON1ZzoxTu0utP/EqXvwg4DuaovhNkl4RtXRa0BjzRvSHy5p/1twcObQDH+krbVzWw1WUbgD5eHlwAxIdIJGGQgEGdpXR2OBAIyIkcCvPyRe/k2Qa0SIiKBMIiIAiIgPi13SdS887sO5Z6s+Gk7AVrDzOKvwR5bKM74SPc4LxTOYXoZKJ5jtbPYtKMzKFGpcr9WfUfeLT9l4EubwIF4b7+5ZN7pEDIR7Vi7S8NrMnJ/qnY4YewlZQDskcV2S0zkXtHhh8fHnkfAr2wfMDyUTHa/nmff3qzZ7O4iQCRthsd6jJ0SSs8lQWnIcfI7Me5X/obsZutja4BR17B2QXPYGzniZMHARrwOWxRU43sk4y+DEVnYTP6gfaJU2jsT8Z+CntVja4sY2reL3RgBhAJ1mdSnsdjhl+ZglsRsJEzPkpPJGiKhKyR+SrPbu/SPer9KjeIBkAziOCrfRi5zgMgcTdaYAOeGaipJEnFspswcOewajqHmpHKW0WUscBm0yWkRBEZ4CNfjvU1GzNcCS4gt9bAkAY4yOC65qrIqDujFWnEEd2XmsE+peaRrGY4Z4DzKz+kKTcm1WFxOAcC0k7BeWu2ymWPMiPtNMYf288VbCSZGUWjE6Ud2JP22AcjPz8kwdMLRLKABxdUb+1wPtUHSm0FvUgZO7R+8Oz5Kvbn9ZUs4OIaS4jbdEgczdHNFySqmjLspQ601RlTYygz75Haj8TgOS2DSDBRszGfZZ4xd9rlFZ7BDaFHMucatQ7TM4/icO5Q9KrRfe2k3dP3W4+JI7l188EV8lbRTJcXHUMOeJXS+jVpv0G7W9k/hy8CFoVko3WrYuiFpu1HUzk4SOLfgT3KnqI3H7FmGVS+5uSIiwm0IiIAiIgMfpapDI2nwGPuWCesjperLo+yPE/IWNK14VUTHmdyPbMlE90GNqkYcFBaRhIzGKuWyt6MRpsHq3AevTh7DuBx7su5ZiwWptSmx7MntDhwIla/pi0diRm3Eb2nBzfFZbo1Tu2Szg6qNP8AY3FTnwkRjy2ZXR9EGoAcsfZIHDdkVctFdt43i8kagWho3DWsWXkOkZjvHdj3SFbOkqkTI49mfYs04Nuy6MklR5tBDouscMyT2jhxyCkqNmzt++f7tXNU/pL3mC5xGzUeQVt1F2DNc5E4ZEo1VWE7uipZnTaKYnBt45j7J2461lLJUIpSM77t8YnasGLMajpDmiCGiXHFzpgDsnHA5q5YKBOOGBaDmSJwGerBdnFPz8CEmuK+TIstjrwkiMcyAOahtdqDRDACAZJIaQ5204hQ6QYWgEnWRsyw+eCjtVAtgOIEgSezhOBnhj3LijG0zrlKmiWx6RFQ9W9rQNRb9V2OOGA7/NW7NRIFUYSQAMRBwOR5rDtszmPaHZkuAGeAwDtQAJmNsK5aqN05gkTMTh3hJRV1HyIye5eDW+kOiKt6/dyg5tIgZ69ii01a2ViXsMtbDZGRgQTOWeGEnBT6bpSePDzWs6Ir9h9M5tLh8nPugb1dBNvkrk1XBiOlrezR3dZ+5p96h0I6/XpA7D7Wn+1S9IHTdafqz5e5Yvo9VItbBjF0xsJkjDbifBSXDO1cWdas7g0vrOMNa2J2NaPfK1uz0nOqCq8dqoSQD9Vmr2rYalK+xlP6uBdvjEDhOKrVKU1J+yI5qXkq8EraeCioWg06jXj6hB4jWOYkc1kKrIZKxYpOc661pc7YASfBRdNOyS4Z0um8OAIxBAI4Fe1jtCUntpNbUEEZCZIGoFZJeY1TPQTtBERDoREQGMtejbxLmugnUclhbX/ScGvc0EiRiMRMYStsWl9J3h1ounG61ojvd/cF19RLHG9kY9PHJKtFgFQWl6qWYBo7OHDBR2y0kDVz+Cnj66DfqTX+nJ9DNe12YqtjXYBlevHgztu7w1ZrooXfQ7OHes2kxp4BsDwAWD0VTdVfWfGFOjVdhreWFjWnjeJ/Ctus9K41rRkGgdy2PJGfMTIoShxIjeO187PnLFeLS/ACfH3iVPUbiN/l/Pzrq1nXngT4n2ELqIsu6OaAQ52Qx4xl4wrdotIDmOg4AyM8gRPiFCwQAFXt5wA46p2ahjzCr7VKRPucYkOj7YW3sAZcCe0cgCIEtkHGZGxWbBXhzoxBbGZwOoydYVKiIGfi7zCms3rT7z4lSlFckIyfBcttoxa4gdmMJgGMceJUFW1F7QHRIJMywZ54RtxlLcez8YVdj+zn+oe5FFUiTk7ZC60S9pIwaGtzJkAAZ5CY1LLVa94AQcJzN4md6whPbnjtPifJX7I+ZC7KK4+hGMnz9TH6abgDsO7zWg2yp1VrP2XgH57vnNdD0yOyVzvpcyOqqDVLTygjwPgpJ1TOxV2inp14vXtUT3LdOkej2ssOiqrR/h9W0ndVpXnE8XsbzK5rpe0F1Mx9nwwld1tuj+v0S2mPW+j03M++xjXt/U0DmqMs+2SZoxwuLRj7JiwHcqNstbKeJk7miT3mB4qPQVpv0mmZwG9VdLtkFZJ9e79K/JfDoF/Z/gkoaeLzFy43XPaJbr3DXtXTKFnawQxoaNwhcOo1Cx8HIrtGhrR1lCk/WWNn7wEHxBUI5ZT2yc8MYVSMgiIpkAiIgCIiA+LnGkbRftFR2q8QN4b2fJb3pW09XRe/W1pI45Dxhc2srCB88c1m6h8JGnp48tmTa+FQt9TAr4bRjmqWla0MJ4qmC5L5vg2noPYYs9aqf+JLR91gOP5nOHJX35q9oOzdXYqTNfVAn7zm3nfqcVScvWw6Z5GfmRHV9m46+GOpV6XrTPifYV6eZn3A+zEL1QGPxd7CFqXCMz2XAFSt2JAzw2T4Z9yulUrUJdG7cdZ1HyUVs7LR5ZgNnN49q9WbOff7SvOQ/wDcL3Zhj/PmpPRFHu2ns/z5KtRfhn+o+5WrX6v8+Sp0n7/1O9yR0Hsq1D2+/HH2u8lcsTlQr+vyO32uxKs2VylLRxbJ9LNlh+PktB6S0r9mfGJYWv1nCbp8HTyXQ7UJby3+S0600g68x2Tg5p9YwCCJk4DNR/qTTqRzhjbwLTrBHeF+ldAiLNZx/wDjTH6Gr839WWkg4EEg8Rn4r9M2Fl2mxsRDWiOAAWTL4NkDmtkofR6lWhqpvcG/cPaZ+ktXu0MvmFP0mFy3vH/MYx3OCz+xe7LSESvKyKpM9KDuKZrGmLLd7QGWxb96Obdfs5ZOLHH8rsR43lrWm6Yuk7lN6Mq8VqjPtNy2lpHkSp4JU6IZ43GzpyIi2GMIiIAiIgMP0p/ytT8H72rRx6iIsfUe5Gvp/ayj9ZV9Pf4TvuoijD3IsnpnWz/g/g/tWDeiL1cPk8nNso2nNvAK7Z8kRaXozeSQqlbPd5oi5HZ2WhT9VLL6xX1FJ6ZFeCW0qBqIi0dezE1PXd861bsuaIpsgjIOyWo2/wBfn5oih4J+TRbf/jv/AOo795X6URFjy+DbDRznpx/nmf8ARZ/5Hqeh6p4lEXm5fcz0MXtRitK5H51qD0c/5z8LvYURMPuO5fYdcREW0whERAf/2Q==",
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
                name: 'Rúben Dias', // tên bác sĩ 
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
                name: 'Joško Gvardiol', // tên bác sĩ 
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
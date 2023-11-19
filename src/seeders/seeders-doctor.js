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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám Tai mũi họng', // tên bác sĩ 
                position: '', // chức danh
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám tiêu hóa', // tên bác sĩ 
                position: '', // chức danh
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám Thận - Tiết niệu', // tên bác sĩ 
                position: '', // chức danh
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám Thai Sản', // tên bác sĩ 
                position: '', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 3, // của cơ sở y tế nào?
                image: "data:image/png;base64,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",
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám Sản phụ khoa', // tên bác sĩ 
                position: '', // chức danh
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Xavier Hernández', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 2', // chức danh
                //specialtyID: 4, // của chuyên khoa nào
                clinicID: 4, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAC3ALYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDtkqSLO1qqRSbM1LHcYrzz8KirKxNHSSy+XimCXzKbN2oGElxmmGTfTJKQSbFagBzz+Sh965rxz4/k8H6PJJFp/iLUppg3lQ6Hoc2s3hZRuytvEVLALuOS6DOBu5NaWoz70aP978wB/d/e4ZT/AHv/AGVvw7/HP/BQr4l+LdT+Ifh/wR4TkZLi+bewgCm4WQyxpFJzuIZGiLKQE5Hfs/aW0PeyHK5YyvZ7HWa1/wAFALzTbC+0+PSdL15jYrqum/YtXhkvtcjlnSD7JFHYreRpcCRrhSGffH5EZkR94eTgbD4l614u+L/he4/t7UbqS8e18Y6NcNBKiyW0d+LW8hmjhkf7LIIY5JyxLlEhYCaeQxivZfG//BB39or4Q/BPwb4m0WWTxdrGuabA+raJY6q1tcQmFEFsEZpUR1REjYkvGU33AXLugrwXxd/wTh/aC+EugafHc/DrxRb28kB0+ysEtIi0TO8RMytb/KvnRW20hsIsk7sf4iZljKEXae5+tYfh/wBilKlC9zR+DP7XfiHwDd+H9DuFkivtI0SK51O/vRNKQkK/Zt8s8jCZvMMXktBHmNn+cY2FR7t8Mf28U1fVbOz1qRZLG8f7Gt/a2kd1NdThX8zylEokhgHlSIEkByAAP9Ua6D9hv/ggj8QPjb4lW6+MjWPhnwXC51N7GwlFveapLNJJO4mC/vVH+kyopl+ZQCB8myun/wCClf8Awbxal+y38MNb+KHwp8SyXGlaSpvNV0K7dVMSmbcksMpwcqWLO7sMq2BnJojiqNR2WwY/IYTpOOKVn0R2FlqcWo2FvdW8yXFrfRrcwyocq6MBtOf4mIAJbJ647VIZN9eS/sXeMW8WfA+xWaH7NPYu1u0BTy2g2nZgoMquWV3ADH5XU8Z59Zq5WT0PxfMsC8PiJUX0EZ9gb955fyt+PFfZv/BLOTfeX/7zzPnP4fIK+M2+5J+78z5fy5FfX3/BLr/kI3v7vy/3jfjxXZgd2aZMrY2CPv7T/wDjwX6f415T+1Um/wCFGr/9e0n8hXq2m/8AIMT/AHa81/aOTf8ADrUv3fmfuJfw+Wvayv8A3yHqfpmM/wB3l6H4+6+hTVZv94/zrPlePcqzf6turf3ateIU2arJ+78vk/j8xqkv/XPzP6V/QlL4F6H5n1ZraX4+1LQreSO1vppLZMYVP4evWmaddap4u1iOazlupLxDvRay5Tx/q/L4P417f+x3YxXusW/mRxSbWGN/brW3PCmnN9gUZykorY+yf2MNUutZ+FFv/a1rLb3USqrF/wCPr/L+tFewfCm0i07wxH5ccUe8DOzviivwjNMVOpipzjtc++y/Cx9hHm3PyHEmymyyb8VVS+4NQyajsf8A1fmf0r86jUsrH5z9VqmpadWqa46L+NZceoxuP3kfl+nvUkl9HtHl/jVe1D6rVLok2Ukkm9P9Z5f9azU1Ly2PvRLqXmYo5r6lxwtWxDq0rW6M8dz+82sqfPt2tjO7HfGCfwrB/Yx8A6Lrv/BQfR9Yure1k1DQp72WW4mtI2Mh8ppYQCfm/dxzbvl/uDPatjVL1I7J5jEZJIuVOSVjHUkqPvchQB1yRiu8/YR8Flf2wfF0Fzp95ZatYadBeTWlxBLazRFIorQLKj/OJCr5+bggjHevJzipKlh3OG5+i+HGGvmHLU2P00ufiHY+ILeGGSLy9saqg6DZgYGOvcnn1qrDNYoXWP8AhxmvI9a+OPw8+EOoND4o8ceDfDN5borm11TVoLV4ISW2l1kYBejYJ68+ldZ4R+NHgv4g6a154X8SaJ4q0+ZObvStQhvIiOpw0TFR0/GvBjjqlRc9U/d44elD3KJ2dprcej3azRx+ZtPPtVv4tXFr8V/hZq2j3saLa6jZSQSRn/loCAfQ8ZHNfMv7SX/BUr4J/steIrHSfGWu3d5r2oMhtdK0jSJtS1CXdgKojjUjPAxuwT/D82K6L4T/APBQnw38ZfE2l6O3gP4zeDbvWrpbSzuPEngi806JyQShd5UwiMQFDHgM6/xbq9ClipexfJsedjMPTdRe13Pz68F/CX/hSXjnxVocf26a0sZba3hvLr/W3pECu8knyj96Xkbd+FdO8m8V9k/E39mXw5d/GjxlqF/pdtq11cNbi1s/7Ql00wfaUijmlLxBWmWII8oXOxmaTcV4YfF9pd/b7OKcRtM06JIzsw3HKKOnBAwBjgD0A5UenRxTqJQfQ/COOsmlQxaxsPhn+mgrf6uT6f0NfX3/AAS2/wCRn1j/AHl/9Ar5DP3v9X5fH58ivrT/AIJc/wDI96t/vf0Ne9lcuaumfMZTFLHQP0M0z/kFL/u15z+0Um/4Z6t/17v/ACr0jTv+PP8A4CP61wP7QCb/AIfX/wC78z90/wCHymvoct/32PqfpWM/3eR+NPiRNmt3n/XxJ/Os9/8Arp5f9a1vEybPEV5/o3/LVv8A0I1TXp/q/L/rX9EYf+HH0PzPUpn/AK6eZ/Sr+geIb/w1d/atPuvss6EENVK4++tOEmxK6JfDbuZy3PpX4Wf8FHNd8CaatrqNv9pZo8LN/fxj/GivmQz/ADUV4WI4ews6jlNanRTxuMhHlpbAt1sU0xbreapx3e+pjP8AKK/l49r2RZin60/z/eqXn06OerWweyLEs/Sm+fUMk9Ec9M0jS0LmlazdaNrVje2qyebp91Fdp5Yy5eORXUL6HI4PqBX1h+yp44uvFPxc8FXWt3eqeLJbPwpqkKeILo7jfwy3dluRpOm6N7Q7s9JGI718gX0+LUleZAw2r6k5Gfwzmvo//gm545hu/DvjDwzf/Z7J9Bks9X0Unb5xjuJXjvokz2UxWrH/AK7CvBzrC88PrHPbk6H3nA+O9jXlhJbTPC/jz+zTqnw18Q+Ir7UvhH8J/G934ke7ll8QfEGPz7nzGZpdrq1vNIbbcUjjjtvLaPyQzOAwVuq/4JR/8E+dM+EXxnXxyt5oEmn65YCJ7Tw5bvBoDXcg3SvA8km+dImPlo6ArtZhkHKr99eIviH4S8K280fiS3srj7PumjaWKOTYFZvmA79FBHvntXk/wx/4KB/D/wCJdpJr2saxZ+E/D8OtCw8OyXlyqw6lHGke6YfwqHk+0pEW++kSuPv14FOpTlCNKpU0P1WnhuS86cPmeL/tX/8ABOm6uvjlqXiPwa/i7S9Q1TeWn0GCwa8kOz/XEXKZcq23KqGZjGQCmcn2D9h39kjxHolnFdeMr7xdqF+rBJ7zW4tOiSSBCkgD21vFGszmRd4nmUSxYKoPvu/UfGL/AIKCeBfFvgtbXwB4x0zUvFLLHcQtFbm8srNFePdHdsvCpJGCv7siTgkEBWYc7+x7/wAFPLH9oLxrc+D763/sjxRauYNQsgoCAnAE8Ug4eCTBZHHXDAgFSo3qeww1R8jumZTp16tPnasz0r9sLwpFqnwr+IXiaANJqGjeFbqy8zaWXZIRvAb+EiN5iT1feM/dFfnuNUDmRf4mcyN8u3luvH+8DzX1R/wUE/aQ1rwjbt4Q0mWzbRPHGlSQ6m0sHnOYo5AhjVvR1eRD7NXx20uDIcFcyHKsMODtU8j1wQPqDXuZbRp1Fzs/HeOabqYiNB/ZNg33yn/eH9a+tP8AglZd7/GV79B/7NXxiLrY/wDwE19Zf8Eorrf491T/AK4J/Nq+myyKjWSR8Vh8N7OrFn6caVJvij/3a4X49pv8F6p/17v/ACrvNLffEv1P8hXE/G9N/grVP+uZ/ka9rAf70vX9T7fEa0H6H42+L02eLtT/AOvhv51myJvFbXjr9z4t1T/au5P51z88m81/SdCF6cX5L8j81qX5mRzx7GqI/eFPeTZTTJvrWzWhzy3CZ9gWiiijU0jex5/b/wBuTf8AAatJBrmK+2Y/2YbFP9XbfWp/+GabVMf6N/5D31/CceItD2vbVHqfEcNrrjmrDaVrk6j2r7Y/4ZwtU2/6N/5D2VYh/Zztdv8Ax7VX9vX1M3Vq3Ph+LRNYGfM/CpF0DWJD+77da+4E/Zztc/8AHtViP9na1T/l2rKWeVL+6VGrVPhm48K65Oi+1Zt74P16N1kjZ1kh+ZHU7WhbIw6nswOOewLHtX37J+z1Y5XzLb6U/wD4Z3sXT93bfWs5Z05RcZdTow+Mq0pqp2Z8Z/tWftB3XxB+Fklt4kddJ1S40kRfaBuSOeVVKlVK8qrrGCODtNw/92sf4T/sw/F7x78IdL0W80H4e+JfD93blLnS7PW5bSaz02UN5KvHIsSszBlbAlXa2wE9j9Iftd/sxeA9b+Dsmn+NLrT9FttVv7XTdKvLpS5XUrqQWttHGoyS7tOQdo3CPzTlQGYedfDP4Wn9pPwjeab4s8b+IvCfxF8F3H2a7GnRQxyQmGV41ZXZ1WRJlwQ4by2wRhGXaPKpUeR+1P6JyXNo5jh4qW9ira/sTfEL4YWVnoPgbR/hx8PtB3TJqUurTI0FnbKjhJIktr2R53kwrkSJbIGLZY53DnPhd4Cuv2TP2mdLmm1rxB4i/wCEjsLqSDW75LaJbeQPCWUiKOGTy2k2EIVKgRuAfmNdN+z/APsCQ+G/Ha3vif48eLfEyafPiO1nU2sEmAGPmL9ok3bcq2XC43HdkFcO8W/Gnwj8Qfj3Y+FdPuXvPCXhWS4l1SWFvt8j3BCbrK2RWMzTyBNiiEYP2oqD8wB3lGri5+zowvJ2PV9tQw0b1J2Wprf8FLZPFnwq+C3wn+JNn4Pj8eaVqmuN4e1hEv71Lyxa5Fu2neS1vcLGuUW4jaWSKdVkMbGNt2D5tD8Pr45MN1FeQ8YkjUIFO0ZXAyoI7hSQDn6nzT9rv/gq9rXxA/af0/wR5NvJ4P8ADl4bZbOxumuLSOSW3wbnzjGommR5JomOTEFjaOMHLSS1/B37eMXgXVLqSTT3mmvNTs9Mit2kVlu22sbg4XhfKh8snHUSxR1+95bwbOpkao1f3eIivd7O7v73n2P544qxlOtjJ1KTum9z1dPhxqcx+lfQP/BP3Vrn4R/FSZrqTy1vkTHvs3Z/9CpnwM/aH+HPxneWGG9sYdQWbZMibhbGQ8HaRwF44z0GF/hr263+EEPyz2oi8vGUeLaU/Ajk/jX5zmNTMcpq3xFJ2Pno1Kl010Ps/wALfE6x1C1jmW4BaSNd2fxrzr9o74wR6N4UuvJk8xpgU+nH/wBevDrODV9FiIhvvMVeNv8AcqHUfCupa6nmXUnmK+ce3rVYfjSmnz06fvI9upmzlT5H1PijxX8OtS1TxTqN0v3Z7l3H4mqyfCvU9tfYz/By3MjM0fmM3X2pU+ENqh/49q9ZeLWZx92Ksj572Nj42l+E+pvimr8HdTmP/Lb/AIBX2pD8JLXH/HtTm+FFqhH+jUf8RazZ6i+rX1Pi5/glqbgf8fVFfabfCu1wP9ForOXixm1w+qnfLomBS/2LXRNByKk8jpX5x9VXQ9n2ZzkWiZzU0Ghfero1g4pfIq40bKxcaWhz/wDYVH9hV0UcFK9vhS6swkQZC4yrDuD6D3q/q8pNQhux+yOabw/vIqaHw9JvUR+Vu65ft9K4f4nfth+Cfhhd/ZVnXW775gVsTuhjYYyjSeoz07c15Tqn7WurfEO/W3t2bSbOb+GxJ89hkDaWGCTgkgbhnBGDkEfa5N4fZji5RdSKUH1l+hzVqlOnuec/8F1ZNR8Zf8E//FXhHwVC2teM9RvrKeG1tIBLdeXaTC8mNtkErcrHbvIrIN/lxT7ck4Pwf8DPjx/w8Rl1abSPEWofDf4zQ6FDd6jGEVrPxbGZSJTHyJAfMeN3AbzEEwRd0aOT+gHiX48eD/gnquqa54m1aPUtU8KmZLbw9o8a3d7LfbPJdpGUGC2kSIzJ5bSFkWWQy/vG8lPxW+P3iS48J/tT3vjvw7a/8Ibf6hr83iPRfsrb7XSnuLkzS2JBCLJEvnMhRhmSJirHbhV++zjw5pQy5UcK3Ka6y21/Tse5wzxUsNVdOfwnQfH/AEL9orwt8TNM0PXPFutXGqa+Hnhube+ZnitooXeSVlXaIwsfmkgD5ipGWG2va/hZ4r8XfFvwRpfh3RW0/wAH+B7LTP7Jur7QLGPTZdegjjEbGV4yJJ2kRQ0rSNtkdmJBzx8y/tDfEv4hfHf4i2niO28VSXt9daMbfWpjZwaPa2STSurweW0r5RliVjwrMPmIJY1Z+HHj/wCJWpsYtF+IXjXUrFmCXGpjVLyz0+Rl5/cxq6GTBJyc4B6fer77wtjgeGac/wC0cKq2Jfwtctl9/kcvGWIrZir4adodD6Z/aN/Yvjt/Cem+KPB+jr/anhOMrc2aLvOoWud58sKAPMiaRnESrh0MuN5ARvlnUPHEmqSm7mlWRnmedNsodS74LsMcc4U5BIIwQcYx9CfDr4//ABS8A6hatL4m/wCEmt7PkQ61ZJegk+kzDzkbrtImHOAT0Byf2htI8F+P9U03x14Z0m88K6pf3Hk6voLostgZ8fNdWMgIKo/IeKVE2OSVB3sa+44inhsfP65h48s3a67fcfH5bGtRXssS7pbMp/s9+PtW0TVILx/O8lipXZJs24z834Z/Wvuf4Yf8FFbrwBHAlvHNJLhQUlnykmP4ivfOa/NXxB448m6tdL03abiQGKJl2yYwcM77eARuChR97afSut+GvjmHT9bt4F8+/uMgz+WQfKJ53SO3yRhsnCtz8rY6Gvk5Rw1eLo1o8y7HoyjK3PI/ab9nn9vnQ/jP4mtNL1vSX0W+ulxbXXmf6NNJ/cP90njHrz6V9GReHNo2lYxIOXI55Pbd3A/rX5A/CrxX5eo2khlEK8HBYlD3289sZJI4IU1+qn7Ivxg/4XV8Jrea6kZtX0wLbXgPWTr5cp92QAH3Q1+P8e8F0MHTWLwMOWD+JdjbA1OeTR1Fx4f2bajXQ/mrp5rXYaZ5Ffk7ovqeh7GxiR6H8lRtofzVv+RSOmxaPZB7IxINC+9RWsvU0VNraFcttCxGm+pI4KhS63mrUT7xWsb2NBvkUeRUgk2U5JN9bR2AjS1do2ZF3GPBz/d96+D/APgpR+3Nqfgj4tfD3w/4b1C6Xw3f+JLbSdVMO3EjzzRIkz5/hikAH/bbj5ttfX37RfxCHwy+D+s6oq/6QsPk27Kdro7/ACkg9sIXbPbbk/KGr8QP2rPjZqf/AAtVbW5me/urbVre90q7kRWjiSOaK4cPGeSxktQyY+6SQMqFVv1Pw9yOlLnzGv8AZ2OPESv7p1fw/wDiu2sfDnT5tUvPLlvNSudblRRun+xICVZAqldoUSNl/lHf5t1dn+yl438SfEnwRb65fXTaHcDNxHAImkupMJut3EhUKjqxR49nyiSJCPu181fB7xXb+DPGOoX13uvN0Mtk63BYl1ngCHbngLgrgDtjp91fpD4N+JJLW+jvPOtdP0aK1ZZUztVU/gZm6BR82Qeua/cKcuaCbPK5KifLHqSHwXa6DFINN2R2Mb5+zAbTFknqe2cdO2Mdq86+Nn7H9n8cLNrfTbSS31jVrm2sNPdpW+zzXtxKsNvHIAwD7pHGDskZcHCnJr1kah/bsv2uztZYtPb/AFc5tpIo7r1ZCflZenK+vPavLPjz9l13TlsfONvcSyhY3EaOVPG7b5nybgm4rnnI4708VP22HkyFQdGXvHy8v7PGjr4maPVIrXXDbylobSzulubd2AUGVnwg+bC4D7WGDlK9W+DvwV8WfGz4m6D4N8I6TDqfiLxDO9rp+mx3ttZ58mCW6cLJcPHDuENvKcDDYBwT1HsHh/wrD4B0NdH0xYbe30+BYPN8tFacgjag98DaccY217N/wT20rw38OvjHqnxD1zwvD4wuPCelQvo1nLciG3SfUDc2tzdz743GEh3QhmAjH9oMGy7RY8TNHLBZdOvRhep0fu79N9e56uW0/rWKhSqfCcX4n/4JAfF7wf8ADDxH4w1S6+G2j+GfCulz6tLczeIJW8y1gieWZolispM7REw+ZY1JJ2lvmdvk3xBdQ6BpU15dnyY7eD7RIgO9YY1RW2DPLApwM4wxXgV+tn/BQz9rfT/hL+zb4++Ht14d8Mz+G/E3hK58NaVLY6qZLfULu+tJIV+y7beBbhYRMJJ5FfKpbA5WWRA34yfHLxxZ6HoemzagVjguJf7SvoFIa4ljhOVRRuAYNJtHBIKtnClSW+N4LzzO8VSxNTN1ZP8Ah7bW8j1s+yvDYerThg/iW55x4M0251S/bVrhvs0msXQVSQv7iBdwigwc42ABzkbQwZyG2BH9e+GZtLTS4WsYtlvM5cSblb7Uc483eP8AWbgAd4JVuoPXHmemWd1ZxItz9j8yZQxZ2aVXULGqpBChD3KxMFXGzywcs7t5Yjh9O0CzuLC2ka8mvLi8kcea9zOrvkAcbU+RACTwvXr3r7HK227vc8jFHtHgnVPI2t6bf6192f8ABOT42N4c+KFjpcp/0HXxHYTH/njIzqIJP+/pSP8A7a1+fPw6k3zw/Svob4JatNpN5C1qfLu2ybeX/njIvzK/4EZ/Cu3NsJ9ay+rhv5lf7jzacuSakfsIoVVPG2T+Mencf+OkVBN96szw74zh8d+HNN1q1X/Q9WsoL63f/npHNGsin8mx+FWm/fEe1fyTW/dVJU+zaPoufn94lZ9i1VuZ6s+R8lV5oOa55O7uRLcq+ZvairEdpvorJwu7iMePxVa1Zj8W2qfjXlT6jdSAe1Mk1K6j/Gvgv9cp9FY8/wCtHr//AAmlqiVC3ji18wV5J/aV1J/y08v+tPhubiZ9jN9o3YBT+8NwBH5E1FbjarD3+0bfew+tVOhwH/BUP4sSWPwv0OwsXgje4nnuw06eZGHjRY1ynG4/v2IGR0zkY3D8Zvjr8UL681iSSSzns9U06RdQt0d/MUADfuVuNwAVhnA9MDG0fod/wU48Zyah4ptvDs1023/hGhqNiF+8w+1XEV1+Ef8AoWf9+vzZ8Y3jJq1xpurNBJ837qU/dZVHLj3AD5+or+y+BE3w7hqr+0r/AHtkxm5SvI2vgve29zYeF7ySFZrHFs86tu/fRQyBSMLyxeHd8uRnbX0vF+0Rq0XhaSDQbXSfD7ySNJdayluLvWJ3XHzQvcGU2pOTzEqP0+dcCvkb9lPUo7bS9U8Pz+Vu0y+ZY9n8UbksG/Fi/wCVfQthFFpdooj9Oa+wpZfRxUVUluj06OfVMJQnRhFK/VfEdnY+NdQi8M3V5dXV7dTGEzS3F3cPcTTFiArPI7szMCRksSeRye3n+kxT+O/GOl6tMq2iRai19MXkVY7XT7aJmlkYHqHKuPoDTfE/i2STTGtYf9ZMwz/ujr/MV5f+0B4suPCnw8uNJ02GNNS8SNFZzXZ+9DbbwxjHoHbaWbsIvevTlUio2hseH+8qS56km2+r3PTvCfxH1b4sLZw/2s14GvZjL+7VVSEFeAR1I/eofeM13vivxjN4E1S31LR9c1LRtS08Bba+027ktL6Biy+Z5ckbLIoJAztYdBXi37MoTRfBpEayQyWbrZRJ/wA81CK2V9TudnZu5PtXTeLb77JciNhtmGWcH74zjAP05H4UpUo1aVp7D+Cdyj431jUvil43m1PW72+1a+uMPc6je3cl3c3e1mxvkkZpGIyfvMetfNfxkvZPGfxy0+3AuF07TZDJNJGjyeWE2upCqGLPvRNq7WB5zjqPcPFXir+zNLuB5nl/aI2i+ua4H9mX4aS+KPi54o1OO5lX7La2yvIn8C7n6/8AAgteTisNBcuFp7SOyjW3qMvaXoN9DLI+k6bDoFnI2Xu7xkbULg/3miUsIyfTcxHcjoOg0q1a2f523yNjcSdzH3J9/TtXQa5YywanIssks33RHI/8S7V6f8C3VWhtN8gr0ox5Vy9jldRzfMdH4GfZcfiv9a9k0DX/AOwbNrzZ5n2WB59n/PXYu7Z+OP0rx/wrB5N0vuR/WvaPhVobeL/ip4D0FZPLXxBr1pZy/wC3Aji4uV+6etrBc1GMxP1fCVKn8qlL7onPU+JH6seCv+LY+B9A8M7/ADP+EZ0m00jf/wA9fs8Kxb/x2/pWxa+O4oyfM/CvPbu6nluJpJ5PMaWQyN/sM3JX7o6ZFV1k3k1/nlW4wr1K86kdm3+Z6EcRyqx6nJ48tXSqk3jiLP7v8a8537KR33rUz4oxLVw+tHoUnj/7P/wKivOPL8wmis48UYmwfWp9CbfspHfetItrvFSRWeM18rKrqYx2K6vsJqSH99Ko9yR9cGpvs22nQoUl4laPcp3YxggfMc5GO3cgevalCj7aoqX81l+Nv1BR5pcp+ev/AAVc1+a7+MGlzWa+Zf8Ah2Ca7hiVmV7mJksIp4gVyeTJK2MHBRWPyq1eEeKf2Gfin4y/Z5j+LX/Cu/Eep/De+jknTWLeS3llWBZGH2poEladIN/mASGDaqoJSQoSv0l+Af7E3w6/bK8RfFz4jfFLwz4outDk8TS6F4U1CHWp9NsvIitbS01CdTa3G9gt5ZurfaFaMCABFIaQV6x+z/8ABXxp/wAE1vDsHh1/FGpfFL4F2sk82npeWaJ4p8Il23MCtviK/sGLSysI44pYC6hYniGyH+56PFSyjLqGWU4a0oRi/kkj6nKeGXXj7Wps9j+e/wDZ5+HWsav+2DofhLw59na68cyx2lnM8rrbB/mdbl2KHbHGgld2jDEIrlVyQD+uE3/BG7Q7vwDGbbxx4zi1VomVL1rexOjicg5JtRH5nk5wwU3e9cKQ5AUNyv8AwU7/AOCZmk/Bv4u+Ef2ovhHCmjaD4K1618S+MNDsFWW2vNNDB72/0+MAqMWzyNJAB5TRBnVYmEiTcjZeHdKl8T28N2PEmv69qTt9g13Uv2kbjQ/FniSMHP2uw05GS1VJDgwRGSLKlQQuMD7ThjO45nQlPC6Nbo8jPspqYOtH2x873f7PfjWH9pG6+Ft1pFufGC3zWKx/al8iRDAbkXiyTbF+z/ZlabdJsIRGDgSAxjH+I37DnxU1z4vtouh+H9L+I1/DYWeqi98F30esaakF3cS21sZLkhIomeS2lJ83ZiOAscpHk/Yn7fvi2z+GH7eXwH13SfFWgeG9aXw/eaDq+r+L4DeabFbxrPBG2orEU+0JOLi7ikZQBvZixiXLrofD7W/hPqHh7xt4GtV+FGh+KPGHww8R3HjiX4KQCPw+ba1mgayWOWYRpJe/ZpL35Q21llZXJTZX0FSpN8rt/XU8vDqNm4nzv+zV+wVr3gC++IFz8aWuPh/YeH9G1txZpcm81aK5ttIF8LxEtGeGS1hjkEob7QS0lsYWALHP1drvg34Yvo/jDQ/GF5p2ir8VNb8OeHrXXtJ8JaZF/Zdlq2gwxaclrHL532SH7Vb3IMq4cSFWJRVaRPlsfti2fhSy8I6T8M/A958RvCvgjwrH4a03W/G1pJBba5Dcx3SXkN3YQt5ctrcRzQxRRGZZI/sSth4nCnzfwfo/7WH7Z2qzaS3wp1LxX8O9Pj0Lw14g0bQYdP0COW00eWW8s7NL24kLW8qR37hpRlgkqg5UIq82bYqGGpKriJWjbr69vu0f6HRhcI675YbmP+2X+zzJ+zb8HfAEPiW81W2+J/in+2ZNc0xGhax0W1sr9rKDyFaLzmNy0VxIGzt8sYUKqjO18BPAdr8A/wBna01C4gji1rxcX1q583iSKGbH2WNRtBCiAJJz/FM9e+ftuf8ABID9of8AbR+Il/8AETxR4i8A/DRJdKt9J07RrjWLvxHfWNnBDIWWa6htYo5JpJpriV5F3As/J4GfK/2ixax29vBp6w/2Wq+RaPEQY5Ujwm4EKB1BGOoxzXHkfEGFzCrKVF39n19dfw2OjH5TXwtNTnszyTUNQFzczNcebtZtybunPXH6Vq6RJavax1z95P5c7R/88wKzdTuZY4t0cvl46j+9Xvuo7nmxjZWR6jpEUc0n7uVo9uGKp95sf09a9q/Yr1Jbz9tP4a6PJY6lJHp76nfBrOwNxBvbTLlV8x1fMXU/MY2TruePA3fL3grxYZWjt50kt2cgrKPusoyXDe20Fj7Ka+ov+CQ19J8Rf2uL7WrhY47bTNDv7mJB94OzwWkZb3aO4dj7sa+R48xns+HsX5wYl8R+kTQtMI1fPmRoA64ACnp2+U9PvLkH1PaRLH5asxv5TbR9xBtX6AnH6EVJcT/Ktf54R1VzcqfYaZLB5OPepVn5NNuZN6VWoFWf+Gimp99qKYEcU/nL/u1JG+yoYI9g+tSV5WpMdiaOeud+MV0kHwn8SSXDahFafYJI5ZLK7axnXfhQEuFkjaEtkgsGBCljkYweit1Dqw7k8Y+9wGPA78A18p/8FRvjVfeFfBuk+FdM+wwyag0Fw9x5FvfvFJNJPFaBYpnCLc5gmaESBYt8e95P3a29z914a5X9f4jwtJ9Jc3/gOppCnzSv2PSv+CEHxS1L/hHvip4Lg8aeINYt/DOpQalpfhPW7qKaaxtroT+fcRXOP30ctyrgLE/kpId4C+cGP1rJren3djLL4e3LZQyPFLpb5DWrLjzVSLBaPaykNCEIzuC7SNp/Fr4I+M/B/wCwnq2l+KrbxBrXiT4n6K1xJZXJ1V1s4/PAV7ZiFWSeGQbCY5CbdmwxtwcGu+8Q/wDBT3x1468S3Graj4mvraWRzGxtJ0sWuY1YhBJLbxoZBGdyYOWIAHAAFf1vn/h/isyxcqtOcUpO+u+up9xkfF1DB0lGcLtH6peB/BWoeDPFU1m1zpN14P1KJ7mytMmOTSbgjcyxFRteCRWMnl8+U4UqzghYfi34jfs5+H/2MfiRfeG9J8PBvh144nL2VtbaC+pQ2M4jCvYTxwwzSSQNEjG38wSMggaDdtS2Rvn/AF3/AIKQeLtS8PzQp448QReWpktl/tGcrDIFOxi3mI6xB9hKk8qGAwxVl5HV/wBtaPRdJhWOa+vLe1uVmBvb5pJrwwOZFE03LZ8xULOzt8ka/wATuzelwlwbmOSYz2sMQrPeK2ObiPijB5nhZKdPXoXP2rvgz8Qf2+/2w21u4+y+B/D3h+3sdH0e01CNrzWJreS9ZUma2gyYWuJ2vJQk0kMipasHjBj3Nwfj/wCFngf4UXxjtbWz8RR6XqkdnNrGrSRXzX0gInnNvZxqUK26eRGzyNIzNdnG3yzuz9Z/au8TeItK1OLR71PD+m3SxrquqzRmH7KiW/kxoJW5ULCHbavPzuRyVrxfx9+1PoOq6jbR2t4L2DTYTBaWkHy29uu9mLu7fIXkcuzY6ljt4xX6U8Rh6S55Tt5HwUYVZLltY9Q/ai+NOpfFHVYb25uTeXS3E8txcbnVgm2JoUjkOGwrI2dqgHIHO0Y/Qz/g3Q8aWPjP4L/FbRXuoLjUtN8UwarKsYxshuLCC3jzn5id1hNyfSvxI8d/tM6Zc36/Y9SjuI0z80SPnziR91Tzxgtk8enevdv+Cf8A+3r40/Y00rxpqHheHS7S6+IWgx6Yl9e263cumslwzJPGm0iSVY2uUVZMRqXDtu2BH+F4wpxzfDOjQd2fVcOYj+z8RGpV6n7r/wDBR34t/wDCmP2WPE95ptveXmt31nJpul29msjXT3VwBBE6LErykRPIszskblEhdtpICt+GunX1jrmm/wBqWOpDUoVQRR7dYXUo7SJMpFCim0tvLRUUEBEIIbcWZy7HnfjJ+1Z4k+N1nNY614i1CeaRI/Ou555rq4uVA5SWW5lllZcyELGXPyjPGcV53puptreoQyS3iwzINmy2aQRFF+VRs6IRg8e9Z8FcPVMppznV3djo4lzqOYVI04bI9Nm1D7Vct/tf9NGj/Q8flUsemRp80nk/N03yb/yrkL21doWCLFIeCFWPeZD2BD/0rf8ABGutqGj31vfSp9osYxK8rMjbRz8mz+EKMnnjOM1917WOrnsj5Wmud2JvE+raPoWnCDUbyTTLbVGFqt7BBvjikPISRv4VdQ49+fSvvL/gh38PP+EZX4m6pNN562i6TY2zj7rxt9tlldT/AHWVICPrXwL8Dvjzo/x40PXvCK6fpPh3xFp9veR/ZrqJf+Ku0xplkSCfPzyTQqZ5FYfNGVTy/kaev06/4IqeFLn4ffss+IoL2WG5uIvFM2nRTBdszwQ2Nk6iU9SyvPKAem0LjjFfkni1mEP9W69SG0uWP/kyNp03TfKz62mAtB5ffqf8/TFRwz/M1MnGZN396mb9lfxB7S2nbT7iSaWfpUF1PwKXfvpssHnY9qmcrq4FdZsk0UXUHkhfeiuGW4Cp92kbqKmWy5q1Da7Eaur2QvZ31K9o0aSo0jbQCefTIIz+ZFfnX/wXR0vxFpPxI+FutaQ902k3FhfRTxw9LS5tLi3lV2/3xdn/AL4NfopImx6+V/8AgsV4bTUv2JNY1j7L9qk8L31tft/0yjkY2pk/4DJcRH8K/QvC3H/U+JaEv5vd+8umrOx+PeoeKbi0ujPcXW5oztDHq2OOfxBpF+JUsy7o5t+ep/u+5/2R1P0FcZrXiiGfU5ngLGNuRs+8eT+g6H6VUj1/fu/eLH/ufdP/ANf1r+3amYe80dcaHMrneTfEm6QdFX2LqMeyg9QOgI6YNZGu/Fa+sbfzoZLeJo87nvJWnZR/tK3ytzjAPTn1rk7vxLHaozSSeZ6e1cf4t+K6W6KtvDHJNyFZudnToO+f6VzYnNOSF+exrRwfPLlNHxn4p1z4sSKusatrWrR2pZoobe3aSCEnG7Yg/dpwq5J64HpXHPcwajeLa2cer3l0zbNktwqpIB1U7eDj0HSs+51/VPFDPEJrqaRvvQD+Iey+1ehfC2DT9E8PbY7vRWvHOZkujLazD0AY8Hv06fjXy6ksbXc5u6PY9mqELLc0PAXwb0/Q2+23itfvcLiNFQuts/cdRnbkZOcqMuA2wo3aaZox0Oy8m0uvMsSxZYLpxJeQv/EVkUbJA3GXAV2K5ZEyormb/WL6OMNDbSbR/FHdxyRn8dwNYN943vgT5kUUXl9Csiufxwxr6ClVwuHimeZUjVrO7PRJY7d2H3fM/wBmrVhqFxpEm5YvMVuh8zbsxXjsnxeurV/+Pr7Rt/h/uf5/pTo/jzJdMFm+6n+xurRZ9huYj+zqqPf7PxnJqdzBHNL50SZ3RNLuQ5x1/Lp3rfOp6edNn0O71D+zV8XSppNs3+rgtGdJCJWX+GMOsasfSTP8NfPfh74qHWdRhjsPtm7cBL9nj2le4Y+wwfzrqvFup3PinUvtlytuxmi3KrDcsoBUMSP4lI5Ze4TPau6GZRrrlhsc9TCunK8i/D8MfL1NZpE8RaH4j8P7pdPvLeX7PcW9xbgMyO//ACzli2kk/wABz/dr9rP+COXi+x179j2Gz+3LdeIrXUPtOtxlvmE81pbfvR6xymNmVu+GH8NflN4Suk8TalYavPbRXlp48s5tPvJMOfL1a1iCu4dPmYurxy+jiaUH7tfo7/wSK+HTeFPiV46vo2km/tXRrb7XKzHa9wt07Rjb91VAlfAHO4yZ7V+e+K2TxrcLYqpHePLL7mcuJr3SgfcMr7M1Cs/JqaeBvIXOzGOP+en4+2c4/Gs9oP3lfw7zSlPml1J2Lq3WwVBJffPTo4PlNM8jrV881ogJftW8UVVKFDRUu71ZnK9zQ+2YYVPNd74aoQpvIq1ImxFrrjK6bN47Fa1ffO31qD4g/DvQ/i58Ptd8KeJIRdaD4o0250jULdZTDLLBPEyPsfB2sAeDgkNtwM4IvU+H71LCYiVKpGqt4vQUZcsuY/HrUv8Ag2X+JV148vVt/ix4Dh8PpKfJvJbG8a+dMn/W2vlNGjAg5CTOA27kDaK3rX/g2B1m4kO/472YkX7rweFnZX9cZvVzj3A61+uA6VNax791fe/8ROzz4HOx2LH1LaH5b/Dj/g2C8K2GuLN44+M3i7WbNMA22j+HbbS5WY/9NpZ7hfwMf4ivpb4gf8EevhHo/wCxh42+Gvw7+H/hvTtd1rTPN07VNRT7Vqsup2zC4tHmu5Q0ixyTIsbpHiPZI4Uc19ata7yKv+H7fy9csQ8zQw+ejOytsZQGBJDdjjI/HJ+UNXLPjXOMTiKc6ta8Yte6CxlVyTP5JPip4T/4Rzx3q02jQ3ljb2N+8UKtGIZYpFO3YUJV1kUgllAO3cp43DNvRtc8W6xpTSTrDfWLMRLdXtuj4PfMu0SEjjjJr6F0n4Fw/tB+M9e8eXVuY/B7a1LpvhzT7aMpL4juixZ3IHKK+4PIepaeKNfvJT/HOoHQLm+0zwy2ipZ6CPLvdVuWE2nWbgfMtvGMi4lj5UsQU3oeNu01/W2WZbUqYeNfm5eZJ2+R61THPSDPmi/8Ia5rt1HCdNtvOkBaOCNFR/KH/LZgDuVAOdz/AC+tULb4c65qcarYWs11arlWmi3GBiOu0nhvqvBr6S+EXw/sfEebm+juJPDd1KswS7BF14nnycXN2Rlhbg/djU7QSeW5kfe+K3jCxv7yPwpok1raQxrtv7qMBvsCHH7qNV+UOcEYHKhVz1r0KOQ+0jzVnfsTUzBQfKfHF/4XutPu5IWjR5I+GVT9361LpfhS91Gbyo7f7xGa+sPDfwV0OULa2tvIMHKTSHc2D/ET/ePcdsCu+0z4Q+H9MthGse25x+8k/wCenp+XP510UeFZylzVNkYyzrTlR4D8Kvhg2n6f8sflzAKfqOc1s3tqul3vlrbfaIZJF+bO3YRnPP49O+K9xXwbpPh2xury+ubWysoYyXuJ5WjWP8R6+leZ+Lvj18MdMnASS61AqFBuYLd1iY89v6969mOHw1CFue1jznWqVZ6Qudx+yjrGl+I/El5oEj26TTTJNZ+d8ix3iLJ5fHbejTQ59Jyf4a/Tz/gmhBJo3i3W7EWdxaLNbLFGsw2s0kTIzcdvkY8djkdq/IC2+K/hG/1qPUvD915d9bBXRiixGJsgqcjnt0Nfqr/wTN/aQtfjP418LLdNBaT3WhTqrTDauoajGrxvagf3mtkuLgHvtNfO8aSpYjhjG4WLveEv0ObFUWmrqx93WeL6wVl+6o2r/u/eH6EVVuLXY1X1l8w8eWdvyhh95/dvfOR/wGomk2Bq/gKaSVl00KtbQpxpsokfZTZp+ajhk3lqVKpbQiW46W+8nH+1RStJsorSVTUQoTYamZN4FFFZvcuOw3yKfDBzRRSiveGWNmzbUveiiqnuBZt32VP9qMMsciSNHMhzH/d3ZBG71GR09SD2oorejJwnCUf5kJfGj+ev9qTTv+EP/as8efC34YtdWuj+A/EmqeC/CFvcS+WNOZJ7m41G7kb+J4EMkSOPmZPKKgtGAfAftlv8RvEWl+E/DUMl34f090Ym5CxNqG3kSEHlEOcqv3grAMSwLEor+5chqyqUqDn2R7NSKUfuO68e+P8AULXVZPDmn3SzeKAoW5vAGSLTYjxtgU9GwOSOuB6VJoHhCHQ4ItMsh9omuyA8033mduWf6tjn6CiivtsDrNs4aysrFr4wfFex+Bmkrp9rFLda1fASMz/dixgcH3z+leT3vx+8WaxfRwWs3lm9ZY0UbeCfc9O1FFePm2Nr/WHSUtNDoo4eHslUtqb+i+DPitok9tr1x4g/sW3hugkE5nEv7wgqo2KD2c9eOa9T8JfCXXLny08XeKJ/s7RsYY49MsnWdvQoYnQ5x/GPxFFFenleCpT9+erZz1sRNaI6DVf2IvAfxJ8FXWreGrp7HWrSEiZCGtrbzRzn5E/dk4wQodDuG0Jg7vUv2Nvg34/+D8ltfWfipj4TvNTtdWtzLawS2+n3SOAj23miWYSgogJWKDKx5MhwI3KK68dgaMKUpRXR/kzhxGIm6DTZ+1mo2K6feyJGu2PzZCBjAQ7uVAyTgcd+pNRsm8Ciiv8AN/Ea15erKi7xTZHJbb6Fs/lNFFPlRRXnsuaKKKYH/9k=",
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Sơn Hồng Minh', // tên bác sĩ 
                position: 'Bác sĩ chuyên khoa 1', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCACoAKwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDn47beKtW9psNUIv61Zj7V+Pn+kXsqZpRQcVM1p5iD2Oao2/X8KmrWluHsqZtaJqv2Cf6D/Cuz0z4ieVb7PM8vA615onWrCdK9Ojipw91HBjsnwuLj7+53Gr+PftUWzzvM5ziuR1G4+3Tk/jVV+lN2766KmKqTVh4HJ8Nh0nTJkg5pWg/nUAgqdIPlrz6l0tT2OZslSBMfvPu0GKFP9X96o/Io+z5B9hmuVXM/aQg25DpCiofM+7XOeIfE8VqjLH97NN8Tav8AZoGX0P8AjXknjjx95PmJ716WAwbrTPznjDi+hl9CXc2PE3i/c7fWuB17xHJcNIqdetZcesf2oT/vZqSRN8WK+5wuVQhG8j+T+JONsXi5tU52iU9J1iVJm8zpW1Frnyr9a5u7j2SVHGnmNtr16cVFWifBVqkpy5pu7LXi7VPtM6r/ALWaq2Em/wDKtC18KpMu+T7uKkexigTanVa2jsZFe4g8+DH905rGuL3yJSvpVnU9T8rcnpXO3erfv2rGp8QH2xE+yrdvPmnyeFri2G78Kammy2uWk6MNtflMqEo6SP8ATSniaM5XiTQt5j4rQg0FynmJH5hPGK0vB3hf7dGp/GvTtB8Cb7ZK7sLlk6q54nz+acQUsE7Hkf8AZklv80kPlr0zRt8nn8K9S8U+BPKYtXnet6V9nuWX3qsRgpUX7xWU54sZLliUDLvpY4PPON2NvOPX2rm/iv8AEfRfgt4EvvEWv3EtvptioBEUfmTTOx2pHGvdmYgYyOM8gc18x+Jf2o9d/aM1Cx1K0mk8B/DKGeKC4u7kRTSXQa4iSZzGzp5rQRy+b9mhLbljYl227l0weXYjE+9GPu9zx+LPEDKuH4OWLnef8p9b6h4hs9DVTfXNnYxs2xRcyIis3YAtxnAPA561ZtbyO5iE0IRom6SIdyn8RxX55n41w/s23VxBp9p4V8Z6lq1tFeSX9xpsMkOlvIGZ4ogkhVopIGjOyVIz5V03mRmWMOek/Zz/AOCkF3omvWNj400qTUtFmlEZfSEg0uW2U+UCylEKyKI4ioEiAhGG11617EuGZKLkp8z7H5fgvpCQeJUK2Ffs5dVuvN+R93JcZNU9W1L7JbM3rxXSaH4P07xF8Pj4stfE3hqfQJYrZo76TUMfuJ5Zo0lYABtoe3njYso+bbgAct5P4z8bW6eI9V0plmg1DTpXSWOWExmRQ7J5ik/eUlDg+9eDHKcRF2nGyufpNfjzJsRQcsNXUna9l08vVHL/ABD8WfZI5j/eOP514jrWqf2hcv8A72a6f4gaz9suJV9DmuHEu+M/71fZYDBqnTTP5M464nq46vKnH4SRZvJOfwqdbvetUX6UJ1r2It2PzvcmuJ/501Jct9OabUDvsanqB0Ona5lfL9Bmm32pb4WFc5PJvT8arz/c/Glz20Arapc+deMPxqvUlx1qOs5Su7gfr5rfwh8qJjXmfifwV9ku2X3r7I8UeEIltn8v71eE+PfDG2/b/equIMjp0on9EeH3iBjMbO1Tc5f4Z+FcKv0/qK9s8OeGNtlHXL/DDw5iWP8Az3Fe2aboPk20Z9sV1cO5bTlC5z8dcUYjnPKPG3h/YrV4P4/0cxzTbWZWyNu1dzE5BAH4/pX1H8SNP8mJ2/D9DXzF8YLa4k0/VktN32qS2lSHaOd5UhfpzjmvF4pwNKLS8z6Dw5z7FThKcd0m/uPyQ/bq+LOseP8A9pnxLZ3WoX8uj6NdmxsrENm2jVNqy7F6EmQNweD04OCOYm/4SD4v6dpdj4S8Ma9NpGkhltrWzhluYrSWTDyhH+95RlMroj/cMkgBYHI9d/4JufsRRftM+M73VvGEclxo+jzbbmENukvrkgMwZ+ygE59wK/Yz4AfswW+jeFrXT/C/hH7Pp8MamNLa1ba6D1I+925rL61DDwVOG9j8WzaGIzLH1cZiPtSZ+EGn/sz/ABG1KKa1tfCviDrvZG09t2Oh6fN1I61v+Af+Cenxk17VYW0/4f8AiidS64zZSKrFiFwAfvE7sY989q/ow+HX7PGqXUNzcf8ACPrHNIjItvJbKvmEjaOeoxnOfavpr4VfBU+BdE0+K4t7M/Z4XeVoowzvK4XOWPYbcflU0cdVqNpnlYnB0qFrH8sd1ZfGD9irxVd6LeNrdtaWlxA92IcrbXL2sJMXzngpHG5VD1Hmygc4rsP2gvi94m+Mcel+PPElndab8RCFul1DTU84a1uAUK0m+TcyR4g27mbCEsqFQjfsR/wU9+Aun+Jb+9vNJsoZrmHy7pkjIMjlEUkcdOM81+Lfxa+O2o23iO68P3kaiwWZhC7T+ZNZFSwUr+DsPxq6OKdf3H0M50PYvnj1M/4Y/G62+MtvNI9u1nq1pxdQsc7skgSA/wAWduDycFcc/ebpJfvV4j4Bnbwh8foYZHzb6tBIjg/eII3Zb3O0V7hOxG1W+82T+Axiu9bHk4r4yPbvqGSD5qmpr9KZzkaR7DUZ+830qaoHXe1AEb/epkqb1qYQVatLJ7htsf3qrm5Y8xcIzk7RMqS13imfYK7bS/ANxenPtmteH4ZXHl1yTx0FpI7Y5dUlqftz4mn+0Qsvv/jXnGr+Ef7UvX/OvWdSs/ObHvmobbR1eUeZ92v1DMMDCo/eOXhnOauX0+c5HwL4C+yKje+K7ye0+yRKvtitvR9Jihi/d/exRqNrsi/GnhcLGhFxRw55xRVxleK8zxn4qT+QGP8AeOP0NfPXifTFvtcYNna7f3gucc9T9K+jPi4nlGT3OP514fd+H2upriQbcRo7kMcKcA9fXnHFfmnE16teK7M/o7w3qulgnUl0/VHx3/wT81rxR4B8F38vgfwfo+v3F1rWo6hDcaw/k2MavduIcqvMjCNVIzxwa+0Pg9+3R8c/B+sfZ/HV9pc0c3Cf2fZpCIemEweSo5wa8J8CeAPiJ4J+B/hXSfCq6boN9Y6RaC71G509tRkSUonniO3EkY5bf8xJAx0OcjsPgZ8MPid4s8V2ui+J9YXxLPqssaW8z6PHZSxyFsMPkZty7Dnk8ECvmqkryPzuVOUqspPZtv8AE+gvjD+3b8RJNEt49D1SKzvJIyfM8hGbPbj/AD0ri/hT+2n+1J4Dna617xH4S8TaCx8yO2v9L8mcoSAV81enBPJ4p37bf7N+s/Dzxg3h+x1B4ZtQ0hZtP1CJFX58FWxuVhkY9K8d+Dn7JPxenu7e30v4hePNUvGIWO21dtOv7ORsDIWNbeOTHUbRKuASc8UU67p3RnXw8JpOOx9ffHDxxN8c/gwfFWm6ZJC1xshkgDqwtJR8uEPUrubOfYV+D/7Q/wAE9R8M/FPVNPvhILlJzI07Zw6sQyvx/fG1q/oe/Zi/ZL8YfCvwrqVr4un0G4h1iANLY2KSBrZ8fey2RnPYM2M9a/MD/grZ8Dv+FNftDaDeKI4bHULGaBDFkskkbAZIH3jukXg8VeX1PZ1GjlxtNVaSaPz48W/DvUdD+I/hGS+XfNNNFLDLzzEDjHPuR+VejzlHfd/y0BwfyFes/tLfs+67oNt4a8Tt4d8RL4XWxFzb6tNZyC2MUzMkWX/1Yyv8I549Aa8ua0RI/lUq3f5uAOgwPQ4r6ahU543R8viqbhKzM/8Aj/Cnp1qSSDmiODLU5bnDEbt30NbbxUwg5qZYOB9ak0juR2en73/Wuo8OaOjzL5n3cVm6ZB89dVo1vnHsM1w4ypZWPuOGcv8Abu56B4M0G3eNf93/AArurPw5b/Z1rzPQtT8p1X0Fd1puq/6GtfI4qV3c7c4yStCS5Nj9R9ZO1f8AgVVLLX9s4j9Oabr2qxbTs65rlH1jZqFfvmPxXJK5+fZLkPtaPKesaXqn2iEL7Zp+pXH+j/jXMeHNc+WOtvVtY81AvtWtLGe1geLjOHPq2IXqeZ/EZXur11j6ryfp/k1514y1I+ArDTfLt4Z/7Sv0hmMnSJCjkt9QVA/GvY9VsPtEzP8AX+VedftOeHYx4Js7xhueznlSJf7zmFyP0Br4zO8L+5qVT9oybMI0MIqLNVPGOi6F4buJLq4WSKKPlB91hj/I/GvH9K/4KZ/Dz4KfExNQu41vtY1CWW10+Bwd1tGoG64fAxucgAbiowp5zgHx/wAY+L9S1SwKsx8nzNkrg4yuSSc+wBH41w2vfGbwT418Yw+G9N0nXvF3iBk+zRwaBpX21bUkYXee5BOfwr89oz5lcz9nG7aPp/4pf8Fjvhv+0pC0Nxp2oaP4l8O3GNN+0ae8lvqSSABkEjKo3EqCAu4cda9S/Zs/a10NY/t9lax29xCuGguX2SWjHBIK+pxx7Zr4Rt/EWh/CCe1uNT+HPxC8O20UAuVvr7Qn+zxxssjrM23lAVVm54+Wuh8AeLtN+KM9zr3hW9hlgjcQTy2x/cz8BlJB5DKCV/A1pVl7P94Y07KHIj9IfEn7fel6bp1vJJ/rpnCyx79xiBPJr5G/a18Q6f8Att+P7KSxj+1Q+G1luwN2NyERZH/fQU+2M9q8mu9Qm1M3CTTeYd2MelaHwvutW8N64w0RlXVJI2Fvv3+Xv4ZS4XlkBAYg8YWsqPLN83U55+41E7P4T+Irnxd4Cgu7jU7+/wBFlun0WTQ5HlWzt9Pl/cm3eFvlcOzFvMHLeZX57appC2Wq30KSCRbe5eDcTlnKMRk/3fTHrur728XfGTSv2U/DOrXGrJDr3iHWtMltrGGGHyFS5cbhebDztSTLIfRWr4NS02pG3XzE3N7Nkg/yr2Mloyg6lSR5/FeMpzjTpveOv3lP7H/nNNks8rV6WLYtR17PRHxzte8epTFpso8vZUzrvNIttvatY/COKnJqMSazfZItdXo0/wC7H0rB03Tt7fhmuh0zTdg/CvFzA/VuDaNSm7s0Uv8A7OVb3xXVaZrn+hrXJPabFX61p2tv+5WvDrQ5kfbZpTnUipH6fXuuefDu96yzqv7+o5B9ojVfQZqGPTfMm+nNfpOIq1KlpHyuFwOGwsmdbousOkY2dcVoy6/KkX7z7ua5nT5vIXb/AHRmm6l4o8uLZ710UazpLmkcGOyyjXqqShc3h4g3y1P4i0y18b+G5LG7+VGwySf88n6K35nH4157J4t2XFWv+E2WK0k3NtUjk/iD/MCvHxHEFN81OXU9+PCrlFOmraHzlpenQ2ev6l4f1BRJNbyywkZIyY2IPT1C1yvws0yT9iyPVLHwDr1x4Nh1bUF1Ge8tLCyuLjJVcqWnVl25UHBUnKjjrXfftBW76V4y/wCEwhiddPuAo1IL/C3RX/LI/wCBV0mkr4X8Z6fEv+jXDIilo5P4MjIH44r4WneFRqG1zw8ywM8HU9jWjfrc4nRPiF4/8fP5V58V/G3ii3uLX7G/2+20qGMARlDsS3s4ugbOSTwD7EWY9A0r4YeHLqzsYLeGO7ke5uGjTa1xPKS0krYUDLsCfwrqb/xb4T8MJ5NvJatdMchI+qY4x+teW/Ff4rabbOLSP7sbhm/3iDW+KvOKTPJ9pBfArIyfFnimO2svKjbYTyT6Csr4U65rnjTx3ZWml3LWtu7MlxcoPnMaqZCq+hJQc+1eaeMfGNx4t15dP08O01w2EVf4u9fUn7I3wIfRLaa4lKNNpNjJdbv4nmkKr+iswrXA0oKooMzlK6bPnP8Aad8OSadq6TMsrLI+A7ncw4Y4LepznHtXkbx7Gr6s/bD8HTRwkL/CWH5AZ/nXyq9pLafLJ92vsq1NQaUeyPhq13N3GrnmoLj+tFx/Woqy1MhUi85sfjWja6fvAqnZf6+uo0RN/wCX+FcOKrcmh9dwvlcMXV94NM0/yRn2xWlCfsw3fhVqKPZHUUv9K+eq1OeVz9mwOWQoRtHcqXl98v41Ra++arF0nmH8ah+zVUKkFG0jgzD2ux+sljof+jrVyLQ/lrBg+INvbHb+FbeleKIrn5o/vEV+nNU4z9mfBYvE46S9oylrGj+VAxry3xrrD6azbOucfzr2XUU+1WjN614t8U7TbFL/AL39DXBm2HSpOUT6zhHGzqV4wrxvqed6j8Sbhb5k9OantPHFxqG2P3zXGahHsu2/3q1vD0vlTKfbFfjGKlL22ux/VWXZbhqmFvCnrY9T8O6D/wAJbbfY7rH2e6QxSD1DDbx+dfBHjm98UfCPW7ixsrlZreBiWjl+9GB8v8w1foL8O9UjgeNpDhdufrjnH6V5R+09+z0uh/EF57webDqyJqtjP/fhnBdvyk3r/wBsq92DSoKUT+ePFGn+8hpbU+JV+JPiS8vvOjmWATjlo+p9q6bw/wCHdU16eOS6Ekwc9W6V9CaJ+zHp8Uguv+eg3123h/4PWMG2ZWVTHxlztUfj2/yO9XLENxvHc/IpUk372yOD/Z8+DNtYXX26aGOPaDkuOBnHOexHXPtjvX6JfsZ/suz6p8L/ABR4i8RJNpem6vaiLTjKnlzPFHhjcMP4QxUcdxzVH9j39hePUXsfE/iq3lj0dfnstNkX/j9bgrJKnZRjgdyQe1d9/wAFMv2m7f4G/BjTvDVhcRQ6540le2jRmAKWaANO3JGPvpGB/wBNfavYyLK6k68JT3uePmmcUqdPkpdD4m/ag8AyTaTLfeSJNLkZkhulX5SecLn3AJ/CvkTXPB1vvP419teHPF1xDp5W6ZbyxkhEUtpM0bxzLx8xDMR84Cn8OOcUTfshfDn43XAj0nUtS8L31xGW+yjF5bBuPuh2WRRz0bPsMV9lnXDuKqvmoP5HLlWfYOS9ni469z87vEfhSKD5o/vbv8a5e7P2eTb6V9s/Gb/gmz4+0H7RceGH03xpDCCSmnyCO/XGRxAy4b6KxbJHbNfIfj3wpqPgnVZNN1exvtL1K2fEtreQNDMh91bkV4FPD42l7leNrHVmFHA1Ie1w0ro5+GTfIK6jRfuj6Vy8L7JxXUaJJvQfSuTMvh0Pd4L0xFjctk3xir1npf25tvoM1FYRecFH411/h3SvtRVfQZr5vEVOSNz9JznEOnTvHcwh4S3pVSXwd89esWnhfzrQL+NV5fB3zmvMjmF9D5nD5liZr3j3DxHrzreGOPqGzXe/C/VZbmCNZPu9aW6+En2653e+a6zwn8PP7NkT2GK/W8Pgq6xDk9j1sVmeElgUup0gk3wr9K8v+K/32/3v8a9O1S3+wqB7V458WLrZNKa9TN5KNBryPB4VlKpj1ybXPGvFP/H+frUNhK0MsTKpZt3Hy7gOO/tUepTNd3bRJuLSNtAC7t3tj/PNWPFFhb/CzTbdtQYzaxcjdb6cJNzRDBP71v4ckBQvqw9K/G6WS4rNMZ7KhHRPVn9VYrjDKuGcq+s5pV5dPdj1m+yD4v8A7Q0f7OPwdvfFN8y/aPLZNMspG+e8lIIAx/cHLH/dr7B/ZA+Fen/tzf8ABLT4I6vq14sPiZvCFpJFqict5xiCyhx3V3Tcf9rJr8OP22vj1qPxt8bXkMl1G1lpsbQQxo+6BGH3iPbeFA9kWv1F/YW/4KbeG/2A/wDghl8LfF2v6fqninWmgv7DR9B05WmuL9o7+5Hmuyo/kW0e5TJKVOF4UO7KjfqkeHKOCwToS1fVn8U8acfYziPHLFVI+zhF/u4/q/NjfiT8F/GfwK8TtoOs6f8AZ85KO7boZk/vRTd1Pf0OB3r6o/Yf/YxOpW9n4s8XwssJVZtO02cY83GMSyp/dHQL3yD2r8k/jD/wcL/tC+NbrU9UW18Ow6NrkcUekWl5ogl0vTJFjzKYNxP2yQt86yvJIqo6hVUl65v4V/8ABwz+1xonj6z0yHxsvjKbUpBa2mnXug6ex819oXHkxxOyAnlQykIW+dPvDhw/DcYxVSDueDjM0ryjyTVmz+laabydqJxKo4ONuOMD5e2M8D0r8dP+Co37RsHj3/gotq2ntdu1j8O9Ms9HmRdv7ppUW5eTkH75cL/2xr7F+F/7c3xa8DeANNvPid4J8M+Ifs+mrPrN94VvJdNSykWMtIEt7w7CoA6m4QZ6KDgV+NUnxZm+OfxD8e/E65hl+0fEfxJeeIIIpDtktbRpGFvA5zk+WHKfdx8nBYc19FkuEcK12tj5ypBvVn2R/wAJVJfeG/P0+f7RHJGGVl3bs9v4QOlYvw8+Kmo+HviLbzp5m6GTLFj0OD+ffivnHwD+1Evw00+803+zbrVditLFYwyIbgydWZd5A2hsDOeMjr0OfqWp+PvjvpTaidXh8N6ezK8VjY/vbqVCGP764lVS3yADEaIASOT1r6P2ltDCNLQ++tG/bA0zw7DZzXGtW9jPcosduJXWLzHMoOxVP3mODwOeDXp2teOPAv7QOgvo/jTR9I8RWqyOVW7i/e23y/wS8SRtycFSPr2P40+MVbQfiF4bW+/fXnnfbMTM0zQxxBthyxY/IxHRsf6R0r0e5/aA8QeGtQeSG9miEbyyMqybQGKZPHvmsqko1PclsVyTjrHY+q/jn/wSWt9Q87VPhH4ggvrdys6aDq12FnQsGO2K5xsIGOBKSP8AbGMH528d/ADxt8CLiOHxd4d1fRfMO2GW5j3Qynk4WZC0Tng/dboDx1x1Pw0/4KSvoCtbTNcSalmN1beWxhDzxVzwx/wXDsdI8RR2OuXmrWei3QEUt7aq7tbHLDcyfxoP4h6cjkCvn8w4dwtfWErSPoMj4gr5fUVWMb9zidCnTcvmdK9I8Gy27sv+7/hUnxk0/wAK/F2CHWvCix/23dW7agpsYx/Z/iOFeWmtXX5DIgILBfmGD5nOK4Hwx4iZRH5W5hIiyK/8Lqe49z3+lfmOe5HLCycZu5+wUM4hneGUsErS6r0PobQorea3Ue2a1UsbfbXm3g7xLKFXzPukY/lXfWFx51qretfCujaZODg4XjM+4bLQLd0FaK6BbxQbq4W2+LNvDbhvwouPi/DIgVJPKdiFB+vBH5Zr+nv7QoON+p+cSyfMfa+zWy3LXjOW3htHH/PM7v0NeAfESGTxFNNumht7VTmWaZ9scKA8sTj8MepFTfH/APbO8M/DB7yPVJDNcW8KzvCOxcPsQ/UIx/Cvzo+L37fev/GDULgLeDTtChdmWFPuhRxj6815+JwLx2s/hPZwvEWHyZNYeClV/vbLzS6s9SH/AAVT+G3hfWdQsdP03XrLVbeWSI6xf2scvnEMUPlhZC0QJXjKgEAnPQHgf2gP2ttBvPh411pmq/2l4g1UExYYt9nJB3Fs99ufzr5w0nw5pniiPVbyYboJp7iQSev7z/69c/44msotaazsf9XZ/L+bNXpYWjRwcOSjsfC5nmmMzSu62Nm5S8+i6JLpbsYviS5W40C4aRzuc8yDuG7/AJ1+0/8AwbefDPQ/jH+wP4f8R6lCt5rGg6hqGiwyFsJZQi6kmMKcHKt5wcjB5cV+JXi9N/hy4/3T+oI/rX7c/wDBqD4tg1b/AIJ9+LNLjVXn0fxnctOp6fvbOzfJ+gOfwrnxdTlfqcMlzUnLsfN3/BePwPYfBX9sWzbwjpekWWnv4Js28QWFokP2WUtfXoV7m1yNykE/vGiwCVwQ5TMX/Bvt/wAE8NO+NHi68+OOoaPHDpul3Js9KtZGMkcV1GT5sqMxLbQMAByWG7ln4c+L/wDBaTx2f2tP+Cs/xLtdLawbT/AsNv4dF9KSLe3iskH2iRyOflu7idFC5YuUCgsVB+h/+DcH9sWT4f8Axl174JXtxdt4d8UWbal4dM6AyxalD/x8k44DXMZZ9oJVPs6gEg7m4aHLQnzqWr6H01WpPG5dG1P4PtH3x/wV78UN8GP+Cc/xGmsJJG1TxFZxeGrdoPvxtfyLbSMvukEkz/RDX4wNrsPh7wra2tqsK28MSBVT+Ebcr+JByfcV9/f8HHP7TkMniH4d/CS1dZri0nbxnqywSEeUwSa1tImA/gKy3R+ipX5i6rqfnIqcrwPk2thc56E9q9bCylKHNJWPk4prcteGPHVv4O+JmmeI9Qt57rRbO7iOrQQSJHNNZ+YvmpGXBXeV4UHuRXsnxD/bL+D8Xha4X4c6P8SLbWby5Vjc67LB5VpDw0hVYpCJJmA2Fdo6Zz8uD8w+PtSb+xmthykbiVx/eCgkD88VwupXjWWl3MMPN3dslrD/ALLE5I/MiorfEdVPY9y8Carb+NtT8QeOtc+y29ndZsdODtnEUZyxHrlyVHoIlFcd4z/aAfVpbiO3Rfs5kcxuvQh9o/8AZa4Txjr0b6bpumW3/HrpqNCn4Dn/AMeLVys8+R/wFf5Go9tyxsXyX1Okm8dXhWaeORo/tH7skdwhzg/lWpYeLNB8XW62+tSTWkcsqzC4t1DKjkEAn2rzuefmkhumRvkXLeuduB3OfpmueOK94Xsz6n+HXhb4h/s2eDR438G6xbeOfh/bTpfXthayyf6NIv3phEOYJUGTuXOVLggoWU+xeG/ihonxKtv+Ei8NyM+j6g+RE6COSwm+9LA6r8oYMeqfKU8vBPIX4/8AgR8cvGvwF8RyeJvAt3FJJZkDUdOnjE1teQsQCs0B4kj25y3BHBBBww+kvgn488EfFafUta8D6PH4c/4SIJ/bnh7zg39kXwz5U8S8F4JGPyP95OVYAsC3DnWBhjcM79D6DhnNJYDGJ9JaHsnh/wCIX2Uqtd5pvxN/0Na8Te6+yy8Lt3dfm6d+nvurQg1X90Otfj9bB05ScV0P3DE5LSklVX2kn959Np8d5vLG/pSTfHp0ibb/ABcH2HevGo7jBp/2vaD9KUc4rtKL2uftb4Zwblz9T5f/AGl/jVfeNfEnxOt9QufMlg8R2lxDH6JCJbfP/fIi/OvDINc3RNb+6t+a0n7ROpvD8Z/Gpj6/2vdZ+nm1yLayjzD/AJ6bRmv23BYu+Hhbsj+F85opY6sl0lL82eieHvEn2Tw/cW/+0T/46axzc+bdF/Vz/IVk2F79pUL+NaEHQ/SvQpz5lc8pxa0K/jiTzNJuB0/dsc/3cAkH86/Uj/g1A+LsfhvWPit4VmKpayQafryFvunZ50U5Ptjyc1+Wet7f7Nn3LubY2z2bB/8Ar16X/wAE6f2uZf2NPiBq3iLzDbWeseFNU0OfGCY5JoGe3kweOLmKAc8ANk8A1y4jli2+rNadKc3GEer1LOueJ7r4qfHLxPJa7o77x54gvfEmpmV1Uefc3E1wI5C2FCWsc77mYhUka5YnCk1Y+F37QbfAr9o7wLq3hW+kjsPDvijT7/UtWjDM+qRQXKNJGoYri1WMPiN8PJuDyYbbFD5neax/whnhCHR4ZmbVtatYn1eZv9ZbwnbKltlurPlZZM8rmJT8ytWDc3ypDKyMn7r5iONy5Ix0+lceBwijJ16m7Po81zaKw0cBhvgj+fU+hP2kP2lr79qX9qTxv461KSUr4k1SWe3gmVvMs7WPbHbQ/Mx4SKOFDt4LIW/iri9d1plcFvvt8z/7zcn+VcfpeqfY3EnZkD/0H6kVYvNR8+MR/wAURz+J+/XsQtbQ+XcbaItXkf2tWY9Mf/q/XFcfcTf8Tcxn/lzBH/Aj97+lbF74nWwtmk/itxvj+vRP5muduJzFbkSf61Wy/wDvNy38hWNSpZ2CN+YTV5/tdx5n+wo/nWVePstZv9ypl1FElbzOmKzda1CKaBvL+9yf0NcdaV2dA2Of9xH9KaJN8lV3k3xxf9c1ptcD3KiaWnaxqHh2+j1HS7mWzvrFvNjlj+8vbvxg5wQeGBIPBxXc+GvGM2u+LLXxR4D+zaD8QNPw11o9spNprPI3m0TqzMPvWjfe58nkBI/N4JPLmX3OKfqmmTySrLbs0cyEOro21kIIIIPYg4Oe3XjrW0Zy9m49GXHls2t0fenwo+M2n/H3wND4lstkM1xK0V3aJJu+xzjmRfdWY7kPUqfm+bNdFXy/+yR8YG1f4py6Xq8y2mtaxCyXNxt8uLV5E3lJJU/57qoYBx8zqXMnzjfJ9NWupxqjFmCs53HPc1+eZrgY0q75ep++cJZosbgYqpvHQ9OpVl8llPuB+tFFfF9PuP6RrfCfm98Y7zf8UvFX/YWvP/R71y+jt50gH+1miiv2zL/4EPRH+f8AnH+/Vv8AHL82dBGfs1xu/wBnFXFvvkoor3KMvdPNKt7L9qTb/dy36GuV0e//ANGZNu7bITj19qKKxxexUTZ8K6fqHirxJ9jDKLy+mkmEzyeXHlmZ5ZpH/gjTLOz/AMK5btQ89vJrXl2tw11biUxwzGPy/OjX7jbP4CRgle24UUVNGTsafZNJL7y53l7Mc/lwP1IqZ7hnVV/55Hn6n79FFdknoc0tzC1/VY7i/WHcyQKC0+BnJCnZx3xyfUEZHSvSfBf7KmueNdBaS81nRfD2oGxXU7ax1KS4a7kh7zNFBFLNEHByGdNzgZBABoorGjG83ccTg/HXwi1jwR4aGrC40PVvD8l0Lcaho+pQXlus7q7rE6q3mwSFUkOyZEYhSccV57qU/wC7aiivPxitJpGkScSb4Yf92pU+7RRXLT2KGI+yX8K1NOvFiba2Asg25/u+9FFduHlZ2CWx618J/wBm/wAReKr/AEnxdo4j+z+H9QtbyfZcf6Q0KTJvKj/dJr6mmuZpwpj37VG39zHuXgkDn1xjNFFfJ8VxSlGx+qeG/wDBreqP/9k=",
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ange Postecoglou', // tên bác sĩ 
                position: 'Phó giáo sư, Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhUZGBgZGRgYGBgYGBgYGBgYGRgZGRgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQrJSsxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xABCEAACAQIEAwUFBgQEBAcAAAABAgADEQQSITEFQVEGImFxgRMyQpGhFBVSgrHBB2Jy0SOSovAWNMLhM0NTsrPS8f/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACERAQEAAgIDAQADAQAAAAAAAAABAhESIQMxQRMiUXFh/9oADAMBAAIRAxEAPwDArhFHSP8AZDkCfIRPxFF2WR34weQAkba/nftFpYSoT7th4mSBgre84Eqn4m55mR2ru3OHY1jPdX5NNd3Jgm4hTXZb+cpFpsd4RcMYaHLGeosanGTyAEiPxR25mDOHHMiIBF5x6H6X5DWrO3MxuRjzhDiUGwjGxnQQ0m55X66MMTOjC9TAtimPODLk849J2mZUHOI10HjIJnIaG0xsX0Ejlrxk7aGiSKTTlWnfWCVyIjVMAYYomMUYK07acvFeAdtFG3izQB14rxs5eAOvFmjYrQB2aKctFAJow0TUV5mRWqHrG3i0ezyISg1oCFRrQIR8S3S0E1djzjncGCIgCLHrORTojDlpyECGNYWgHLTsbeK8AdFaLId7HqNDrrbT6/Ix60GI0UnqBqw23XfnABxXiYFTZgQehFj8jFlgHLxRETgEAJUEGIdxpBWjsKOWitOqphBTPSIwZ0CTqXDKjbLDtwV1tm0vJ5QaVgM6Ul8nZ86d7eS/uAIVub3MXOHqssEJ5R64Zz8Jmq4kKeHZRlGpk3iAT2QZSATqIuf/AA9Mf93VPwGKXf3geoihujUZmctOXivNEu3ivG3nQIA5TrNB9hX2YIHKZ203WCpZqA8pNOMPVFiZ2idYbHpZyJGGkZJcHUWEUx6Jm0tcna2uvkN4GBh8KzsERSWOw+lz0Go1nonZ/wDh5TyipiKhLqVZkXL7PLa4Vri7X02tvBdlMJTpIyupNRynfI0AF+6vTe9+ZAvtLvjnEmSnkU72uRcXG+3Ln85llnfUa44S91JWvg6N0CoiHZQga9uRABG9zbTeWFHiqvYpVRLX0dVDWtYd6518NPOeeYViXNxcnn4Xmm4VhA1s49Ou/wDeZW1rMZfTUvUVwDWo06qDQOVV11+Flf3TYeMzXGP4b4eszPh6hok65MmaltqUGlr9Lm3SbDA8KbKLMAG666bdOklPw9qKkgZksMwSwYeIBtfpaVOUm4nKY71Xz5xXgFeg+R0IJ902OVx1UkawVPg7nlae9cUw6VkysO6bEMbMQw6XFxzvPL+NYv7NWem6EMoB2NmDDRlPMH9j0lY55XqMssdMW6WuDyl1wrhCugYiVNd87M21zeaTs5jEWlZmtYzbyb4s57U+NwwRyto3DjvCG4zXVnJU3EhU6tiDJxlsVa21BkVRcgSs4/j0yWQ3aUVfEO+5Om0Dkhj4ftK5JWG41UUAbgG8NieN1H8LbSAEjsk0/PFPIzF1Xqm7m9pw5iACxsPGFCTuQ9D8pUwkLYHs4pN+yP0ij4jamtOFZfJwLQEneS6XBUVwDrMeUXplwh6QqYdzspm1Th1MbAQmFw6KpJAAvJ/QaYw4B7XKza8GQigFO4Ei8QxVMKO8N5ZYCurqcu1o5bRpmavDBUqNeG+40AMn06ypVbNpePxHEqQv3uUnK5b1Dmmdo4IEnwMsMNhEW5PLlyJ8bSAmKsT4mTuGH2rhTsWUHyJ1+kuy8RO62PZ7hv8Ah+0bTN7o/l6+skVcKh0tfzlrVrooA5W0GwAkN8Sg1MwtjrxnSGmDA2W0lU1yaXsYKrxFALD9pFq4xrXJRf6mG3hJ2v013DOLshAcnQaG2nkZbYzjahL6256fT/fWYTh9cP8AGpHMZ7W+lo/HXcFQSBfrqZXKxnljLdtLi8WjU9AGsA4FyCG6+DDUXHIiZ7ttwlMVhfaN3alIAobg5lt31JO4PTSzAdda9+IFEs172sCN9PdvJ+B4oHoPma5KsNtNtso2vbS/X0hLZdoyk1p5SoUcokS/Kwh/swDG+19IRVvOv25kd0B0jBQlkuEYnRZxsM2cUzoxhyxg4Zf0hrSPSOFKXz8AcC+YXIkalgMuj7+EWXmxl1TnitVbU7TqU7zQHhydZ0YVBsJcyiLFW+GCoCZPfG0zQyhRcc5XYvOTbcAxU8KxXXQGK5f0egM4/EYof7EIotgBuIuQANLQNTGOTctIxqaznLa8jjP6UkYPiLq173E7Wx7tcXsDykbC4Vm2EnYdED2YXHMRyQkALeWWD4g1NcqwGLCZu4NI3JNOO07dxNcubmAKx7uBCU6V9TrFNfBd/QApO3zlpwNitVAToWAMAaTclMncNwT+0QlbAMCfnFnN41WN1lF1j+1CKSq0y1tM195W4bjBqEXWxLDT1nOJYV3YopKoo1sNWY30v4b+sd2V4GPtAdiQid43O7bKD66+k4pqx2S5SncbWpT3AAOxB285mWqFjuzc7A2nqfaDBI6DnpY2mNTgbBu7qPCPGaPKXJXYPF5LaOh5EnS81/C8aXAuRccx+0FheDKNW+uv6y5w2Gprpf8AYDx6ybSxxsScTwkVE1BJIJ17tsvOUWGRkLJzAPUa6A899vK81XDqwWtkF2VlIYCxvccr6f7EH2kdKFfO1PM7qpC3smgtd7a30Gx19Nal/jsrjvLTz3GcPUA5TrK/DYZgdjNbxChnKtTQLnUkqt8qsDra5JAsVO/MyEuBqotiB5zez9MZd9Mt3xZXGzuB0nKgX0MpsZh3FX2jN0t5S0xCm65zbXaHxOGDHQgi0eHik9J8nmuWtnpxC6DXlKutUIa97i0eBluLRnsmJ92X+e/bLnoHEs5GYGwEl4d2dR9ZxsO5Ui0PgcM4UXjs0JduPTCfDe/OSsOyWF/lG1MMzbsAINKKKdXmfe1daTbp+ERSLnp/inJRMmlBm2U/KFp8Oqk+7pNX7ZbaWnDiB1j2FRheGuvhGVcFkOpuTLtDfWxtGYqgraX1jl0V7Z/KOl5L4fw4VLlzbwkynhwvK5j6KMhJ6wttKdHDg9IfDeOwiJcqEAtONXc7mDJhqnuJdWtk2UHraEwtYsb2stxIFFrHmessExTaKE7tx/3isG1o1BHGm/M8pRcV4klGyC+p1I6jrzllUrZEc9L+sxONd6pzG1tbchfznHMd+3fllqde1m/aarSbuZWU2943uJLw/FHZvahcqtbMuwvzYDlM0mG2JKnTbf8ASTFxpUWBU23HT0l8cde2cyyndjfYbHh1sdf2ldjBrptIHBcYCNNuY6Sa73Op0HPlbxmdnxpMpe2k7J75zuLC2/j/AL8/GG7d1xai4W5AYHS91vz6EED/ADSo4bikQ2fRdGvbQ/DcXO2tj5zZ0sncBrZCULFbgZg2YZh5WvaVcdY6Tjl/PlWCxBemAq6HvML7gOF0PlYj0gHxTkC7jSVXaXiofEVPZuSitkQ3vdUGXNfmSQWv4ynOIY8zN8P44zFz+bLnncq0dWoh1dgTAjFUV53mfLmK5ly1n00IxqH3UvHfaX5KomdOce6SPKERqhHP1MCW9bEOBcsBK1uIufijPYO0kUcPlGtojR/bO2lzGYimy6mTGdBu4nA9NzlLwCr9pFLz7rp/jEUOgnYynTUgJrDKqgA5ZD+8aSjRbxj8bFtEj3C0n1q7MMqrIwwrneQH4y52sIF+KufihyGlyuEIOpEe1JT7ziUHtnbmfnOFG5mG6eovWaku7QTY6kNheZ9r3sI72Z6GG6Wou/vdBskFU40x2UCV9Ch1Ek5AOQERrLjrD2TMDoVVh4+EpMAQlMOwzMdhpZRf9ZIxda9IpcG5UeQ1t+n0j0wIO+q+IuCLchMeOtt5n6/xXniwJtp5W/aGTI47wAPkBH08hJUIFYfyjWw2/X5QrqhFgNeohqDlftRMHUNE5T3QdRfbWXqYhSl1bXZgRpra1j85Q46sLW0O3PW4G4g8E5Jtchee3IaR8ZvaZldaaPAMxI7xtubXIsL6EDy8ZpeM1Q2BNbKvtM60kqHcKQCwG23fH6TI0BmKhdMxA6b+XnNd2y4ex4bkoqzezdGbKCTlXMXYgbAXNz0itlykVJZjawtHhVxpt6Qo4cAbEgesoEx1QCwcgQorOyMSxJHjNu2CfiqlOmctryMeJqNklS7E+MGVMcC5TjGouotLAcfQDu0/oJlMpMktRZQPGKwL/wC+S4NlAsJGw+Z1LEyHw9DdrjlJnDQcpEcibVZXWzGDvbaSMShznQx+HwDsL5TaGj2h+0PUxSz+62/CYoA5cO55QgwpkFsQ5+KT8LfOut5XCls4YS25EWRBzkuqwvqJGqUxuNpOcuLTxTHK6tdWonjOlxa4W8CFkhE7pmMztdV8GMDWsxOigS64bhg3vSnRG5CXfCXsddpUytZeXxzHuHYjBjW0o8VgSGBBNprGp5tQYCrhLx7u2LDsMjm+3Pyl1hsYMmra3JGl9NNb+n0kjG8IDd4TlPhpFO7IQC7ANpuFW4+oMednHZ4y3LSkxtXUkHXbTXQSTRxKsoAXvW3Pjf8Aa0dieGEXtbX0t4zmHwxU8vSY8orhfqO+DJ1P/wCiSaC5BYesfV0l/wBmuy74gh6l0p8vxP8A09F8fl1jnLLqLmMxm6H2e4ZVxDgU1uRa7HRUH4mbl+vSezcI4YtGmEvmJHeY/Ffw5CV+AwqUUCIoRRsB+p6nxMNxfjC4egz3u1rKN8znRR5X+gM3ni4/6yy8ty6+PN+KdiqJNU0EAKO6hFJIZAdMoOzDaw0Nuu+UqcMyhgFnofB6zKovcnck7kncn1gO0bUWGdgVPxMthm2F2BuOe8dx73C28uPDnzd1YZODudSJtqGEouAUrlSfxIG/QiDqcAxB/wDDrUn8CWQ/Igj6y5qfEdszS4ASRqBLL7mQbkQlXg2PU60mPijI4Pj3WP1g6fZzHv8A+Ww83Rf1aLVt3IPU7pz4VEU6iBwYpIpvaSv+EcSD3yi/1OP2vHp2Pb469MeRZv2EqYZ31EW4z3Uc16A5AmN+9qa6BfpJ69laS+9iR6J/do9OAYQe9WqHyCD9QZf4+T+i54Kz77T8P0ilr9zYL8dX/Mn/ANIovwzH64sni+EsjeEJhkysL8hL7i+MCgZlGvzlO+JUuGHKZTK/Wlx36PqJmOimdp4Yj4dPGM+8srbadJ2pxEtytHctlMbEtcLb4RaJ0sNLSD95ORbSBbEva15lxjb9Mta2t0VdidY1HVW1OkpczHUsZx9eZhxgvkyvutE3EUTY3hH46irciVPDeHU2UvUcrrZVABJ6k3Oglj9iwtrlHcDmzlV/02+U0x8dym2WWUl0hjjhvptN5wDALicB3we+7spHvIw7gI/ynSYri+MoUKRCUUDsLLoSwHNrtqPA+s338NzU+wU/a6Fi7p1yOxZCemhuPAiO4SdCZX2yPEuEVqHvrmQfGgJW3Vhunrp4mUdV7Geo9p+P0cIAHBd3BK01tcgbsxPurPLMZx3/ABxWSjTp5WuFAzA2O7KTYHxAGvlMMvB31W882/cars72XLWqV1vzSmR9XH/T8+g3uGoZRczPdje19PGf4bKKdcXOS/ddR8VMnfxXceO814o332nThjjjOmOWdyvaKAznTaecduuKk4lKKOGFLvOA3xt8Pmq8v5/Ceh8YxmVHytkVVZne9rKouwB5aDU8vPbwzD452Z3tq7FwvmbgfKwjqY1y8dRV75ZTa5troOf1lXW4r9oQ5QpQkgOQ2YhSdQNLcjr8pF+2JUYAZlaxW1iLE677W0jziCBkzZjz0Q63OxXbW8lQNElRa8ssLj2Qbn5yixLG1/3kanjDqCdIw2ycfNvekij2iPNvrPPRjTEMaQb25EH9j5wLb0pe05uqhtW6kEAdZapXp1AAy02Y8ygDH15ehnkGFxZLglyuwBVVOXyB21ufWanD4Oq4ztVUJa+dTYn8vI+EN2eh79p3aXAthznW+QmxB1KMdgTzU8j6eedbiB6zRYLtDTcnDVzmRhlRzzB+Fj+/LSYzjGFbD1Wpty1U/iQ+63++YM6/H5rZq+3Pn45LuJ/249YpR+2imv6I4rTFmpVfMwPgOQEemFYcoSo7qbHaFR+pnk7doH2NuZhfsvVoYEeMQX+UxboBXCqOccKKecOVP4Y+jhXc2AA0uSTYADck9IdhGyKPhhadIt7qbbk6AeZOghDXpUx3u+3TUKP3Pr8pWY3irNpew5KAAB5AS5jb7K1OARTctmPTZB+5+kY/E1W5C5mGik+6NvdG1pVpW7pJHgL7fLnAO53J+c1iS9g+Kr06Sm71XCX6XOreQFz5CfQtNVpoFUd2mgAH8qLYD5ATzD+EfCs9SriWGiD2SX/E1i7D8th+Zp6g6DrDQeN8TxZxDvWe+cm4PLL+DXla3qBM1iH5KOVjqDqdOmm/nPQ+2mCp0aYCHvO2guBZVuxt8gPUTHYSgGqUide+gN/FwDY+RimPwWpXAOGPTtUyHPfutzHTL0M9a4HxKrVQLUFnUd5gNCOR/q8PWVuDwIJAA0G3n1mlw1AIth6+crhxo3tkf4kY8U8LkXRqzBB/QO858tAPzzLcEweCWiK1V0Ym+YFyCpB0VVU3v6EnlA/xL4j7TF5FPdooE/O9nc/LIPyzJU2VO9bvdd7eUz8mNympdLxsxu7NrGrju8xykLc5QxAYKT3c1tCdp2g+tz+58t5BoqL3Lanl/f8A2RFWq66StEkcRqAaDnKwtDVHvI7QS7eNd+UV4J21EVB6vNP2exedgtRxkGipe1/LrMsq3hVNtRoYw9R4rwCniKRCDK4F1O2vQzDYus9VPZVR/jUL2J95qfxKeuXRh4XlhwDtW1Mhamq9efrLrtVgFq01xeHsXTvG2uZBqyt1I1PlcQl0LNxgPYzsu/vbDf8AoD6RSuSOIeI4sracohxhBskzpacvOds0DcePJRAvx5+VhKW8UAsX4xUPxSxTiTLRCZjndizn+RRovqx/0TPUxqPOSKT94nyAl4lUx3gAbmNrVLm0LTFhNEnCDxL6WG5hFkns/gRicXSpG9na2m+gJ/QE+kYex9h+HewwVJLasM58c2t/W5PqJdV3CgkmwENoosNAAAB0AFgJk+2fEclIoD3qncXbb4jry2H5pQYPtNxL7TVZr91TlQWPu9fW1/WD4NSLVEy2Go0B07lmFxe+pA9fLSJcnvDNcbte/gvlt+nSaDsZQzVxYXAHMW/c8xFiK9K4Vhiqrfe0kY/FLSpvUc91EZ28lBJ/SFpLYTG/xS4j7PCCkD3qzhdN8iWdz88g/MYWiPJcTiGd3d/eqMzt/U7Fm+pMGh12v4RhMa7fWSBXe500HIXvBkxsV4A+MaOVpxzABXgie9CEwDHUyKocPHKLwSCEVo4k405a8B4++Gax71NvfQ/qvQyDhQGYAmwO56TRJ2TNQdyot+WYEfUXlaCV9t4Z+D/QP7xSH/wHiv5P85/tOxKZb7M0cMKZPtFaYbXpCGEPWdGE8ZMnLQ2NIvsAusj0W7x8/wBpNxG0gU929JePpNHpi5ki8GgsPEwizRDrtpN3/CPhoL1cSw9wZEPQtvbxsCPzTz/EPpPcexPDPs2CpIRZ3HtH65nAsD5DKPSVIKvGF55Z20x3tMQygi1PuLvqfj8NDceny9N4vi/YUHqAXKqSo6sdEHqxAnib1GYl8xLG+YkczcDXy8o6IVxe9gb30BOm4tr85v8AsTw7Lr1AJ8JhcNTBcLupN9QL2W/nbnztPWOzSAUweup/aE6hL0Txn+J3Efa40oD3aKKnhnPfc/VR+Sev4vFrSpvUf3URnbyUEn9J854nEtUd3f33Znb+piWNvUxUwzBjU+Wn9513sI1DYSQeTOXjWaNLwAl4PNeNvE0SjbwR3hWMj31k0JAaOEEDaPUxwDI0vuGcfamLHW0zgM41SPYbn/jVun1imF9pFDcLtbLUBhcsirTOfL0k7LMbGkoeWIJClZ1EhobV+KaxkWhuT4wmLa7HzMFRGnrNIipC66x28QnVlxKTwvC+1xFGnyaooP8ASDdvoDPoGk08Q7DpfGK3JFY+pso+hM9poP3ZU9FWV/iVjCKSUgffYswv8KW/6mU+h6TzzbWxsQdMw5Ai+3XW1v7zQducbnxRFwRTVUsb2vbOSbW3zW3+GZ6w1Gh8b9ATYctf1Aga87O4Auzgm2QZRm63JIHqB8zPSOBUCqDNv0me7J8NC4VGIszlnvzFzZdemVVmowCECPWoTP8A8UOJeywRQe9WdU/KO+58rKF/NPFiZvf4tYwtiadLklPN+aoxv9EX5zBMJNMJyCbesdeCXe8cDJUcY2dzRrGAdnDOLOkQSa0j31h2kc7yaqCrCAxix0ID951aU4jiPSsJU0k32M7D+0WdldBqF4O5LMZDxSKg3uYXGcRqOTrlB3AlU46zlmGW92ujLPDVkhPiuQENSqd256SEzRik2N+k2mNY7R6rTuG5+ca4nMO2/pGEm8cDpBNoI4nQeUcKtF2Ge1Zz4KPqZ6vRrd25PKeRdkmsWPVgPkP+833G8Z7PCOw3K5B5v3fpcn0lz0n6wWKxHtKjvm0dyxJGwZs1tr6abdIOxYWFr6Kq21JYnoNfUziD4bnqotve1ri+lx0vraWPAKYqYqgt7/4ik3HJLMNfJT9IQ69cw+FCUkTkiKv+UAftD4ddIne865yi3PnKyKPEO32Kz4+ub3CsqDwCIoP+rN85m6zab7yZxDEZ61R987u/+ZyR+srqzXPlM6ZARCIGKSoiJy8dOMIA0GOvG2joAxoBt4doBoqIKhnTGpHgRhxUhBTiWFGsJAHlnIfIIo9EvK0gVYopMOhrGNsYopolEq7RmH5+Y/edikfVJFSdfb0H6RRRlVz2a5/1/ss1/ar/AJVf60/9rRRS56T9ZSn76fk/aWfYr/nKX5//AI3iihideu09xB4rZvI/oZ2KPIo+c6fu+kjGKKZ1UdE6IoojdE6Yoo0mCKKKJRrQDRRRUHpDCKKEDses7FKhHxRRRk//2Q==",
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Khám Thận - Tiết niệu', // tên bác sĩ 
                position: '', // chức danh
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Rodrigo Hernández', // tên bác sĩ 
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
                dr_or_pk: 1,
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
                dr_or_pk: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Joško Gvardiol', // tên bác sĩ 
                position: 'Tiến sĩ, Bác sĩ', // chức danh
                //specialtyID: 0, // của chuyên khoa nào
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFBgWFhYYGBgaGhwaHBwaGhkcGhwaGSMaHBwZGB4cIy4lHB8rHxoYJjgmKzAxNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJSs2NDQ0NDE0NjQ6NDQxNDQ0NDQ0MTQ6NDQ2NDQ0NDU0NDQ0NDQ0NDQ0NDQ+NDQ0NDQ0Nv/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABAUGAgMHAQj/xABBEAACAQIDBAcGBAQFAwUAAAABAgADEQQhMQUSQVEGIjJhcYGhUpGxweHwE0Jy0QcjYpIUM6Ky8SSC4jQ1Y3PC/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAUB/8QAKREAAgICAQQBBAIDAQAAAAAAAAECEQMhMQQSMkEiUWFx4RMzgcHRFP/aAAwDAQACEQMRAD8A9miIgCIiAIiIAiIgCIiAIief9Ounn+GJoYbdet+ZjmlO+g/qfjbQceUA2G09r0MOu9XrJTH9TAE+A1J8JQVf4kbNUX/xIbuVKjH3BZ4DjmZ3ao7/AIjsxLOc2ZuefD0sOEiHO89oH6U2X02wOIyp4lA3s1L028g4F/KaJWBFxnPyRTJvbUngc/jNX0U6Y4jBsAjl6d+tSa5Ujml+xpqOehigfo6JRdGuktHGoWpkgr2ka28veQOHfL2eAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAM30623/AITBVKgYK5siZ57zZdXmQLnyn51XEO54nO97XNzxPM+POesfx0LGlhVGhqMT4hbD/cZRdDdgoENRluTYAHhYC59955KXarJwi5OjEVabKblTmb2tm1885yw2yqjqzABdcibN6z1l8LSUdVFv3AStqYWlcncsfOVfyl/8C5PL6mFKndYbp4jTXTxBtOxKJU3a4FxY20zE29TZDVajllAF1Aa1+qt+z7zLGhsOjulCN+98zbeHhbSSeVHn8BS/w4x7Uto0hvZVbpwsQwuPUCe/T8443Z74XF0WViQlamUPG2+tr+WU/R0mnaszyVOmfYiJ6eCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAYb+Kuz/xMLTfjTrI3kwZD6svulZiSaVFEpUy7leog45XLMdFUZZnmJrelFRHoVKV7vZSFsTncMvwlE4b8EBTZt0C/lrKptF+NOjD4naO0KbXenSA5F1+TS+wFV3TfdAvDW48iNZTbZ2K7Mrfis+WaqNwMc9etlrre5tneWOzMC9DDbhbNnDWysOGVshwvISarRdFO9lZt/G11f8KmUpH+o3cjgQBew8Z27F2Xix1xiUqEZlGBF+4Mez46Tr6S7EZ6rVLkq4FyDaxsBkfLnLDZGDVFRUqOWUkkFgVzJJJuCb5kZEZACLVBxd/slbf2eKv4BKkMKiZaEWYGx9xnqswddC+5z3lPgfszUbJxbuXD7p3d227pnckfCWQl6KMkXyWsREsKRERAEREAREQBERAEREAREQBERAEREAREQBERAMt0l/lMawzLJubvtMDlc8AAT75FpoHQW4gS+23gFqoLrvbpvbmDrMN0Z2su4KbmzKdwX47uXylUo7Lou4quTur4YI19YqYmm3VLHesD2WC8Mg5Fiw5XlZ0r2+KTimih6h0v2VB4t+3dM9j9l1q5D1cQLC1hTVmUcwNB5yvtXsvty45NbXxSMlk3nANjdSOdyraEXnPZuDRjcTG4PYr0lLUcS4Nswabbp5XGfwlz0S22XqslRQjIt2I0NjY5HSe9q9Hrk0qemazaTrTRbki7otxr1mAy75e9Gw26xa97hcxYkLoT7/SedbT2x+PisOidkVkt3kuguZ6xhMPuLbU6k8zLIx3ZnnLVEmIiWFIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgHyeCdKqbYTG1UztvmoltNyod4HyJI/wC2e9zzb+LOxWrqj01u6KbgaslzcDmRqPPnPHXslG70YfaW0UetTe/YXM8+F+86ZSPtfpHVtZHJFyNBw4c5nxWOYOhGfDThO/DYpFI+Y0vxt5medqLP5GT8D0gxAFmdjfhp6++dNLaZV3IyZ9TnkMuMh4rEqxAUkWX5k387+s4BN8gC5Y5BVuSTwFp6ooi5PizZ9BKH4+0KAAuqD8ZjrbcFh/rKz3Wedfwt2G2HDtUC/iOBpmVUflv45nwnosKvRGV3s+xET0iIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIB8lFt1buv6fmZbvWAIHE/efKZWnWqu7mrYMHKhRoqroAeN771+O8JGfBKG2ZXbvRKnXYuvUfiyi6t+oc+/WYja/ROpQG8zKy3AuN71nsrJnI20aSlLFbiQUmi2oyezynYvRBq1iW3V8CTx52m72L0fpYfsrdja7Nmx8PZGfCXGARVGQtO6mtzeeOTYpLgtNgrZ2/T8xL6ZSjiylemqjeZyVKj2PzMeQGRufDjNDTxYJIItbjwz7+Esgm1oqyaeyXE+CfZIiIiIAiIgCIiAIiIAiIgCIiAIiIAiIgHyJ0YjEqguzAfHyEoNrdISosgC3yBbUk8hLIYpTekVzyRgrbNDVqqouxAEzu1+kNrpTyPPj5cpnsRtFwpZyS5yBJvbvEh4AFmM3YujUflPZhy9W38Y6NnsrFby7jHragnj4+o853Ymhv8QrjK57LDgHt6MPpM+zEWtwv8vmTLDCbWDLapcgXG8O0P1DiJVlwe1wW4s9afJ1V626d11KN35g96sMmE6K2KG7rLiowK5halI+4d9/yn0/TKjGbIvnSO8OKntrfS44jv/wCZhniktrg3wyxlp6ZETFACS8Hv1B/LAAHadskXw9o93vM5UNmImdXM+wD7t86AfHv0kyvXCqGqtuIOyijM20Crw8Tn+mewwN7YyZ4x4JWAwypcJdmbtu3abx9leQH1kLbO1FX+Wpvn1iOJ5SDjdtMbKo3Qb2Ua2zzYyprLdSeI+zOjh6aqcjm5uo7r7TR4Xa7pwLDkfkeEu8Htem+V91uTWF/DnMJiarGipBzXI+HAyuWpfM5mTl0kZ74ZVHq5Qdco9cn2ecbG2zUV90Md22hzW+WgOnlNVgukSMd1xum9r8D+0x5OlnD7m3H1MZr6F9E4I4IuCCOYnOZzQIiIAiIgCIiAIiIAiIgHyVeL2j1mRO0LXJ4X0tJ2Jqbqk8dBM5iBu1CfaUe9b/I+kuxQUnbKM03FUinxdR/xirk3OhPKVG2cRvVLA5LYD5zT7YpbyKw7SgHvtofWZHGdv3Tq4KezmZrTol1X3qAvqDOOyyQ0YbNN0+MkYalui8tek0Ux20yxd5Co1d1z4+h+IznJKl5Gqt1j98BK1H0WSl7J1DEtTbeRrcwOyfFf2lthdpBzuqq0mOpvkeJ3TwHGwz101ma3/DznJRcSM8MZEoZpLjgusXtRKfVp9d/bPZXmVHE9/vJlHXxJZizEs3tN96d2k4VTnxnS4t93kseKMSGTLKfPB2I13v3TuY5TowozPl85KtLHyRirQc2W3AiVglhiuXKVjHOex4Iy5J+z6d2PcPv4S52dg987x0Ei7EogkLzIJ/SL3krY+LLVqgvkwYryFjlbymfK27r0X4qVX7JlLGNTqoqnJmsRw3ZraT3F5kMMu9XJ9hfVpo8DUztz+Uw9RFco39PJ20+CwiImQ1iIiAIiIAiIgCIiAV+0HzA5fOVONW9u5h65ftJ2JO8WvocvKU9TEdWzZMp3G7m/K/gcpsxLSMWaSt2dO0mIdFHsVL+FiQPeJlMU93PlNfVpb9Wm3cynuurTO1sCVqMDnnkOY5zdgklr7GHNF3f3O3ZNDiZJrD8ok7ZuLWmpDJvE63sLDgLnhrJBoUarAKWQtwIBB8DfKQllak7WiyOJOKSeylZCFBsd0mwNsiRqBIFVusfGWOIcs2eQGQGtgMrStqHrHxPC4+k0Y/uUZNcH257/AEkvAneuJAY+HrJGz3s4757JaIRdSR11zZoxI0I9Badu00s51nypmgv6mE9JnrW2j7ghr5SUiliVRd4i18wFW+m+xyBPAanlI2GO6jtbsgn3C80VDDpSSgpJsylmN7bzFSzWZcxvMQTn+UDTKZ+oydnHJq6fEp88FRiNl1jY7qHuV2B4ZDeRQTdgNeMqMRTsb2IsbEEWIPIjgZrC9Pdcr1CEZlIqPYFRcAhms1zwIkXbWFDCk/5nG6csxbdK3uc7XcX5EDgJVg6luVSRZ1HSxUbizp2eCtCrU4lQq+dwSPf6SPsM2qj9J+UstuKEoKg4n4Ss2Iv80eB/b5y+LuEpfUyyVTjH6Ghw6AO7+1uj+0Zn3n0k3Z9a6hhzvKHH4ss34NPNid0nlz++6XeAp2UItyqALfmeMyZI/HZrxy+VL0aAGfZ1UD1R7vdlO2YGdEREQBERAEREA+TqrtZSe6dsh7Ray25mexVtIjJ0myE2kodqJcswF2A3XX2k1uO8ag/tL1+R45SqxtEtkDu1UzU+0OU3Y3TMGZXE6tkYjeCi9yl7n2lKtut8jyIMj7RIDnmfDkOeR+Mj7JP/AFC/lJDby6C9syvLMC68wCOMlYxOue8D588jL67Z/wCClPugdOGoFjnkozIzF5Ldc7jK2ljpblOeHSwtp7x9J2YkWW88lK2SjGkVuL6zM1rbxvYep8znKeoOsfGXlbSU9anctxzPI+mol+N6KMq9kc37/SKTWYGcD95D5whlxQWG1Mwj8xbTiIZLC2enBZyCb9AjiDcaicWcMAeY/qMrXFFr27+p9wvZI5k/IZyzweNRqIo1W3XQfy3IuGAFlU5jrWspBI3uB5VVM9XzM7aI15EEHzlWXGprZbim4PRKwnR5EZ2ZwiMSzszZEakLcBQp3tSSbDuvOWM2itavTVP8tCAuR62YJbPQdVQL954ypqYZDcqq3Hdb5Trw7EVFPJhzPHvykIdPW27rgnl6hvSVXz9y/wCk1TNV5ZyHshSpapa5C2Uc2YgAe+d+Np/i1iORsfCd2LxaUTYZuBkvAE6E+V/fJLWNQXLK2rm5vhcHXhqf4bCkudZ83b2QcyB3zTbMdVui6hQfjmfEzI7MxJUsyozu2pOQHnLnZWGqLUNV26xG7ujS3fKc8NO3+2XYJ01S/SNPROt9b/ECdsi4R7lr90lznNUzpRdoRETwkIiIAiIgHyVe1HzA5S0lRizvFpZiXysryv4nXWXeXvtl4ytxALrvLk6etuEsaR6vhKnaLGk61B2GybuPOa8a3Xsx5Gqv17I2CqrUro/ZcbwZT+bqsLjvHw8JJxa2cH7/AG986FpqcTTZSA12uOd1brL+0n4indh5/KWydSX4KYp9r/J8prui5y9PpOnFKzLZQTnwBPwllgwGLE2soFgb2ub5kd1p1bQxKhetWa2nUXnKu991JF/Yu22ynTDVGzCMQdDbI++c6exKt2LLkdLlfmcpBqYveqgK7sot2mPwGQHdNJtdesSfZHfz4S2UpxaX1KYxhJN70ZDE7Mdd9rLuobMQVyOWWZz1Gk6K2Femd1lKta+oOWl8pb0P/R1z7VQDS3FOck7cNH8YiotQncW26VAAz56mWrNK6e/1RXLDFx7k6/P3IGyEbdY7p3eJzsDyJ04yLVQ7xABI1/M1vG2U0GyRTamy0d8bzjtEX6u6Wbq/lAt55cZJetQViu8m7YqwbeYt35ZCxv7+GUredqT0WLAnFbMxh1uPM/HukjDakGSmwf4LqVa6N1kbXLUDlcSx2njGpsg6rBku28qmxy0sB3yUsttKO7Ixx0m5aoy+/uVCOBPMiduNw9mVhofvVspeGjTxBCsiqzX3WS6kEC/WGh0letI7u43aRit+9SRkWk45bdcP2QljpfVeizq1VpK1ZuIFhxYkWCjvJmXd3cljmxuTbh3DuGkmdJd7/pr9izc+2CLX59VjIuHq7jhh5jmOMlhjUe73/wAIZ5bUfRoNlgPTVlyZdR4ay8o1AwvoeIlRggFYOmjWuPGW26DmJjy7ZsxaiT8DqfCTZCwOp8JNmKfkb4eKPsREgSEREAREQDiZRu9m8ZdVeybcjMrW2rR39xqqK4NtxmCv/a1jL8K5KM3osLWJ5H4yNilDKytofu4kgOCNR7xIuJPVPdL48meS0UODpsmIpqxuA+R7iCMpocYbC8z2He+IQXyDj1l/tDTzH36y/L5r8GfD4v8AJxwDsuYy9AfLT3SJtnae7pTpk9673zk6iu6v2PpM1tt7uBf1kccFOeyWWcow0zuweNetURW3QAb2VQo87ay72o7FGJztloDwyHxlT0UAFVmJ7K5DiS2R9L++Wu2qgFKoBnc5ZXysR857k1kUUuDzE28blJ82ZiotenTsQy02IOg3STZgcyeQPlOGIqVHO9U3iwAuSLZHNb2A14GTdoY6m1NlXIn8IEkHrBFtYXyUq1/ETvwOMolVRzmyBXJ4CkboO+4+Uu75Jdzjv8FbjFulLX5IuysWysyCwDdo7pDf3a2/ectpjrc8v6j9J3bHxKmu1ZyAWawFrnrXvkOAUbt/6hJ9aoqlw26yqu+tySC6Hq2vkb30Gsg5dsuCUY3DyIuExZWgilQynMX1U3Oa2yElbUx9Muu/SJ6oswYiw8LTt2Qpalc5lsyxVWAJux3gfynmOUpNoneVDxGUjGMZTf8A36k5SlGCf+i5TGoq3p0zvWyLEm1+4CV1IkNc6kkknK5Op5+6ctnHeAHyacqq7r8vT6n0klFRbR45OSTOXSYKMOjMQoDqtybDrAgZ8DcLM8p0v/zLnp4l9nt/S9I/61HzmdwNJQgsAPDL4SldWsK7WrLv/C8/yi6NXs1rAFMxxXQ+79pe0WBFxp95TIbNYgqQxBB7vW40l/SxbW4e76zPPqscn7NMejyQVOv8GgwJz8pOlRsmsWJvbqi+V873lxM8pKTtFsYuKpiIieEhERAEREASt2ts2lWQ/iorbvWUsASrLmCp1BBEsp01xdGH9J+EAyi2sJCxrdU/eslI3VHhK7G1BYzMmbEiPgz/ADUP/wAierAfOamqtyZkMK/XT/7Kf+9ZswM2PjN/TSfbs5/VJdyOqqbL9j6TH7Rqb1Q56d95qqj9Rm7vD6TGtU3mY9543nT6dbbOT1L0kX/RhM3bynft09Uj5A/8Tl0Zp2pk8zOnbWYPHPuPxzEg3eZk0qwozDfegnJZxfX/AIE+rNpiZ34Ltj6/KWO1hcA29CfjlKvDdsfX5Sy2jmgPyP8A+pXLyRbB/Fos8Gn8pf0iVWNbhLrAC9Jf0iUW1cmlOPc2XZNQTJWyT1vo0scVTzH36D5ym2U/WH7H95o2S4Hj8O795HL8ZWSxfKNFV0yW+z6/cFb+10My+zHug8JuNpYValB6b9l9xWt7LMgOmmV5gtmqU3qbdqmzU2/UhKn1BnM6n0dbpHousE9iPGXdIzNUatml5hqoJtMDOg0aXYJ6z+C/Ey7lF0fPXb9I+Jl7NEPFGPJ5M+xESZAREQBERAE4PofCc50YtrIx5K3wMAwz1LIPCZ/FY25Il1tJwq27pmxnczIlZ0OESMNigHpd9WkP9az0KqciOc8vCWam3KrTPudZ6fV1nQ6bxZzer8kQcc25QY9x7pjVP3eavpLU3aduZ5kTMYZN51HMjlOt0/g5HF6jc1E22yae7SQd0qdrG9/PkfjnNBTWygchM3tRrg/+PwOYmfE7m2aMqqFGfqfeg+ELPjD7y+U+rOgc9n2h2voflLLHdjT0+bGVlAdb6fsZPxJ6n0t6kyMuUTjwzQbIN6K+AlNtxLGW+wj/ACl8JC2/TyvMsHWVmqavEio2a3WGXp9ZrMI+g/b4CYzCmzD9vrNds83A8uXwEn1C9kMD9E3FLZD4r/uWeedIP5e0cSlrAurr3h0Rif7iw8p6PVF90c3p+4MhPoJg+ntNTtO2hNCnnwJ3qnracnOdfpuSsFW+ktdlYg72fOUtDIsP6j6fWWGz8T17DSYZI6kXej0Po3mznhZfW80Ez3Rk5t3gel5oZfj8UYsvkz7ERJlYiIgCIiAJGx/+U/6T8IiePg9R51tvQ+UoqfCfImaJufBzfs/9y/7hPSX7QiJv6bhnO6zyRSdJ+yPGUmy/85PGInWxf1HFzf2m74TM7W7I8IiZsPkac3iUX5TOAiJ0Uc5nGj2pLMRPHySRouj/APlrOrbvYMRMa/tNj/qMoms2WxewvjES7qPEqweRbDtJ+tfjML/ED/3Bf0UvjUiJx8x2OmKCpr5/OSdm9uImN8HTgel9GNW/SJop9iWw8UY8vkxERJlYiIgH/9k=",
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
                dr_or_pk: 1,
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
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clinics', [
      {
        name: 'Phòng khám phục hồi chức năng Bayern Munich',
        address: 'Số 16 - 18 Phủ Doãn, Hoàn Kiếm',
        image: "data:image/png;base64,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",
        province: 'Hà Nội',
        descriptionMarkdown: `Phòng khám Quốc tế EXSON là phòng khám đa khoa tư nhân chuyên sâu về điều trị các bệnh lý cột sống và tủy sống. EXSON đã nhận được danh hiệu “Top 10 Thương Hiệu Tin Cậy” năm 2011 do tổ chức Nhịp Cầu Sức Khỏe ghi nhận.

        Tại phòng khám, mỗi chuyên khoa đều có những chuyên gia chỉ đạo, cố vấn và giám sát các hoạt động chuyên môn. Trong đó, nhiều bác sĩ là thành viên giảng dạy của các tổ chức y tế thế giới như AOSpine, Hội Phẫu Thuật Xâm Lấn Tối Thiểu, Ủy viên ban chấp hành Hội Phẫu Thuật Cột Sống Việt Nam, Hội Cơ Xương Khớp Việt Nam,…
        
        Phòng khám đầu tư trang thiết bị thăm khám và điều trị cơ bản, với các trường hợp phẫu thuật, phòng khám liên kết với các bệnh viện uy tín để điều trị cho người bệnh, trực tiếp các bác sĩ tại phòng khám sẽ tham gia phẫu thuật.
        
        **Địa chỉ**: Số 722 Sư Vạn Hạnh, Phường 12, Quận 10, Tp. Hồ Chí Minh
        
        **Thời gian làm việc**: Từ thứ 2 đến thứ 7
        
        * Sáng: 7h00 - 11h30
        * Chiều: 13h30 - 17h00
        
        **Hình thức thanh toán chi phí khám chữa bệnh**
        
        * Chi trả trực tiếp bằng tiền mặt
        * Chi trả qua các loại thẻ ATM
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2019/01/03/173538184228phong-kham-exson.jpg)
        
        
        ##### THẾ MẠNH CHUYÊN MÔN
        
        
        Với mong muốn người bệnh Việt Nam có thể khám và điều trị ngay trong nước, không cần ra nước ngoài để thực hiện điều trị bệnh lý, Phòng khám đã ứng dụng công nghệ cao, trang bị các thiết bị hiện đại để phục vụ chẩn đoán và điều trị, đặc biệt là các bệnh lý về cột sống, tủy sống như:
        
        Thoái hóa cột sống
        Vôi hóa cột sống
        Thoát vị đĩa đệm cột sống
        Phình đĩa đệm, lồi đĩa đệm
        Xẹp đĩa đệm
        
        Một số phẫu thuật được thực hiện thành công qua khám và điều trị bởi các bác sĩ tại phòng khám:
        
        * Vi phẫu thoát vị đĩa đệm cột sống cổ
        * Mổ triệt để u nội tuỷ sống bằng vi phẫu thuật
        * Phẫu thuật chấn thương cột sống cổ cao, cột sống cổ thấp, cột sống lưng, thắt lưng
        * Các phẫu thuật nội soi khớp gối, khớp cổ chân, khớp vai, các phẫu thuật thay khớp háng
        * Hơn nữa, Phòng khám còn phát triển Phòng vật lý trị liệu để kết hợp điều trị, mang lại hiệu quả cao cho người bệnh.
        
        Dịch vụ khác:
        
        Phòng khám nhận khám và điệu trị thêm về các vấn đề: 
        
        * Cơ xương khớp
        * Tiêu hóa
        * Bệnh viêm gan
        * Hô hấp
        * Tim mạch
        * Khám tổng quát
        
        Một số thủ thuật đơn giản sẽ được thực hiện tại phòng khám, đối với bệnh nhân cần thực hiện phẫu thuật, sẽ được các bác sĩ của phòng khám trực tiếp thực hiện tại các đơn vị bệnh viện hợp tác của phòng khám.
        
        ##### TRANG THIẾT BỊ
        
        Phòng khám đầu tư máy móc, trang thiết bị tiên tiến nhất, được vận hành bởi đội ngũ chuyên gia nhiều kinh nghiệm:
        
        * Máy đo loãng xương DXA - tiêu chuẩn vàng để chẩn đoán loãng xương, có khả năng đo được cột sống nghiêng và dự báo, đánh giá các nguy cơ gãy xương.
        * Hệ thống xét nghiệm hiện đại cho phép thực hiện được những xét nghiệm phức tạp nhất phục vụ cho công tác chẩn đoán và điều trị viêm khớp, thoái hóa khớp, gút…
        * Các kỹ thuật điều trị phẫu thuật cao cấp như nội soi khớp, thay khớp háng, khớp gối, kết hợp xương gãy, chuyển gân...
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2021/05/20/150934-exson-may-do-loang-xuong.jpg)
        
        
        ##### VỊ TRÍ
        
        * Phòng khám tại số 722 Sư Vạn Hạnh - cách Bệnh viện Nhi đồng 1 khoảng 350m
        * Đường Sư Vạn Hạnh là đường 1 chiều, để thuận tiện hơn bạn nên tìm hiểu đường đi kỹ càng trước khi đi khám
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2018/12/12/103603vi-tri-phong-kham-da-khoa-quoc-te-exson.jpg)
        
        
        QUY TRÌNH ĐI KHÁM
        Dưới đây hướng dẫn và quy trình đi khám tại Phòng khám Đa khoa Quốc tế Exson dành cho khách hàng đặt khám qua BookingCare.
        
        1. Bạn đến Phòng khám Đa khoa Exson tại số 722 Sư Vạn Hạnh, Phường 12, Quận 10, Tp. Hồ Chí Minh, cách Bệnh viện Nhi Đồng 1 khoảng 350m
        
        Lưu ý về nơi gửi xe
        * Xe máy: Bạn có thể gửi tại phòng khám (có nhân viên bảo vệ hướng dẫn)
        * Xê ô tô: Bạn có thể gửi tại Vạn Hạnh Mall - đối diện phòng khám
        
        
        2. Bạn vào quầy lễ tân của phòng khám, vui lòng báo đã đặt khám qua BookingCare để được ưu tiên hỗ trợ.`,
        descriptionHTML: `<p>Phòng khám Quốc tế EXSON là phòng khám đa khoa tư nhân chuyên sâu về điều trị các bệnh lý cột sống và tủy sống. EXSON đã nhận được danh hiệu “Top 10 Thương Hiệu Tin Cậy” năm 2011 do tổ chức Nhịp Cầu Sức Khỏe ghi nhận.</p>
        <p>Tại phòng khám, mỗi chuyên khoa đều có những chuyên gia chỉ đạo, cố vấn và giám sát các hoạt động chuyên môn. Trong đó, nhiều bác sĩ là thành viên giảng dạy của các tổ chức y tế thế giới như AOSpine, Hội Phẫu Thuật Xâm Lấn Tối Thiểu, Ủy viên ban chấp hành Hội Phẫu Thuật Cột Sống Việt Nam, Hội Cơ Xương Khớp Việt Nam,…</p>
        <p>Phòng khám đầu tư trang thiết bị thăm khám và điều trị cơ bản, với các trường hợp phẫu thuật, phòng khám liên kết với các bệnh viện uy tín để điều trị cho người bệnh, trực tiếp các bác sĩ tại phòng khám sẽ tham gia phẫu thuật.</p>
        <p><strong>Địa chỉ</strong>: Số 722 Sư Vạn Hạnh, Phường 12, Quận 10, Tp. Hồ Chí Minh</p>
        <p><strong>Thời gian làm việc</strong>: Từ thứ 2 đến thứ 7</p>
        <ul>
        <li>Sáng: 7h00 - 11h30</li>
        <li>Chiều: 13h30 - 17h00</li>
        </ul>
        <p><strong>Hình thức thanh toán chi phí khám chữa bệnh</strong></p>
        <ul>
        <li>Chi trả trực tiếp bằng tiền mặt</li>
        <li>Chi trả qua các loại thẻ ATM</li>
        </ul>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2019/01/03/173538184228phong-kham-exson.jpg" alt="img"></p>
        <h5>THẾ MẠNH CHUYÊN MÔN</h5>
        <p>Với mong muốn người bệnh Việt Nam có thể khám và điều trị ngay trong nước, không cần ra nước ngoài để thực hiện điều trị bệnh lý, Phòng khám đã ứng dụng công nghệ cao, trang bị các thiết bị hiện đại để phục vụ chẩn đoán và điều trị, đặc biệt là các bệnh lý về cột sống, tủy sống như:</p>
        <p>Thoái hóa cột sống
        Vôi hóa cột sống
        Thoát vị đĩa đệm cột sống
        Phình đĩa đệm, lồi đĩa đệm
        Xẹp đĩa đệm</p>
        <p>Một số phẫu thuật được thực hiện thành công qua khám và điều trị bởi các bác sĩ tại phòng khám:</p>
        <ul>
        <li>Vi phẫu thoát vị đĩa đệm cột sống cổ</li>
        <li>Mổ triệt để u nội tuỷ sống bằng vi phẫu thuật</li>
        <li>Phẫu thuật chấn thương cột sống cổ cao, cột sống cổ thấp, cột sống lưng, thắt lưng</li>
        <li>Các phẫu thuật nội soi khớp gối, khớp cổ chân, khớp vai, các phẫu thuật thay khớp háng</li>
        <li>Hơn nữa, Phòng khám còn phát triển Phòng vật lý trị liệu để kết hợp điều trị, mang lại hiệu quả cao cho người bệnh.</li>
        </ul>
        <p>Dịch vụ khác:</p>
        <p>Phòng khám nhận khám và điệu trị thêm về các vấn đề:</p>
        <ul>
        <li>Cơ xương khớp</li>
        <li>Tiêu hóa</li>
        <li>Bệnh viêm gan</li>
        <li>Hô hấp</li>
        <li>Tim mạch</li>
        <li>Khám tổng quát</li>
        </ul>
        <p>Một số thủ thuật đơn giản sẽ được thực hiện tại phòng khám, đối với bệnh nhân cần thực hiện phẫu thuật, sẽ được các bác sĩ của phòng khám trực tiếp thực hiện tại các đơn vị bệnh viện hợp tác của phòng khám.</p>
        <h5>TRANG THIẾT BỊ</h5>
        <p>Phòng khám đầu tư máy móc, trang thiết bị tiên tiến nhất, được vận hành bởi đội ngũ chuyên gia nhiều kinh nghiệm:</p>
        <ul>
        <li>Máy đo loãng xương DXA - tiêu chuẩn vàng để chẩn đoán loãng xương, có khả năng đo được cột sống nghiêng và dự báo, đánh giá các nguy cơ gãy xương.</li>
        <li>Hệ thống xét nghiệm hiện đại cho phép thực hiện được những xét nghiệm phức tạp nhất phục vụ cho công tác chẩn đoán và điều trị viêm khớp, thoái hóa khớp, gút…</li>
        <li>Các kỹ thuật điều trị phẫu thuật cao cấp như nội soi khớp, thay khớp háng, khớp gối, kết hợp xương gãy, chuyển gân...</li>
        </ul>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2021/05/20/150934-exson-may-do-loang-xuong.jpg" alt="img"></p>
        <h5>VỊ TRÍ</h5>
        <ul>
        <li>Phòng khám tại số 722 Sư Vạn Hạnh - cách Bệnh viện Nhi đồng 1 khoảng 350m</li>
        <li>Đường Sư Vạn Hạnh là đường 1 chiều, để thuận tiện hơn bạn nên tìm hiểu đường đi kỹ càng trước khi đi khám</li>
        </ul>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2018/12/12/103603vi-tri-phong-kham-da-khoa-quoc-te-exson.jpg" alt="img"></p>
        <p>QUY TRÌNH ĐI KHÁM
        Dưới đây hướng dẫn và quy trình đi khám tại Phòng khám Đa khoa Quốc tế Exson dành cho khách hàng đặt khám qua BookingCare.</p>
        <ol>
        <li>Bạn đến Phòng khám Đa khoa Exson tại số 722 Sư Vạn Hạnh, Phường 12, Quận 10, Tp. Hồ Chí Minh, cách Bệnh viện Nhi Đồng 1 khoảng 350m</li>
        </ol>
        <p>Lưu ý về nơi gửi xe</p>
        <ul>
        <li>Xe máy: Bạn có thể gửi tại phòng khám (có nhân viên bảo vệ hướng dẫn)</li>
        <li>Xê ô tô: Bạn có thể gửi tại Vạn Hạnh Mall - đối diện phòng khám</li>
        </ul>
        <ol start="2">
        <li>Bạn vào quầy lễ tân của phòng khám, vui lòng báo đã đặt khám qua BookingCare để được ưu tiên hỗ trợ.</li>
        </ol>
        `,
        nickName: 'doraemon',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hệ thống Y khoa chuyên sâu Liverpool',
        address: '200 Hoàng Quốc Việt, Cầu Giấy',
        image: "data:image/png;base64,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",
        province: 'Hà Nội',
        descriptionMarkdown: `Phòng khám Gia đình Sài Gòn Việt Úc là một trong những phòng khám uy tín và danh tiếng hiện nay tại TP. Hồ Chí Minh. Phòng khám đã tiếp nhận và hỗ trợ điều trị thành công cho hàng ngàn ca bệnh

        **Đội ngũ bác sĩ giỏi, sâu chuyên môn, nhiều kinh nghiệm**: Các bác sĩ và kỹ thuật viên tại đây đến từ bệnh viện Chợ Rẫy với hơn 15 năm kinh nghiệm, tâm huyết với nghề tạo niềm tin và an toàn cho mọi bệnh nhân khi tới đây. Với mô hình khám hỗ trợ điều trị “một bác sĩ – một bệnh nhân” tạo tâm thế thoải mái trong việc trao đổi bệnh tình với bác sĩ, bác sĩ sẽ theo dõi toàn bộ quá trình khám, điều trị bệnh nhân, do đó kết quả khám và điều trị bệnh chính xác hơn.
        
        **Phòng khám được trang bị các trang thiết bị hiện đại** để hỗ trợ trong quá trình thăm khám của Bệnh nhân. Phòng khám ứng dụng các phương pháp tốt nhất hiện nay trong chẩn đoán và điều trị bệnh, nhằm giúp bệnh nhân nhanh chóng thoát khỏi bệnh tật, rút ngắn thời gian và chống tái phát.
        
        **Địa chỉ**: Số 3 Tăng Bạt Hổ, Phường 12, Quận 5, TP Hồ Chí Minh
        
        **Thời gian làm việc**: 6h00 - 20h00 hàng ngày
        
        **Bảo hiểm áp dụng**: Phòng khám không áp dụng bảo hiểm y tế và bảo hiểm bảo lãnh
        
        Hình thức thanh toán: 
        
        * Phòng khám nhận thanh toán bằng hình thức: tiền mặt, quẹt thẻ và chuyển khoản
        * Phòng khám có xuất hóa đơn đỏ
        
        THẾ MẠNH CHUYÊN MÔN
        
        Phòng khám có thế mạnh về các chuyên khoa: 
        
        * Tiêu hóa
        * Tai Mũi Họng
        * Nội Tổng hợp
        * Phụ khoa
        
        Ngoài ra phòng khám còn có các chuyên khoa:
        
        * Tim Mạch
        * Hô hấp
        * Da liễu
        * Chuyên khoa Mắt
        * Khám Tổng quát
        
        **TRANG THIẾT BỊ**
        Phòng khám được trang bị các trang thiết bị hiện đại để hỗ trợ trong quá trình thăm khám của Bệnh nhân.
        
        1. Máy Xquang
        ![img](https://cdn.bookingcare.vn/fr/w1000/2023/04/21/151538-xquang-viet-uc.jpg)
        (Máy chụp xquang - Hình ảnh phòng khám cung cấp)
        
        4. Máy siêu âm
        5. Máy điện tim
        6. Hệ thống máy xét nghiệm
        7. GIÁ DỊCH VỤ
        
        Một số giá dịch vụ tham khảo tại Phòng khám Gia đình Sài Gòn Việt Úc:
        
        | STT | Dịch vụ | Chi Phí |
        | --- | --- | --- |
        | 1| Giá khám| 200.000|
        | 2| Chụp X-quang tim phổi thẳng kỹ thuật số| 120.000|
        | 3| Đo điện tim| 80.000|
        | 4| Công thức máu (22 thông số)| 105.000|
        5 | Nội soi dạ dày thường | 850.000
        6| CT Sọ Não |	1.170.000
        
        **VỊ TRÍ**
        
        Phòng khám Gia đình Sài Gòn Việt Úc có địa chỉ tại Số 3 Tăng Bạt Hổ, Phường 12, Quận 5, TP. Hồ Chí Minh
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2023/04/07/112749-vi-tri-gdsg-viet-uc.png)
        
        `,
        descriptionHTML: `<p>Phòng khám Gia đình Sài Gòn Việt Úc là một trong những phòng khám uy tín và danh tiếng hiện nay tại TP. Hồ Chí Minh. Phòng khám đã tiếp nhận và hỗ trợ điều trị thành công cho hàng ngàn ca bệnh</p>
        <p><strong>Đội ngũ bác sĩ giỏi, sâu chuyên môn, nhiều kinh nghiệm</strong>: Các bác sĩ và kỹ thuật viên tại đây đến từ bệnh viện Chợ Rẫy với hơn 15 năm kinh nghiệm, tâm huyết với nghề tạo niềm tin và an toàn cho mọi bệnh nhân khi tới đây. Với mô hình khám hỗ trợ điều trị “một bác sĩ – một bệnh nhân” tạo tâm thế thoải mái trong việc trao đổi bệnh tình với bác sĩ, bác sĩ sẽ theo dõi toàn bộ quá trình khám, điều trị bệnh nhân, do đó kết quả khám và điều trị bệnh chính xác hơn.</p>
        <p><strong>Phòng khám được trang bị các trang thiết bị hiện đại</strong> để hỗ trợ trong quá trình thăm khám của Bệnh nhân. Phòng khám ứng dụng các phương pháp tốt nhất hiện nay trong chẩn đoán và điều trị bệnh, nhằm giúp bệnh nhân nhanh chóng thoát khỏi bệnh tật, rút ngắn thời gian và chống tái phát.</p>
        <p><strong>Địa chỉ</strong>: Số 3 Tăng Bạt Hổ, Phường 12, Quận 5, TP Hồ Chí Minh</p>
        <p><strong>Thời gian làm việc</strong>: 6h00 - 20h00 hàng ngày</p>
        <p><strong>Bảo hiểm áp dụng</strong>: Phòng khám không áp dụng bảo hiểm y tế và bảo hiểm bảo lãnh</p>
        <p>Hình thức thanh toán:</p>
        <ul>
        <li>Phòng khám nhận thanh toán bằng hình thức: tiền mặt, quẹt thẻ và chuyển khoản</li>
        <li>Phòng khám có xuất hóa đơn đỏ</li>
        </ul>
        <p>THẾ MẠNH CHUYÊN MÔN</p>
        <p>Phòng khám có thế mạnh về các chuyên khoa:</p>
        <ul>
        <li>Tiêu hóa</li>
        <li>Tai Mũi Họng</li>
        <li>Nội Tổng hợp</li>
        <li>Phụ khoa</li>
        </ul>
        <p>Ngoài ra phòng khám còn có các chuyên khoa:</p>
        <ul>
        <li>Tim Mạch</li>
        <li>Hô hấp</li>
        <li>Da liễu</li>
        <li>Chuyên khoa Mắt</li>
        <li>Khám Tổng quát</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong>
        Phòng khám được trang bị các trang thiết bị hiện đại để hỗ trợ trong quá trình thăm khám của Bệnh nhân.</p>
        <ol>
        <li>
        <p>Máy Xquang
        <img src="https://cdn.bookingcare.vn/fr/w1000/2023/04/21/151538-xquang-viet-uc.jpg" alt="img">
        (Máy chụp xquang - Hình ảnh phòng khám cung cấp)</p>
        </li>
        <li>
        <p>Máy siêu âm</p>
        </li>
        <li>
        <p>Máy điện tim</p>
        </li>
        <li>
        <p>Hệ thống máy xét nghiệm</p>
        </li>
        <li>
        <p>GIÁ DỊCH VỤ</p>
        </li>
        </ol>
        <p>Một số giá dịch vụ tham khảo tại Phòng khám Gia đình Sài Gòn Việt Úc:</p>
        <table>
        <thead>
        <tr>
        <th>STT</th>
        <th>Dịch vụ</th>
        <th>Chi Phí</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>Giá khám</td>
        <td>200.000</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Chụp X-quang tim phổi thẳng kỹ thuật số</td>
        <td>120.000</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Đo điện tim</td>
        <td>80.000</td>
        </tr>
        <tr>
        <td>4</td>
        <td>Công thức máu (22 thông số)</td>
        <td>105.000</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Nội soi dạ dày thường</td>
        <td>850.000</td>
        </tr>
        <tr>
        <td>6</td>
        <td>CT Sọ Não</td>
        <td>1.170.000</td>
        </tr>
        </tbody>
        </table>
        <p><strong>VỊ TRÍ</strong></p>
        <p>Phòng khám Gia đình Sài Gòn Việt Úc có địa chỉ tại Số 3 Tăng Bạt Hổ, Phường 12, Quận 5, TP. Hồ Chí Minh</p>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2023/04/07/112749-vi-tri-gdsg-viet-uc.png" alt="img"></p>
        `,
        nickName: 'o_long_vien',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Tân thành',
        address: '40 Cát Linh, Q. Đống Đa',
        image: "data:image/png;base64,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",
        province: 'Hà Nội',
        descriptionMarkdown: `Trung tâm Y khoa Chuyên sâu Quốc tế Bernard là thành viên đầu tiên của Bernard Healthcare, cũng là đơn vị y tế tư nhân đầu tiên tại Việt Nam phát triển theo mô hình đa chuyên khoa, chuyên sâu.

        Hệ thống Y khoa Chuyên sâu Quốc tế Bernard tiên phong “mô hình đa chuyên khoa chuyên sâu & Chuyên sâu trong từng chuyên khoa" theo xu hướng y học hiện đại, với đội ngũ bác sĩ giàu kinh nghiệm từ các bệnh viện đầu ngành, trang thiết bị hiện đại bậc nhất thế giới hiện nay.
        
        Bernard Healthcare cũng là thành viên của Hiệp hội Ningen Dock Nhật Bản, tiên phong triển khai mô hình tầm soát sức khỏe toàn diện, chi tiết, chuyên sâu, hơn 65 năm uy tín Nhật Bản tại Việt Nam giúp phát hiện sớm nguy cơ ung thư, đột quỵ. Ningen Dock là một trong những dịch vụ nổi bật và khác biệt tại Bernard.
        
        Một trong những điểm mạnh giúp Trung tâm Y khoa Chuyên sâu Quốc tế Bernard trở thành điểm sáng về khám chữa bệnh là đội ngũ y bác sĩ đầy tâm huyết, giàu kinh nghiệm, nhiều năm cống hiến tại các bệnh viện đầu ngành trong nước. Là đơn vị tiên phong trong ứng dụng trí tuệ nhân tạo (AI) trong chẩn đoán & điều trị: hạn chế bỏ sót, phát hiện rất sớm, điều trị hiệu quả.
        
        **Địa chỉ**:
        * Cơ sở chính: 201 Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP. HCM
        * Cơ sở 2: 22 Phan Đình Giót, Quận Tân Bình, TP. HCM
        
        **Thời gian làm việc**: Từ thứ 2 đến thứ 7
        
        * Sáng: 07:00 - 12:00
        * Chiều: 13:30 - 17:30
        
        **Lưu ý khi đi khám**
        
        Người bệnh nên mang theo các kết quả đã khám (nếu có), các kết quả chụp chiếu trong vòng 6 tháng
        Bảo hiểm áp dụng: Bảo hiểm bảo lãnh trực tiếp tại trung tâm: Insmart 
        
        **Hình thức thanh toán**: Thanh toán tiền mặt, Visa, MasterCard, Internetbanking (Trung tâm có xuất hóa đơn đỏ) 
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Trung Tâm Y Khoa Chuyên Sâu Quốc Tế Bernard tiên phong trong mô hình “ĐA CHUYÊN KHOA CHUYÊN SÂU & ĐI SÂU TRONG TỪNG CHUYÊN KHOA”, xu hướng y học hiện đại của các quốc gia phát triển. Ningen Dock là một trong những dịch vụ nổi bật và khác biệt tại Bernard. Bên cạnh đó, Bernard còn có các dịch vụ thế mạnh khác như:
        
        * Tầm soát sức khỏe toàn diện chi tiết chuyên sâu (Ung Thư, Nguy cơ Đột Quỵ và các tiền bệnh lý nguy hiểm)
        * Tầm soát và tư vấn điều trị Suy giãn tĩnh Mạch
        * Chăm sóc và điều trị vết thương chuyên sâu (vết thương, mạn tính vết loét khó lành như: loét bàn chân đái tháo đường,...)
        * Nội soi tiêu hóa không đau - không lây nhiễm chéo (Nội soi đại tràng, nội soi đại trực tràng)
        * Tầm soát và tư vấn can thiệp điều trị sớm bệnh lý tuyến giáp
        * Tầm soát ung thư vú dành cho phụ nữ đặt túi ngực
        
        **TRANG THIẾT BỊ**
        
        Trung tâm Y khoa Chuyên sâu Quốc tế Bernard được trang bị các trang thiết bị hiện đại, hầu hết đều là phiên bản mới nhất dòng 2020 full-option.
        
        1. Chụp cộng hưởng từ MRI GE HEALTHCARE (Mỹ)
        
        * Hệ thống chụp cộng hưởng từ 1.5 Tesla SIGNA Creator phiên bản mới nhất (full option)
        * Dựng hình mạch máu toàn thân giúp phát hiện những bệnh lý mạch máu não, động mạch chủ, động mạch ngoại biên,…
        * Khảo sát tất cả các bộ phận của cơ thể trong thời gian nhanh nhất nhằm phát hiện những tổn thương rất nhỏ như u não, ung thư phổi, ung thư vú,…
        * Không tiêm thuốc cản từ vẫn cho hình ảnh rõ nét
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151346-1mri-1.jpg)
        
        2. Chụp cắt lớp vi tính CT GE HEALTHCARE (Mỹ)
        
        Hệ thống chụp cắt lớp vi tính 32 detector Model Revolution ACT
        Công nghệ chụp cắt lớp điện toán và tái tạo ảnh cho hình ảnh rõ nét, phát hiện các tổn thương sớm
        Tái tạo hình ảnh rõ nét tại mọi cơ quan trên cơ thể trong thời gian nhanh nhất
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151452-118-ct-bn-1.jpg)
        
        3. Hệ Thống Nội Soi Tiêu Hóa Hiện Đại - Fujifilm BL7000 (Nhật Bản)
        
        * Hình ảnh phóng đại lên đến 135 lần cùng công nghệ nhuộm màu ánh sáng cho hình ảnh rõ nét, hạn chế bỏ sót tổn thương
        * Nội soi không đau
        * Phòng ngừa lây nhiễm chéo
        * Phát hiện biến đổi ống tiêu hóa do ung thư ở giai đoạn sớm và những tổn thương tiền ung thư
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151534-124-noi-soi-bs-2.jpg)
        
        4. Máy đo độ loãng xương - GE Healthcare (Mỹ)
        
        * Thế hệ máy đo loãng xương mới nhất hiện nay giúp tầm soát loãng xương; đo, phân tích, chẩn đoán loãng xương từng vùng và toàn thân
        * Phần mềm tính toán nguy cơ gãy xương trong 10 năm
        * Đo 2 cổ xương đùi cùng lúc
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151956-117-tam-soat-loang-xuong.jpg)
        
        **GIÁ DỊCH VỤ**
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/05/05/143648-gia-dv-bernard.png)
        Một số giá dịch vụ tại Trung tâm Y khoa Chuyên sâu Quốc tế Bernard:
        
        
        
        **VỊ TRÍ**
        
        Trung tâm Y khoa Chuyên sâu Quốc tế Bernard nằm ở 201 Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP.Hồ Chí Minh (Đối Diện Hội Sở Sacombank)
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/03/18/112120-vi-tri-bernard.png)
        `,
        descriptionHTML: `<p>Trung tâm Y khoa Chuyên sâu Quốc tế Bernard là thành viên đầu tiên của Bernard Healthcare, cũng là đơn vị y tế tư nhân đầu tiên tại Việt Nam phát triển theo mô hình đa chuyên khoa, chuyên sâu.</p>
        <p>Hệ thống Y khoa Chuyên sâu Quốc tế Bernard tiên phong “mô hình đa chuyên khoa chuyên sâu &amp; Chuyên sâu trong từng chuyên khoa&quot; theo xu hướng y học hiện đại, với đội ngũ bác sĩ giàu kinh nghiệm từ các bệnh viện đầu ngành, trang thiết bị hiện đại bậc nhất thế giới hiện nay.</p>
        <p>Bernard Healthcare cũng là thành viên của Hiệp hội Ningen Dock Nhật Bản, tiên phong triển khai mô hình tầm soát sức khỏe toàn diện, chi tiết, chuyên sâu, hơn 65 năm uy tín Nhật Bản tại Việt Nam giúp phát hiện sớm nguy cơ ung thư, đột quỵ. Ningen Dock là một trong những dịch vụ nổi bật và khác biệt tại Bernard.</p>
        <p>Một trong những điểm mạnh giúp Trung tâm Y khoa Chuyên sâu Quốc tế Bernard trở thành điểm sáng về khám chữa bệnh là đội ngũ y bác sĩ đầy tâm huyết, giàu kinh nghiệm, nhiều năm cống hiến tại các bệnh viện đầu ngành trong nước. Là đơn vị tiên phong trong ứng dụng trí tuệ nhân tạo (AI) trong chẩn đoán &amp; điều trị: hạn chế bỏ sót, phát hiện rất sớm, điều trị hiệu quả.</p>
        <p><strong>Địa chỉ</strong>:</p>
        <ul>
        <li>Cơ sở chính: 201 Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP. HCM</li>
        <li>Cơ sở 2: 22 Phan Đình Giót, Quận Tân Bình, TP. HCM</li>
        </ul>
        <p><strong>Thời gian làm việc</strong>: Từ thứ 2 đến thứ 7</p>
        <ul>
        <li>Sáng: 07:00 - 12:00</li>
        <li>Chiều: 13:30 - 17:30</li>
        </ul>
        <p><strong>Lưu ý khi đi khám</strong></p>
        <p>Người bệnh nên mang theo các kết quả đã khám (nếu có), các kết quả chụp chiếu trong vòng 6 tháng
        Bảo hiểm áp dụng: Bảo hiểm bảo lãnh trực tiếp tại trung tâm: Insmart</p>
        <p><strong>Hình thức thanh toán</strong>: Thanh toán tiền mặt, Visa, MasterCard, Internetbanking (Trung tâm có xuất hóa đơn đỏ)</p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Trung Tâm Y Khoa Chuyên Sâu Quốc Tế Bernard tiên phong trong mô hình “ĐA CHUYÊN KHOA CHUYÊN SÂU &amp; ĐI SÂU TRONG TỪNG CHUYÊN KHOA”, xu hướng y học hiện đại của các quốc gia phát triển. Ningen Dock là một trong những dịch vụ nổi bật và khác biệt tại Bernard. Bên cạnh đó, Bernard còn có các dịch vụ thế mạnh khác như:</p>
        <ul>
        <li>Tầm soát sức khỏe toàn diện chi tiết chuyên sâu (Ung Thư, Nguy cơ Đột Quỵ và các tiền bệnh lý nguy hiểm)</li>
        <li>Tầm soát và tư vấn điều trị Suy giãn tĩnh Mạch</li>
        <li>Chăm sóc và điều trị vết thương chuyên sâu (vết thương, mạn tính vết loét khó lành như: loét bàn chân đái tháo đường,...)</li>
        <li>Nội soi tiêu hóa không đau - không lây nhiễm chéo (Nội soi đại tràng, nội soi đại trực tràng)</li>
        <li>Tầm soát và tư vấn can thiệp điều trị sớm bệnh lý tuyến giáp</li>
        <li>Tầm soát ung thư vú dành cho phụ nữ đặt túi ngực</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Trung tâm Y khoa Chuyên sâu Quốc tế Bernard được trang bị các trang thiết bị hiện đại, hầu hết đều là phiên bản mới nhất dòng 2020 full-option.</p>
        <ol>
        <li>Chụp cộng hưởng từ MRI GE HEALTHCARE (Mỹ)</li>
        </ol>
        <ul>
        <li>Hệ thống chụp cộng hưởng từ 1.5 Tesla SIGNA Creator phiên bản mới nhất (full option)</li>
        <li>Dựng hình mạch máu toàn thân giúp phát hiện những bệnh lý mạch máu não, động mạch chủ, động mạch ngoại biên,…</li>
        <li>Khảo sát tất cả các bộ phận của cơ thể trong thời gian nhanh nhất nhằm phát hiện những tổn thương rất nhỏ như u não, ung thư phổi, ung thư vú,…</li>
        <li>Không tiêm thuốc cản từ vẫn cho hình ảnh rõ nét
        <img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151346-1mri-1.jpg" alt="img"></li>
        </ul>
        <ol start="2">
        <li>Chụp cắt lớp vi tính CT GE HEALTHCARE (Mỹ)</li>
        </ol>
        <p>Hệ thống chụp cắt lớp vi tính 32 detector Model Revolution ACT
        Công nghệ chụp cắt lớp điện toán và tái tạo ảnh cho hình ảnh rõ nét, phát hiện các tổn thương sớm
        Tái tạo hình ảnh rõ nét tại mọi cơ quan trên cơ thể trong thời gian nhanh nhất
        <img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151452-118-ct-bn-1.jpg" alt="img"></p>
        <ol start="3">
        <li>Hệ Thống Nội Soi Tiêu Hóa Hiện Đại - Fujifilm BL7000 (Nhật Bản)</li>
        </ol>
        <ul>
        <li>Hình ảnh phóng đại lên đến 135 lần cùng công nghệ nhuộm màu ánh sáng cho hình ảnh rõ nét, hạn chế bỏ sót tổn thương</li>
        <li>Nội soi không đau</li>
        <li>Phòng ngừa lây nhiễm chéo</li>
        <li>Phát hiện biến đổi ống tiêu hóa do ung thư ở giai đoạn sớm và những tổn thương tiền ung thư
        <img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151534-124-noi-soi-bs-2.jpg" alt="img"></li>
        </ul>
        <ol start="4">
        <li>Máy đo độ loãng xương - GE Healthcare (Mỹ)</li>
        </ol>
        <ul>
        <li>Thế hệ máy đo loãng xương mới nhất hiện nay giúp tầm soát loãng xương; đo, phân tích, chẩn đoán loãng xương từng vùng và toàn thân</li>
        <li>Phần mềm tính toán nguy cơ gãy xương trong 10 năm</li>
        <li>Đo 2 cổ xương đùi cùng lúc
        <img src="https://cdn.bookingcare.vn/fr/w1000/2022/08/26/151956-117-tam-soat-loang-xuong.jpg" alt="img"></li>
        </ul>
        <p><strong>GIÁ DỊCH VỤ</strong>
        <img src="https://cdn.bookingcare.vn/fr/w1000/2022/05/05/143648-gia-dv-bernard.png" alt="img">
        Một số giá dịch vụ tại Trung tâm Y khoa Chuyên sâu Quốc tế Bernard:</p>
        <p><strong>VỊ TRÍ</strong></p>
        <p>Trung tâm Y khoa Chuyên sâu Quốc tế Bernard nằm ở 201 Nam Kỳ Khởi Nghĩa, Phường Võ Thị Sáu, Quận 3, TP.Hồ Chí Minh (Đối Diện Hội Sở Sacombank)
        <img src="https://cdn.bookingcare.vn/fr/w1000/2022/03/18/112120-vi-tri-bernard.png" alt="img"></p>
        `,
        nickName: 'homles',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám đa khoa Barcelona',
        address: '50 Nguyễn Chí Thanh, Q. Đống Đa',
        image: "data:image/png;base64,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",
        province: 'Hà Nội',
        descriptionMarkdown: `
Bệnh viện Chợ Rẫy với lịch sử thành lập trên 100 năm, là bệnh viện hạng đặc biệt tuyến Trung ương lớn nhất cả nước với trên 1.800 giường và trên 3.000 kỹ thuật y tế được thực hiện. Hàng ngày Bệnh viện Chợ Rẫy tiếp nhận trung bình 6,000 -  8,000 bệnh nhân đến khám.

Bệnh viện Chợ Rẫy là bệnh viện đa khoa hoàn chỉnh, xếp hạng đặc biệt, tuyến kỹ thuật sau cùng các tỉnh thành phía Nam, trực thuộc Bộ Y tế. Thế mạnh nổi bật tại Bệnh viện Chợ Rẫy là sự kết hợp giữa các chuyên khoa mang lại hiệu quả tốt nhất trong việc chẩn đoán và điều trị cho người bệnh.

**Địa chỉ bệnh viện**:
201B Nguyễn Chí Thanh, Phường 12, Quận 5, Hồ Chí Minh

**Thời gian làm việc**:
Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:

* Thứ 2 đến thứ 6: từ 7h – 16h
* Thứ 7: từ 7h – 11h

**Sơ đồ Bệnh viện Chợ Rẫy**
 
![img](https://cdn.bookingcare.vn/fr/w1000/2021/09/14/160246-so-do-bv-rut-gon.jpg)
Sơ đồ bệnh viện Chợ Rẫy hướng nhìn từ Công số 01

**THẾ MẠNH CHUYÊN MÔN**

**Bệnh viện có 05 Trung tâm**
1. Trung tâm Ung bướu Chợ Rẫy.
2. Trung tâm Đào tạo – Chỉ đạo tuyến.
3. Trung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.
4. Trung tâm Truyền máu Chợ Rẫy.
5. Trung tâm Tim mạch.

**38 Khoa Lâm sàng**

+ 04 Khoa khám bệnh ngoại trú:

1. Khoa Khám bệnh I
2. Khoa Khám bệnh II
3. Khoa Chăm sóc sức khỏe theo yêu cầu.
4. Khoa Khám xuất cảnh.

+ 34 Khoa lâm sàng.

1. Khoa Phẫu thuật – gây mê hồi sức.
2. Khoa Hồi sức – phẫu thuật tim.
3. Khoa Phẫu thuật mạch máu.
4. Khoa Hồi sức cấp cứu.
5. Khoa Hồi sức ngoại thần kinh.
6. Khoa Chấn thương sọ não.
7. Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).
8. Khoa Ngoại Tiêu hóa.
9. Khoa Gan Mật Tụy.
10. Khoa Ngoại Tiết Niệu.
11. Khoa Chấn thương chỉnh hình.
12. Khoa Tai Mũi họng.
13. Khoa Tạo hình thẩm mỹ.
14. Khoa Mắt.
15. Khoa Ngoại lồng ngực.
16. Khoa Nội tim mạch.
17. Khoa Tim mạch can thiệp và Đơn vị Nhịp học.
18. Khoa Nội phổi.
19. Khoa Nội thận.
20. Khoa Nội tiêu hóa.
21. Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.
22. Khoa Nội tổng quát (Lầu 9B1).
23. Khoa Nội tổng quát – quốc tế (Lầu 10B1).
24. Khoa Nội tổng quát (Lầu 10B3).
25. Khoa Điều trị theo yêu cầu (T6).
26. Khoa Bệnh nhiệt đới và Đơn vị Chống độc.
27. Khoa Nghiên cứu & điều trị viêm gan.
28. Khoa Phỏng – tạo hình.
29. Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.
30. Khoa Nội cơ xương khớp.
31. Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.
32. Khoa Cấp cứu.
33. Khoa Thận nhân tạo.
34. Khoa Vật lý trị liệu.

Bệnh viện Chợ Rẫy tổ chức khám và điều trị hầu hết các bệnh lý bằng nội khoa, ngoại khoa, can thiệp,...

* Bệnh Thần kinh
* Bệnh Cơ xương khớp
* Bệnh tiêu hóa
* Tim mạch
* Phổi
* Thận
* Gan mật
* Thận - Tiết niệu
* Tai Mũi Họng
* Chấn thương chỉnh hình
* Mắt
* Bệnh truyền nhiễm
* Nội tiết
* ...

**QUY TRÌNH ĐI KHÁM**

Bước 1. Đặt khám qua Nền tảng BookingCare
Chọn "Bệnh viện Chợ Rẫy"
Chọn chuyên khoa khám
Đặt khám & làm theo hướng dẫn

Bước 2. Đến quầy tiếp nhận tại Khoa khám bệnh
Đến tầng trệt nhà A, trước giờ hẹn ít nhất 15 phút (Khoa khám bệnh, Cổng số 01 - Số 201B Nguyễn Chí Thanh) 
Vào "Khu nhận bệnh" (tầng trệt, nhà A) để được hướng dẫn

Bước 3. Vào phòng khám gặp bác sĩ khám
Lên lầu 1 Khoa khám bệnh (tầng trên, Nhà A)
Chờ đến lượt, vào phòng khám đã đăng ký gặp bác sĩ khám

**GIÁ KHÁM BỆNH**

+ Chi phí khám thường:

* Bệnh nhân không có BHYT: Đóng 38.700 VNĐ/ lượt khám
* Chi phí khám tại Bệnh viện theo qui định chung của Bộ Y tế

+ Một số giấy tờ nên mang theo khi đi khám:

* Thẻ bảo hiểm y tế còn hạn sử dụng:
* Chứng minh thư nhân dân hoặc giấy khai sinh (trẻ em)
* Giấy chuyển viện đến Bệnh viện Chợ Rẫy (nếu có)`,
        descriptionHTML: `<p>Bệnh viện Chợ Rẫy với lịch sử thành lập trên 100 năm, là bệnh viện hạng đặc biệt tuyến Trung ương lớn nhất cả nước với trên 1.800 giường và trên 3.000 kỹ thuật y tế được thực hiện. Hàng ngày Bệnh viện Chợ Rẫy tiếp nhận trung bình 6,000 -  8,000 bệnh nhân đến khám.</p>
        <p>Bệnh viện Chợ Rẫy là bệnh viện đa khoa hoàn chỉnh, xếp hạng đặc biệt, tuyến kỹ thuật sau cùng các tỉnh thành phía Nam, trực thuộc Bộ Y tế. Thế mạnh nổi bật tại Bệnh viện Chợ Rẫy là sự kết hợp giữa các chuyên khoa mang lại hiệu quả tốt nhất trong việc chẩn đoán và điều trị cho người bệnh.</p>
        <p><strong>Địa chỉ bệnh viện</strong>:
        201B Nguyễn Chí Thanh, Phường 12, Quận 5, Hồ Chí Minh</p>
        <p><strong>Thời gian làm việc</strong>:
        Bệnh viện làm việc, tiếp nhận khám bệnh cho bệnh nhân ngoại trú từ thứ 2 đến thứ 7 hàng tuần:</p>
        <ul>
        <li>Thứ 2 đến thứ 6: từ 7h – 16h</li>
        <li>Thứ 7: từ 7h – 11h</li>
        </ul>
        <p><strong>Sơ đồ Bệnh viện Chợ Rẫy</strong></p>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2021/09/14/160246-so-do-bv-rut-gon.jpg" alt="img">
        Sơ đồ bệnh viện Chợ Rẫy hướng nhìn từ Công số 01</p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p><strong>Bệnh viện có 05 Trung tâm</strong></p>
        <ol>
        <li>Trung tâm Ung bướu Chợ Rẫy.</li>
        <li>Trung tâm Đào tạo – Chỉ đạo tuyến.</li>
        <li>Trung tâm Thông tin thuốc và theo dõi phản ứng thuốc có hại của thuốc khu vực Thành phố HCM.</li>
        <li>Trung tâm Truyền máu Chợ Rẫy.</li>
        <li>Trung tâm Tim mạch.</li>
        </ol>
        <p><strong>38 Khoa Lâm sàng</strong></p>
        <ul>
        <li>04 Khoa khám bệnh ngoại trú:</li>
        </ul>
        <ol>
        <li>Khoa Khám bệnh I</li>
        <li>Khoa Khám bệnh II</li>
        <li>Khoa Chăm sóc sức khỏe theo yêu cầu.</li>
        <li>Khoa Khám xuất cảnh.</li>
        </ol>
        <ul>
        <li>34 Khoa lâm sàng.</li>
        </ul>
        <ol>
        <li>Khoa Phẫu thuật – gây mê hồi sức.</li>
        <li>Khoa Hồi sức – phẫu thuật tim.</li>
        <li>Khoa Phẫu thuật mạch máu.</li>
        <li>Khoa Hồi sức cấp cứu.</li>
        <li>Khoa Hồi sức ngoại thần kinh.</li>
        <li>Khoa Chấn thương sọ não.</li>
        <li>Khoa Ngoại thần kinh (3B1,3B3, Đơn vị Gamma knife).</li>
        <li>Khoa Ngoại Tiêu hóa.</li>
        <li>Khoa Gan Mật Tụy.</li>
        <li>Khoa Ngoại Tiết Niệu.</li>
        <li>Khoa Chấn thương chỉnh hình.</li>
        <li>Khoa Tai Mũi họng.</li>
        <li>Khoa Tạo hình thẩm mỹ.</li>
        <li>Khoa Mắt.</li>
        <li>Khoa Ngoại lồng ngực.</li>
        <li>Khoa Nội tim mạch.</li>
        <li>Khoa Tim mạch can thiệp và Đơn vị Nhịp học.</li>
        <li>Khoa Nội phổi.</li>
        <li>Khoa Nội thận.</li>
        <li>Khoa Nội tiêu hóa.</li>
        <li>Khoa Nội thần kinh và Đơn vị Thăm dò chức năng thần kinh.</li>
        <li>Khoa Nội tổng quát (Lầu 9B1).</li>
        <li>Khoa Nội tổng quát – quốc tế (Lầu 10B1).</li>
        <li>Khoa Nội tổng quát (Lầu 10B3).</li>
        <li>Khoa Điều trị theo yêu cầu (T6).</li>
        <li>Khoa Bệnh nhiệt đới và Đơn vị Chống độc.</li>
        <li>Khoa Nghiên cứu &amp; điều trị viêm gan.</li>
        <li>Khoa Phỏng – tạo hình.</li>
        <li>Khoa Nội tiết và Đơn vị Bàn chân đái tháo đường.</li>
        <li>Khoa Nội cơ xương khớp.</li>
        <li>Khoa Huyết học lâm sàng - Bộ phận Xét nghiệm huyết học và Đơn vị Điều trị trong ngày.</li>
        <li>Khoa Cấp cứu.</li>
        <li>Khoa Thận nhân tạo.</li>
        <li>Khoa Vật lý trị liệu.</li>
        </ol>
        <p>Bệnh viện Chợ Rẫy tổ chức khám và điều trị hầu hết các bệnh lý bằng nội khoa, ngoại khoa, can thiệp,...</p>
        <ul>
        <li>Bệnh Thần kinh</li>
        <li>Bệnh Cơ xương khớp</li>
        <li>Bệnh tiêu hóa</li>
        <li>Tim mạch</li>
        <li>Phổi</li>
        <li>Thận</li>
        <li>Gan mật</li>
        <li>Thận - Tiết niệu</li>
        <li>Tai Mũi Họng</li>
        <li>Chấn thương chỉnh hình</li>
        <li>Mắt</li>
        <li>Bệnh truyền nhiễm</li>
        <li>Nội tiết</li>
        <li>...</li>
        </ul>
        <p><strong>QUY TRÌNH ĐI KHÁM</strong></p>
        <p>Bước 1. Đặt khám qua Nền tảng BookingCare
        Chọn &quot;Bệnh viện Chợ Rẫy&quot;
        Chọn chuyên khoa khám
        Đặt khám &amp; làm theo hướng dẫn</p>
        <p>Bước 2. Đến quầy tiếp nhận tại Khoa khám bệnh
        Đến tầng trệt nhà A, trước giờ hẹn ít nhất 15 phút (Khoa khám bệnh, Cổng số 01 - Số 201B Nguyễn Chí Thanh)
        Vào &quot;Khu nhận bệnh&quot; (tầng trệt, nhà A) để được hướng dẫn</p>
        <p>Bước 3. Vào phòng khám gặp bác sĩ khám
        Lên lầu 1 Khoa khám bệnh (tầng trên, Nhà A)
        Chờ đến lượt, vào phòng khám đã đăng ký gặp bác sĩ khám</p>
        <p><strong>GIÁ KHÁM BỆNH</strong></p>
        <ul>
        <li>Chi phí khám thường:</li>
        </ul>
        <ul>
        <li>Bệnh nhân không có BHYT: Đóng 38.700 VNĐ/ lượt khám</li>
        <li>Chi phí khám tại Bệnh viện theo qui định chung của Bộ Y tế</li>
        </ul>
        <ul>
        <li>Một số giấy tờ nên mang theo khi đi khám:</li>
        </ul>
        <ul>
        <li>Thẻ bảo hiểm y tế còn hạn sử dụng:</li>
        <li>Chứng minh thư nhân dân hoặc giấy khai sinh (trẻ em)</li>
        <li>Giấy chuyển viện đến Bệnh viện Chợ Rẫy (nếu có)</li>
        </ul>
        `,
        nickName: 'nguyendu',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viện Tâm lý Giáo dục Inter Milan',
        address: 'Tầng 10, tòa nhà 70 tầng, tòa nhà Keangnam Hanoi Landmark Tower, khu đô thị Cầu Giấy, Mễ Trì, quận Nam Từ Liêm',
        image: "data:image/png;base64,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",
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: `Địa chỉ: Tầng 7, Toà nhà 59 Võ Chí Công, Nghĩa Đô, Cầu Giấy, Hà Nội

        **Thời gian làm việc:**
        
        * Thứ 2 đến thứ 7
        * 8h00 đến 20h00
        
        Viện Tâm lý Giáo dục BrainCare với đội ngũ gồm các chuyên gia đầu ngành được đào tạo trong và ngoài nước đã có hơn 30 năm trong lĩnh vực tư vấn tâm lý, tâm lý trị liệu, nghiên cứu và đánh giá sự phát triển ở trẻ. Các chuyên gia đã từng tham gia nhiều dự án trong và ngoài nước, các tổ chức phi chính phủ, mang giá trị cho cộng đồng.
        
        BrainCare có sự kết hợp hỗ trợ giữa tư vấn, trị liệu tâm lí và bác sĩ Chuyên khoa tâm thần để tăng hiệu quả cho quá trình tư vấn, trị liệu với các trường hợp khách hàng có triệu chứng nặng. 
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2023/04/07/110831-anh-background-vien-braincare.jpg)
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        **Sàng lọc, đánh giá các vấn đề tâm lý và sự phát triển của trẻ em**: Sử dụng các bộ công cụ chẩn đoán, đánh giá tiên tiến nhất trên thế giới và Việt Nam nhằm phát hiện sớm các vấn đề khó khăn của trẻ em. Từ đó cha mẹ có thể hiểu rõ hơn vấn đề của con, biết cách hỗ trợ, đồng hành cùng con phát triển điểm mạnh, can thiệp sớm, giảm thiểu rủi ro và nguy cơ đối với trẻ, nhất là những vấn đề về **lo âu, trầm cảm, ám ảnh sợ**… đến việc học tập, sinh hoạt, cuộc sống của trẻ.
        
        * Đánh giá để xác định chỉ số trí tuệ (IQ) và cảm xúc (EQ).
        * Đánh giá các Rối loạn phát triển: Tăng động giảm tập trung, khó khăn học tập, chậm phát triển ngôn ngữ, khó khăn trong giao tiếp và các mối quan hệ…
        * Đánh giá các vấn đề tâm lý liên quan đến học đường và gia đình, xã hội như: Trầm cảm trẻ em và thanh thiếu niên, căng thẳng, lo âu học đường, rối loạn cảm xúc hành vi, rối loạn cảm xúc lưỡng cực (hưng trầm cảm)…
        * Đánh giá kiểu hình cấu trúc tâm lý nhân cách của trẻ.
        * Đánh giá năng lực và định hướng phát triển nghề nghiệp có cơ sở khoa học.
        * Đánh giá lòng tự trọng và năng lực quản trị bản thân, lãnh đạo phát triển.
        * Đánh giá các nguy cơ cao như tự làm đau, tự tử, chống đối xã hội…
        
        **Tham vấn và Trị liệu tâm lý**: Thực hiện tham vấn, tư vấn tâm lý trực tiếp, trực tuyến cho cá nhân, cặp đôi, gia đình hay theo nhóm.
        
        **Khám và điều trị Rối loạn tâm thần**: 
        
        * Đánh giá tổng hợp - DASS21
        * Trầm cảm học đường
        * Trầm cảm ở người lớn
        * Rối loạn lo âu
        * Rối loạn giấc ngủ
        * Tự tử
        * Đánh giá trầm cảm - BECK
        * Đánh giá rối loạn lo âu - ZUNG
        
        **VỊ TRÍ**
        
        Viện Tâm lý Giáo dục BrainCare nằm tại Tầng 7 toà nhà Luxury, 59 đường Võ Chí Công, Nghĩa Đô, Cầu Giấy, Hà Nội`,
        descriptionHTML: `<p>Địa chỉ: Tầng 7, Toà nhà 59 Võ Chí Công, Nghĩa Đô, Cầu Giấy, Hà Nội</p>
        <p><strong>Thời gian làm việc:</strong></p>
        <ul>
        <li>Thứ 2 đến thứ 7</li>
        <li>8h00 đến 20h00</li>
        </ul>
        <p>Viện Tâm lý Giáo dục BrainCare với đội ngũ gồm các chuyên gia đầu ngành được đào tạo trong và ngoài nước đã có hơn 30 năm trong lĩnh vực tư vấn tâm lý, tâm lý trị liệu, nghiên cứu và đánh giá sự phát triển ở trẻ. Các chuyên gia đã từng tham gia nhiều dự án trong và ngoài nước, các tổ chức phi chính phủ, mang giá trị cho cộng đồng.</p>
        <p>BrainCare có sự kết hợp hỗ trợ giữa tư vấn, trị liệu tâm lí và bác sĩ Chuyên khoa tâm thần để tăng hiệu quả cho quá trình tư vấn, trị liệu với các trường hợp khách hàng có triệu chứng nặng.</p>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2023/04/07/110831-anh-background-vien-braincare.jpg" alt="img"></p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p><strong>Sàng lọc, đánh giá các vấn đề tâm lý và sự phát triển của trẻ em</strong>: Sử dụng các bộ công cụ chẩn đoán, đánh giá tiên tiến nhất trên thế giới và Việt Nam nhằm phát hiện sớm các vấn đề khó khăn của trẻ em. Từ đó cha mẹ có thể hiểu rõ hơn vấn đề của con, biết cách hỗ trợ, đồng hành cùng con phát triển điểm mạnh, can thiệp sớm, giảm thiểu rủi ro và nguy cơ đối với trẻ, nhất là những vấn đề về <strong>lo âu, trầm cảm, ám ảnh sợ</strong>… đến việc học tập, sinh hoạt, cuộc sống của trẻ.</p>
        <ul>
        <li>Đánh giá để xác định chỉ số trí tuệ (IQ) và cảm xúc (EQ).</li>
        <li>Đánh giá các Rối loạn phát triển: Tăng động giảm tập trung, khó khăn học tập, chậm phát triển ngôn ngữ, khó khăn trong giao tiếp và các mối quan hệ…</li>
        <li>Đánh giá các vấn đề tâm lý liên quan đến học đường và gia đình, xã hội như: Trầm cảm trẻ em và thanh thiếu niên, căng thẳng, lo âu học đường, rối loạn cảm xúc hành vi, rối loạn cảm xúc lưỡng cực (hưng trầm cảm)…</li>
        <li>Đánh giá kiểu hình cấu trúc tâm lý nhân cách của trẻ.</li>
        <li>Đánh giá năng lực và định hướng phát triển nghề nghiệp có cơ sở khoa học.</li>
        <li>Đánh giá lòng tự trọng và năng lực quản trị bản thân, lãnh đạo phát triển.</li>
        <li>Đánh giá các nguy cơ cao như tự làm đau, tự tử, chống đối xã hội…</li>
        </ul>
        <p><strong>Tham vấn và Trị liệu tâm lý</strong>: Thực hiện tham vấn, tư vấn tâm lý trực tiếp, trực tuyến cho cá nhân, cặp đôi, gia đình hay theo nhóm.</p>
        <p><strong>Khám và điều trị Rối loạn tâm thần</strong>:</p>
        <ul>
        <li>Đánh giá tổng hợp - DASS21</li>
        <li>Trầm cảm học đường</li>
        <li>Trầm cảm ở người lớn</li>
        <li>Rối loạn lo âu</li>
        <li>Rối loạn giấc ngủ</li>
        <li>Tự tử</li>
        <li>Đánh giá trầm cảm - BECK</li>
        <li>Đánh giá rối loạn lo âu - ZUNG</li>
        </ul>
        <p><strong>VỊ TRÍ</strong></p>
        <p>Viện Tâm lý Giáo dục BrainCare nằm tại Tầng 7 toà nhà Luxury, 59 đường Võ Chí Công, Nghĩa Đô, Cầu Giấy, Hà Nội</p>
        `,
        nickName: 'harrypotter',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Trung tâm  y khoa Bayer Leverkusen',
        address: 'Tầng 7, Toà nhà 59 Võ Chí Công, Nghĩa Đô',
        image: "data:image/png;base64,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",
        province: 'Thành phố Hồ Chí Minh',
        descriptionMarkdown: `Bệnh viện Đa khoa Hồng Phát được Bộ Y tế thẩm định và cấp phép hoạt động từ đầu năm 2007. Bệnh viện Hồng Phát quy tụ đội ngũ giáo sư, bác sĩ đầu ngành có chuyên môn cao và giàu kinh nghiệm. Hầu hết các y, bác sĩ đang làm việc tại đây đều là những người đã và đang công tác tại các bệnh viện lớn tuyến Trung ương như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện E Hà Nội, Bệnh viện K, Bệnh viện TW Quân đội 108, Bệnh viện Phụ sản TW,…

        Bên cạnh đó, hệ thống trang thiết bị cơ bản được đầu tư hỗ trợ chẩn đoán và điều trị hiệu quả cho người bệnh.
        
        **Địa chỉ**: 219 Lê Duẩn, Hai Bà Trưng, Hà Nội
        
        **Thời gian làm việc**: 
        
        Thứ 2 đến Chủ Nhật
        Từ 7h30 đến 17h00
        
        **Hình thức thanh toán**: Bệnh viện nhận thanh toán bằng tiền mặt và quẹt thẻ.
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        **Thế mạnh**: Bệnh viện có thế mạnh chuyên môn về khám và điều trị bệnh lý Nội Cơ Xương Khớp, Nội Thần Kinh với những chuyên gia đầu ngành trong lĩnh vực này như: Giáo sư, Tiến sĩ Trần Ngọc Ân, Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Văn Liệu,...
        
        **Khám và điều trị**
        
        Bệnh viện nhận khám và điều trị về:
        
        * Nội cơ xương khớp
        * Nội thần kinh
        * Nội tiết, đái tháo đường, tim mạch – Nội chung
        * Chuyên khoa tiêu hóa – Hậu môn trực tràng
        * Sản phụ khoa
        * Da liễu
        * Mắt
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện Đa khoa Hồng Phát sở hữu hệ thống cơ sở vật chất hiện đại và đồng bộ. Trang thiết bị tại Bệnh viện được nhập khẩu trực tiếp từ các nước Anh, Pháp, Mỹ, Thụy Sĩ,...
        
        * Máy đo loãng xương toàn thân Hologic Discovery Wi
        * Máy chụp CT Scanner hãng Siemens
        * Hệ thống máy siêu âm màu 4D của Nhật
        * Máy chụp X-Quang kỹ thuật số
        * Chụp Mamo vú kỹ thuật số DR nhằm đánh giá và phát hiện sớm ung thư vú
        * Chụp tử cung vòi trứng kỹ thuật số DR nhằm đánh giá lưu thông của vòi trứng tới buồng tử cung trong điều trị hiếm muộn
        * Máy chẩn đoán nhiễm khuẩn Helicobacter Pylori 14C (máy test HP qua hơi thở)
        * Hệ thống máy xét nghiệm tự động cũng được trang bị đầy đủ.
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/01/28/164856-thiet-bi-hong-phat.png)
        
        **VỊ TRÍ**
        
        Bệnh viện ngay gần ngã ba Khâm Thiên - Lê Duẩn, cách Ga Hà Nội khoảng 400m về hướng đường Giải Phóng`,
        descriptionHTML: `<p>Bệnh viện Đa khoa Hồng Phát được Bộ Y tế thẩm định và cấp phép hoạt động từ đầu năm 2007. Bệnh viện Hồng Phát quy tụ đội ngũ giáo sư, bác sĩ đầu ngành có chuyên môn cao và giàu kinh nghiệm. Hầu hết các y, bác sĩ đang làm việc tại đây đều là những người đã và đang công tác tại các bệnh viện lớn tuyến Trung ương như: Bệnh viện Bạch Mai, Bệnh viện Việt Đức, Bệnh viện E Hà Nội, Bệnh viện K, Bệnh viện TW Quân đội 108, Bệnh viện Phụ sản TW,…</p>
        <p>Bên cạnh đó, hệ thống trang thiết bị cơ bản được đầu tư hỗ trợ chẩn đoán và điều trị hiệu quả cho người bệnh.</p>
        <p><strong>Địa chỉ</strong>: 219 Lê Duẩn, Hai Bà Trưng, Hà Nội</p>
        <p><strong>Thời gian làm việc</strong>:</p>
        <p>Thứ 2 đến Chủ Nhật
        Từ 7h30 đến 17h00</p>
        <p><strong>Hình thức thanh toán</strong>: Bệnh viện nhận thanh toán bằng tiền mặt và quẹt thẻ.</p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p><strong>Thế mạnh</strong>: Bệnh viện có thế mạnh chuyên môn về khám và điều trị bệnh lý Nội Cơ Xương Khớp, Nội Thần Kinh với những chuyên gia đầu ngành trong lĩnh vực này như: Giáo sư, Tiến sĩ Trần Ngọc Ân, Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Văn Liệu,...</p>
        <p><strong>Khám và điều trị</strong></p>
        <p>Bệnh viện nhận khám và điều trị về:</p>
        <ul>
        <li>Nội cơ xương khớp</li>
        <li>Nội thần kinh</li>
        <li>Nội tiết, đái tháo đường, tim mạch – Nội chung</li>
        <li>Chuyên khoa tiêu hóa – Hậu môn trực tràng</li>
        <li>Sản phụ khoa</li>
        <li>Da liễu</li>
        <li>Mắt</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện Đa khoa Hồng Phát sở hữu hệ thống cơ sở vật chất hiện đại và đồng bộ. Trang thiết bị tại Bệnh viện được nhập khẩu trực tiếp từ các nước Anh, Pháp, Mỹ, Thụy Sĩ,...</p>
        <ul>
        <li>Máy đo loãng xương toàn thân Hologic Discovery Wi</li>
        <li>Máy chụp CT Scanner hãng Siemens</li>
        <li>Hệ thống máy siêu âm màu 4D của Nhật</li>
        <li>Máy chụp X-Quang kỹ thuật số</li>
        <li>Chụp Mamo vú kỹ thuật số DR nhằm đánh giá và phát hiện sớm ung thư vú</li>
        <li>Chụp tử cung vòi trứng kỹ thuật số DR nhằm đánh giá lưu thông của vòi trứng tới buồng tử cung trong điều trị hiếm muộn</li>
        <li>Máy chẩn đoán nhiễm khuẩn Helicobacter Pylori 14C (máy test HP qua hơi thở)</li>
        <li>Hệ thống máy xét nghiệm tự động cũng được trang bị đầy đủ.</li>
        </ul>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2022/01/28/164856-thiet-bi-hong-phat.png" alt="img"></p>
        <p><strong>VỊ TRÍ</strong></p>
        <p>Bệnh viện ngay gần ngã ba Khâm Thiên - Lê Duẩn, cách Ga Hà Nội khoảng 400m về hướng đường Giải Phóng</p>
        `,
        nickName: 'conan',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện Công viên các Hoàng tử',
        address: 'Đ. Nguyễn Văn Cừ, Trang Hạ',
        image: "data:image/png;base64,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",
        province: 'Hải Phòng',
        descriptionMarkdown: `**GIỚI THIỆU**

        Địa chỉ: 29 Nguyễn Bỉnh Khiêm, Nguyễn Du, Hai Bà Trưng, Hà Nội
        
        **Thời gian làm việc**:
        
        * Khoa khám bệnh làm việc cả ngày từ Thứ 2 - Thứ 6
        * Từ 7h00 - 16h00 (người bệnh nên đăng ký khám trước 15h00)
        
        Bệnh viện Y học Cổ truyền Trung ương là bệnh viện đầu ngành về Y học cổ truyền - Trung tâm hợp tác về y học cổ truyền của Tổ chức Y tế thế giới tại Việt Nam. Bệnh viện có 34 khoa phòng và trung tâm được chia thành 4 khối: lâm sàng, cận lâm sàng, các trung tâm và khối các phòng ban chức năng.
        
        Bệnh viện có các khoa lâm sàng Nội, Ngoại, Phụ, Nội Nhi, Châm cứu dưỡng sinh, Lão, Hồi sức cấp cứu,  Da liễu, Kiểm soát và Điều trị Ung bướu, Khám chữa bệnh tự nguyện chất lượng cao, Khoa khám bệnh, Khoa thận tiết niệu và nam học, Khoa đa khoa ngũ quan, Khoa cơ xương khớp; với đầy đủ các trang thiết bị hiện đại để phục vụ cho chẩn đoán, điều trị và nghiên cứu khoa học.
        
        Bệnh nhân được trực tiếp khám chữa bệnh là các Giáo sư, Phó giáo sư, Tiến sĩ, Thạc sĩ, BSCKI, BSCKII có chuyên môn cao, nhiều năm kinh nghiệm, là các chuyên gia đầu ngành trong lĩnh vực YHCT.
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Kết hợp y học cổ truyền với y học hiện đại trong khám và điều trị các bệnh nội khoa và ngoại khoa, bệnh viện có thế mạnh về:
        
        **Nội khoa**
        
        * Cơ xương khớp: Viêm khớp dạng thấp, bệnh gout, viêm khớp nhiễm khuẩn, thoái hóa khớp, đau thần kinh tọa, thoát vị đĩa đệm cột sống cổ - cột sống thắt lưng, bệnh lý phần mềm quanh khớp, thấp khớp, viêm quanh khớp vai, hội chứng vai gáy, loãng xương
        * Tim mạch: Tăng huyết áp, thiếu máu cơ tim, rối loạn thần kinh tim, huyết áp thấp, thiểu năng tuần hoàn não mạn tính, suy giãn tĩnh mạch chi...
        * Thần kinh: Di chứng tai biến mạch máu não, liệt dây thần kinh VII ngoại biên, đau dây thần kinh liên sườn, bệnh tăng tiết mồ hôi, rối loạn tiền đình, mất ngủ, tâm căn suy nhược...
        * Tiêu hóa - gan mật: Viêm gan, xơ gan, viêm loét dạ dày tá tràng, táo bón mạn tính, hội chứng ruột kích thích...
        * Tiết niệu - sinh dục: Sỏi tiết niệu, Di tinh, viêm bàng quang cấp và mạn tính, rối loạn kinh nguyệt, rối loạn tiền mãn kinh...
        * Hô hấp: Viêm xoang, viêm họng, viêm mũi dị ứng, hen phế quản, COPD...
        * Nội tiết - dinh dưỡng - chuyển hóa: Điều trị hỗ trợ các bệnh lý rối loạn chuyển hóa như Đái tháo đường, rối loạn lipid máu, tăng acid uric...
        * Điều trị hỗ trợ các bệnh lý như: Ung thư, suy nhược cơ thể (bệnh người già, kém ăn, mất ngủ, hay quên...)
        
        **Ngoại khoa**
        
        * Bệnh lý vùng hậu môn trực tràng: Bệnh trĩ, nứt kẽ hậu môn, áp xe hậu môn, rò hậu môn, rò trực tràng âm đạo, sa trực tràng, sùi mào gà ống hậu môn... 
        * Bệnh lý tiết niệu: Sỏi tiết niệu (kết hợp tán sỏi tiết niệu ngoài cơ thể hoặc nội soi ngược dòng bằng năng lượng Laser với thuốc Y học cổ truyền), u phì đại lành tính tiền liệt tuyến...
        * Thăm dò chức năng sinh lý ống hậu môn (Manom-etry): Cho các chỉ định: đại tiện khó, mất tự chủ hậu môn, đánh giá chức năng sinh lý ống hậu môn 
        * Test chẩn đoán chức năng nhu động đại tràng: phát hiện tình trạng rối loạn chức năng nhu động đại tràng
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện được trang bị các các trang thiết bị y khoa hiện đại:
        * MRI
        * CT scanner
        * X quang kỹ thuật số
        * Máy siêu âm Doppler
        * Máy giảm đau công nghệ mới nhất - Scrambler Therapy...
        
        **VỊ TRÍ**
        
        Bệnh viện Y học cổ truyền Trung ương có nhiều khu khám (Khoa khám bệnh, Khám theo yêu cầu, Khoa khám chữa bệnh tự nguyện chất lượng cao). Khoa Khám bệnh và Khám theo yêu cầu nằm tại Cổng 4, số 29 Nguyễn Bỉnh Khiêm.
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2021/05/20/101908-70311d4fd38126df7f90.jpg)
        
        **QUY TRÌNH ĐI KHÁM**
        
        Dưới đây là hướng đẫn đường đi và làm thủ tục khám tại Bệnh viện Y học Cổ truyền Trung ương, đối với người bệnh đã đặt khám thông qua BookingCare.
        
        1. Bạn đến cổng số 4 - Bệnh viện Y học cổ truyền Trung ương
        
        Địa chỉ: Số 29 Nguyễn Bỉnh Khiêm, Hai Bà Trưng, Hà Nội 
        
        Gửi xe máy: xe máy gửi tại bãi gửi xe của bệnh viện, có nhân viên bảo vệ hướng dẫn
        Gửi ô tô: Bạn có thể hỏi nhân viên bảo vệ để được hướng dẫn nơi gửi xe
        Nơi gửi xe Bệnh viện Y học Cổ truyền Trung ương
        
        2. Bạn hỏi đến Khoa Khám bệnh của bệnh viện (từ cổng số 4 đi vào, Khoa Khám bệnh nằm bên phải)
        
        
        3. Bạn vào cửa số 5 của quầy đăng ký (tầng 1), báo đã đặt khám qua BookingCare để được nhân viên hỗ trợ.
        
        
        4. Bạn đi vào phòng để bác sĩ khám, bắt mạch sau đó đi làm các xét nghiệm, chụp chiếu (nếu cần)
        
        5. Sau khi có kết quả, bạn quay lại phòng khám để bác sĩ đọc kết quả, kê đơn và đưa ra phương án điều trị.
        
        **Lưu ý**: 
        
        * Lấy thuốc đông y: Nếu người bệnh lấy thuốc không sắc sẵn có thể chờ bốc thuốc và lấy luôn
        * Lấy thuốc đông y sắc sẵn: Người bệnh đến lấy thuốc nước theo thời gian hẹn`,
        descriptionHTML: `<p><strong>GIỚI THIỆU</strong></p>
        <p>Địa chỉ: 29 Nguyễn Bỉnh Khiêm, Nguyễn Du, Hai Bà Trưng, Hà Nội</p>
        <p><strong>Thời gian làm việc</strong>:</p>
        <ul>
        <li>Khoa khám bệnh làm việc cả ngày từ Thứ 2 - Thứ 6</li>
        <li>Từ 7h00 - 16h00 (người bệnh nên đăng ký khám trước 15h00)</li>
        </ul>
        <p>Bệnh viện Y học Cổ truyền Trung ương là bệnh viện đầu ngành về Y học cổ truyền - Trung tâm hợp tác về y học cổ truyền của Tổ chức Y tế thế giới tại Việt Nam. Bệnh viện có 34 khoa phòng và trung tâm được chia thành 4 khối: lâm sàng, cận lâm sàng, các trung tâm và khối các phòng ban chức năng.</p>
        <p>Bệnh viện có các khoa lâm sàng Nội, Ngoại, Phụ, Nội Nhi, Châm cứu dưỡng sinh, Lão, Hồi sức cấp cứu,  Da liễu, Kiểm soát và Điều trị Ung bướu, Khám chữa bệnh tự nguyện chất lượng cao, Khoa khám bệnh, Khoa thận tiết niệu và nam học, Khoa đa khoa ngũ quan, Khoa cơ xương khớp; với đầy đủ các trang thiết bị hiện đại để phục vụ cho chẩn đoán, điều trị và nghiên cứu khoa học.</p>
        <p>Bệnh nhân được trực tiếp khám chữa bệnh là các Giáo sư, Phó giáo sư, Tiến sĩ, Thạc sĩ, BSCKI, BSCKII có chuyên môn cao, nhiều năm kinh nghiệm, là các chuyên gia đầu ngành trong lĩnh vực YHCT.</p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Kết hợp y học cổ truyền với y học hiện đại trong khám và điều trị các bệnh nội khoa và ngoại khoa, bệnh viện có thế mạnh về:</p>
        <p><strong>Nội khoa</strong></p>
        <ul>
        <li>Cơ xương khớp: Viêm khớp dạng thấp, bệnh gout, viêm khớp nhiễm khuẩn, thoái hóa khớp, đau thần kinh tọa, thoát vị đĩa đệm cột sống cổ - cột sống thắt lưng, bệnh lý phần mềm quanh khớp, thấp khớp, viêm quanh khớp vai, hội chứng vai gáy, loãng xương</li>
        <li>Tim mạch: Tăng huyết áp, thiếu máu cơ tim, rối loạn thần kinh tim, huyết áp thấp, thiểu năng tuần hoàn não mạn tính, suy giãn tĩnh mạch chi...</li>
        <li>Thần kinh: Di chứng tai biến mạch máu não, liệt dây thần kinh VII ngoại biên, đau dây thần kinh liên sườn, bệnh tăng tiết mồ hôi, rối loạn tiền đình, mất ngủ, tâm căn suy nhược...</li>
        <li>Tiêu hóa - gan mật: Viêm gan, xơ gan, viêm loét dạ dày tá tràng, táo bón mạn tính, hội chứng ruột kích thích...</li>
        <li>Tiết niệu - sinh dục: Sỏi tiết niệu, Di tinh, viêm bàng quang cấp và mạn tính, rối loạn kinh nguyệt, rối loạn tiền mãn kinh...</li>
        <li>Hô hấp: Viêm xoang, viêm họng, viêm mũi dị ứng, hen phế quản, COPD...</li>
        <li>Nội tiết - dinh dưỡng - chuyển hóa: Điều trị hỗ trợ các bệnh lý rối loạn chuyển hóa như Đái tháo đường, rối loạn lipid máu, tăng acid uric...</li>
        <li>Điều trị hỗ trợ các bệnh lý như: Ung thư, suy nhược cơ thể (bệnh người già, kém ăn, mất ngủ, hay quên...)</li>
        </ul>
        <p><strong>Ngoại khoa</strong></p>
        <ul>
        <li>Bệnh lý vùng hậu môn trực tràng: Bệnh trĩ, nứt kẽ hậu môn, áp xe hậu môn, rò hậu môn, rò trực tràng âm đạo, sa trực tràng, sùi mào gà ống hậu môn...</li>
        <li>Bệnh lý tiết niệu: Sỏi tiết niệu (kết hợp tán sỏi tiết niệu ngoài cơ thể hoặc nội soi ngược dòng bằng năng lượng Laser với thuốc Y học cổ truyền), u phì đại lành tính tiền liệt tuyến...</li>
        <li>Thăm dò chức năng sinh lý ống hậu môn (Manom-etry): Cho các chỉ định: đại tiện khó, mất tự chủ hậu môn, đánh giá chức năng sinh lý ống hậu môn</li>
        <li>Test chẩn đoán chức năng nhu động đại tràng: phát hiện tình trạng rối loạn chức năng nhu động đại tràng</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện được trang bị các các trang thiết bị y khoa hiện đại:</p>
        <ul>
        <li>MRI</li>
        <li>CT scanner</li>
        <li>X quang kỹ thuật số</li>
        <li>Máy siêu âm Doppler</li>
        <li>Máy giảm đau công nghệ mới nhất - Scrambler Therapy...</li>
        </ul>
        <p><strong>VỊ TRÍ</strong></p>
        <p>Bệnh viện Y học cổ truyền Trung ương có nhiều khu khám (Khoa khám bệnh, Khám theo yêu cầu, Khoa khám chữa bệnh tự nguyện chất lượng cao). Khoa Khám bệnh và Khám theo yêu cầu nằm tại Cổng 4, số 29 Nguyễn Bỉnh Khiêm.</p>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2021/05/20/101908-70311d4fd38126df7f90.jpg" alt="img"></p>
        <p><strong>QUY TRÌNH ĐI KHÁM</strong></p>
        <p>Dưới đây là hướng đẫn đường đi và làm thủ tục khám tại Bệnh viện Y học Cổ truyền Trung ương, đối với người bệnh đã đặt khám thông qua BookingCare.</p>
        <ol>
        <li>Bạn đến cổng số 4 - Bệnh viện Y học cổ truyền Trung ương</li>
        </ol>
        <p>Địa chỉ: Số 29 Nguyễn Bỉnh Khiêm, Hai Bà Trưng, Hà Nội</p>
        <p>Gửi xe máy: xe máy gửi tại bãi gửi xe của bệnh viện, có nhân viên bảo vệ hướng dẫn
        Gửi ô tô: Bạn có thể hỏi nhân viên bảo vệ để được hướng dẫn nơi gửi xe
        Nơi gửi xe Bệnh viện Y học Cổ truyền Trung ương</p>
        <ol start="2">
        <li>
        <p>Bạn hỏi đến Khoa Khám bệnh của bệnh viện (từ cổng số 4 đi vào, Khoa Khám bệnh nằm bên phải)</p>
        </li>
        <li>
        <p>Bạn vào cửa số 5 của quầy đăng ký (tầng 1), báo đã đặt khám qua BookingCare để được nhân viên hỗ trợ.</p>
        </li>
        <li>
        <p>Bạn đi vào phòng để bác sĩ khám, bắt mạch sau đó đi làm các xét nghiệm, chụp chiếu (nếu cần)</p>
        </li>
        <li>
        <p>Sau khi có kết quả, bạn quay lại phòng khám để bác sĩ đọc kết quả, kê đơn và đưa ra phương án điều trị.</p>
        </li>
        </ol>
        <p><strong>Lưu ý</strong>:</p>
        <ul>
        <li>Lấy thuốc đông y: Nếu người bệnh lấy thuốc không sắc sẵn có thể chờ bốc thuốc và lấy luôn</li>
        <li>Lấy thuốc đông y sắc sẵn: Người bệnh đến lấy thuốc nước theo thời gian hẹn</li>
        </ul>
        `,
        nickName: 'ahxd',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện quốc tế Tottenham Hospur',
        address: 'Phường Tân Thịnh, Hòa Xuân',
        image: "data:image/png;base64,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",
        province: 'Đà Nẵng',
        descriptionMarkdown: `**Bệnh viện Quốc tế Dolife** là một cơ sở y tế tư nhân với mô hình Bệnh viện khách sạn 5*. DoLife hội tụ đội ngũ cố vấn chuyên môn, chuyên gia hàng đầu ở Quốc tế và Việt Nam, bác sĩ, dược sĩ, điều dưỡng, kỹ thuật viên được đào tạo chuyên sâu ở trong nước và nước ngoài. 

        Với hầu hết các bệnh lý, khách hàng đều có thể thăm khám tại Bệnh viện. Một số chuyên khoa được phòng khám chú trọng phát triển, trở thành thế mạnh chuyên sâu như: Thần kinh, Tiêu hóa, Tim mạch, Thận - tiết niệu, Nội tiết, Hô hấp. 
        
        Đội ngũ các giáo sư, bác sỹ là chuyên gia đầu ngành, giàu kinh nghiệm trong nước và quốc tế:
        
        * Phó Giáo sư, Tiến sĩ Đồng Khắc Hưng - Nguyên Phó Giám đốc Bệnh viện Quân y 103
        * Phó Giáo sư, Tiến sĩ Nguyễn Minh Hiện - Nguyên Trưởng khoa Đột quỵ Bệnh viện Quân y 103
        * Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II Trần Việt Tú - Hơn 40 năm kinh nghiệm khám và điều trị Nội Tiêu hóa, Nguyên Chủ nhiệm Bộ môn Nội Tiêu hóa, Học viện Quân Y
        * Phó Giáo sư, Tiến sĩ Hoàng Trung Vinh - Nguyên Chủ nhiệm khoa Thận, Lọc máu Bệnh viện Quân y 103 - Học viện Quân y
        * Bên cạnh đó, Bệnh viện Quốc tế Dolife có cơ sở vật chất được thiết kế theo tiêu chuẩn của Mỹ, trang thiết bị toàn diện đảm bảo các yếu tố kĩ thuật và tính thống nhất, Hệ thống phòng khám, phòng chức năng, phòng thủ thuật… đảm bảo tiêu chuẩn kiểm soát nhiễm khuẩn.
        
        **Địa chỉ**: 108 Đường Nguyễn Hoàng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội.
        
        **Thời gian làm việc**: Thứ 2 - Chủ nhật: 7h00 - 16h30 (nghỉ trưa từ 12h00 - 13h00)
        
        **Bảo hiểm áp dụng**:
        
        Bệnh viện có sử dụng bảo hiểm y tế và bảo hiểm bảo lãnh.
        Bệnh viện có xuất hóa đơn đỏ cho bệnh nhân có nhu cầu.
        Hình thức thanh toán: Bệnh viện nhận thanh toán bằng hình thức chuyển khoản và tiền mặt
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Phòng khám có thế mạnh chuyên môn về khám và điều trị bệnh lý các chuyên khoa:
        
        * Thần kinh
        * Tiêu hóa
        * Tim mạch
        * Thận - tiết niệu
        * Nội tiết
        * Hô hấp
        
        Ngoài ra, Phòng khám nhận khám và điều trị các bệnh lý khác:
        
        * Khoa Nội - Nhi
        * Khoa Nam hoc
        * Sản Khoa
        * Khoa Kiểm soát nhiễm khuẩn
        * ...
        
        **TRANG THIẾT BỊ**
        
        Bệnh viện đươc trang bị Hệ thống máy móc thiết bị hiện đại nhất được nhập khẩu từ các nước tiên tiến như Pháp, Anh, Nhật…được kiểm định và vận hành chắc chắn trong quá trình hoạt động:
        
        * Hệ thống Nội soi tiêu hóa Olympus Evis Exera III CV – 190: Với ống soi nhỏ, mềm mại giúp quá trình nội soi dạ dày tiến hành dễ dàng mà không gây bất kì thương tổn nào lên niêm mạc. Do đó, bệnh nhân hoàn toàn không thấy khó chịu trong và sau khi nội soi.
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2023/06/27/145808-may-noi-soi-dolife.jpg)
        
        * Hệ thống Sinh hóa - Miễn dịch Cobas 8000 cho phép thực hiện được hầu hết các xét nghiệm Sinh hóa, Miễn dịch, Huyết học từ cơ bản đến chuyên sâu.
        * Hệ thống chụp cộng hưởng từ MRI 1.5 Tesla: Thiết bị cần thiết trong chẩn đoán và điều trị các bệnh lý xương khớp, thần kinh,...
        * Hệ thống chụp CT Scanner 384 lát cắt Somatom Definition cho các cấp độ mới về chất lượng hình ảnh, kết quả lâm sàng và cuối cùng là y học chính xác.
        * Máy chụp nhũ ảnh Mammomat Fusion với các công nghệ tích hợp giúp cải thiện dòng công việc cũng như chất lượng hình ảnh cho phép đạt được hiệu quả sàng lọc tối ưu trong chẩn đoán các bệnh lý tuyến vú.
        
        **GIÁ DỊCH VỤ**
        
        Chi phí một số dịch vụ tham khảo tại Bệnh viện Quốc tế Dolife:
        | STT | Dịch vụ| Giá (VNĐ)|
        | --- | --- | --- |
        1	|Khám Nội khoa (Phó Giáo sư/ Giáo sư)	|400.000
        2	|Khám Ngoại khoa (Phó Giáo sư/ Giáo sư)	|400.000
        3	|Khám Nội khoa (Tiến sĩ)	|400.000
        4	|Khám Ngoại khoa (Tiến sĩ)	|400.000
         `,
        descriptionHTML: `<p><strong>Bệnh viện Quốc tế Dolife</strong> là một cơ sở y tế tư nhân với mô hình Bệnh viện khách sạn 5*. DoLife hội tụ đội ngũ cố vấn chuyên môn, chuyên gia hàng đầu ở Quốc tế và Việt Nam, bác sĩ, dược sĩ, điều dưỡng, kỹ thuật viên được đào tạo chuyên sâu ở trong nước và nước ngoài.</p>
        <p>Với hầu hết các bệnh lý, khách hàng đều có thể thăm khám tại Bệnh viện. Một số chuyên khoa được phòng khám chú trọng phát triển, trở thành thế mạnh chuyên sâu như: Thần kinh, Tiêu hóa, Tim mạch, Thận - tiết niệu, Nội tiết, Hô hấp.</p>
        <p>Đội ngũ các giáo sư, bác sỹ là chuyên gia đầu ngành, giàu kinh nghiệm trong nước và quốc tế:</p>
        <ul>
        <li>Phó Giáo sư, Tiến sĩ Đồng Khắc Hưng - Nguyên Phó Giám đốc Bệnh viện Quân y 103</li>
        <li>Phó Giáo sư, Tiến sĩ Nguyễn Minh Hiện - Nguyên Trưởng khoa Đột quỵ Bệnh viện Quân y 103</li>
        <li>Phó Giáo sư, Tiến sĩ, Bác sĩ Chuyên khoa II Trần Việt Tú - Hơn 40 năm kinh nghiệm khám và điều trị Nội Tiêu hóa, Nguyên Chủ nhiệm Bộ môn Nội Tiêu hóa, Học viện Quân Y</li>
        <li>Phó Giáo sư, Tiến sĩ Hoàng Trung Vinh - Nguyên Chủ nhiệm khoa Thận, Lọc máu Bệnh viện Quân y 103 - Học viện Quân y</li>
        <li>Bên cạnh đó, Bệnh viện Quốc tế Dolife có cơ sở vật chất được thiết kế theo tiêu chuẩn của Mỹ, trang thiết bị toàn diện đảm bảo các yếu tố kĩ thuật và tính thống nhất, Hệ thống phòng khám, phòng chức năng, phòng thủ thuật… đảm bảo tiêu chuẩn kiểm soát nhiễm khuẩn.</li>
        </ul>
        <p><strong>Địa chỉ</strong>: 108 Đường Nguyễn Hoàng, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội.</p>
        <p><strong>Thời gian làm việc</strong>: Thứ 2 - Chủ nhật: 7h00 - 16h30 (nghỉ trưa từ 12h00 - 13h00)</p>
        <p><strong>Bảo hiểm áp dụng</strong>:</p>
        <p>Bệnh viện có sử dụng bảo hiểm y tế và bảo hiểm bảo lãnh.
        Bệnh viện có xuất hóa đơn đỏ cho bệnh nhân có nhu cầu.
        Hình thức thanh toán: Bệnh viện nhận thanh toán bằng hình thức chuyển khoản và tiền mặt</p>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Phòng khám có thế mạnh chuyên môn về khám và điều trị bệnh lý các chuyên khoa:</p>
        <ul>
        <li>Thần kinh</li>
        <li>Tiêu hóa</li>
        <li>Tim mạch</li>
        <li>Thận - tiết niệu</li>
        <li>Nội tiết</li>
        <li>Hô hấp</li>
        </ul>
        <p>Ngoài ra, Phòng khám nhận khám và điều trị các bệnh lý khác:</p>
        <ul>
        <li>Khoa Nội - Nhi</li>
        <li>Khoa Nam hoc</li>
        <li>Sản Khoa</li>
        <li>Khoa Kiểm soát nhiễm khuẩn</li>
        <li>...</li>
        </ul>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Bệnh viện đươc trang bị Hệ thống máy móc thiết bị hiện đại nhất được nhập khẩu từ các nước tiên tiến như Pháp, Anh, Nhật…được kiểm định và vận hành chắc chắn trong quá trình hoạt động:</p>
        <ul>
        <li>Hệ thống Nội soi tiêu hóa Olympus Evis Exera III CV – 190: Với ống soi nhỏ, mềm mại giúp quá trình nội soi dạ dày tiến hành dễ dàng mà không gây bất kì thương tổn nào lên niêm mạc. Do đó, bệnh nhân hoàn toàn không thấy khó chịu trong và sau khi nội soi.</li>
        </ul>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2023/06/27/145808-may-noi-soi-dolife.jpg" alt="img"></p>
        <ul>
        <li>Hệ thống Sinh hóa - Miễn dịch Cobas 8000 cho phép thực hiện được hầu hết các xét nghiệm Sinh hóa, Miễn dịch, Huyết học từ cơ bản đến chuyên sâu.</li>
        <li>Hệ thống chụp cộng hưởng từ MRI 1.5 Tesla: Thiết bị cần thiết trong chẩn đoán và điều trị các bệnh lý xương khớp, thần kinh,...</li>
        <li>Hệ thống chụp CT Scanner 384 lát cắt Somatom Definition cho các cấp độ mới về chất lượng hình ảnh, kết quả lâm sàng và cuối cùng là y học chính xác.</li>
        <li>Máy chụp nhũ ảnh Mammomat Fusion với các công nghệ tích hợp giúp cải thiện dòng công việc cũng như chất lượng hình ảnh cho phép đạt được hiệu quả sàng lọc tối ưu trong chẩn đoán các bệnh lý tuyến vú.</li>
        </ul>
        <p><strong>GIÁ DỊCH VỤ</strong></p>
        <p>Chi phí một số dịch vụ tham khảo tại Bệnh viện Quốc tế Dolife:</p>
        <table>
        <thead>
        <tr>
        <th>STT</th>
        <th>Dịch vụ</th>
        <th>Giá (VNĐ)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>Khám Nội khoa (Phó Giáo sư/ Giáo sư)</td>
        <td>400.000</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Khám Ngoại khoa (Phó Giáo sư/ Giáo sư)</td>
        <td>400.000</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Khám Nội khoa (Tiến sĩ)</td>
        <td>400.000</td>
        </tr>
        <tr>
        <td>4</td>
        <td>Khám Ngoại khoa (Tiến sĩ)</td>
        <td>400.000</td>
        </tr>
        </tbody>
        </table>
        `,
        nickName: 'tddh',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Man Xanh',
        address: '34 Lê Lợi, Cần Giờ',
        image: "data:image/png;base64,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",
        province: 'Cần Thơ',
        descriptionMarkdown: `**Phòng khám Đa khoa Việt Gia** được thành lập từ năm 2009, tọa lạc tại tòa nhà 6 tầng với diện tích hơn 900m2 và ngay tại trung tâm Quận 1. Phòng khám là nơi quy tụ đội ngũ bác sĩ giỏi và nhiều năm kinh nghiệm, đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Đại học Y dược TP. HCM, Bệnh viện Hùng Vương, Bệnh viện Thống Nhất, Trung tâm Chăm sóc Sức khỏe Sinh sản TP. HCM,...

        Đội ngũ Bác sĩ đến từ các bệnh viện hàng đầu TP. Hồ Chí Minh đem đến cho người bệnh dịch vụ khám và tư vấn chất lượng cao:
        
        * Bác sĩ Chuyên khoa I Đào Thị Ngọc Anh - Gần 40 năm kinh nghiệm khám và điều trị bệnh lý Tai mũi họng, Từng công tác nhiều năm tại Bệnh viện Đại học Y dược TP. HCM
        * Bác sĩ Chuyên khoa I Nông Thị Hồng Thúy - Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa, Công tác nhiều năm tại Trung tâm Chăm sóc Sức khỏe Sinh sản TP. HCM
        * Bác sĩ Chuyên khoa I Huỳnh Thị Lệ Cẩm - Hơn 35 năm kinh nghiệm trong lĩnh vực Sản phụ khoa, Từng công tác nhiều năm tại Bệnh viện Hùng Vương
        * Bác sĩ Chuyên khoa I Phan Thị Bạch Mai - Hơn 25 năm kinh nghiệm khám và điều trị về Nội khoa - Nội Tim mạch, Nguyên Trưởng khoa Nội - Bệnh viện Củ Chi
        * Thạc sĩ, Bác sĩ Nguyễn Chí Thành - Hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tiêu hóa - Nội khoa, Nguyên Phó Trưởng khoa Nội tổng hợp, Bệnh viện Thống Nhất
        * ...
        
        Hệ thống trang thiết bị hiện đại đồng bộ phục vụ cho công tác chẩn đoán và điều trị hiệu quả.
        
        **Địa chỉ**: 166 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. HCM
        
        **Thời gian làm việc**:  Từ thứ 2 đến thứ 7
        
        * Sáng : 07h30 - 11h30
        * Chiều : 13h00 - 16h30
        
        **Hình thức thanh toán**:
        
        * Tiền mặt, VISA, Mastercard, Chuyển khoản, Momo,...
        * Bảo hiểm tư nhân bảo lãnh: PTI, Insmart, Bảo Việt
        
        **THẾ MẠNH CHUYÊN MÔN**
        
        Phòng khám Đa khoa Việt Gia có thế mạnh chuyên môn về khám và điều trị các bệnh lý:
        
        * Sản Phụ khoa
        * Nội tim mạch
        * Nội tiêu hóa
        * Tai mũi họng
        
        Ngoài ra, Phòng khám nhận khám và điều trị các bệnh lý khác:
        
        * Nhi khoa
        * Nội tổng quát
        * Khám sức khỏe định kỳ cá nhân
        * Khám sức khỏe doanh nghiệp
        
        ...
        
        **TRANG THIẾT BỊ**
        
        Cơ sở vật chất, hệ thống máy móc, thiết bị được phòng khám đầu tư hiện đại:
        
        * Máy siêu âm Doppler màu LOGIQ Vivid T8 của hãng GE Healthcare (Mỹ)
        * Máy siêu âm Doppler màu LOGIQ P3 của hãng GE Healthcare (Mỹ)
        * Máy đo mật độ xương - SONOST 3000, Máy đo điện tim - CARDIMAX (Fx7102), Máy khám Tai mũi họng - MED CUBE, Máy nội soi Tai mũi họng - ABC EDTECH 101
        * Máy X-quang toàn sóng KELEX 300mA - Model: MD 3125
        * Hệ Thống CR Konica Sigma
        * ...
        
        ![img](https://cdn.bookingcare.vn/fr/w1000/2022/12/12/152810-111.png)
        
        Trang thiết bị khoa xét nghiệm - Ảnh: Cung cấp bởi Phòng khám
        
         
        
         
        
        **VỊ TRÍ**
        
        Phòng khám tại 166 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. HCM`,
        descriptionHTML: `<p><strong>Phòng khám Đa khoa Việt Gia</strong> được thành lập từ năm 2009, tọa lạc tại tòa nhà 6 tầng với diện tích hơn 900m2 và ngay tại trung tâm Quận 1. Phòng khám là nơi quy tụ đội ngũ bác sĩ giỏi và nhiều năm kinh nghiệm, đã và đang công tác tại các bệnh viện lớn như: Bệnh viện Đại học Y dược TP. HCM, Bệnh viện Hùng Vương, Bệnh viện Thống Nhất, Trung tâm Chăm sóc Sức khỏe Sinh sản TP. HCM,...</p>
        <p>Đội ngũ Bác sĩ đến từ các bệnh viện hàng đầu TP. Hồ Chí Minh đem đến cho người bệnh dịch vụ khám và tư vấn chất lượng cao:</p>
        <ul>
        <li>Bác sĩ Chuyên khoa I Đào Thị Ngọc Anh - Gần 40 năm kinh nghiệm khám và điều trị bệnh lý Tai mũi họng, Từng công tác nhiều năm tại Bệnh viện Đại học Y dược TP. HCM</li>
        <li>Bác sĩ Chuyên khoa I Nông Thị Hồng Thúy - Hơn 30 năm kinh nghiệm trong lĩnh vực Sản phụ khoa, Công tác nhiều năm tại Trung tâm Chăm sóc Sức khỏe Sinh sản TP. HCM</li>
        <li>Bác sĩ Chuyên khoa I Huỳnh Thị Lệ Cẩm - Hơn 35 năm kinh nghiệm trong lĩnh vực Sản phụ khoa, Từng công tác nhiều năm tại Bệnh viện Hùng Vương</li>
        <li>Bác sĩ Chuyên khoa I Phan Thị Bạch Mai - Hơn 25 năm kinh nghiệm khám và điều trị về Nội khoa - Nội Tim mạch, Nguyên Trưởng khoa Nội - Bệnh viện Củ Chi</li>
        <li>Thạc sĩ, Bác sĩ Nguyễn Chí Thành - Hơn 20 năm kinh nghiệm trong khám và điều trị bệnh lý Nội Tiêu hóa - Nội khoa, Nguyên Phó Trưởng khoa Nội tổng hợp, Bệnh viện Thống Nhất</li>
        <li>...</li>
        </ul>
        <p>Hệ thống trang thiết bị hiện đại đồng bộ phục vụ cho công tác chẩn đoán và điều trị hiệu quả.</p>
        <p><strong>Địa chỉ</strong>: 166 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. HCM</p>
        <p><strong>Thời gian làm việc</strong>:  Từ thứ 2 đến thứ 7</p>
        <ul>
        <li>Sáng : 07h30 - 11h30</li>
        <li>Chiều : 13h00 - 16h30</li>
        </ul>
        <p><strong>Hình thức thanh toán</strong>:</p>
        <ul>
        <li>Tiền mặt, VISA, Mastercard, Chuyển khoản, Momo,...</li>
        <li>Bảo hiểm tư nhân bảo lãnh: PTI, Insmart, Bảo Việt</li>
        </ul>
        <p><strong>THẾ MẠNH CHUYÊN MÔN</strong></p>
        <p>Phòng khám Đa khoa Việt Gia có thế mạnh chuyên môn về khám và điều trị các bệnh lý:</p>
        <ul>
        <li>Sản Phụ khoa</li>
        <li>Nội tim mạch</li>
        <li>Nội tiêu hóa</li>
        <li>Tai mũi họng</li>
        </ul>
        <p>Ngoài ra, Phòng khám nhận khám và điều trị các bệnh lý khác:</p>
        <ul>
        <li>Nhi khoa</li>
        <li>Nội tổng quát</li>
        <li>Khám sức khỏe định kỳ cá nhân</li>
        <li>Khám sức khỏe doanh nghiệp</li>
        </ul>
        <p>...</p>
        <p><strong>TRANG THIẾT BỊ</strong></p>
        <p>Cơ sở vật chất, hệ thống máy móc, thiết bị được phòng khám đầu tư hiện đại:</p>
        <ul>
        <li>Máy siêu âm Doppler màu LOGIQ Vivid T8 của hãng GE Healthcare (Mỹ)</li>
        <li>Máy siêu âm Doppler màu LOGIQ P3 của hãng GE Healthcare (Mỹ)</li>
        <li>Máy đo mật độ xương - SONOST 3000, Máy đo điện tim - CARDIMAX (Fx7102), Máy khám Tai mũi họng - MED CUBE, Máy nội soi Tai mũi họng - ABC EDTECH 101</li>
        <li>Máy X-quang toàn sóng KELEX 300mA - Model: MD 3125</li>
        <li>Hệ Thống CR Konica Sigma</li>
        <li>...</li>
        </ul>
        <p><img src="https://cdn.bookingcare.vn/fr/w1000/2022/12/12/152810-111.png" alt="img"></p>
        <p>Trang thiết bị khoa xét nghiệm - Ảnh: Cung cấp bởi Phòng khám</p>
        <p><strong>VỊ TRÍ</strong></p>
        <p>Phòng khám tại 166 Nguyễn Văn Thủ, Phường Đa Kao, Quận 1, TP. HCM</p>
        
        `,
        nickName: 'ytdlk',
        password: '$2a$10$K3G4GabflQ0dTKV7tOVZjOraU/oG/csMCcwckHnOLkMyd6uu/Vram', //benhvien
        status: 1,
        quantity_date: 7,
        show_order: 1,
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
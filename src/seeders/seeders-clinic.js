'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('clinics', [
      {
        name: 'Phòng khám Doraemon',
        address: 'Số 16 - 18 Phủ Doãn, Hoàn Kiếm',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Ô Long Viện',
        address: '200 Hoàng Quốc Việt, Cầu Giấy',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hệ thống Y khoa chuyên sâu Sherlock Holmes',
        address: '40 Cát Linh, Q. Đống Đa',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh Viện Truyện Kiều Nguyễn Du',
        address: '50 Nguyễn Chí Thanh, Q. Đống Đa',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Viện Tâm lý Giáo dục Harry Potter',
        address: 'Tầng 10, tòa nhà 70 tầng, tòa nhà Keangnam Hanoi Landmark Tower, khu đô thị Cầu Giấy, Mễ Trì, quận Nam Từ Liêm',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện Conan Detective',
        address: 'Tầng 7, Toà nhà 59 Võ Chí Công, Nghĩa Đô',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện Anh Hùng Xạ Điêu',
        address: 'Đ. Nguyễn Văn Cừ, Trang Hạ',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bệnh viện quốc tế Thần Điêu Đại Hiệp',
        address: 'Phường Tân Thịnh, Hòa Xuân',
        image: "data:image/jpeg;base64,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",
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
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Phòng khám Đa khoa Ỷ Thiên Đồ Long Ký',
        address: '34 Lê Lợi, Cần Giờ',
        image: "data:image/jpeg;base64,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/////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgGR3VpZGVzAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeDVVSTCBvdmVycmlkZXMAAAAEAAAAADhCSU0EGgZTbGljZXMAAAAAawAAAAYAAAAAAAAAAAAAAbwAAAEsAAAABQAyADgAOQAxADYAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAASwAAAG8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhCSU0EERFJQ0MgVW50YWdnZWQgRmxhZwAAAAEBADhCSU0EFBdMYXllciBJRCBHZW5lcmF0b3IgQmFzZQAAAAQAAAABOEJJTQQMFU5ldyBXaW5kb3dzIFRodW1ibmFpbAAAEXYAAAABAAAATAAAAHAAAADkAABjwAAAEVoAGAAB/9j/4AAQSkZJRgABAgEASABIAAD/7gAOQWRvYmUAZIAAAAAB/9sAhAAMCAgICQgMCQkMEQsKCxEVDwwMDxUYExMVExMYEQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAQ0LCw0ODRAODhAUDg4OFBQODg4OFBEMDAwMDBERDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABwAEwDASIAAhEBAxEB/90ABAAF/8QBPwAAAQUBAQEBAQEAAAAAAAAAAwABAgQFBgcICQoLAQABBQEBAQEBAQAAAAAAAAABAAIDBAUGBwgJCgsQAAEEAQMCBAIFBwYIBQMMMwEAAhEDBCESMQVBUWETInGBMgYUkaGxQiMkFVLBYjM0coLRQwclklPw4fFjczUWorKDJkSTVGRFwqN0NhfSVeJl8rOEw9N14/NGJ5SkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2N0dXZ3eHl6e3x9fn9xEAAgIBAgQEAwQFBgcHBgU1AQACEQMhMRIEQVFhcSITBTKBkRShsUIjwVLR8DMkYuFygpJDUxVjczTxJQYWorKDByY1wtJEk1SjF2RFVTZ0ZeLys4TD03Xj80aUpIW0lcTU5PSltcXV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",
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
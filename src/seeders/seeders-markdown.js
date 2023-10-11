'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('markdowns', [
            {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Tuệ Tĩnh là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 2,
                specialtyId: '',
                clinicId: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Hải Thượng Lãn Ông là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 3,
                specialtyId: '',
                clinicId: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Hồ Đắc Di là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 4,
                specialtyId: '',
                clinicId: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Phạm Ngọc Thạch là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 5,
                specialtyId: '',
                clinicId: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Đặng Văn Ngữ là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 6,
                specialtyId: '',
                clinicId: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Tôn Thất Tùng là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 7,
                specialtyId: '',
                clinicId: '',
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                contentHTML: `<h4>2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ</h4>
<p>Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:</p>
<ul>
<li>Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index</li>
<li>Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234</li>
<li>Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456</li>
</ul>
<p>Bước 2: Đăng nhập tài khoản dành cho phòng khám;</p>
<p>Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;</p>
<p><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png" alt="img"></p>
<p>Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;</p>
<p>Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.</p>
<p>Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.</p>

`,
                contentMarkdown: `#### 2. Quy trình dành cho Đối tác Cơ Sở Y tế/ Bác sĩ


Sau khi có link và tài khoản quản trị dành cho đối tác phòng khám/ Cơ sở y tế (CSYT) thì
đối tác có thể tiến hành đăng nhập và thực hiện các thao tác đăng lịch hẹn, quản lý danh sách bác
sĩ cũng như quản lý hoạt động đặt lịch khám trực tuyến/ đặt lịch tư vấn sức khỏe qua hệ thống
Bookingcare.vn.
Bước 1: Tải ứng dụng và cài đặt về máy bằng cách vào các cửa hàng App Store hoặc CH Play gõ
tìm tên ứng dụng “Bookingcare.vn dành cho Bác sĩ”’:
- Link web quản trị dành cho đối tác: https://dms.bookingcare.vn/login/index
- Tài khoản đăng nhập dành cho phòng khám/ CSYT: user: demo1@Bookingcare.vn.vn/
pass: demo1234
- Tài khoản đăng nhập dành cho bác sĩ: user: cskh.Bookingcare.vn@gmail.com/ pass:
123456

Bước 2: Đăng nhập tài khoản dành cho phòng khám;

Bước 3: Chọn biểu tượng lịch khám để tạo lịch khám theo danh sách bác sĩ trực thuộc phòng khám;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 4: Nhận lịch hẹn từ bệnh nhân và phê duyệt lịch hẹn sang trạng thái “ Chấp nhận” để tạo
phiếu hẹn cho bệnh nhân khi đến khám tại cơ sở y tế hoặc tư vấn sức khỏe từ xa qua video call với
bác sĩ. Trường hợp phòng khám bị quá tải hoặc bác sĩ không tiến hành thăm khám được CSYT
chọn “ Từ chối” để không tạo phiếu hẹn;

![img](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/800px-Facebook_New_Logo_%282015%29.svg.png)

Bước 5: Gọi điện xác nhận thông tin và nhắc nhở bệnh nhân đến khám đúng giờ;

Bước 6: Hoàn thành dịch vụ và phê duyệt lại trạng thái phiếu hẹn “ Đã khám”. Trường hợp bệnh
nhân không đến chọn “Không đến”.

Sau khi cung cấp dịch vụ cho bệnh nhân/ khách hàng xong mọi giao dịch còn lại về việc
trả kết quả, hội chẩn, hồ sơ bệnh án CSYT tự làm việc với bệnh nhân và ghi phiếu tái khám nếu
có.
`,
                description: `Bookingcare.vn Đặng Văn Chung là trung tâm thương mại điện tử phục vụ nhu cầu giới thiệu sản phẩm, dịch
vụ trực tuyến về sức khỏe, bao gồm: Đăng dịch vụ phòng khám, đặt lịch khám chữa bệnh tại các
phòng khám/ tại nhà, tư vấn sức khỏe trực tuyến, giới thiệu cung ứng sản phẩm, dịch vụ sức
khỏe...`,
                doctorId: 8,
                specialtyId: '',
                clinicId: '',
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

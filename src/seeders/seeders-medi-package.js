'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('medi_packages', [
            {//1
                name: 'Xét nghiệm ADN tại Trung tâm Novagen', // tên gói dịch vụ
                clinicID: 1, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Các dịch vụ xét nghiệm ADN: Xét nghiệm Cha (Mẹ) Con tự nguyện, Xét nghiệm Cha (Mẹ) Con hành chính, Thủ tục di dân; bảo lãnh; làm quốc tịch, Trưng cầu giám định của Tòa án, Xét nghiệm họ hàng dòng nam (Nhiễm sắc thể Y),Xét nghiệm họ hàng dòng nữ (Nhiễm sắc thể X); Xét nghiệm huyết thống theo dòng mẹ (ADN ti thể),Xét nghiệm mẫu hài cốt liệt sĩ, Xét nghiệm Cha Con trước sinh không xâm lấn, Xét nghiệm Cha Con thai nhi chọc ối - xâm lấn`,
                thongtinkham: `Giá gói: 4.300.000đ`,
                descriptionMarkdown: `
                ##### **Xét nghiệm ADN tại Trung tâm Novagen**
                
                **Novagen là trung tâm xét nghiệm ADN uy tín hàng đầu tại Việt Nam**. Dịch vụ xét nghiệm ADN tập trung vào các dịch vụ giám định gen, xét nghiệm ADN huyết thống, xét nghiệm ADN trước sinh, xét nghiệm di truyền và sàng lọc trước sinh không xâm lấn NIPT
                
                **Đội ngũ chuyên gia của trung tâm có nhiều kinh nghiệm về Công nghệ ADN, Di truyền, Sinh học Phân tử** và là thành viên của Hiệp hội Khoa học Hình sự Châu Á (AFFSN); Hiệp hội Tin Sinh Học Châu Á Thái Bình Dương (APBIONET); Hiệp hội Di truyền Người Châu Á Thái Bình Dương (APSHG)
                
                **Phòng Lab phân tích ADN của Trung tâm xét nghiệm ADN Novagen được đầu tư hiện đại, trang bị các thiết bị giám định ADN tiên tiến nhất trong giải trình tự gen và đều được nhập khẩu từ Mỹ, Châu Âu.**
                
                * Kết quả được xử lý bằng phần mềm phân tích xét nghiệm ADN tự động, phiên bản mới nhất trên thế giới hiện nay (GeneMapper ID-X) và được phê duyệt bởi Hội đồng khoa học gồm các chuyên gia cao cấp về ADNq.
                * Hệ thống kiểm soát Verify365 toàn bộ quy trình tách chiết và phân tích ADN theo nhiều bước đã giúp giảm thiểu khả năng sai sót do con người gây ra. Quy trình xét nghiệm được tiến hành lặp lại kết quả, mỗi xét nghiệm tại trung tâm được lặp lại 2 lần để đảm bảo tính chính xác
                * Novagen là đơn vị tiên phong áp dụng công nghệ xét nghiệm 24-36-45 loci trong giám định ADN; xét nghiệm ADN huyết thống và nhận dạng cá thể
                
                Các dịch vụ xét nghiệm ADN: 
                | Head | Head | Head | Head | Head | Head |
                | --- | --- | --- | --- | --- | --- |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |`,
                descriptionHTML: `<h5><strong>Xét nghiệm ADN tại Trung tâm Novagen</strong></h5>
                <p><strong>Novagen là trung tâm xét nghiệm ADN uy tín hàng đầu tại Việt Nam</strong>. Dịch vụ xét nghiệm ADN tập trung vào các dịch vụ giám định gen, xét nghiệm ADN huyết thống, xét nghiệm ADN trước sinh, xét nghiệm di truyền và sàng lọc trước sinh không xâm lấn NIPT</p>
                <p><strong>Đội ngũ chuyên gia của trung tâm có nhiều kinh nghiệm về Công nghệ ADN, Di truyền, Sinh học Phân tử</strong> và là thành viên của Hiệp hội Khoa học Hình sự Châu Á (AFFSN); Hiệp hội Tin Sinh Học Châu Á Thái Bình Dương (APBIONET); Hiệp hội Di truyền Người Châu Á Thái Bình Dương (APSHG)</p>
                <p><strong>Phòng Lab phân tích ADN của Trung tâm xét nghiệm ADN Novagen được đầu tư hiện đại, trang bị các thiết bị giám định ADN tiên tiến nhất trong giải trình tự gen và đều được nhập khẩu từ Mỹ, Châu Âu.</strong></p>
                <ul>
                <li>Kết quả được xử lý bằng phần mềm phân tích xét nghiệm ADN tự động, phiên bản mới nhất trên thế giới hiện nay (GeneMapper ID-X) và được phê duyệt bởi Hội đồng khoa học gồm các chuyên gia cao cấp về ADNq.</li>
                <li>Hệ thống kiểm soát Verify365 toàn bộ quy trình tách chiết và phân tích ADN theo nhiều bước đã giúp giảm thiểu khả năng sai sót do con người gây ra. Quy trình xét nghiệm được tiến hành lặp lại kết quả, mỗi xét nghiệm tại trung tâm được lặp lại 2 lần để đảm bảo tính chính xác</li>
                <li>Novagen là đơn vị tiên phong áp dụng công nghệ xét nghiệm 24-36-45 loci trong giám định ADN; xét nghiệm ADN huyết thống và nhận dạng cá thể</li>
                </ul>
                <p>Các dịch vụ xét nghiệm ADN:</p>
                <table>
                <thead>
                <tr>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                </tbody>
                </table>
                
`,
                packageType: 'Xét nghiệm', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//2
                name: 'Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT (NVGHP)', // tên gói dịch vụ
                clinicID: 1, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Tỷ lệ chính xác đến 99,9%
                Xét nghiệm đơn giản, an toàn tuyệt đối, không gây bất cứ nguy cơ nhiễm trùng cho mẹ và bé
                Phát hiện sớm các dị tật từ tuần thai thứ 9`,
                thongtinkham: `Giá gói: 5.600.000đ`,
                descriptionMarkdown: `**Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT (NVGHN)**

                Xét nghiệm tiền sản không xâm lấn (Non-Invasive Prenatal Genetic Testing, NIPT) là xét nghiệm sàng lọc trước sinh thông qua phân tích ADN của thai nhi từ mẫu máu của mẹ đang mang thai từ tuần thứ 10 nhằm phát hiện các bất thường nhiễm sắc thể gây ra dị tật thai nhi ở giai đoạn sớm
                
                Dòng máy được Trung tâm xét nghiệm ADN Novagen sử dụng cho xét nghiệm NIPT: MGISEQ200
                
                Hệ thống MGISEQ200 đảm bảo tiến hành các xét nghiệm NIPT với:
                
                Độ chính xác rất cao
                Thích ứng trong môi trường Việt Nam, đảm bảo không có sự sai lệch
                Cho kết quả nhanh (Giải trình tự trong 48h)
                Là dòng máy chính thống được sử dụng trong lĩnh vực nghiên cứu khoa học (Giải trình tự ADN, toàn bộ hệ GEN,...),Lâm sàng (Xét nghiệm NIPT),... được sử dụng tại các phòng LAB và trung tâm nghiên cứu trên toàn thế giới
                Hệ thống MGISEQ200 được tích hợp DNBSEQTM - thuật toán công nghệ giải trình tự Nanoarray độc quyền từ MGI, cho phép phân tích "chiều dài đoạn đọc" khác nhau và tối ưu hóa khung đọc, rút ngắn thời gian giải trình tự gen với dữ liệu chất lượng cao ở định dạng FastQ theo tiêu chuẩn quốc tế
                
                Đội ngũ nhà khoa học tại NOVAGEN được đào tạo bài bản tại các nước có nền khoa học phát triển, đứng đầu là Tiến sĩ Đặng Trần Hoàng, tốt nghiệp đại học Công nghệ KOCHI (Nhật Bản),ông đã có hơn 20 năm kinh nghiệm trong lĩnh vực Xét nghiệm ADN, Phân tích Di truyền, Giải trình tự GEN,...
                
                
                
                #### **Các bất thường rối loạn nhiễm sắc thể (NST) được chẩn đoán bằng xét nghiệm tiền sản không xâm lấn NIPT bao gồm:**
                
                
                
                **Các bất thường số lượng nhiễm sắc thể**
                
                * Hội chứng Down (Trisomy 21): Gây thiểu năng trí tuệ, các vấn đề tim mạch, hệ tiêu hóa và các cơ quan khác.
                * Hội chứng Edwards (Trisomy 18): Gây chết thai hoặc tử vong sau sinh, tỷ lệ sống hơn một năm tuổi là 5% – 10%.
                * Hội chứng Patau (Trisomy 13): Gây sẩy thai, thai lưu hoặc tử vong sớm sau sanh và kèm theo các dị tật bẩm sinh: thần kinh (não nhỏ, não thất duy nhất…),dị tật tim, sứt môi chẻ vòm, đa ngón…
                
                **Các bất thường số lượng nhiễm sắc thể giới tính**
                
                * Hội chứng Turner (Monosomy X)
                * Hội chứng Klinefelter (XXY)
                * Hội chứng Jacobs (XYY)
                * Hội chứng Triple X (XXX)
                
                **Sàng lọc để phát hiện thêm 5 hội chứng vi mất đoạn**
                
                Mất đoạn 22q11 (DiGeorge)
                Mất đoạn 15q11 (Angelman/Prader – Willi)
                Mất đoạn 1p36
                Wolf – Hirschhorn
                Cri-du-chat
                
                **Ưu điểm xét nghiệm NIPT**
                
                * Tỷ lệ chính xác đến 99,9%
                * Xét nghiệm đơn giản bằng cách sử dụng máu mẹ mà không cần chọc ối hoặc sinh thiết gai nhau
                * An toàn tuyệt đối, không gây bất cứ nguy cơ Xét nghiệm sàng lọc trước sinh không xâm lấn NIPTnhiễm trùng cho mẹ và bé
                * Phát hiện sớm các dị tật từ tuần thai thứ 10
                
                **Đối tượng làm xét nghiệm NIPT**
                
                Xét nghiệm sàng lọc trước sinh NIPT được khuyến nghị cho tất cả phụ nữ mang thai ở giai đoạn đầu của thai kỳ, trong đó đặc biệt chú ý đối với thai phụ thuộc nhóm nguy cơ cao, bao gồm:
                
                * Trên 30 tuổi
                * Có tiền sử sinh con dị tật, đã từng sảy thai
                * Có kết quả Double test và/hoặc Triple test nguy cơ cao
                * Có kết quả siêu âm bất thường
                * Mang đa thai
                * Có thực hiện kỹ thuật hỗ trợ sinh sản (IVF)
                * Gia đình có tiền sử mắc các bệnh di truyền liên quan đến NST
                
                Thời gian trả kết quả: 3-5 ngày
                
                Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT tại Trung tâm xét nghiệm ADN Novagen: 
                | Head | Head | Head | Head | Head | Head |
                | --- | --- | --- | --- | --- | --- |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |`,
                descriptionHTML: `<p><strong>Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT (NVGHN)</strong></p>
                <p>Xét nghiệm tiền sản không xâm lấn (Non-Invasive Prenatal Genetic Testing, NIPT) là xét nghiệm sàng lọc trước sinh thông qua phân tích ADN của thai nhi từ mẫu máu của mẹ đang mang thai từ tuần thứ 10 nhằm phát hiện các bất thường nhiễm sắc thể gây ra dị tật thai nhi ở giai đoạn sớm</p>
                <p>Dòng máy được Trung tâm xét nghiệm ADN Novagen sử dụng cho xét nghiệm NIPT: MGISEQ200</p>
                <p>Hệ thống MGISEQ200 đảm bảo tiến hành các xét nghiệm NIPT với:</p>
                <p>Độ chính xác rất cao
                Thích ứng trong môi trường Việt Nam, đảm bảo không có sự sai lệch
                Cho kết quả nhanh (Giải trình tự trong 48h)
                Là dòng máy chính thống được sử dụng trong lĩnh vực nghiên cứu khoa học (Giải trình tự ADN, toàn bộ hệ GEN,...),Lâm sàng (Xét nghiệm NIPT),... được sử dụng tại các phòng LAB và trung tâm nghiên cứu trên toàn thế giới
                Hệ thống MGISEQ200 được tích hợp DNBSEQTM - thuật toán công nghệ giải trình tự Nanoarray độc quyền từ MGI, cho phép phân tích &quot;chiều dài đoạn đọc&quot; khác nhau và tối ưu hóa khung đọc, rút ngắn thời gian giải trình tự gen với dữ liệu chất lượng cao ở định dạng FastQ theo tiêu chuẩn quốc tế</p>
                <p>Đội ngũ nhà khoa học tại NOVAGEN được đào tạo bài bản tại các nước có nền khoa học phát triển, đứng đầu là Tiến sĩ Đặng Trần Hoàng, tốt nghiệp đại học Công nghệ KOCHI (Nhật Bản),ông đã có hơn 20 năm kinh nghiệm trong lĩnh vực Xét nghiệm ADN, Phân tích Di truyền, Giải trình tự GEN,...</p>
                <h4><strong>Các bất thường rối loạn nhiễm sắc thể (NST) được chẩn đoán bằng xét nghiệm tiền sản không xâm lấn NIPT bao gồm:</strong></h4>
                <p><strong>Các bất thường số lượng nhiễm sắc thể</strong></p>
                <ul>
                <li>Hội chứng Down (Trisomy 21): Gây thiểu năng trí tuệ, các vấn đề tim mạch, hệ tiêu hóa và các cơ quan khác.</li>
                <li>Hội chứng Edwards (Trisomy 18): Gây chết thai hoặc tử vong sau sinh, tỷ lệ sống hơn một năm tuổi là 5% – 10%.</li>
                <li>Hội chứng Patau (Trisomy 13): Gây sẩy thai, thai lưu hoặc tử vong sớm sau sanh và kèm theo các dị tật bẩm sinh: thần kinh (não nhỏ, não thất duy nhất…),dị tật tim, sứt môi chẻ vòm, đa ngón…</li>
                </ul>
                <p><strong>Các bất thường số lượng nhiễm sắc thể giới tính</strong></p>
                <ul>
                <li>Hội chứng Turner (Monosomy X)</li>
                <li>Hội chứng Klinefelter (XXY)</li>
                <li>Hội chứng Jacobs (XYY)</li>
                <li>Hội chứng Triple X (XXX)</li>
                </ul>
                <p><strong>Sàng lọc để phát hiện thêm 5 hội chứng vi mất đoạn</strong></p>
                <p>Mất đoạn 22q11 (DiGeorge)
                Mất đoạn 15q11 (Angelman/Prader – Willi)
                Mất đoạn 1p36
                Wolf – Hirschhorn
                Cri-du-chat</p>
                <p><strong>Ưu điểm xét nghiệm NIPT</strong></p>
                <ul>
                <li>Tỷ lệ chính xác đến 99,9%</li>
                <li>Xét nghiệm đơn giản bằng cách sử dụng máu mẹ mà không cần chọc ối hoặc sinh thiết gai nhau</li>
                <li>An toàn tuyệt đối, không gây bất cứ nguy cơ Xét nghiệm sàng lọc trước sinh không xâm lấn NIPTnhiễm trùng cho mẹ và bé</li>
                <li>Phát hiện sớm các dị tật từ tuần thai thứ 10</li>
                </ul>
                <p><strong>Đối tượng làm xét nghiệm NIPT</strong></p>
                <p>Xét nghiệm sàng lọc trước sinh NIPT được khuyến nghị cho tất cả phụ nữ mang thai ở giai đoạn đầu của thai kỳ, trong đó đặc biệt chú ý đối với thai phụ thuộc nhóm nguy cơ cao, bao gồm:</p>
                <ul>
                <li>Trên 30 tuổi</li>
                <li>Có tiền sử sinh con dị tật, đã từng sảy thai</li>
                <li>Có kết quả Double test và/hoặc Triple test nguy cơ cao</li>
                <li>Có kết quả siêu âm bất thường</li>
                <li>Mang đa thai</li>
                <li>Có thực hiện kỹ thuật hỗ trợ sinh sản (IVF)</li>
                <li>Gia đình có tiền sử mắc các bệnh di truyền liên quan đến NST</li>
                </ul>
                <p>Thời gian trả kết quả: 3-5 ngày</p>
                <p>Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT tại Trung tâm xét nghiệm ADN Novagen:</p>
                <table>
                <thead>
                <tr>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                </tbody>
                </table>
                `,
                packageType: 'Xét nghiệm', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//3
                name: 'Gói khám sức khỏe tổng quát', // tên gói dịch vụ
                clinicID: 2, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám gồm các xét nghiệm và chụp chiếu cơ bản: Xét nghiệm 9 chỉ số chức năng, nước tiểu, chụp Xquang, siêu âm, điện tim giúp đánh giá chức năng cơ bản của cơ thể.
                Gói bao gồm suất ăn miễn phí sau khi lấy máu xét nghiệm.
                Gói khám được thực hiện tại Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Bác sĩ nhận khám từ 6 tuổi trở lên`,
                thongtinkham: `Giá gói: 6.800.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//4
                name: 'Gói khám sức khỏe Chuyên sâu 2 (Manchester City)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ `,
                thongtinkham: `Giá gói: 4.900.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//5
                name: 'Gói khám sức khỏe cơ bản (Liverpool)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 2.600.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//6
                name: 'Gói khám sức khỏe nâng cao (West Ham)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 1.700.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//7
                name: 'Gói khám sức khỏe tiền hôn nhân (Tottenham Hospur)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSEhgSFBUYGBgZGBgYGRgYGRgYGBgYGBgaGhkYHBgcIS4lHB4sHxgYJjgnKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjcrJSw0MTQ3NTQ3NDQxPTQ0NDQ0NDE0NDQ0MTQ0MT00NDQ2NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAKIBNwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EAEgQAAIBAgQDBAcEBggEBwEAAAECAAMRBBIhMQVBUWFxgZEGEyIyobHBQpLR8AdScoKy4RQVIyRic6LCMzTS4iU1Q2N0s7QW/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDBAEF/8QALhEAAgICAgECBQIGAwAAAAAAAAECEQMhEjFBBCITMlFxsWGBFJHR4fDxM6HB/9oADAMBAAIRAxEAPwAqsesjWSLPRMhIseIxY8RgHiPEYI8QFHCPEYI4QAcI4RojhFAeI4RgjhAYcI4RgjxOAdk+Gq5WDdD8OY8pCI4RWrOolrU8jFRsD7Pap1X4aeBjRJKjXQPzT2W/YY6H91vIEx+Ewxc22A3MmnS2O1b0OwQ1MuOvOTVKYRVVRpOFdJKUuTsolSohD9YiZx0kTXE4MTK/SR1XMrtXIjDiZ0KHZ7GSpVlX1okiP0E7oNl5GvOM8iRSd5OtO4IHIXnNHGRExsUUoSB2NqkFj0XKO9v5STh1IAXjuJULU16n2j47fCQcOr/ZMdbjo4+wrOzgM7JHRSnj6QK3lyDuIV7CwjRuwfRBw2oQcsMCDOG0PtGE52fYR6FFFFEOmFEesYI9ZqJEqx4kax4jAPEeIwR4gKPEfGLHCADlF9BJMh6QxwjBAJnbdtuxf5/hLhwaGZ5ZadItGGtmcE6IWr4S2uko+rBNoyyIPh/RkAjxE9MqdfAzgjXYjVDxHCNElSkxFwJxgTYJCXsBcG4YHYqdCDCHDfYLUTuuqnmyH3SepFrHtEsYHDZEtzOplXjJ9Worjemb9MysQGX5EdomaUuUqRZLirZfrJcd0rKZjqmOqOxYuwzG9gzAC/IC+0hOIffO/wB9vxmqPopVtmZ+rjfRtmkDrMlSxrqwYMxsb2LMQewiakYpWQONiL/iO++knlwSx15K4synfghqL2SP1UifHC84uPk+DKRkWkoDpLCU+yU04iJbGNQIXY6KLn8O/lBxf0O80Tqkmw/veExNbGu7Fs7C5vYMQB2ACdSrVy5g1S3Nsz285o/g5VtmX+LXhGtr0sp7DtGUkzNY7DVu4TKLi3BBzubG+rMR4gmavD1A9JWW5zat2W0y+BvEy4pY0rY2LLGbY2ucxJPP8iBa6Gm94btKHEUGWcg6dDy2TYfFAjeS+vXrMsajA6RHEP2ynwheRpquJAG8GKDUeCg7H3oY4cUH2bkb2UtbyG/ZvDjxWg5X2F6KZRaOjEVSLgAg9AI5TyO4+PQ/ntkGOjsUUU4BhRHrIxJFmomPWSCRrJFjAOWPEYseIAPWWcJQLuFA03PYOcroL6CabD0VoU7H3m37/wABJ5J8UdhG2VsRjmvlWwA0tbl3ynjuPigg9YCOWYAlT0vb3T8JYxGH1JEHYsKQVcXB5GZmjVGn2W8Hx2nUIUMLk2t4XlfivEKdBru4W4uBuxHUKNbdu0wvE+BGkz4pGdkzKqqps5qMQERTzHPsA8Qf4R6M+sPr8Z/aO1jkY5kXpcH3yOp06ATsU5LYTcYv2s7ifSmhVQoiudffF3sQelMP2jcSTAcVS4UMB1FiD91wCZo6dNVFlUADYAAWja1BHFmRWHaBG4ol8Rk2CdGF1AJG99x3g7Szc85nxgWwzCohZqY99PedBzZL+8BzXnytNJSUMoZXurAFSMpBBFwQbbWMJOhVsII9wDMt6SY/O/qlPsr73a3TwHxJ6Q6qsuzEjp7P4THY2gUdlY35hj9oHUN+ed4/pYReS346Jepm+NfUu+jWGR6jJUUn2Qyk3ylcxU95B07NOs0A4HQz5sn7tzlv1t+RMfiQ3qVroTmw7MWQE2ak5BbTrcH4Tc8PxQq00cG4ZQwPUEXB8fxnPUSmpNpsbBCDitIzvpHwtaYWpTGUE5SBtqCQR02PwgXAY8hvUk6Mbr2NzHj9O2HfTPGBUSnfUnMewAEDzJPlMrwnBtWqqBfe5I3AB3HbsB2kTXgXL09zf1IzqOb2mno4ZBod+lu78ZOmGTbx25Hn3ajzhFuHsBvm66L9RrIxS5G/kv4TDzs1qLRV/oaMt1/OgP1ma4viyr+qB0Bu3fyHh9eybIJbUXJ5iw18hvMNxvBNTqNfW/tBv1lbUNf86gzT6SpT3+xD1DajRPhspZc3u3F/2b6/CehIgACgC1rADa3S3See+j+GNd8hNlAux526DtP4zYtSCFaIzZCj+zma5OZALNe40Y6DTWc9bTko30L6VNJujK45VFVwvuhmtba19h2Ql6O43I5pMfZb3exv57d4ErcX4d/R3FjdG2PQjdT5j8iVcJQNRwoNuZb9VRqWvysJoajkxd6rszpyhk63fRuaiAi7TPcSUs2VTeUOJekdS7ZCAt/ZuNbdT2nfxg/CcVqlsxK/dmfH6XIlbNUs8GH6HDhbUR/9XqTtt8/z9JRp8dqgjNlK3FxlAuOYvymlw4VxcagjMp6q2v8AKJk54/mOwlGfymO4lUZKjIqrYdQb7A9e2V+HY6uvuICLk3sdbm5+1rrLnGktXcdo/hEZxbA1GNOpS1SwyFdktlvm068tdjNaceMU0tozpycnvpktPjFRbjKg1JIIbQnfS+mtz4mHqNQtTSpzKgkDtAJtMlicQGfe5AAY9WA1+nlNVgXtRQ/4E/hFpLPCKimlVj4ZS5NNlqKRp0vtppbfnvyG0UyUabMQskWRrJBNJMeskEiWSLGAeI8Rgl7huDNV7bKNWPZ07zFbpWziVl3gWDzN6xh7K7drfylzGPmqa7KLy0rkDIiEAaDa0hq4MOCXudNhpcb7jWZXLlK2aIpRVFB+KU6dQK7AK4ADHYMOvQEc+yN4rgswusC8Yp3NlUWHLKJzgnGH9Z6prW0yg6bbgfO0S90y3DVot1cKGxCUd0w6Akda1Rczse0IVA6Z2hgCUsOn96xDH7Tm3glMfLL5whll46ijNJ2xl40G57vny/PdHuh5SOmNPzvz+N4wosRicqMVYBgpttvboYDw3E6tNcqNZdWAyqbZiSQLjQXJ07ZFjf8AiN+0ZXJ1HlNuPBDjtX+xjyZZN6dHoCOrCwZSSORBPlA/G8CxXMBci5Ft7bsv+4fvdYP9Hv8AmF/Zb5TXVrZT8O/l8bTBNPDkVOzVFrLB2YOhXZGzL0IIOoZTupHMGEMJxn1OYImh9xb+ypJJbwubgC25EixdOgHYBnAzHQKuUa7Aki4lHHhQhNIszDYMAo8wSfhNrWPJTkn/ACZkTnDUX+Clxas1Ri7G5O5+g6Cav0PwgSnnPvNr3DkPj5nsmd4YiuFFTRrj2RYoT0LGxtm7NjympwtT1bAcj+de2J6qXs4R0WwL3cmXeK4t0dEplQWDklgSAFAP4we2LrZw3rVy6XXKLW5/X4S5iyHxFC9iCK2h2PsiEUwyKbqiqeoUA/CYU4xSteP/AFmhxlJun5BvDcXUeo1OoVPsKwZARuZR9IsMHpn9ZbsO0faH+4eMI0TbGP8A5S/ODOO4qxIG99O+Uh/yJrWkzjVwalvbRj8BxZ8OzZApzWvcE7XtsR1MID0krs4fKl1BUaNb2rXPvdggrEpT9ZlXNctqABZRzsb626aQ1Rw1AD3qn3F/6p6Mlje3Hf2ZkuUdJ/8AZWx3G6tZQrhbA3GUG97Ecyes4+JajSy7PVAJ6rT5D9469whPC4fDl1DM5BYXDKAp12JzGwlbitFjVfOPazG/S32bdlrWnIuDaglS7ONuuT+wIooapYfqqzeI2HnC2Awl8K1UDZwP3bWJ+8R5SbDYP1VIOPefLr0LMFXwGb5wxwxlVfVkewRlIPMHe8nlztfL9fwVhhTW/oB8VhDTFNj9tc3jc6eRXzhb0exv/pHcXKdv6y+O47YR4hhxVw7Bt0zEH9kEi/eLXmUw184ye9mFrdb6Saks+NqXaEcXhmmujS43gIrVGqCpbNY2y35Ab3HSUsV6PlFIFdgDuApAPf7UKY3iqUGyltbBiApIBO+tx327YD4j6SU2NgT9z/ukcbztKuvt/Y0SWG3ff3BlPgmUn+0/0f8AdCSO6qqrchQFB7hYnw+sppximTa7fc/7pr8Bh0sLWIKgqeqkb+e/eI+bJOKXM5CMW/aZ8YlxpaKGsbgtRlsNb/A6RSalFjtNGFWSCRLJVlRR4kiyMR6wAkUTXcJwhp0wCLMdW+g8B9YC4DSD11v9kFvEbfEiamvVCiQzSd8UUhHyJ2VBcwPj+LoguxyrcAnoCbXgH0k9InpG2S45EH6H8ZhcbxqpWNjoDyvIOSj9zTHE5bfR6risKHFwJmeJ8Kv7SaMNRbQ3Em9Cq9RKJzXZBoqnWwG9idh2QtimzBaijQk+FjbWPqSBXF0A/RXiJapVpubvf1mu5KotOoPupTYDnlfpNaDMD6UYZqdWjXw/suzKt109omyPrpfUjXQgkG4JhjAekJRvV4lPVON+SEnobnLc8ibdCY0X4ZLJHyjSkyM6Hv8AnGJiVYXB/PfG1K6AXZgB1vb4yiREbisMrI9lUsQbGwve3WZ/DYZqtRkRSxT3rWsCeVzpfslnG8ResPVYewLaNUOyjnlHM79k0Ho/haeGpCmurbuxK3duZJJuefxjrNLGtbEeKMnvQTpYZEsVRFNtwqg+YEH8bx2RPZPtNdV7OTN4A2HaYSL3HsjxuptyvoT0PlMVxDE+sct9kaKOijbx5+Mn6fHzlb8BnnwjS8leKHsJwVVpmrV9qyl8qnSwF9xue7Tvk+I4dky2pq1wxb2UCLYXtfLm12vm7ddpsfq43SMywSq2ZF1yG42vNDhapqJmGrDRh220bxA8wesfxXga5DUpmwy5irHlvoTt3GBuD4r1b63t7rAb5Sdx2g2I7p2co5sdx7R2KlilUglW4qKdWi7mwUVASQdLqANpe/8A6qh+v/pb8IQegl7MBfnqv1N404en2feX/qmJyxySuLNatN0wPh+LLUxDuhuMirexGt+2CuM4vIC5943CdnVvD87zXJhqZ0W1z/iU9+xJvMF6SPncsost8qDayjs6zR6dRnPS0kTyPjHb2yrw2hf2uvyhYSpwoZrINzpp0mip0KSgq1MuRuRmIHtBcpIIBIv0E15cqg6MnByYNpYdm91b+Q+cv1/7eiKn26QAfqycm8OfjK2NphcoFiMtwQbggs1jG4DFeqcPa491h1U7j6+ElK5Lmu10Eai+L89jHx5WkaZXMB7pvYqb3HI3sdZBR46FGqnMOQ28+nbL/FOEMpIUpa/s5ms1jqAQdbwfhOAVGN7p98QXwHHk2Wj8WOiSp6Ss1I0guXNfM17k3NyBpoDtz00lng2JWkjYlx7oIQdTsSP4fOdp+jTFgCUAuLkMCQOZtzj+PqoYUFFkQAW6tb6D5mLeKXsx+dsPcvfPx0Cv6Q1ZmqMbAklm7TrYdw8h4Ai6qEHXW+oI2I6iFadELfS4OhHUfQ9DHYjBqEuDdSd9sp+jbac9OQzDRai68Ek0yngaXObH0bxunqTutynaPtL9fHsmSwrWup3Bt5S/RqlGVgbEG48PpEz4/iQa/kGObhOz0B0Dj4gxSph8cpRamgVhcAkLY/aGpF9frFPGqSPU5JnnayVZEskWbjOSCPWRiSCAB70YT+0duiW82H4QlxSsFBLGVfRdPYdupA8gT/ugz0uUFTvfsJHymab97ZfGrSRh/STELUc2JMq8F4Sarjkt9+Z7pFVwovfXxJPzmi4AbMJFK3s2N8Y6NfTprTpFFAAC2HgJU4biQ6NR52zDv6eWvhI8VjQpK9QPjeZenjSjllPMkeekeUqaJRi2maLFYUVLU23tdT0ZSLGVfSPHIMK5YLn93MQLpb2ncdLKrfCVx6SJmR3VswvfLaxva51ItttMt6X4tq1OriEYomdEKHd/WKbjpsjE98OS8HXGlbL/AAGwyPVLqGCl1Q2tmQtoBYXBsNYQx6Af2iKWS9iH9psvI2934TOcAx9SsDny2UgggWNydRvbl05zXpVGS06230LGKStoK8JxKOo0G3d9Zo6FIXUjroQTfU6637/OYbApdxkO52/lN5wnCMihnN26dP5zrk+OyMork6LqUVX3Rbzt5bTK+kOB9U+dR7LXPc3MeO/n0mvlbH4UVUZDz2PRhsYYcrhO/HkTNiUo0v2MfguJPSGVSGX9VtV13t0lkcXAXKFbKd1zLY9hbLmI8bnmYMqqUYq2jKSCO0Ruaeo8OOfuo85ZJx1Zcx3EXraMbLyVdF/n4wUcSaNek6rmu2t9rKLkn4eNpbpIWYKNWYgAdplji9jlorqtMEZv1mPvHuuLeENKoRXf4BNv3S/xld3LEsxuSSSepOt420kw+KX1RpsozE3DEC6kEc97EaW5b89OrhmIvlbLzaxyjtzbRlKtPQrX02MpuVYMpsVIIPQiQ8YxFOrXsmhyK7C2gZyykA9638Zbx+Nz2JUKFFhYWJA2vG8IpqzlH0D+yW5htcmvQFtu0RXaSyNbX4GVXxT/ANlWpSXDOCrhrgadbMpB02Bsd+nOHsNivYbJlZWzNfMqZS3slWXY2Uk+0DrM7xLDFSwOhBII7RBq4krpedliWSKd2OpNPSNJjKikqqkEKLXAABJJJIA5ayzwTDB2zkXVLG3V/sr9T4TLJimYhV1JNgO0zWYNiiBBsOfVj7zfSJm9kOK8ncUOU+TCNUl2y3vrr2nmYWpEU1W4JubCwJ1sT8gYPwtD+zdueVjfYjQxVautwzLY29ps5U2qrexYi5sJ5r3o23xC1GqHzCx0NiCLbgG3kR5zP+keC09aN1srdqn3W7xsYY4ZVzBmuDdhcghhf1aA6jQ632ljEUww1F9CCOqn3h+egiwm8c7R2cVkhTPPpwsQDlJF+hI+Us4/C+pqFb3G6nqp2P56GV7z2oyUla6PKacXTKDg3L2NxbMeRBNgx6G/nv1uU4VhzXdUG27Hoo3P07yJE2JyUnQKpz8zuNLePZEGfC0Muz1Rr1VOnZv8T0iSlKuK7el/Uqop03+5d4rjBUey+4oyoBtYcx328gJ2Z31jxSkMUYxoRuTdk6yRZEpkizAbyUSRZEphLguF9bWVTsPabuH87CcbpWcqzTcHw5p0ADoTdj2ZtvhaZb0mqEkibXENYGYbjHtMZlTu2aYKmZv1F5dwK5DJqVGTU6OsKK2DePYkqVI6EeWo+ZmcGJuT2TQ8fw5OQDmW+Q/GZ1MKczi22v4iTl8xaLSiNTMxtI/Sl8mHw9EfbepWYeVNP4H+9D+Awg0J3/NjMr6Usz4wU7aqlJFHayK1u/M5840Y0rJZZXSDPo9gGFBWAOt3I7CcoI+585oMPhnYgAbw/guGinRSmBc00Cj/ABKAA3jcXhvhPCAvtttuF/PKdapiqdRo5wLga0kDt7515G3nDiLbS/y+gjhEIjdk6V2diiinDo1lHSRlR0k1pxlnUxWhgI6TFcUwfqahT7J1U/4Ty7xt4TZssGcZwnrU0HtLqvb1Xx+YE0enycJ/oyGeHKH6ox9WnfUaHrG0cXXRXTOyaDJlsyOp94Mj3A0vqtr9JMp1Btfs69kdxOsruGVQosBlG2i26DpPTlHk1FrRghJxtpkNDDOys7ZQq2FywuSSNFXft8OcIcJwXrqgT7I9pj/hHK/U7SmJsOGYX+j0fa95vaPZ0Hh8yZL1GVwjV7fRXDBTn1pdneJ1+QlGlw4vrJaSGpUvyhyklhPOcuKpG9RtgP8AqoyJuGsunTUd38vwmkkdZLjTcaj8PGKsshnBAbD17I6n9Vv4TBlKozetuxNnUC5JsLVdBfYQjjaVjcbMD5H6yLAcJJpuPWe07BgQugy5uV+eYy8HGMW35r8mfJGTar9S16K/8E/tn5CF3a2250Hf+bnwlXhOB9RTyXzG5JNrC5tsO4CWaYuc3gvdzPj8gJmySUptrqy+OLjBJ9nfUrYAgGwtqAZ0UU/VXyEfHRbY9Ii9Sv6q+Qmf9KOHBgKyjVfZb9m+h8Cfj2TSRlRAwKkXBBBHUHcR8eRwkpITJBSi0YLCAIrVQoZlKgXFwua9zr3W/eik2KpvhazKp7r2sVO176HbzEU9Ti5+5Vv9f7HmcnD27AayRZGsesgbSVZr/RXDZabVDuxsO5f538pj0no2Aoerpon6qgePP4yGeVKh8at2Q4w+yZjMehJM2WL90zIcQ0JERdFY9lKgssousqJUlj1mggijI+JUr1KYtyJHfpp8BBX9HX+lOp0DqR3N+beUPYlwcj9DYwZiUUuW7jm/VZdAe4iwitbOp6O0aIZLWs2qEf4th8bWmHw1sRxctuGxJYfsoxYD7qTepVCksdCLP35PaIPgt79nfMZ+jPDCrxFM3IVHP3GHzYRvoSl2ezcMw2YB2Hd3wrOKLCwjhJylbBHBFO2inDop2cnLwAdFOTsAOWkbrJY14I4wU3BKLsWIYEkk2awud9IF9KOGpQppUS//ABKYa5v7LOqt8GmqptrA/ptSzYKoRuqFx3pZ/wDbLRyzUkrZJ4oNXSJeGcHpZKdSxLWVtTpmHZ3yXilU7Sbgb5qC97eROYfAiO4jh8wvF5Nz9zsZRSj7VRzhtMBbwhA/Dq9jlMMAxJp2PHoUUUUQYo4+gCpNyOdtPqIP4azZrZj5L+EtcSxH2RO8Mw9vaMsnUdk2rlov+rJ0LN/pHyEltOiKRKCE6YhONABXinJ2AFPGcOp1rZ1va9iCRvvt3RS3FHjklFUmxHCLd0jyhZIsjWPWbiAS4NRz10Xlmue5dT8p6DMn6I4e7tUI90ZR3nU/AfGawTJmdyotjWgdiSCg7hMzxNLAtcd1oSxGMNNnpNsGOU9hN7TN8RxJNwDpC6Q8U7BD4ohoUwlXNygdaJY6mGcDhANyTfw+U4mykqLDvZbaSCjhszXGnZuNenSSvSAa2Xbvl3C0gutp3tivoGcZoilhajdEcL2BqbAjzmb/AEP0741m6UH+LUx9ZovTSrlwVTtsPMwP+htP7zVP/sn4un4TstEz2BZ2cEcJJgdiiigMKKIR04Ay0UdaK0AOThE7aKAFeottRIOIoKlB0/WUr94Ff90vMIMrPkLA7b+Rv9JSOxJaKnoTWL4SmTuadMnvyBD8UM0DrcWmX9CfZRk/VqVk8Ervb4OJqYs/mGj0AcXTKPmEIYbGqRqZNi8OHEF/1cRsY6cZLYtNPQU/pa9ZHWxigbyh/VzdZ3+rm5mHGP1O3Ijoqaj35Q5SSwtK+DwoQS5EnK+jsVQoooogx2NaOjTABRCKcvAB0U5FADyVTLmCw7VHVF3Y2/E+UpLNV6HYa5aqeQCL3nUnyA85vnLjGzMlbo0mEwy0kWmmw3PMnmTLoEaq2jphbs0JUZn0hw9qmbkwv4jQ/SZjEUZ6FjsMKqFD4HoesxmJoFHKMLEfm47I6doZMHYfDdsLUF03kFJLR9TEBJ1aB7H1XVSSY7BXqH2Re5sB3c4PwlGpinsgso95z7q/ieya7A4RaKBF8WO7fh3TqfkWbSVGT/SJhgnDW5kutz+61gOyBP0ND+8Vv8n/AHrNJ+lBf/Dj/mJ/C8zH6Gm/vVUdaJ+Dp+MJPQiPXyJ0Ts5aTHEJ2cE7ABCOjY6cAUUUUAFOXnY20AFBfGUOW46H5QmZQ4m/s2748PmFl0B/Rd/7fEL0xFX/AFpSf8ZqpkPRpv7ziP8APT44VD9JriYZPmCPR2NMcsUmMcAjoooHToinJ2ACiiigB0xrTs40AGARwnBO3nTh2KKKcOnkizb+h3/Ab9s/wrFFNeX5TPH5jRxNFFMhoIzM76SD20/ZP0iijo4uwO20G433h3j5xRTrHRtkQKqhQAABYDQDToJMu8UUs+jMZn9J/wD5c37a/wALTI/oc/5x/wDIf/7KcUUm+h4nswiMUUmOciiigB0R0UU4AooooAKKKKADTBnEt/AxRR8fYsugF6N/81iP/kL/APkSbBdp2KdydhHoSzsUUkMhTpiigdFOiKKcAUUUU6B2caKKADZxZ2KdOHYoopw6f//Z",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 9.500.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//8
                name: 'Gói khám sức khỏe tổng quát cho Nhi nâng cao (Burnley)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 3.800.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//9
                name: 'Gói tầm soát ung thư cổ tử cung (Arsenal)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 5.000.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//10
                name: 'Niềng răng tại bệnh viện Conan Detective', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 4.900.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Khác', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//11
                name: 'CHỤP CỘNG HƯỞNG TỪ 1.5 Tesla Tim + Dot (VFC)', // tên gói dịch vụ
                clinicID: 6, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám Tầm soát bệnh lý Tim mạch bao gồm: khám lâm sàng, công thức máu, tầm soát chức năng gan (AST, ALT, GGT),thận (urea, creatinine),tầm soát bệnh gout (acid uric),đường huyết lúc đói, đánh giá điện giải trong máu, Xét nghiệm protein phản ứng C(CRP),xét nghiệm mỡ máu, xét nghiệm nước tiểu, siêu âm doppler động mạch cảnh sống, siêu âm tim, Chụp X-quang tim phổi thẳng, điện tim thường.
                Gói khám tại Phòng khám Đa khoa Olympus Gia Mỹ`,
                thongtinkham: `Giá gói: 7.400.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Khác', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//12
                name: 'Khám Tai mũi họng tại bệnh viện Anh Hùng Xạ Điêu', // tên gói dịch vụ
                clinicID: 7, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Các dịch vụ xét nghiệm ADN: Xét nghiệm Cha (Mẹ) Con tự nguyện, Xét nghiệm Cha (Mẹ) Con hành chính, Thủ tục di dân; bảo lãnh; làm quốc tịch, Trưng cầu giám định của Tòa án, Xét nghiệm họ hàng dòng nam (Nhiễm sắc thể Y),Xét nghiệm họ hàng dòng nữ (Nhiễm sắc thể X); Xét nghiệm huyết thống theo dòng mẹ (ADN ti thể),Xét nghiệm mẫu hài cốt liệt sĩ, Xét nghiệm Cha Con trước sinh không xâm lấn, Xét nghiệm Cha Con thai nhi chọc ối - xâm lấn`,
                thongtinkham: `Giá gói: 8.100.000đ`,
                descriptionMarkdown: `
                ##### **Xét nghiệm ADN tại Trung tâm Novagen**
                
                **Novagen là trung tâm xét nghiệm ADN uy tín hàng đầu tại Việt Nam**. Dịch vụ xét nghiệm ADN tập trung vào các dịch vụ giám định gen, xét nghiệm ADN huyết thống, xét nghiệm ADN trước sinh, xét nghiệm di truyền và sàng lọc trước sinh không xâm lấn NIPT
                
                **Đội ngũ chuyên gia của trung tâm có nhiều kinh nghiệm về Công nghệ ADN, Di truyền, Sinh học Phân tử** và là thành viên của Hiệp hội Khoa học Hình sự Châu Á (AFFSN); Hiệp hội Tin Sinh Học Châu Á Thái Bình Dương (APBIONET); Hiệp hội Di truyền Người Châu Á Thái Bình Dương (APSHG)
                
                **Phòng Lab phân tích ADN của Trung tâm xét nghiệm ADN Novagen được đầu tư hiện đại, trang bị các thiết bị giám định ADN tiên tiến nhất trong giải trình tự gen và đều được nhập khẩu từ Mỹ, Châu Âu.**
                
                * Kết quả được xử lý bằng phần mềm phân tích xét nghiệm ADN tự động, phiên bản mới nhất trên thế giới hiện nay (GeneMapper ID-X) và được phê duyệt bởi Hội đồng khoa học gồm các chuyên gia cao cấp về ADNq.
                * Hệ thống kiểm soát Verify365 toàn bộ quy trình tách chiết và phân tích ADN theo nhiều bước đã giúp giảm thiểu khả năng sai sót do con người gây ra. Quy trình xét nghiệm được tiến hành lặp lại kết quả, mỗi xét nghiệm tại trung tâm được lặp lại 2 lần để đảm bảo tính chính xác
                * Novagen là đơn vị tiên phong áp dụng công nghệ xét nghiệm 24-36-45 loci trong giám định ADN; xét nghiệm ADN huyết thống và nhận dạng cá thể
                
                Các dịch vụ xét nghiệm ADN: 
                | Head | Head | Head | Head | Head | Head |
                | --- | --- | --- | --- | --- | --- |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |`,
                descriptionHTML: `<h5><strong>Xét nghiệm ADN tại Trung tâm Novagen</strong></h5>
                <p><strong>Novagen là trung tâm xét nghiệm ADN uy tín hàng đầu tại Việt Nam</strong>. Dịch vụ xét nghiệm ADN tập trung vào các dịch vụ giám định gen, xét nghiệm ADN huyết thống, xét nghiệm ADN trước sinh, xét nghiệm di truyền và sàng lọc trước sinh không xâm lấn NIPT</p>
                <p><strong>Đội ngũ chuyên gia của trung tâm có nhiều kinh nghiệm về Công nghệ ADN, Di truyền, Sinh học Phân tử</strong> và là thành viên của Hiệp hội Khoa học Hình sự Châu Á (AFFSN); Hiệp hội Tin Sinh Học Châu Á Thái Bình Dương (APBIONET); Hiệp hội Di truyền Người Châu Á Thái Bình Dương (APSHG)</p>
                <p><strong>Phòng Lab phân tích ADN của Trung tâm xét nghiệm ADN Novagen được đầu tư hiện đại, trang bị các thiết bị giám định ADN tiên tiến nhất trong giải trình tự gen và đều được nhập khẩu từ Mỹ, Châu Âu.</strong></p>
                <ul>
                <li>Kết quả được xử lý bằng phần mềm phân tích xét nghiệm ADN tự động, phiên bản mới nhất trên thế giới hiện nay (GeneMapper ID-X) và được phê duyệt bởi Hội đồng khoa học gồm các chuyên gia cao cấp về ADNq.</li>
                <li>Hệ thống kiểm soát Verify365 toàn bộ quy trình tách chiết và phân tích ADN theo nhiều bước đã giúp giảm thiểu khả năng sai sót do con người gây ra. Quy trình xét nghiệm được tiến hành lặp lại kết quả, mỗi xét nghiệm tại trung tâm được lặp lại 2 lần để đảm bảo tính chính xác</li>
                <li>Novagen là đơn vị tiên phong áp dụng công nghệ xét nghiệm 24-36-45 loci trong giám định ADN; xét nghiệm ADN huyết thống và nhận dạng cá thể</li>
                </ul>
                <p>Các dịch vụ xét nghiệm ADN:</p>
                <table>
                <thead>
                <tr>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                </tbody>
                </table>
                
`,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//13
                name: 'Khám Phụ khoa tại bệnh viện Anh Hùng Xạ Điêu', // tên gói dịch vụ
                clinicID: 7, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Tỷ lệ chính xác đến 99,9%
                Xét nghiệm đơn giản, an toàn tuyệt đối, không gây bất cứ nguy cơ nhiễm trùng cho mẹ và bé
                Phát hiện sớm các dị tật từ tuần thai thứ 9`,
                thongtinkham: `Giá gói: 4.000.000đ`,
                descriptionMarkdown: `**Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT (NVGHN)**

                Xét nghiệm tiền sản không xâm lấn (Non-Invasive Prenatal Genetic Testing, NIPT) là xét nghiệm sàng lọc trước sinh thông qua phân tích ADN của thai nhi từ mẫu máu của mẹ đang mang thai từ tuần thứ 10 nhằm phát hiện các bất thường nhiễm sắc thể gây ra dị tật thai nhi ở giai đoạn sớm
                
                Dòng máy được Trung tâm xét nghiệm ADN Novagen sử dụng cho xét nghiệm NIPT: MGISEQ200
                
                Hệ thống MGISEQ200 đảm bảo tiến hành các xét nghiệm NIPT với:
                
                Độ chính xác rất cao
                Thích ứng trong môi trường Việt Nam, đảm bảo không có sự sai lệch
                Cho kết quả nhanh (Giải trình tự trong 48h)
                Là dòng máy chính thống được sử dụng trong lĩnh vực nghiên cứu khoa học (Giải trình tự ADN, toàn bộ hệ GEN,...),Lâm sàng (Xét nghiệm NIPT),... được sử dụng tại các phòng LAB và trung tâm nghiên cứu trên toàn thế giới
                Hệ thống MGISEQ200 được tích hợp DNBSEQTM - thuật toán công nghệ giải trình tự Nanoarray độc quyền từ MGI, cho phép phân tích "chiều dài đoạn đọc" khác nhau và tối ưu hóa khung đọc, rút ngắn thời gian giải trình tự gen với dữ liệu chất lượng cao ở định dạng FastQ theo tiêu chuẩn quốc tế
                
                Đội ngũ nhà khoa học tại NOVAGEN được đào tạo bài bản tại các nước có nền khoa học phát triển, đứng đầu là Tiến sĩ Đặng Trần Hoàng, tốt nghiệp đại học Công nghệ KOCHI (Nhật Bản),ông đã có hơn 20 năm kinh nghiệm trong lĩnh vực Xét nghiệm ADN, Phân tích Di truyền, Giải trình tự GEN,...
                
                
                
                #### **Các bất thường rối loạn nhiễm sắc thể (NST) được chẩn đoán bằng xét nghiệm tiền sản không xâm lấn NIPT bao gồm:**
                
                
                
                **Các bất thường số lượng nhiễm sắc thể**
                
                * Hội chứng Down (Trisomy 21): Gây thiểu năng trí tuệ, các vấn đề tim mạch, hệ tiêu hóa và các cơ quan khác.
                * Hội chứng Edwards (Trisomy 18): Gây chết thai hoặc tử vong sau sinh, tỷ lệ sống hơn một năm tuổi là 5% – 10%.
                * Hội chứng Patau (Trisomy 13): Gây sẩy thai, thai lưu hoặc tử vong sớm sau sanh và kèm theo các dị tật bẩm sinh: thần kinh (não nhỏ, não thất duy nhất…),dị tật tim, sứt môi chẻ vòm, đa ngón…
                
                **Các bất thường số lượng nhiễm sắc thể giới tính**
                
                * Hội chứng Turner (Monosomy X)
                * Hội chứng Klinefelter (XXY)
                * Hội chứng Jacobs (XYY)
                * Hội chứng Triple X (XXX)
                
                **Sàng lọc để phát hiện thêm 5 hội chứng vi mất đoạn**
                
                Mất đoạn 22q11 (DiGeorge)
                Mất đoạn 15q11 (Angelman/Prader – Willi)
                Mất đoạn 1p36
                Wolf – Hirschhorn
                Cri-du-chat
                
                **Ưu điểm xét nghiệm NIPT**
                
                * Tỷ lệ chính xác đến 99,9%
                * Xét nghiệm đơn giản bằng cách sử dụng máu mẹ mà không cần chọc ối hoặc sinh thiết gai nhau
                * An toàn tuyệt đối, không gây bất cứ nguy cơ Xét nghiệm sàng lọc trước sinh không xâm lấn NIPTnhiễm trùng cho mẹ và bé
                * Phát hiện sớm các dị tật từ tuần thai thứ 10
                
                **Đối tượng làm xét nghiệm NIPT**
                
                Xét nghiệm sàng lọc trước sinh NIPT được khuyến nghị cho tất cả phụ nữ mang thai ở giai đoạn đầu của thai kỳ, trong đó đặc biệt chú ý đối với thai phụ thuộc nhóm nguy cơ cao, bao gồm:
                
                * Trên 30 tuổi
                * Có tiền sử sinh con dị tật, đã từng sảy thai
                * Có kết quả Double test và/hoặc Triple test nguy cơ cao
                * Có kết quả siêu âm bất thường
                * Mang đa thai
                * Có thực hiện kỹ thuật hỗ trợ sinh sản (IVF)
                * Gia đình có tiền sử mắc các bệnh di truyền liên quan đến NST
                
                Thời gian trả kết quả: 3-5 ngày
                
                Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT tại Trung tâm xét nghiệm ADN Novagen: 
                | Head | Head | Head | Head | Head | Head |
                | --- | --- | --- | --- | --- | --- |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |`,
                descriptionHTML: `<p><strong>Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT (NVGHN)</strong></p>
                <p>Xét nghiệm tiền sản không xâm lấn (Non-Invasive Prenatal Genetic Testing, NIPT) là xét nghiệm sàng lọc trước sinh thông qua phân tích ADN của thai nhi từ mẫu máu của mẹ đang mang thai từ tuần thứ 10 nhằm phát hiện các bất thường nhiễm sắc thể gây ra dị tật thai nhi ở giai đoạn sớm</p>
                <p>Dòng máy được Trung tâm xét nghiệm ADN Novagen sử dụng cho xét nghiệm NIPT: MGISEQ200</p>
                <p>Hệ thống MGISEQ200 đảm bảo tiến hành các xét nghiệm NIPT với:</p>
                <p>Độ chính xác rất cao
                Thích ứng trong môi trường Việt Nam, đảm bảo không có sự sai lệch
                Cho kết quả nhanh (Giải trình tự trong 48h)
                Là dòng máy chính thống được sử dụng trong lĩnh vực nghiên cứu khoa học (Giải trình tự ADN, toàn bộ hệ GEN,...),Lâm sàng (Xét nghiệm NIPT),... được sử dụng tại các phòng LAB và trung tâm nghiên cứu trên toàn thế giới
                Hệ thống MGISEQ200 được tích hợp DNBSEQTM - thuật toán công nghệ giải trình tự Nanoarray độc quyền từ MGI, cho phép phân tích &quot;chiều dài đoạn đọc&quot; khác nhau và tối ưu hóa khung đọc, rút ngắn thời gian giải trình tự gen với dữ liệu chất lượng cao ở định dạng FastQ theo tiêu chuẩn quốc tế</p>
                <p>Đội ngũ nhà khoa học tại NOVAGEN được đào tạo bài bản tại các nước có nền khoa học phát triển, đứng đầu là Tiến sĩ Đặng Trần Hoàng, tốt nghiệp đại học Công nghệ KOCHI (Nhật Bản),ông đã có hơn 20 năm kinh nghiệm trong lĩnh vực Xét nghiệm ADN, Phân tích Di truyền, Giải trình tự GEN,...</p>
                <h4><strong>Các bất thường rối loạn nhiễm sắc thể (NST) được chẩn đoán bằng xét nghiệm tiền sản không xâm lấn NIPT bao gồm:</strong></h4>
                <p><strong>Các bất thường số lượng nhiễm sắc thể</strong></p>
                <ul>
                <li>Hội chứng Down (Trisomy 21): Gây thiểu năng trí tuệ, các vấn đề tim mạch, hệ tiêu hóa và các cơ quan khác.</li>
                <li>Hội chứng Edwards (Trisomy 18): Gây chết thai hoặc tử vong sau sinh, tỷ lệ sống hơn một năm tuổi là 5% – 10%.</li>
                <li>Hội chứng Patau (Trisomy 13): Gây sẩy thai, thai lưu hoặc tử vong sớm sau sanh và kèm theo các dị tật bẩm sinh: thần kinh (não nhỏ, não thất duy nhất…),dị tật tim, sứt môi chẻ vòm, đa ngón…</li>
                </ul>
                <p><strong>Các bất thường số lượng nhiễm sắc thể giới tính</strong></p>
                <ul>
                <li>Hội chứng Turner (Monosomy X)</li>
                <li>Hội chứng Klinefelter (XXY)</li>
                <li>Hội chứng Jacobs (XYY)</li>
                <li>Hội chứng Triple X (XXX)</li>
                </ul>
                <p><strong>Sàng lọc để phát hiện thêm 5 hội chứng vi mất đoạn</strong></p>
                <p>Mất đoạn 22q11 (DiGeorge)
                Mất đoạn 15q11 (Angelman/Prader – Willi)
                Mất đoạn 1p36
                Wolf – Hirschhorn
                Cri-du-chat</p>
                <p><strong>Ưu điểm xét nghiệm NIPT</strong></p>
                <ul>
                <li>Tỷ lệ chính xác đến 99,9%</li>
                <li>Xét nghiệm đơn giản bằng cách sử dụng máu mẹ mà không cần chọc ối hoặc sinh thiết gai nhau</li>
                <li>An toàn tuyệt đối, không gây bất cứ nguy cơ Xét nghiệm sàng lọc trước sinh không xâm lấn NIPTnhiễm trùng cho mẹ và bé</li>
                <li>Phát hiện sớm các dị tật từ tuần thai thứ 10</li>
                </ul>
                <p><strong>Đối tượng làm xét nghiệm NIPT</strong></p>
                <p>Xét nghiệm sàng lọc trước sinh NIPT được khuyến nghị cho tất cả phụ nữ mang thai ở giai đoạn đầu của thai kỳ, trong đó đặc biệt chú ý đối với thai phụ thuộc nhóm nguy cơ cao, bao gồm:</p>
                <ul>
                <li>Trên 30 tuổi</li>
                <li>Có tiền sử sinh con dị tật, đã từng sảy thai</li>
                <li>Có kết quả Double test và/hoặc Triple test nguy cơ cao</li>
                <li>Có kết quả siêu âm bất thường</li>
                <li>Mang đa thai</li>
                <li>Có thực hiện kỹ thuật hỗ trợ sinh sản (IVF)</li>
                <li>Gia đình có tiền sử mắc các bệnh di truyền liên quan đến NST</li>
                </ul>
                <p>Thời gian trả kết quả: 3-5 ngày</p>
                <p>Xét nghiệm sàng lọc trước sinh không xâm lấn NIPT tại Trung tâm xét nghiệm ADN Novagen:</p>
                <table>
                <thead>
                <tr>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                </tbody>
                </table>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            { //14
                name: 'Khám Tiêu hóa tại bệnh viện Anh Hùng Xạ Điêu', // tên gói dịch vụ
                clinicID: 7, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Tỷ lệ chính xác đến 99,9%
                Xét nghiệm đơn giản, an toàn tuyệt đối, không gây bất cứ nguy cơ nhiễm trùng cho mẹ và bé
                Phát hiện sớm các dị tật từ tuần thai thứ 9`,
                thongtinkham: `Giá gói: 2.600.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//15
                name: 'Gói khám sức khỏe hậu Covid-19 (VH52)', // tên gói dịch vụ
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Các dịch vụ xét nghiệm ADN: Xét nghiệm Cha (Mẹ) Con tự nguyện, Xét nghiệm Cha (Mẹ) Con hành chính, Thủ tục di dân; bảo lãnh; làm quốc tịch, Trưng cầu giám định của Tòa án, Xét nghiệm họ hàng dòng nam (Nhiễm sắc thể Y),Xét nghiệm họ hàng dòng nữ (Nhiễm sắc thể X); Xét nghiệm huyết thống theo dòng mẹ (ADN ti thể),Xét nghiệm mẫu hài cốt liệt sĩ, Xét nghiệm Cha Con trước sinh không xâm lấn, Xét nghiệm Cha Con thai nhi chọc ối - xâm lấn`,
                thongtinkham: `Giá gói: 4.300.000đ`,
                descriptionMarkdown: `
                ##### **Xét nghiệm ADN tại Trung tâm Novagen**
                
                **Novagen là trung tâm xét nghiệm ADN uy tín hàng đầu tại Việt Nam**. Dịch vụ xét nghiệm ADN tập trung vào các dịch vụ giám định gen, xét nghiệm ADN huyết thống, xét nghiệm ADN trước sinh, xét nghiệm di truyền và sàng lọc trước sinh không xâm lấn NIPT
                
                **Đội ngũ chuyên gia của trung tâm có nhiều kinh nghiệm về Công nghệ ADN, Di truyền, Sinh học Phân tử** và là thành viên của Hiệp hội Khoa học Hình sự Châu Á (AFFSN); Hiệp hội Tin Sinh Học Châu Á Thái Bình Dương (APBIONET); Hiệp hội Di truyền Người Châu Á Thái Bình Dương (APSHG)
                
                **Phòng Lab phân tích ADN của Trung tâm xét nghiệm ADN Novagen được đầu tư hiện đại, trang bị các thiết bị giám định ADN tiên tiến nhất trong giải trình tự gen và đều được nhập khẩu từ Mỹ, Châu Âu.**
                
                * Kết quả được xử lý bằng phần mềm phân tích xét nghiệm ADN tự động, phiên bản mới nhất trên thế giới hiện nay (GeneMapper ID-X) và được phê duyệt bởi Hội đồng khoa học gồm các chuyên gia cao cấp về ADNq.
                * Hệ thống kiểm soát Verify365 toàn bộ quy trình tách chiết và phân tích ADN theo nhiều bước đã giúp giảm thiểu khả năng sai sót do con người gây ra. Quy trình xét nghiệm được tiến hành lặp lại kết quả, mỗi xét nghiệm tại trung tâm được lặp lại 2 lần để đảm bảo tính chính xác
                * Novagen là đơn vị tiên phong áp dụng công nghệ xét nghiệm 24-36-45 loci trong giám định ADN; xét nghiệm ADN huyết thống và nhận dạng cá thể
                
                Các dịch vụ xét nghiệm ADN: 
                | Head | Head | Head | Head | Head | Head |
                | --- | --- | --- | --- | --- | --- |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |
                | Data | Data | Data | Data | Data | Data |`,
                descriptionHTML: `<h5><strong>Xét nghiệm ADN tại Trung tâm Novagen</strong></h5>
                <p><strong>Novagen là trung tâm xét nghiệm ADN uy tín hàng đầu tại Việt Nam</strong>. Dịch vụ xét nghiệm ADN tập trung vào các dịch vụ giám định gen, xét nghiệm ADN huyết thống, xét nghiệm ADN trước sinh, xét nghiệm di truyền và sàng lọc trước sinh không xâm lấn NIPT</p>
                <p><strong>Đội ngũ chuyên gia của trung tâm có nhiều kinh nghiệm về Công nghệ ADN, Di truyền, Sinh học Phân tử</strong> và là thành viên của Hiệp hội Khoa học Hình sự Châu Á (AFFSN); Hiệp hội Tin Sinh Học Châu Á Thái Bình Dương (APBIONET); Hiệp hội Di truyền Người Châu Á Thái Bình Dương (APSHG)</p>
                <p><strong>Phòng Lab phân tích ADN của Trung tâm xét nghiệm ADN Novagen được đầu tư hiện đại, trang bị các thiết bị giám định ADN tiên tiến nhất trong giải trình tự gen và đều được nhập khẩu từ Mỹ, Châu Âu.</strong></p>
                <ul>
                <li>Kết quả được xử lý bằng phần mềm phân tích xét nghiệm ADN tự động, phiên bản mới nhất trên thế giới hiện nay (GeneMapper ID-X) và được phê duyệt bởi Hội đồng khoa học gồm các chuyên gia cao cấp về ADNq.</li>
                <li>Hệ thống kiểm soát Verify365 toàn bộ quy trình tách chiết và phân tích ADN theo nhiều bước đã giúp giảm thiểu khả năng sai sót do con người gây ra. Quy trình xét nghiệm được tiến hành lặp lại kết quả, mỗi xét nghiệm tại trung tâm được lặp lại 2 lần để đảm bảo tính chính xác</li>
                <li>Novagen là đơn vị tiên phong áp dụng công nghệ xét nghiệm 24-36-45 loci trong giám định ADN; xét nghiệm ADN huyết thống và nhận dạng cá thể</li>
                </ul>
                <p>Các dịch vụ xét nghiệm ADN:</p>
                <table>
                <thead>
                <tr>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                <th>Head</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
                </tr>
                </tbody>
                </table>
                
`,
                packageType: 'Gói khám', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//16
                name: 'CHỤP CẮT LỚP VI TÍNH 128 LÁT CẮT/ VÒNG QUAY (MDP)', // tên gói dịch vụ
                clinicID: 8, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Gói khám bao gồm: Khám nam khoa/phụ khoa; Đánh giá chức năng gan, thận, tuyến giáp; Đánh giá chất lượng tinh trùng (nam), phát hiện bệnh lý phụ khoa (nữ); Đánh giá hoocmon kích thích sản xuất trứng cho nữ, nội tiết sinh dục nam; Siêu âm tuyến giáp, tuyến vú, siêu âm tử cung, phần phụ (nữ) vv...
Được trực tiếp đội ngũ các bác sĩ giỏi, nhiều năm kinh nghiệm trong lĩnh vực nam khoa, sản phụ khoa trực tiếp thăm khám. `,
                thongtinkham: `Giá gói: 2.800.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Khác', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
                status: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {//17
                name: 'CHỤP NHŨ ẢNH KỸ THUẬT SỐ (MDP)', // tên gói dịch vụ
                clinicID: 9, // của cơ sở y tế nào?
                image: "data:image/jpeg;base64,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",
                intro: `Các dịch vụ xét nghiệm ADN: Xét nghiệm Cha (Mẹ) Con tự nguyện, Xét nghiệm Cha (Mẹ) Con hành chính, Thủ tục di dân; bảo lãnh; làm quốc tịch, Trưng cầu giám định của Tòa án, Xét nghiệm họ hàng dòng nam (Nhiễm sắc thể Y),Xét nghiệm họ hàng dòng nữ (Nhiễm sắc thể X); Xét nghiệm huyết thống theo dòng mẹ (ADN ti thể),Xét nghiệm mẫu hài cốt liệt sĩ, Xét nghiệm Cha Con trước sinh không xâm lấn, Xét nghiệm Cha Con thai nhi chọc ối - xâm lấn`,
                thongtinkham: `Giá gói: 3.500.000đ`,
                descriptionMarkdown: `**Gói khám sức khỏe cơ bản**

                **Danh mục gói khám bao gồm:**
                
                1. Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng
                2. Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu
                3. Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút
                4. Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang
                5. Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng
                
                Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại 
                **Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108**
                
                Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ. 
                
                Trung tâm thực hiện các dịch vụ:
                
                * Khám theo yêu cầu với Bác sĩ Chuyên khoa.
                * Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân. 
                *
                
                **Ưu điểm:**
                
                * Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.
                * Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều. 
                * Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.
                * Khu vực khám riêng tư, lịch sự. 
                * Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.
                * Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.
                
                **Lưu ý:**
                
                Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.
                
                Danh mục Gói khám
                
                KHÁM LÂM SÀNG
                
                1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt
                
                2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp
                
                3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC
                
                4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA
                
                5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan
                
                6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận
                
                7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút
                
                8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu
                
                9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU
                
                10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH & THĂM DÒ CHỨC NĂNG
                
                11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim
                
                12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi
                
                13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)`,
                descriptionHTML: `<p><strong>Gói khám sức khỏe cơ bản</strong></p>
                <p><strong>Danh mục gói khám bao gồm:</strong></p>
                <ol>
                <li>Khám bác sĩ chuyên khoa nội, kiểm tra huyết áp, cân nặng</li>
                <li>Xét nghiệm huyết học: Kiểm tra số lượng hồng cầu, bạch cầu, công thức bạch cầu, tiểu cầu</li>
                <li>Xét ngiệm máu sinh hóa: Kiểm tra chỉ số đường, mỡ, chức năng thận, men gan, phát hiện bệnh gút</li>
                <li>Xét nghiệm nước tiểu 10 thông số: Kiểm tra đường tiết niệu, thận, bàng quang</li>
                <li>Chẩn đoán hình ảnh và thăm dò chức năng: Chụp Xquang tim phổi, điện tim, siêu âm ổ bụng</li>
                </ol>
                <p>Gói khám bao gồm suất ăn sau khi lấy máu xét nghiệm. Gói khám được thực hiện tại
                <strong>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108</strong></p>
                <p>Trung tâm khám sức khỏe định kì, Bệnh viện Trung ương Quân Đội 108
                Trung tâm khám sức khỏe định kỳ - Bệnh viện Trung ương Quân đội 108 là đơn vị đầu ngành thực hiện chức năng khám sức khỏe cho các cá nhân, nhóm, cơ quan. Hiện nay có khá ít bệnh viện công tuyến trung ương triển khai dịch vụ gói khám một cách chuyên nghiệp như Trung tâm khám sức khỏe định kỳ.</p>
                <p>Trung tâm thực hiện các dịch vụ:</p>
                <ul>
                <li>Khám theo yêu cầu với Bác sĩ Chuyên khoa.</li>
                <li>Khám theo các gói khám có sẵn hoặc linh hoạt xây dựng gói khám theo nhu cầu cá nhân.</li>
                <li></li>
                </ul>
                <p><strong>Ưu điểm:</strong></p>
                <ul>
                <li>Được thăm khám với các Giáo sư, Phó giáo sư, Tiến sỹ, Bác sĩ chuyên khoa có trình độ cao và đội ngũ điều dưỡng chuyên nghiệp cùng hệ thống trang thiết bị đồng bộ, hiện đại hàng đầu Việt Nam.</li>
                <li>Được khám xong trong ngày, quy trình khép kín, không phải di chuyển nhiều.</li>
                <li>Được tự thiết kế những danh mục trong gói khám theo mong muốn và tư vấn của bác sĩ.</li>
                <li>Khu vực khám riêng tư, lịch sự.</li>
                <li>Được lấy máu xét nghiệm tại khu riêng, giảm thiểu thời gian chờ đợi.</li>
                <li>Tất cả các gói khám tổng quát đều bao gồm suất ăn miễn phí cho khách hàng tại Bệnh viện sau khi lấy mẫu máu xét nghiệm.</li>
                </ul>
                <p><strong>Lưu ý:</strong></p>
                <p>Đặt khám tại Trung tâm khám sức khỏe định kỳ qua BookingCare để được ưu tiên thăm khám, đăng ký trước thông tin tránh chờ đợi, đông đúc.</p>
                <p>Danh mục Gói khám</p>
                <p>KHÁM LÂM SÀNG</p>
                <p>1	Khám nội đa khoa tổng quát
                Kiểm tra phụ khoa, kiểm tra và nội soi tai mũi họng, bác sĩ khám và tư vấn về ung bướu, kiểm tra mắt, kiểm tra và khám răng hàm mặt</p>
                <p>2	Kiểm tra thể lực, mạch, huyết áp
                Kiểm tra các chỉ số về huyết áp/ cân nặng nhằm phát hiện và phòng ngừa các bệnh về huyết áp</p>
                <p>3	Suất ăn miễn phí có giá trị trong ngày
                XÉT NGHIỆM HUYẾT HỌC</p>
                <p>4	Tổng phân tích máu (Công thức máu toàn phần)
                Kiểm tra số lượng bạch cầu, hồng cầu, tiểu cầu, Hemoglobin, ...; đánh giá tình trạng thiếu máu, một số bệnh nhiễm trùng và rối loạn đông máu do thiếu tiểu cầu
                XÉT NGHIỆM SINH HÓA</p>
                <p>5	
                Xét nghiệm chức năng gan: GOT, GPT, GGT
                Kiểm tra men gan, đánh giá viêm gan và các bệnh về gan</p>
                <p>6	
                Xét nghiệm chức năng thận: Ure, Creatinine
                Đánh giá bất thường về chức năng thận</p>
                <p>7	
                Xét nghiệm Axit Uric
                Phát hiện sớm bệnh gút</p>
                <p>8	
                Xét nghiệm lipid máu
                Phát hiện rối loạn lipid máu như cholesterol, LDL- C, HDL – C, Triglycerid máu</p>
                <p>9	
                Đường huyết lúc đói
                Phát hiện bệnh tiểu đường
                XÉT NGHIỆM NƯỚC TIỂU</p>
                <p>10	
                Tổng phân tích nước tiểu
                Phát hiện bệnh lý đường tiết niệu
                CHẨN ĐOÁN HÌNH ẢNH &amp; THĂM DÒ CHỨC NĂNG</p>
                <p>11	
                Điện tim
                Phát hiện các bất thường về điện tim để chẩn đoán các bệnh về tim</p>
                <p>12	
                Chụp tim phổi
                Kiểm tra và phát hiện các vấn đề bất thường của bóng tim phổi</p>
                <p>13	Siêu âm ổ bụng tổng quát
                Phát hiện các bệnh lý về gan, mật, tụy, thận, lách, …(Nữ: phần phụ, tử cung - buồng trứng, Nam: Tiền liệt tuyến)</p>
                `,
                packageType: 'Khác', // loại gói:khám tổng quát, xét nghiệm, phẫu thuật, nội soi, v.v.
                priceDefault: 750, // giá mặc định
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

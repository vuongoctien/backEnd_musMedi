require('dotenv').config()

import nodemailer from "nodemailer"

let sendSimpleEmail = (dataSend) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !dataSend.date ||
                !dataSend.clockTime ||
                !dataSend.clinicID ||
                !dataSend.dr_or_pk ||
                !dataSend.dr_or_pk_ID ||
                //////////////////////////////////////////////////////////////
                // !dataSend.forWho ||
                !dataSend.phoneNumber ||
                // !dataSend.email ||
                !dataSend.patientName ||
                !dataSend.patientBirthday
                // || !dataSend.patientGender
            ) { // Nếu không điền đủ các trường kia
                resolve({
                    errCode: 2,
                    errMes: 'Vui lòng điền đầy đủ mấy trường thông tin kia'
                })
            } else {
                // giờ mới check xem vụ mail thế nào 
                if (!dataSend.email) { // Nếu không điền mail
                    resolve({
                        errCode: 1,
                        errMes: 'Không có email'
                    })
                } else {
                    let transporter = nodemailer.createTransport({
                        host: "smtp.gmail.com",
                        port: 465,
                        secure: true, //nếu đặt true thì port phải đúng số 465, nếu đặt false thì port phải khác 465
                        auth: {
                            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                            user: process.env.EMAIL_APP,
                            pass: process.env.EMAIL_APP_PASSWORD
                            // user: 'quangloanfamily@gmail.com',
                            // pass: 'bgndkbrloonseqja'
                        }
                    });

                    let info = await transporter.sendMail({
                        from: '"musMedi 👻" <quangloanfamily@gmail.com>', // sender address
                        to: dataSend.email, // list of receivers
                        // to: "quangloanfamily@gmail.com@gmail.com", // list of receivers
                        subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
                        html: getBodyHTMLEmail(dataSend) // html body
                    });
                    // console.log(dataSend)
                    resolve({
                        errCode: 0,
                        errMes: 'Ok đã gửi mail!',
                    })
                }
            }

        } catch (e) {
            reject(e)
        }
    })

}

let getBodyHTMLEmail = (dataSend) => {
    return `<h3>Cảm ơn quý khách đã sử dụng dịch vụ của musMedi</h3>
        <span>Đơn đặt khám của quý khách đã được <b>${dataSend.clinicName_forEmail}</b> tiếp nhận và đang trong trạng thái <b>"Chờ duyệt"</b>. </span>
        <p>Cơ sở y tế sẽ gọi điện thoại cho bạn nếu cần xác nhận</p>
        <p>Trạng thái lịch hẹn, hướng dẫn khám chi tiết sẽ được gửi qua tin nhắn điện thoại và email</p>
        <br/>
        &emsp;<u>Thời gian, địa điểm: </u>
        <p>Thời gian: <b>${dataSend.clockTime} ${dataSend.date_forEmail}</b></p>
        <p>Cơ sở y tế: <b>${dataSend.clinicName_forEmail}</b></p>
        <p>Tên bác sĩ/dịch vụ: <b>${dataSend.itemName_forEmail}</b></p>
        &emsp;<u>Thông tin người đặt: </u>
        <p>Số điện thoại: <b>${dataSend.phoneNumber}</b></p>
        <p>Email: <b>${dataSend.email}</b></p>
        <p>Đặt cho ai: <b>${dataSend.forWho === 1 ? 'Đặt cho mình' : 'Đặt cho người thân'}</b></p>   
        &emsp;<u>Thông tin bệnh nhân: </u>
        <p>Họ và tên: <b>${dataSend.patientName}</b></p>
        <p>Ngày/tháng/năm sinh: <b>${dataSend.patientBirthday_forEmail}</b></p>
        <p>Giới tính: <b>${dataSend.patientGender === 1 ? 'Nam' : 'Nữ'}</b></p>
        <br/>
        <p>Trường hợp quý khách có những băn khoăn, có thể xem thêm mục <a href='https://www.google.com/'>các câu hỏi thường gặp</a></p>
        <p>Mọi thắc mắc và góp ý, quý khách vui lòng liên hệ với musMedi Care qua https://www.google.com/. Đội ngũ musMedi Care luôn sẵn sàng hỗ trợ bạn.</p>
        <p>Một lần nữa musMedi cảm ơn quý khách</p>
        <h2 style={{color:'blue'}}>musMedi</h2>`
}


// //////////////////////////////////////////////////////////////
// forWho: this.state.forwho,
// phoneNumber: this.state.sdt,
// email: this.state.email,
// patientName: this.state.name,
// patientBirthday: this.state.birthday,
// patientGender: this.state.gender,
// reason: this.state.reason,




module.exports = {
    sendSimpleEmail: sendSimpleEmail
}
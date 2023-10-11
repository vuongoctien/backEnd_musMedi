require('dotenv').config()

import nodemailer from "nodemailer"

let sendSimpleEmail = async (dataSend) => {
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
        from: '"VNT 👻" <quangloanfamily@gmail.com>', // sender address
        to: dataSend.receiverEmail, // list of receivers
        // to: "quangloanfamily@gmail.com@gmail.com", // list of receivers
        subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
        html: getBodyHTMLEmail(dataSend) // html body
    });
    // console.log(dataSend)
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result = `<h3>Xin chào ống cháu ${dataSend.patientName}</h3>
        <p>Bạn nhận được mail này vì bạn đã đặt lịch khám bệnh online trên musMedi</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
        <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Officia facere, ipsam ullam libero ratione vero expedita distinctio voluptatum, eius modi sequi provident
            corrupti at nisi facilis, iusto quas illum minima!</p>
        <a href=${dataSend.rediectLink} target="_blank">Click hể ưe go</a>
        <div>Xin chân thành cảm ơn</div>`
    }
    if (dataSend.language === 'en') {
        result = `<h3>Hế nhô ống cháu ${dataSend.patientName}</h3>
        <p>Bạn nhận được mail này vì bạn đã đặt lịch khám bệnh online trên musMedi</p>
        <p>info booking:</p>
        <div><b>Time: ${dataSend.time}</b></div>
        <div><b>doctor: ${dataSend.doctorName}</b></div>
        <p>If the above information is true, please click Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Officia facere, ipsam ullam libero ratione vero expedita distinctio voluptatum, eius modi sequi provident
            corrupti at nisi facilis, iusto quas illum minima!</p>
        <a href=${dataSend.rediectLink} target="_blank">Click dầu gội đầu Romano</a>
        <div>Xin chân thành thank you</div>`
    }
    return result
}




module.exports = {
    sendSimpleEmail: sendSimpleEmail
}
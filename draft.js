require('dotenv').config()

import nodemailer from "nodemailer"

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: false, //nếu đặt true thì port phải đúng số 465 này mới được
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            // user: process.env.EMAIL_APP,
            // pass: process.env.EMAIL_APP_PASSWORD
            user: 'quangloanfamily@gmail.com',
            pass: 'bgndkbrloonseqja'
        }
    });

    let info = await transporter.sendMail({
        from: '"VNT 👻" <quangloanfamily@gmail.com>', // sender address
        // to: dataSend.receiverEmail, // list of receivers
        to: "vuongoctien@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Anh nhớ em nhiều lắm?", // plain text body
        html: "<b>Anh nhớ em nhiều lắm?</b>", // html body
    });
}


module.exports = {
    sendSimpleEmail: sendSimpleEmail
}
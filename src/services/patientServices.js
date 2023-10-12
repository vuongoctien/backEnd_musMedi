import db from "../models/index"
require('dotenv').config()
import emailService from './emailService'
import { v4 as uuidv4 } from 'uuid'

let buildUrlEmail = (doctorId, token) => {
    let result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`
    return result
}

let postBookAppointment = (data) => { //cái này là đặt lịch khám
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.timeType || !data.date || !data.fullName || !data.selectedGender || !data.address) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                let token = uuidv4()

                // gui mail
                await emailService.sendSimpleEmail({ //truyền vào sendSimpleEmail cục data như này
                    receiverEmail: data.email,
                    patientName: data.fullName,
                    time: data.timeString,
                    doctorName: data.doctorName,
                    language: data.language,
                    rediectLink: buildUrlEmail(data.doctorId, token)
                })
                // console.log({ //truyền vào sendSimpleEmail cục data như này
                //     receiverEmail: data.email,
                //     patientName: data.fullName,
                //     time: data.timeString,
                //     doctorName: data.doctorName,
                //     language: data.language,
                //     rediectLink: 'https://bit.ly/tiengruoi'
                // })

                // upsert patient
                let user = await db.Account.findOrCreate({ //findOrCreate là tìm hoặc tạo?
                    where: { email: data.email }, // nếu điền email chuẩn sẽ ra chính xác user có sẵn, hay
                    defaults: { // 
                        email: data.email, // nếu check postman mình điền bừa email nên sẽ là create user mới
                        roleId: 'R3', // oh shit tức là trong db tự động tạo ra user mới
                        gender: data.selectedGender,
                        address: data.address,
                        firstName: data.fullName
                    }
                })

                // console.log('>>>Hoidanit check user<<<<<<<<< /n', user) // user đang là mảng 1 phần tử
                // create a booking record
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: {
                            patientId: user[0].id,
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                        },
                        // viết như này thì 1 bệnh nhân sao đặt được nhiều lịch?
                        // lỗi này mình sẽ tự fix hoặc xem ông anh này có fix không?
                        // #88: đổi where là được, nhưng cái toast phải sửa, thôi để sau
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType,
                            token: token
                            // những thông tin cập nhật trong db chưa khớp với modal đặt lịch, mình sẽ sửa sau
                        }
                    })
                }

                resolve({
                    errCode: 0,
                    errMes: 'Save info patient suceeed'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let postVerifyBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.token || !data.doctorId) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                let appointment = await db.Booking.findOne({
                    where: {
                        doctorId: data.doctorId,
                        token: data.token,
                        statusId: 'S1'
                    },
                    raw: false
                })

                if (appointment) {
                    appointment.statusId = 'S2' // chuyển trạng thái đơn hàng sang S2
                    await appointment.save()

                    resolve({
                        errCode: 0,
                        errMes: 'Cap nhat trang thai don hang sag s2 thanh cong'
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    postBookAppointment: postBookAppointment,
    postVerifyBookAppointment: postVerifyBookAppointment
}
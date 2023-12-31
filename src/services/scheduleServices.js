const db = require("../models")
import emailService from './emailService'

let createSchedule = (data) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.date ||
                !data.clinicID ||
                !data.dr_or_pk ||
                !data.dr_or_pk_ID ||
                !data.clockTime
            ) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                // Đã hiểu, do bị bất đồng bộ
                // await db.Schedule.destroy({
                //     where: {
                //         date: data.date,
                //         dr_or_pk: data.dr_or_pk,
                //         dr_or_pk_ID: data.dr_or_pk_ID,
                //     }
                // })
                await db.Schedule.create({
                    date: data.date,
                    clinicID: data.clinicID,
                    dr_or_pk: data.dr_or_pk,
                    dr_or_pk_ID: data.dr_or_pk_ID,
                    clockTime: data.clockTime,
                })
            }

            resolve({
                errCode: 0,
                errMes: 'ok đã tạo lịch'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let deleteSchedule = (schedule_detete) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!schedule_detete.date ||
                !schedule_detete.dr_or_pk ||
                !schedule_detete.dr_or_pk_ID ||
                !schedule_detete.clinicID

            ) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter deleteSchedule!'
                })
            } else {
                await db.Schedule.destroy({
                    where: {
                        date: schedule_detete.date,
                        dr_or_pk: schedule_detete.dr_or_pk,
                        dr_or_pk_ID: schedule_detete.dr_or_pk_ID,
                        clinicID: schedule_detete.clinicID
                    }
                })
                resolve({
                    errCode: 0,
                    message: 'đã xóa lich'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getSchedule = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.clinicID) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Thiếu clinicID'
                })
            } else {
                if (query.dr_or_pk && query.dr_or_pk_ID) {
                    let all_schedule = await db.Schedule.findAll({
                        where: {
                            clinicID: query.clinicID,
                            dr_or_pk: query.dr_or_pk,
                            dr_or_pk_ID: query.dr_or_pk_ID
                        },
                        attributes: { exclude: ['id', 'createAt', 'updateAt'] }
                    })
                    resolve({
                        errCode: 0,
                        errMes: 'Đã tìm lịch cho riêng bsi/goi dvu',
                        all_schedule
                    })
                } else {
                    let all_schedule = await db.Schedule.findAll({
                        where: {
                            clinicID: query.clinicID
                        },
                        attributes: { exclude: ['id', 'createAt', 'updateAt'] }
                    })
                    resolve({
                        errCode: 0,
                        errMes: 'Đã tìm hết lịch cho cả clinic luôn',
                        all_schedule
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getScheduleForUser = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.clinicID || !query.dr_or_pk || !query.dr_or_pk_ID || !query.date) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'missing para'
                })
            } else {
                let all_schedule = await db.Schedule.findAll({
                    where: {
                        clinicID: query.clinicID,
                        dr_or_pk: query.dr_or_pk,
                        dr_or_pk_ID: query.dr_or_pk_ID,
                        date: query.date
                    },
                    attributes: { exclude: ['id', 'createAt', 'updateAt'] }
                })
                resolve({
                    errCode: 0,
                    errMes: 'Đã tìm lịch cho user',
                    all_schedule
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getDoctorByIdClinicAndIdDoctor = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.clinicID || !query.doctorID) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let doctorData = await db.Doctor.findOne({
                    where: {
                        id: query.doctorID,
                        clinicID: query.clinicID,
                        dr_or_pk: 1
                    },
                })
                doctorData.image = new Buffer(doctorData.image, 'base64').toString('binary')
                resolve({
                    errCode: 0,
                    errMes: 'Ok!',
                    doctorData
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getMediPkByIdClinicAndIdDoctor = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.clinicID || !query.medi_packageID) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let medi_packageData = await db.Doctor.findOne({
                    where: {
                        id: query.medi_packageID,
                        clinicID: query.clinicID,
                        dr_or_pk: 0
                    },
                })
                medi_packageData.image = new Buffer(medi_packageData.image, 'base64').toString('binary')
                resolve({
                    errCode: 0,
                    errMes: 'Ok!',
                    medi_packageData
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let createOrder = (data) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (
                !data.date ||
                !data.clockTime ||
                !data.clinicID ||
                !data.dr_or_pk ||
                !data.dr_or_pk_ID ||
                //////////////////////////////////////////////////////////////
                // !data.forWho ||
                !data.phoneNumber ||
                // !data.email ||
                !data.patientName ||
                !data.patientBirthday
                // || !data.patientGender
                // 0 > 1
            ) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Vui lòng điền đầy đủ thông tin'
                })
            } else {
                await db.Booking.create({
                    date: data.date, // ngày khám
                    clockTime: data.clockTime, // giờ khám
                    clinicID: data.clinicID, // id CSYT
                    dr_or_pk: data.dr_or_pk, // bsi hay goi dvu?
                    dr_or_pk_ID: data.dr_or_pk_ID, // ID bs or goi dvu
                    //////////////////////////////////////////////////////////////
                    forWho: data.forWho, // đặt cho ai?
                    phoneNumber: data.phoneNumber, // sđt ng đặt
                    email: data.email, // email người đặt
                    patientName: data.patientName, // tên bệnh nhân
                    patientBirthday: data.patientBirthday, // ngày sinh bệnh nhân
                    patientGender: data.patientGender, // giới tính bệnh nhân
                    reason: data.reason, // Lý do khám
                    status: 'Chưa xem'
                })
            }

            resolve({
                errCode: 0,
                errMes: 'Đã đặt lịch'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getOrderByDate = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.date || !query.clinicID) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                let booking_by_date = await db.Booking.findAll({
                    where: {
                        date: query.date,
                        clinicID: query.clinicID
                    },
                    include: [
                        { model: db.Doctor, as: 'doctorData', attributes: ['name', 'position', 'image'], }
                    ],
                    raw: true,
                    nest: true
                })
                resolve({
                    errCode: 0,
                    errMes: 'Đã tìm lịch theo từng ngày',
                    booking_by_date
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getOrderByStatusOfClinic = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.clinicID || !query.status) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                let lichdaget = await db.Booking.findAll({
                    where: {
                        clinicID: query.clinicID,
                        status: query.status
                    },
                    attributes: ['date']
                })
                resolve({
                    errCode: 0,
                    errMes: 'Đã get lịch theo trạng thái của clinic',
                    lichdaget
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let danhDauDaXem = (queryObject) => { // truyền vào cục queryObject chứa thông tin truy vấn: clinic, date, status
    return new Promise(async (resolve, reject) => {
        try {
            if (!queryObject.clinicID || !queryObject.date) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let oldBooking = await db.Booking.findAll({
                    where: {
                        clinicID: queryObject.clinicID,
                        date: queryObject.date,
                        status: 'Chưa xem'
                    }, // truy vấn  
                    raw: false // nếu không có dòng này sẽ dính lỗi oldBooking.save is not a function
                })
                // lúc này old Booking là 1 mảng các Object, phải duyệt mảng này
                if (oldBooking && oldBooking.length > 0) {
                    oldBooking.map(async order => {
                        order.status = 'Chờ duyệt'
                        await order.save()
                    })
                    resolve({
                        errCode: 0,
                        errMes: 'Đã sửa thành công, check DB mà xem!',
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMes: 'tao đéo thấy đơn nào như thế cả!'
                    })
                }
            }


        } catch (e) {
            reject(e)
        }
    })
}

let changeStatus = (queryObject) => { // truyền vào cục queryObject chứa thông tin truy vấn: clinic, date, status
    return new Promise(async (resolve, reject) => {
        try {
            if (!queryObject.idOrder || !queryObject.newStatus) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter changeStatus!'
                })
            } else {
                let oldBooking = await db.Booking.findOne({
                    where: { id: queryObject.idOrder }, // truy vấn  
                    raw: false // nếu không có dòng này sẽ dính lỗi oldBooking.save is not a function
                })
                if (oldBooking) {
                    if (queryObject.newStatus === 'Chấp nhận' || queryObject.newStatus === 'Từ chối') {
                        if (oldBooking.status === 'Chưa xem' || oldBooking.status === 'Mới xem' || oldBooking.status === 'Chờ duyệt') {
                            oldBooking.status = queryObject.newStatus
                            await oldBooking.save()
                            resolve({
                                errCode: 0,
                                errMes: 'Đã sửa thành công, check DB mà xem!',
                            })
                        }
                    }
                    if (queryObject.newStatus === 'Đã khám' || queryObject.newStatus === 'Không đến') {
                        if (oldBooking.status === 'Chấp nhận') {
                            oldBooking.status = queryObject.newStatus
                            await oldBooking.save()
                            resolve({
                                errCode: 0,
                                errMes: 'Đã sửa thành công, check DB mà xem!',
                            })
                        }
                    }
                } else {
                    resolve({
                        errCode: 2,
                        errMes: 'tao đéo thấy đơn nào như thế cả!'
                    })
                }
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getOrderByClinic = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.clinicID) {
                resolve({
                    errCode: 1,
                    errMes: 'Điền thiếu em ơi'
                })
            } else {
                let data
                if (query.clinicID === 'ALL') {
                    data = await db.Booking.findAll({
                        include: [
                            { model: db.Doctor, as: 'doctorData', attributes: ['name'] },
                            { model: db.Clinic, as: 'clinicData1', attributes: ['name'] }
                        ],
                        raw: true,
                        nest: true
                    })
                    resolve({
                        errCode: 0,
                        errMes: 'Đã tìm full Booking luôn',
                        data
                    })
                } else {
                    data = await db.Booking.findAll({
                        where: { clinicID: query.clinicID },
                        include: [
                            { model: db.Doctor, as: 'doctorData', attributes: ['name'] },
                            { model: db.Clinic, as: 'clinicData1', attributes: ['name'] }
                        ],
                        raw: true,
                        nest: true
                    })
                    resolve({
                        errCode: 0,
                        errMes: 'Đã tìm theo clinic',
                        data
                    })
                }
            }

        } catch (e) {
            reject(e)
        }
    })
}

let xemSoLuongDaDat = (query) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!query.date && !query.dr_or_pk_ID) {
                resolve({
                    errCode: 1,
                    errMes: 'Điền thiếu em ơi'
                })
            } else {
                let data = await db.Booking.findAll({
                    where: {
                        date: query.date,
                        dr_or_pk_ID: query.dr_or_pk_ID,
                    },
                    attributes: ['clockTime', 'status']
                })
                resolve({
                    errCode: 0,
                    errMes: 'Đã tìm full Booking luôn',
                    data
                })

            }

        } catch (e) {
            reject(e)
        }
    })
}



module.exports = {
    createSchedule: createSchedule,
    deleteSchedule: deleteSchedule,
    getSchedule: getSchedule,
    getDoctorByIdClinicAndIdDoctor: getDoctorByIdClinicAndIdDoctor,
    getMediPkByIdClinicAndIdDoctor: getMediPkByIdClinicAndIdDoctor,
    getScheduleForUser: getScheduleForUser,
    createOrder: createOrder,
    getOrderByDate: getOrderByDate,
    getOrderByStatusOfClinic: getOrderByStatusOfClinic,
    danhDauDaXem: danhDauDaXem,
    changeStatus: changeStatus,
    getOrderByClinic: getOrderByClinic,
    xemSoLuongDaDat: xemSoLuongDaDat
}
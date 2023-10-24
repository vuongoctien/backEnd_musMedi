const db = require("../models")

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
                        clinicID: query.clinicID
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
                let medi_packageData = await db.Medi_Package.findOne({
                    where: {
                        id: query.medi_packageID,
                        clinicID: query.clinicID
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

module.exports = {
    createSchedule: createSchedule,
    deleteSchedule: deleteSchedule,
    getSchedule: getSchedule,
    getDoctorByIdClinicAndIdDoctor: getDoctorByIdClinicAndIdDoctor,
    getMediPkByIdClinicAndIdDoctor: getMediPkByIdClinicAndIdDoctor,

}
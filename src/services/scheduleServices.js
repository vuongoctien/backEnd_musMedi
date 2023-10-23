const db = require("../models")

let createSchedule = (data) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.date
                || !data.dr_or_pk
                || !data.dr_or_pk_ID
                || !data.clockTime
                || !data.price
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
                    dr_or_pk: data.dr_or_pk,
                    dr_or_pk_ID: data.dr_or_pk_ID,
                    clockTime: data.clockTime,
                    price: data.price,
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
            if (!schedule_detete.date || !schedule_detete.dr_or_pk || !schedule_detete.dr_or_pk_ID) {
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

module.exports = {
    createSchedule: createSchedule,
    deleteSchedule: deleteSchedule,

}
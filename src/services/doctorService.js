import db from "../models/index"
require('dotenv').config()
import _ from "lodash"
import bcrypt from 'bcryptjs'

const MAX_NUMBER_SCHDULE = process.env.MAX_NUMBER_SCHDULE

/***************************** Hàm này nhận vào pass thô, trả ra pass dị */
const salt = bcrypt.genSaltSync(10);
let hashUserPassword = (password) => { // hàm này nhận vào password gốc, trả ra đống lằng nhằng
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}
/************************************************************************* */

let checkUserEmail = (nickName) => { // hàm này trả ra true nếu trong DB đã tồn tại nickName, nếu chưa thì false
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Doctor.findOne({
                where: { nickName: nickName }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)

        }
    })
}

let createDoctor = (data) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name
                || !data.position
                || !data.imageBase64
                || !data.descriptionHTML
                || !data.descriptionMarkdown
                || !data.nickName
                || !data.password
                ///////////////////////
                || !data.clinicID
                || !data.status
                || !data.priceDefault
            ) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                let isExist = await checkUserEmail(data.nickName) // check xem tồn tại nickName chưa
                if (isExist) { // nếu true (đã tồn tại)
                    resolve({
                        errCode: 2,
                        errMes: 'nickName đã tồn tại'
                    })
                } else {
                    await db.Doctor.create({
                        name: data.name,
                        position: data.position,
                        image: data.imageBase64,
                        descriptionHTML: data.descriptionHTML,
                        descriptionMarkdown: data.descriptionMarkdown,
                        nickName: data.nickName,
                        password: await hashUserPassword(data.password), // phải hash nó đi
                        ////////////////
                        status: data.status,
                        clinicID: data.clinicID,
                        priceDefault: data.priceDefault,
                    })
                }
            }

            resolve({
                errCode: 0,
                errMes: 'ok createClinic'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getAllDoctorByClinicId = (idClinic) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!idClinic) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                let all_doctor_of_clinic = await db.Doctor.findAll({
                    where: { clinicID: idClinic },
                    attributes: { exclude: ['password'] },
                })
                all_doctor_of_clinic && all_doctor_of_clinic.map((item, index) => {
                    if (item.image) {
                        item.image = new Buffer(item.image, 'base64').toString('binary')
                    }
                })//Nếu không Buffer trước từ Backend thì rất dễ toang
                resolve({
                    errCode: 0,
                    errMes: 'ok createClinic',
                    all_doctor_of_clinic
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let editDoctorOfClinic = (newData) => { // truyền vào cục newData mình muốn sửa 
    return new Promise(async (resolve, reject) => {
        try {
            if (!newData.idClinic || !newData.idDoctor) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let oldDoctor = await db.Doctor.findOne({
                    where: {
                        clinicID: newData.idClinic, // tìm đúng CSYT, thực ra bước này có thể bỏ bớt
                        id: newData.idDoctor // tìm đúng id Bsi
                    }, // truy vấn bằng id của newData đó 
                    raw: false // nếu không có dòng này sẽ dính lỗi oldDoctor.save is not a function
                })
                if (oldDoctor) {
                    // mình sẽ chỉnh thành, có trường nào thì sửa trường đó, không thì thôi
                    if (newData.name) oldDoctor.name = newData.name
                    if (!newData.image) oldDoctor.image = newData.image
                    if (!newData.position) oldDoctor.position = newData.position
                    if (!newData.descriptionMarkdown) oldDoctor.descriptionMarkdown = newData.descriptionMarkdown
                    if (!newData.descriptionHTML) oldDoctor.descriptionHTML = newData.descriptionHTML
                    await oldDoctor.save()
                    resolve({
                        errCode: 0,
                        errMes: 'Đã sửa thành công, check DB mà xem!',
                    })
                } else {
                    resolve({
                        errCode: 2,
                        errMes: 'tao đéo thấy id nào như thế cả!'
                    })
                }
            }


        } catch (e) {
            reject(e)
        }
    })

}













/************************************************************************* */
let getTopDoctorHome = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.Account.findAll(
                {
                    limit: limit,
                    where: { roleId: 'R2' },
                    order: [['createdAt', "DESC"]],
                    attributes: { exclude: ['password'] },
                    include: [
                        { model: db.Allcode, as: 'positionData', attributes: ['ValueEn', 'ValueVi'] },
                        { model: db.Allcode, as: 'genderData', attributes: ['ValueEn', 'ValueVi'] }
                    ],
                    raw: true,
                    nest: true
                }
            )

            resolve({
                errCode: 0,
                data: users
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getAllDoctors = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.Account.findAll({
                where: { roleId: 'R2' },
                attributes: { exclude: ['password', 'image'] },

            })

            resolve({
                errCode: 0,
                data: doctors
            })
        } catch (e) {
            reject(e)
        }
    })
}

let checkRequiedFields = (inputData) => {
    let arrFields = ['doctorId',
        'contentHTML',
        'contentMarkdown',
        'action',
        'selectedPrice',
        'selectedProvince',
        'selectedPayment',
        'addressClinic',
        'nameClinic',
        'note',
        'specialtyId']

    let isValid = true
    let element = ''
    for (let i = 0; i < arrFields.length; i++) {
        if (!inputData[arrFields[i]]) {
            isValid = false
            element = arrFields[i]
            break
        }

    }

    return {
        isValid: isValid,
        element: element
    }
}

let saveDetailInfoDoctor = (inputData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkObject = checkRequiedFields(inputData)
            if (checkObject.isValid === false) {
                resolve({
                    errCode: -1,
                    errMes: `Missing parameter: ${checkObject.element}`
                })
                // console.log('inputData', inputData)
            } else {
                // upsert Markdown
                if (inputData.action === 'CREATE') {
                    await db.Markdown.create({
                        contentHTML: inputData.contentHTML,
                        contentMarkdown: inputData.contentMarkdown,
                        description: inputData.description,
                        doctorId: inputData.doctorId
                    })
                } else if (inputData.action === 'EDIT') {
                    let doctorMarkdown = await db.Markdown.findOne({
                        where: { doctorId: inputData.doctorId },
                        raw: false
                    })

                    if (doctorMarkdown) {
                        doctorMarkdown.contentHTML = inputData.contentHTML
                        doctorMarkdown.contentMarkdown = inputData.contentMarkdown
                        doctorMarkdown.description = inputData.description
                        doctorMarkdown.updateAt = new Date()
                        await doctorMarkdown.save()
                    }
                }

                // upsert to Doctor_info
                let doctorInfo = await db.Doctor.findOne({
                    where: { doctorId: inputData.doctorId },
                    raw: false
                })
                if (doctorInfo) {
                    //update
                    doctorInfo.doctorId = inputData.doctorId
                    doctorInfo.priceId = inputData.selectedPrice
                    doctorInfo.provinceId = inputData.selectedProvince
                    doctorInfo.paymentId = inputData.selectedPayment
                    doctorInfo.nameClinic = inputData.nameClinic
                    doctorInfo.addressClinic = inputData.addressClinic
                    doctorInfo.note = inputData.note
                    doctorInfo.specialtyId = inputData.specialtyId
                    doctorInfo.clinicId = inputData.clinicId
                    await doctorInfo.save() // ồ nếu để raw: true thì hàm này bị báo lỗi nha
                } else {
                    await db.Doctor.create({
                        doctorId: inputData.doctorId,
                        priceId: inputData.selectedPrice,
                        provinceId: inputData.selectedProvince,
                        paymentId: inputData.selectedPayment,
                        nameClinic: inputData.nameClinic,
                        addressClinic: inputData.addressClinic,
                        note: inputData.note,
                        specialtyId: inputData.specialtyId,
                        clinicId: inputData.clinicId
                    })
                }

                resolve({
                    errCode: 0,
                    errMes: 'Save info doctor success'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailDoctorById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing required parameter'
                })
            } else {
                let data = await db.Account.findOne({
                    where: { id: inputId },
                    attributes: { exclude: ['password'] },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['description', 'contentHTML', 'contentMarkdown']
                        },
                        {
                            model: db.Allcode,
                            as: 'positionData',
                            attributes: ['valueEn', 'valueVi']
                        },
                        {
                            model: db.Doctor,
                            attributes: {
                                exclude: ['id', 'doctorId']
                            },
                            include: [
                                { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] },
                            ]
                        }
                    ],
                    raw: false,
                    nest: true
                })

                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary')
                }

                if (!data) data = {}

                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let bulkCreateSchedule = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log('check data', data)
            if (!data.arrSchedule || !data.doctorId || !data.formatedDate) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing required parameter'
                })
            } else {
                let schedule = data.arrSchedule
                if (schedule && schedule.length > 0) {
                    schedule = schedule.map(item => {
                        item.maxNumber = MAX_NUMBER_SCHDULE
                        return item
                    })
                }


                let existing = await db.Schedule.findAll(
                    {
                        where: { doctorId: data.doctorId, date: data.formatedDate },
                        attributes: ["timeType", "date", "doctorId", "maxNumber"],
                        raw: true
                    }
                );
                // console.log('existing', existing)

                let toCreate = _.differenceWith(schedule, existing, (a, b) => { // nếu khác nhau
                    return a.timeType === b.timeType && +a.date === +b.date
                })

                if (toCreate && toCreate.length > 0) {
                    await db.Schedule.bulkCreate(toCreate)
                }

                // Làm thế này không bỏ được lịch đã chọn, mình sẽ cần ghi đè, để sau

                resolve({
                    errCode: 0,
                    errMes: 'bulkCreateSchedule OK'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getScheduleByDate = ((doctorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId || !date) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing required parameter'
                })
            } else {
                let dataSchedule = await db.Schedule.findAll({
                    where: {
                        doctorId: doctorId,
                        date: date
                    },
                    include: [
                        { model: db.Allcode, as: 'timeTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Account, as: 'doctorData', attributes: ['firstName', 'lastName'] }
                    ],
                    raw: false,
                    nest: true
                })

                if (!dataSchedule) dataSchedule = []

                resolve({
                    errCode: 0,
                    data: dataSchedule
                })
            }
        } catch (e) {
            reject(e)
        }
    })
})

let getExtraInfoDocTorById = ((idInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!idInput) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing required parameter'
                })
            } else {
                let data = await db.Doctor.findOne({
                    where: { doctorId: idInput },
                    attributes: {
                        exclude: ['id', 'doctorId']
                    },
                    include: [
                        { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] }
                    ],

                    raw: false,
                    nest: true
                })

                if (!data) data = {}

                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }
    })
})

let getProfileDocTorById = (inputId) => { // à cái này là lấy hết sạch mọi thông tin liên quan đến bác sĩ, bảo sao dài thế
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing required parameter'
                })
            } else {
                let data = await db.Account.findOne({
                    where: { id: inputId },
                    attributes: {
                        exclude: ['password']
                    },
                    include: [
                        {
                            model: db.Markdown,
                            attributes: ['description', 'contentHTML', 'contentMarkdown']
                        },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                        {
                            model: db.Doctor,
                            attributes: {
                                exclude: ['id', 'doctorId']
                            },
                            include: [
                                { model: db.Allcode, as: 'priceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'provinceTypeData', attributes: ['valueEn', 'valueVi'] },
                                { model: db.Allcode, as: 'paymentTypeData', attributes: ['valueEn', 'valueVi'] }
                            ],
                        }


                    ],
                    raw: false,
                    nest: true
                })

                if (data && data.image) {
                    data.image = new Buffer(data.image, 'base64').toString('binary')
                }

                if (!data) data = {}

                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getListPatientForDoctor = (doctorId, date) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!doctorId || !date) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing required parameter'
                })
            } else {
                let data = await db.Booking.findOne({
                    where: {
                        statusId: 'S2',
                        doctorId: doctorId,
                        date: date
                    },
                    include: [
                        {
                            model: db.Account, as: 'patientData',
                            attributes: ['email', 'firstName', 'address', 'gender'],
                            include: [{ model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }]
                        }
                    ],
                    raw: false,
                    nest: true
                })


                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    saveDetailInfoDoctor: saveDetailInfoDoctor,
    getDetailDoctorById: getDetailDoctorById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInfoDocTorById: getExtraInfoDocTorById,
    getProfileDocTorById: getProfileDocTorById,
    getListPatientForDoctor: getListPatientForDoctor,
    createDoctor: createDoctor,
    getAllDoctorByClinicId: getAllDoctorByClinicId,
    editDoctorOfClinic: editDoctorOfClinic,
}
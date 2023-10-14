import db from "../models"

let createClinic = (data) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name
                || !data.address
                || !data.imageBase64
                || !data.descriptionHTML
                || !data.descriptionMarkdown
                || !data.province
                || !data.nickName
                || !data.password
            ) { //thông tin bệnh nhân điền vào modal
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter'
                })
            } else {
                await db.Clinic.create({
                    name: data.name,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    province: data.province,
                    nickName: data.nickName,
                    password: data.password
                })
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

let getAllClinic = () => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Clinic.findAll()
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = new Buffer(item.image, 'base64').toString('binary')
                    return item
                })
            }
            resolve({
                errCode: 0,
                errMes: 'Ok Clinic!',
                data
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailClinicById = (inputId) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let data = await db.Clinic.findOne({
                    where: { id: inputId },
                    attributes: ['name', 'address', 'province', 'descriptionHTML', 'descriptionMarkdown', 'nickname', 'image']
                })

                // if (data) { // Muốn gọi được cái này thì phải thêm ràng buộc quan hệ giữa các bảng, thôi để sau
                //     let doctorClinic = []
                //     doctorClinic = await db.Doctor.findAll({
                //         where: { clinicId: inputId },
                //         attributes: ['doctorId', 'name']
                //     })
                //     data.doctorClinic = doctorClinic
                // } else data = {}
                resolve({
                    errCode: 0,
                    errMes: 'Ok!',
                    data
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

let editClinic = (newData) => { // truyền vào cục newData mình muốn sửa 
    return new Promise(async (resolve, reject) => {
        try {
            if (!newData.id) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter from clinic!'
                })
            } else {
                let oldClinic = await db.Clinic.findOne({
                    where: { id: newData.id }, // truy vấn bằng id của newData đó 
                    raw: false // nếu không có dòng này sẽ dính lỗi oldClinic.save is not a function
                })
                if (oldClinic) {
                    oldClinic.name = newData.name
                    oldClinic.image = newData.image
                    oldClinic.descriptionMarkdown = newData.descriptionMarkdown
                    oldClinic.descriptionHTML = newData.descriptionHTML
                    oldClinic.province = newData.province
                    oldClinic.address = newData.address
                    await oldClinic.save()
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

let deleteClinic = (id_specialty_delete) => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!id_specialty_delete) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let foundClinic = await db.Clinic.findOne({
                    where: { id: id_specialty_delete }
                })
                if (!foundClinic) {
                    resolve({
                        errCode: 2,
                        errMessage: `phòng khám không tồn tại`
                    })
                }
                await db.Clinic.destroy({
                    where: { id: id_specialty_delete }
                })

                resolve({
                    errCode: 0,
                    message: 'đã xóa phòng khám'
                })
            }
        } catch (e) {
            reject(e)
        }


    })
}

module.exports = {
    createClinic: createClinic,
    getAllClinic: getAllClinic,
    getDetailClinicById: getDetailClinicById,
    editClinic: editClinic,
    deleteClinic: deleteClinic
}
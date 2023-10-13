const db = require("../models")

let createSpeciatly = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                await db.Specialty.create({
                    name: data.name,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    image: data.imageBase64
                })
                /*#90:Mình nghĩ nếu ảnh ở dạng text thì mình có thể seeder sẵn cả file ảnh luôn!!
                Vấn đề là có lầy lội được không, nhét vào file .js thì dài kinh khủng
                thôi để lúc nào thử xem 
                
                À vào đọc tài liệu gốc của Squezlize đi*/


                resolve({
                    errCode: 0,
                    errMes: 'Ok!'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let getAllSpeciatly = () => { //ok
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Specialty.findAll()
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = new Buffer(item.image, 'base64').toString('binary')
                    return item
                })
            }
            resolve({
                errCode: 0,
                errMes: 'Ok speciatly!',
                data
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailSpecialtyById = (inputId) => { // ok
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let data = await db.Specialty.findOne({
                    where: { id: inputId },
                    attributes: ['name', 'image', 'descriptionHTML', 'descriptionMarkdown']
                })

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

let editSpecialty = (newData) => { // truyền vào cục newData mình muốn sửa 
    return new Promise(async (resolve, reject) => {
        try {
            if (!newData) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let oldSpecialty = await db.Specialty.findOne({
                    where: { id: newData.id }, // truy vấn bằng id của newData đó 
                    raw: false // nếu không có dòng này sẽ dính lỗi oldSpecialty.save is not a function
                })
                if (oldSpecialty) {
                    oldSpecialty.name = newData.name
                    oldSpecialty.image = newData.image
                    oldSpecialty.descriptionMarkdown = newData.descriptionMarkdown
                    oldSpecialty.descriptionHTML = newData.descriptionHTML
                    await oldSpecialty.save()
                    resolve({
                        errCode: 0,
                        errMes: 'Đã sửa thành công, check DB mà xem!',
                    })
                } else {
                    resolve({
                        errCode: 0,
                        errMes: 'tao đéo thấy id nào như thế cả!'
                    })
                }
            }


        } catch (e) {
            reject(e)
        }
    })

}

module.exports = {
    createSpeciatly: createSpeciatly,
    getAllSpeciatly: getAllSpeciatly,
    getDetailSpecialtyById: getDetailSpecialtyById,
    editSpecialty: editSpecialty
}
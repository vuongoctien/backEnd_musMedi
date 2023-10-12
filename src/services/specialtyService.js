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

let getDetailSpeciatlyById = (inputId/*, location*/) => { // id chuyên khoa và location là ALL, hoaẹc mã tỉnh PRO1, PRO2 ...
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId /*|| !location*/) {
                resolve({
                    errCode: 1,
                    errMes: 'Missing parameter!'
                })
            } else {
                let data = await db.Specialty.findOne({
                    where: { id: inputId },
                    attributes: ['descriptionHTML', 'descriptionMarkdown']
                })

                if (data) {
                    let doctorSpeciatly = []
                    // if (location === 'ALL') {
                    doctorSpeciatly = await db.Doctor.findAll({
                        where: { specialtyId: inputId },
                        attributes: ['doctorId'/*, 'provinceId'*/]
                    })
                    // } else {
                    //     doctorSpeciatly = await db.Doctor.findAll({
                    //         where: {
                    //             specialtyId: inputId,
                    //             provinceId: location
                    //         },
                    //         attributes: ['doctorId', 'provinceId']
                    //     })
                    // }
                    data.doctorSpeciatly = doctorSpeciatly
                } else data = {}
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

module.exports = {
    createSpeciatly: createSpeciatly,
    getAllSpeciatly: getAllSpeciatly,
    getDetailSpeciatlyById: getDetailSpeciatlyById
}
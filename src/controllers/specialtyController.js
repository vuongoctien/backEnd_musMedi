import specialtyService from '../services/specialtyService'

let createSpeciatly = async (req, res) => { //ok
    try {
        let info = await specialtyService.createSpeciatly(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getAllSpeciatly = async (req, res) => { //ok
    try {
        let info = await specialtyService.getAllSpeciatly()
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getDetailSpecialtyById = async (req, res) => { //0k
    try {
        let info = await specialtyService.getDetailSpecialtyById(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let editSpecialty = async (req, res) => { //ok
    try {
        let info = await specialtyService.editSpecialty(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }

}

let deleteSpecialty = async (req, res) => { //ok
    try {
        let info = await specialtyService.deleteSpecialty(req.body.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }

}

let createDoctorToSpec = async (req, res) => { //ok
    try {
        let info = await specialtyService.createDoctorToSpec(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getSpecDr = async (req, res) => { //0k
    try {
        let info = await specialtyService.getSpecDr(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let createSpecDr = async (req, res) => { //ok
    try {
        let info = await specialtyService.createSpecDr(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let deleteSpecDr = async (req, res) => { //ok
    try {
        let info = await specialtyService.deleteSpecDr(req.body.dr_or_pk_ID)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }

}

module.exports = {
    createSpeciatly: createSpeciatly,
    getAllSpeciatly: getAllSpeciatly,
    getDetailSpecialtyById: getDetailSpecialtyById,
    editSpecialty: editSpecialty,
    deleteSpecialty: deleteSpecialty,
    createDoctorToSpec: createDoctorToSpec,
    getSpecDr: getSpecDr,
    createSpecDr: createSpecDr,
    deleteSpecDr: deleteSpecDr

}
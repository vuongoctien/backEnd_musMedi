import clinicService from '../services/clinicServices'

let createClinic = async (req, res) => { //ok
    try {
        let info = await clinicService.createClinic(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getAllClinic = async (req, res) => { //ok
    try {
        let info = await clinicService.getAllClinic()
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server?"
        })
    }
}

let getDetailClinicById = async (req, res) => { //ok
    try {
        let info = await clinicService.getDetailClinicById(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let editClinic = async (req, res) => { //ok
    try {
        let info = await clinicService.editClinic(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }

}

let deleteClinic = async (req, res) => { //ok
    try {
        let info = await clinicService.deleteClinic(req.body.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }

}

let loginClinic = async (req, res) => { // ok
    let nickName = req.body.nickName
    let password = req.body.password

    if (!nickName || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing input parameter'
        })
    }

    let userData = await clinicService.loginClinic(nickName, password)

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : { 'toiyeuem': "ratnhieu" }
    })
}

module.exports = {
    createClinic: createClinic,
    getAllClinic: getAllClinic,
    getDetailClinicById: getDetailClinicById,
    editClinic: editClinic,
    deleteClinic: deleteClinic,
    loginClinic: loginClinic

}
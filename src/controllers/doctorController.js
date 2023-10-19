import doctorService from '../services/doctorService'

let createDoctor = async (req, res) => { //ok
    try {
        let info = await doctorService.createDoctor(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getAllDoctorByClinicId = async (req, res) => { //0k
    try {
        let info = await doctorService.getAllDoctorByClinicId(req.query.idClinic)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let editDoctorOfClinic = async (req, res) => { //ok
    try {
        let info = await doctorService.editDoctorOfClinic(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }

}

/**Viết gộp MediPackage vào luôn*/

let createMediPackage = async (req, res) => {
    try {
        let info = await doctorService.createMediPackage(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getAllMediPackageByClinicId = async (req, res) => {
    try {
        let info = await doctorService.getAllMediPackageByClinicId(req.query.idClinic)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let editMediPackageOfClinic = async (req, res) => {
    try {
        let info = await doctorService.editMediPackageOfClinic(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

/****************************** */





let getTopDoctorHome = async (req, res) => { //ok
    let limit = req.query.limit

    if (!limit) {
        limit = 8
        console.log('thiếu limit rồi, tạm đặt limit=8')
    }
    try {
        let response = await doctorService.getTopDoctorHome(+limit)
        // ôi anh ấy đã nói rồi mà mình không chịu nghe
        // lỗi là do limit đang được hiểu là string, thêm dấu + vào để đổi thành int _video63
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            message: "Error from sever"
        })
    }
}

let getAllDoctors = async (req, res) => {
    try {
        let doctors = await doctorService.getAllDoctors()
        // console.log(doctors)
        return res.status(200).json(doctors)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let postInfoDoctors = async (req, res) => {
    try {
        let response = await doctorService.saveDetailInfoDoctor(req.body)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getDetailDoctorById = async (req, res) => { //ok
    try {
        let info = await doctorService.getDetailDoctorById(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getDetailMediPackageById = async (req, res) => { //ok
    try {
        let info = await doctorService.getDetailMediPackageById(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let bulkCreateSchedule = async (req, res) => {
    try {
        let info = await doctorService.bulkCreateSchedule(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getScheduleByDate = async (req, res) => {
    try {
        let info = await doctorService.getScheduleByDate(req.query.doctorId, req.query.date)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getExtraInfoDocTorById = async (req, res) => {
    try {
        let info = await doctorService.getExtraInfoDocTorById(req.query.doctorId)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getProfileDocTorById = async (req, res) => {
    try {
        let info = await doctorService.getProfileDocTorById(req.query.doctorId)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getListPatientForDoctor = async (req, res) => {
    try {
        let info = await doctorService.getListPatientForDoctor(req.query.doctorId, req.query.date)
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
    getTopDoctorHome: getTopDoctorHome,
    getAllDoctors: getAllDoctors,
    postInfoDoctors: postInfoDoctors,
    getDetailDoctorById: getDetailDoctorById,
    getDetailMediPackageById: getDetailMediPackageById,
    bulkCreateSchedule: bulkCreateSchedule,
    getScheduleByDate: getScheduleByDate,
    getExtraInfoDocTorById: getExtraInfoDocTorById,
    getProfileDocTorById: getProfileDocTorById,
    getListPatientForDoctor: getListPatientForDoctor,
    createDoctor: createDoctor, createMediPackage: createMediPackage,
    getAllDoctorByClinicId: getAllDoctorByClinicId, getAllMediPackageByClinicId: getAllMediPackageByClinicId,
    editDoctorOfClinic: editDoctorOfClinic, editMediPackageOfClinic: editMediPackageOfClinic,


}
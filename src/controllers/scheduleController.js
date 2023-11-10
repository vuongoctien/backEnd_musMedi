import scheduleServices from "../services/scheduleServices"
let createSchedule = async (req, res) => { //ok
    try {
        let info = await scheduleServices.createSchedule(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let deleteSchedule = async (req, res) => { //ok
    try {
        let info = await scheduleServices.deleteSchedule(req.body) // truyền cả body vào
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getSchedule = async (req, res) => { //ok
    try {
        let info = await scheduleServices.getSchedule(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getScheduleForUser = async (req, res) => { //ok
    try {
        let info = await scheduleServices.getScheduleForUser(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getDoctorByIdClinicAndIdDoctor = async (req, res) => { //ok
    try {
        let info = await scheduleServices.getDoctorByIdClinicAndIdDoctor(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getMediPkByIdClinicAndIdDoctor = async (req, res) => { //ok
    try {
        let info = await scheduleServices.getMediPkByIdClinicAndIdDoctor(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let createOrder = async (req, res) => { //ok
    try {
        let info = await scheduleServices.createOrder(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getOrderByDate = async (req, res) => { //ok
    try {
        let info = await scheduleServices.getOrderByDate(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let getOrderChuaxemOfClinic = async (req, res) => { //ok
    try {
        let info = await scheduleServices.getOrderChuaxemOfClinic(req.query)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let danhDauDaXem = async (req, res) => { //ok
    try {
        let info = await scheduleServices.danhDauDaXem(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Error from server"
        })
    }
}

let changeStatus = async (req, res) => { //ok
    try {
        let info = await scheduleServices.changeStatus(req.body)
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
    createSchedule: createSchedule,
    deleteSchedule: deleteSchedule,
    getSchedule: getSchedule,
    getDoctorByIdClinicAndIdDoctor: getDoctorByIdClinicAndIdDoctor,
    getMediPkByIdClinicAndIdDoctor: getMediPkByIdClinicAndIdDoctor,
    getScheduleForUser: getScheduleForUser,
    createOrder, createOrder,
    getOrderByDate: getOrderByDate,
    getOrderChuaxemOfClinic: getOrderChuaxemOfClinic,
    danhDauDaXem: danhDauDaXem,
    changeStatus: changeStatus,

}
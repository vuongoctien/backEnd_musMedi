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
        let info = await scheduleServices.getSchedule()
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

}
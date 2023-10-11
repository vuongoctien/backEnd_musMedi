import specialtyService from '../services/specialtyService'

let createSpeciatly = async (req, res) => {
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

let getAllSpeciatly = async (req, res) => {
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

let getDetailSpeciatlyById = async (req, res) => {
    try {
        let info = await specialtyService.getDetailSpeciatlyById(req.query.id, req.query.location)
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
    getDetailSpeciatlyById: getDetailSpeciatlyById
}
import emailService from '../services/emailService'

let sendSimpleEmail = async (req, res) => { //ok
    try {
        let info = await emailService.sendSimpleEmail(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMes: "Có thể bạn đã điền sai email"
        })
    }
}



module.exports = {
    sendSimpleEmail: sendSimpleEmail

}
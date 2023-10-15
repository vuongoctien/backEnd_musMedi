import db from "../models/index"
import bcrypt from 'bcryptjs'

const { resolveInclude } = require("ejs")

/***************************** Hàm này nhận vào pass thô, trả ra pass dị */
const salt = bcrypt.genSaltSync(10);
let hashUserPassword = (password) => { // hàm này nhận vào password gốc, trả ra đống lằng nhằng
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}
/************************************************************************* */

let handleUserLogin = (nickName, password) => { // ok

    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(nickName) // check xem tồn tại nickName chưa
            if (isExist) { // nếu true (đã tồn tại)
                let user = await db.Account.findOne({ // lấy ra thông tin nickName
                    attributes: ['nickName', 'role', 'password', 'gmail', 'image'], // lôi thêm cột ra
                    where: { nickName: nickName },
                    raw: true
                })



                if (user) { // ủa sao vẫn cần check tiếp à?
                    let check = await bcrypt.compareSync(password, user.password); // à hàm này chắc là check xem pass gốc và pass biến dị có khớp không
                    if (check) {
                        userData.errCode = 0
                        userData.errMessage = 'Đăng nhập thành công'
                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3
                        userData.errMessage = "Sai mật khẩu"

                    }
                } else {
                    userData.errCode = 2
                    userData.errMessage = `Không tìm thấy tài khoản`
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = `Tài khoản không tồn tại`
                resolve(userData)
            }

            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

let checkUserEmail = (nickName) => { // hàm này trả ra true nếu trong DB đã tồn tại nickName, nếu chưa thì false
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Account.findOne({
                where: { nickName: nickName }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)

        }
    })
}

// let compareUserPassWord = () => {
//     return new Promise((resolve, reject) => {
//         try {

//         } catch (e) {
//             reject(e)
//         }
//     })
// }

let getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = ''
            if (userId === 'ALL') {
                users = db.Account.findAll({
                    attributes: {
                        exclude: ['password'] // không trả ra password
                    }
                })
            }
            if (userId && userId !== 'ALL') {
                users = await db.Account.findOne({
                    where: { id: userId },
                    attributes: {
                        exclude: ['password'] // không trả ra password
                    }
                })
            }
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.email)
            if (check === true) {
                resolve({
                    errCode: 1,
                    errMessage: 'email này đã có thằng khác xài'
                })
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(data.password);
                await db.Account.create({
                    // bên phải sửa theo name trong ejs
                    email: data.email,
                    password: hashPasswordFromBcrypt,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.phoneNumber,
                    gender: data.gender,
                    roleId: data.roleId,
                    positionId: data.positionId,
                    image: data.avatar
                })
                resolve({
                    errCode: 0,
                    message: "OK"
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        let foundUser = await db.Account.findOne({
            where: { id: userId }
        })
        if (!foundUser) {
            resolve({
                errCode: 2,
                errMessage: `người dùng đéo rồn tại`
            })
        }
        await db.Account.destroy({
            where: { id: userId }
        })

        resolve({
            errCode: 0,
            message: 'the user is delete'
        })
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.roleId || !data.positionId || !data.gender) {
                resolve({
                    errCode: 2,
                    errMessage: 'id đâu chú em?'
                })
            }
            let user = await db.Account.findOne({
                where: { id: data.id },
                raw: false
            })
            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName
                user.address = data.address
                user.phoneNumber = data.phoneNumber
                user.roleId = data.roleId
                user.positionId = data.positionId
                user.gender = data.gender
                if (data.avatar) {
                    user.image = data.avatar
                }

                await user.save()

                // await db.Account.save({
                //     firstName: data.firstName,
                //     lastName: data.lastName,
                //     address: data.address,
                //     phoneNumber: data.phonenumber,
                // }, { where: { id: userId } })

                // let allUsers = await db.Account.findAll();
                resolve({
                    errCode: 0,
                    message: 'update dc r'
                })
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'đéo thấy'
                })
            }

        } catch (e) {
            reject(e)

        }
    })
}

let getAllCodeService = (typeInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!typeInput) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameters'
                })
            } else {
                let res = {}
                let allcode = await db.Allcode.findAll({
                    where: { type: typeInput }
                })
                res.errCode = 0
                res.data = allcode
                resolve(res)
            }

        } catch (e) {
            reject(e)

        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    getAllUsers: getAllUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData,
    getAllCodeService: getAllCodeService,
}
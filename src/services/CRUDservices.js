import bcrypt from 'bcryptjs';
import db from '../models';

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.Account.create({
                // bên phải sửa theo name trong ejs
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phonenumber,
                gender: data.sex === '1' ? true : false,
                roleId: data.role,
            })
            resolve('Ok create a new user success')
        } catch (e) {
            reject(e)
        }
    })

}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.Account.findAll({
                raw: true
            });
            resolve(users)
        } catch (e) {
            reject(e)
        }
    })
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Account.findOne({
                where: { id: userId }, raw: true
            })

            if (user) {
                resolve(user)
            } else {
                resolve({})
            }

        } catch (e) {
            reject(e)
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Account.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName
                user.lastName = data.lastName //name HTML
                user.address = data.address
                user.phoneNumber = data.phonenumber
                await user.save()
                let allUsers = await db.Account.findAll();
                resolve(allUsers)
            } else {
                resolve()
            }
        } catch (e) {
            reject(e)
        }
    })

}

let deleteUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Account.findOne({
                where: { id: userId }
            })
            if (user) {
                await user.destroy()
            }

            resolve() //=return
        } catch (e) {
            reject(e)
        }
    })
}
module.exports = { // à cái này là để gọi được trong file khác (file khác sẽ dùng import)
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    deleteUserById: deleteUserById,
} 
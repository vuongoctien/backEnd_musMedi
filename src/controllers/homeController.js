import db from '../models/index'
import CRUDservices from '../services/CRUDservices';

let getHomePage = async (req, res) => { // hay, không dùng async await là thấy ngay hậu quả
    try {
        let data = await db.Account.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }
}

let getCRUD = (req, res) => {
    return res.render("crud.ejs")
}

let postCRUD = async (req, res) => {
    let message = await CRUDservices.createNewUser(req.body)
    // console.log(message)
    return res.send('post CRUD from server')
}


let displaygetCRUD = async (req, res) => {
    let data = await CRUDservices.getAllUser();
    return res.render('displayCRUD.ejs', {
        dataTable: data
    })

}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    // console.log(userId)
    if (userId) {
        let userData = await CRUDservices.getUserInfoById(userId);
        // check user data not found
        return res.render('editCRUD.ejs', {
            user: userData
        })
    } else {
        return res.send('user not found')
    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservices.updateUserData(data)
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => { //cứ độg đến db là tốn time, xài bất đồng bộ
    let id = req.query.id
    await CRUDservices.deleteUserById(id);

    if (id) {
        await CRUDservices.deleteUserById(id)
        return res.send('Xóa được rồi')
    } else {
        return res.send('đéo thấy')
    }


}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displaygetCRUD: displaygetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
}
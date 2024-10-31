let express = require(`express`)
let yogaShopDB = require(`../DB/yoga-shop`)
let usersRoute = express.Router()

usersRoute.get(`/:userNameValue` , (req , res) => {
    let userNameValue = req.params.userNameValue
    let getmainUser = `SELECT * FROM users WHERE userName='${userNameValue}'`
    yogaShopDB.query(getmainUser , (err , result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

usersRoute.get(`/:userNameValue/:passValue` , (req , res) => {
    let userNameValue = req.params.userNameValue
    let passValue = req.params.passValue
    let getmainUser = `SELECT * FROM users WHERE userName='${userNameValue}' AND password='${passValue}'`
    yogaShopDB.query(getmainUser , (err , result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

usersRoute.post(`/newUserInfo` , (req , res) => {
    let body = req.body
    let sendUserDataQuery = `INSERT INTO users(userName, password) VALUES ('${body.userName}','${body.password}')`
    yogaShopDB.query(sendUserDataQuery , (err , result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

usersRoute.put(`/editUser/:userName` , (req , res) => {
    let userName = req.params.userName
    let body = req.body
    let sendUserDataQuery = `UPDATE users SET password='${body.password}',name='${body.name}',familyName='${body.familyName}',phone='${body.phone}',mail='${body.mail}',address='${body.address}',postalCode='${body.postalCode}' WHERE userName='${userName}'`
    yogaShopDB.query(sendUserDataQuery , (err , result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

module.exports = usersRoute
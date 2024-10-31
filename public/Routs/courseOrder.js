let express = require(`express`)
let yogaShopDB = require(`../DB/yoga-shop`)
let courseOrderRoute = express.Router()

courseOrderRoute.post(`/` , (req , res) => {
    let body = req.body
    let sendDataQuery = `INSERT INTO courseorder VALUES (NULL ,'${body.userName}','${body.name}','${body.familyName}','${body.phone}',${body.isPaid})`
    yogaShopDB.query(sendDataQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

courseOrderRoute.get(`/:userName` , (req , res) => {
    let userName = req.params.userName
    let getDataQuery = `SELECT * FROM courseorder WHERE userName='${userName}'`
    yogaShopDB.query(getDataQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = courseOrderRoute
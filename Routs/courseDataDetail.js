let express = require(`express`)
let yogaShopDB = require(`../DB/yoga-shop`)
let courseDataDetailRoute = express.Router()

courseDataDetailRoute.get(`/` , (req , res) => {
    let getCoursesDataQuery = `SELECT * FROM coursedatadetail`
    yogaShopDB.query(getCoursesDataQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = courseDataDetailRoute
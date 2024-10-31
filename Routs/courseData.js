let express = require(`express`)
let yogaShopDB = require(`../DB/yoga-shop`)
let courseDataRoute = express.Router()

courseDataRoute.get(`/` , (req , res) => {
    let getAllCoursesQuery = `SELECT * FROM coursedata`
    yogaShopDB.query(getAllCoursesQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = courseDataRoute
let express = require(`express`)
let yogaShopDB = require(`../DB/yoga-shop`)
let courseDataDetailAllLessonsRoute = express.Router()

courseDataDetailAllLessonsRoute.get(`/` , (req , res) => {
    let getAllCoursesQuery = `SELECT * FROM coursedataalllessons`
    yogaShopDB.query(getAllCoursesQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

courseDataDetailAllLessonsRoute.get(`/:pageId` , (req , res) => {
    let pageId = req.params.pageId
    let getSelectedObjQuery = `SELECT * FROM coursedataalllessons WHERE id=${pageId}`
    yogaShopDB.query(getSelectedObjQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

module.exports = courseDataDetailAllLessonsRoute
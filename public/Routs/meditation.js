let express = require(`express`)
let yogaShopDB = require(`../DB/yoga-shop`)
let meditationsRoute = express.Router()

meditationsRoute.get(`/` , (req , res) => {
    let getAllmeditationsQuery = `SELECT * FROM meditaitions`
    yogaShopDB.query(getAllmeditationsQuery , (err , result) => {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

meditationsRoute.get(`/:pageId` , (req , res) => {
    let pageId = req.params.pageId
    let getSelectedObjectDataQuery = `SELECT * FROM meditaitions WHERE id=${pageId}`
    yogaShopDB.query(getSelectedObjectDataQuery , (err , result) => {
        if (err) {
            res.send(null)
        } else {
            res.send(result)
        }
    })
})

module.exports = meditationsRoute
let mySql = require(`mysql`)

let yogaShopDB = mySql.createConnection({
    host : 'localhost' ,
    user : 'root' ,
    password : '' ,
    database : 'yoga-shop' ,
})

module.exports = yogaShopDB
let mySql = require(`mysql`)

let yogaShopDB = mySql.createConnection({
        host : 'honareyogayekodakdb' ,
        port : '3306' ,
        user : 'root' ,
        password : 'Y6OxEyUxMFJ4w9l092KUGMId' ,
        database : 'amazing_yonath'
})

yogaShopDB.connect((err) => {
        if (err) {
                console.log('data base is not connected' , err)
        } else {
                console.log('data base is connected')
        }
})

module.exports = yogaShopDB
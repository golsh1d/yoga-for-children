let mySql = require(`mysql`)

let yogaShopDB = mySql.createConnection({
        host : 'sinai.liara.cloud' ,
        port : '33877' ,
        user : 'root' ,
        password : 'uAtXrFtPKKYFOvTMiaBEEfRi' ,
        database : 'quirky_saha'
})

yogaShopDB.connect((err) => {
        if (err) {
                console.log('data base is not connected' , err)
        } else {
                console.log('data base is connected')
        }
})

module.exports = yogaShopDB
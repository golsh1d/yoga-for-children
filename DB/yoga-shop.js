let mySql = require(`mysql`)

let yogaShopDB = mySql.createConnection({
        host : 'honareyogayekodakdb' ,
        port : 3306 ,
        user : 'root' ,
        password : 'KgC0AtYC41kJW2HblvuGDqSV' ,
        database : 'beautiful_franklin'
})

yogaShopDB.connect((err) => {
        if (err) {
                console.log('data base is not connected' , err)
        } else {
                console.log('data base is connected')
        }
})

module.exports = yogaShopDB
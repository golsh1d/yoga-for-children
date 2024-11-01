let mySql = require(`mysql`)

let yogaShopDB = mySql.createConnection({
        host : 'honareyogayekodak-db' ,
        port : 3306 ,
        user : 'root' ,
        password : '0NJoY2p7lVlC0VtHvh7zz17W' ,
        database : 'optimistic_mccarthy'
        // host : 'localhost' ,
        // user : 'root' ,
        // password : '' ,
        // database : 'yoga-shop'
})

yogaShopDB.connect((err) => {
        if (err) {
                console.log('data base is not connected' , err)
        } else {
                console.log('data base is connected')
        }
})

module.exports = yogaShopDB
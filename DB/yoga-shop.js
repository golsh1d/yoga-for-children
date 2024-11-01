let mySql = require(`mysql`)

let yogaShopDB = mySql.createConnection({
        host : 'sinai.liara.cloud' ,
        port : '33682' ,
        user : 'root' ,
        password : 'Z1BzoapfyUHX579R2ymjgnyO' ,
        database : 'epic_hodgkin'
})

yogaShopDB.connect((err) => {
        if (err) {
                console.log('data base is not connected' , err)
        } else {
                console.log('data base is connected')
        }
})

module.exports = yogaShopDB
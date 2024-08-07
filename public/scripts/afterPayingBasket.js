async function sendData() {
    let userName = document.cookie.split('=')
    let localstorageData = JSON.parse(localStorage.getItem('shoppingCardArray'))
    if (localstorageData.length) {
        try {
            let res = await fetch(`http://localhost:3000/api/users/${userName[1]}`)
            let data = await res.json()
            await localstorageData.forEach(async (obj) => {
                let newOrderObj = {
                    userName : userName[1], 
                    productId : obj.id, 
                    price : obj.price, 
                    src : obj.src, 
                    title : obj.title, 
                    value : obj.value, 
                    name : data[0].name,
                    familyName : data[0].familyName,
                    state : data[0].state,
                    city : data[0].city,
                    address : data[0].address,
                    phone : data[0].phone,
                }
                try {
                    let res = await fetch(`http://localhost:3000/api/shoppingCardOrder/` , {
                        method : 'POST' ,
                        headers : {
                            'Content-type' : 'application/json'
                        },
                        body : JSON.stringify(newOrderObj)
                    })

                    let data = await res.json()
                    console.log(data);
                } catch (error) {
                    console.log(error);
                }
            })
            setTimeout(() => {
                location.href = 'http://127.0.0.1:5500/public/index.html'
                localStorage.setItem('shoppingCardArray' , JSON.stringify(''))
            } , 1500)
        } catch (error) {
            console.log(error);
        }
    }
}

//event
window.addEventListener('load', sendData)
async function sendData() {
    let userName = document.cookie.split('=')
    let res = await fetch(`http://localhost:3000/api/users/${userName[1]}`)
    let data = await res.json()
    let newCourseBuyerData = {
        userName : userName[1],
        name : data[0].name,
        familyName : data[0].familyName,
        phone : data[0].phone,
        isPaid : 1
    }
    let sendData = await fetch(`http://localhost:3000/api/courseOrder` , {
        method : 'POST' , 
        headers : {
            'Content-type' : 'application/json'
        } , 
        body : JSON.stringify(newCourseBuyerData)
    })
    setTimeout(() => {
        location.href = 'http://127.0.0.1:5500/public/index.html'
    } , 1500)
}

//event
window.addEventListener('load', sendData)
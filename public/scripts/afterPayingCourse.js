async function showMsg(obj) {
    let res = await fetch(`http://localhost:3000/api/courseOrder/${obj.userName}`)
    let data = await res.json()

    // console.log(data)

    if (data.length) {
        document.body.insertAdjacentHTML(`afterbegin` , 
            `<div class="w-96 h-min p-5 text-white font-DanaDemiBold rounded mt-10 bg-red-800">
            شما قبلا در دوره ثبت نام کرده اید.
            </div>`
        )

        setTimeout(() => {
            location.href = 'http://127.0.0.1:5500/public/index.html'
        } , 2000)

    } else {
        let newCourseBuyerData = {
                userName : obj.userName,
                name : obj.name,
                familyName : obj.familyName,
                phone : obj.phone,
                isPaid : 1
        }

        let respond = await fetch(`http://localhost:3000/api/courseOrder` , {
                method : 'POST' , 
                headers : {
                    'Content-type' : 'application/json'
                } , 
                body : JSON.stringify(newCourseBuyerData)
        })
        let info = await respond.json()

        // console.log(info);

        if (info) {
            document.body.insertAdjacentHTML(`afterbegin` , 
                        `<div class="w-96 h-min p-5 text-white font-DanaDemiBold rounded mt-10" style="background-color: #047857  ;">
                        دوره یوگای کودک با موفقیت برای شما ثبت شد.
                        </div>`
            )
            setTimeout(() => {
                        location.href = 'http://127.0.0.1:5500/public/index.html'
            } , 2000)
        }
    }
}


async function sendData() {
    let userName = document.cookie.split('=')
    let res = await fetch(`http://localhost:3000/api/users/${userName[1]}`)
    let data = await res.json()
    showMsg(data[0])
}

//event
window.addEventListener('load', sendData)
let pannelIconWrapper = document.querySelectorAll('.pannel-icon-wrapper')
let register = document.querySelectorAll('.register')
let pannelUserName = document.querySelector('.pannel-userName')

async function loadUserData() {
    let userName = document.cookie.split('=')
    
    try {
        let res = await fetch(`http://localhost:3000/api/users/${userName[1]}`)
        let data = await res.json()

        if (data.length) {
            pannelIconWrapper[0].style.display = 'flex'
            pannelIconWrapper[1].style.display = 'block'
            register[0].style.display = 'none'
            register[1].style.display = 'none'
            pannelUserName.innerHTML = data[0].userName
        } else {
            pannelIconWrapper[0].style.display = 'none'
            pannelIconWrapper[1].style.display = 'none'
            register[0].style.display = 'flex'
            register[1].style.display = 'block'
        }
    } catch (error) {
        console.log(error)
    }
}

//events
window.addEventListener('load' , loadUserData)
let pannelIconWrapper = document.querySelector('.pannel-icon-wrapper')
let register = document.querySelector('.register')
let pannelUserName = document.querySelector('.pannel-userName')

async function loadUserData() {
    let userName = document.cookie.split('=')
    
    try {
        let res = await fetch(`http://localhost:3000/api/users/${userName[1]}`)
        let data = await res.json()

        if (data.length) {
            pannelIconWrapper.style.display = 'flex'
            register.style.display = 'none'
            pannelUserName.innerHTML = data[0].userName
        } else {
            pannelIconWrapper.style.display = 'none'
            register.style.display = 'flex'
        }

    } catch (error) {
        console.log(error)
    }
}

//events
window.addEventListener('load' , loadUserData)
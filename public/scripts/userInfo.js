let pannelIconWrapper = document.querySelector('.pannel-icon-wrapper')
let register = document.querySelector('.register')

async function loadUserData() {
    let userName = document.cookie.split('=')
    console.log(userName);
    try {
        let res = await fetch(`http://localhost:3000/api/users/${userName[1]}`)
        let data = await res.json()

        if (data.length) {
            pannelIconWrapper.style.display = 'flex'
            register.style.display = 'none'
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
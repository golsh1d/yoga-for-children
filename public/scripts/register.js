let lableElems = document.querySelectorAll('label')
let inputsElems = document.querySelectorAll('input')
let signInSpan = document.querySelector('.sign-in-span')
let signUpSpan = document.querySelector('.sign-up-span')
let wrapper = document.querySelector('.wrapper')
let messages = document.querySelectorAll('.message')
let btns = document.querySelectorAll('button')
let successfulSignInMessage = document.querySelector('.successful-sign-in')
let successfulLogInMessage = document.querySelector('.successful-log-in')
let failedLogInMessage = document.querySelector('.failed-log-in')
let takenUserNameMessage = document.querySelector('.taken-user-name')

// move specific lables
inputsElems.forEach(input => {
    input.addEventListener('focus' , () => {
        lableElems.forEach(lable => {
            if (input.dataset.id === lable.dataset.id) {
                lable.style.transform = 'translateY(-30px)'
                lable.style.transition = 'transform 0.5s ease'
            }
        })
    })
})

inputsElems.forEach(input => {
    input.addEventListener('blur' , () => {
        lableElems.forEach(lable => {
            if (input.dataset.id === lable.dataset.id) {
                if (input.value === '') {
                    lable.style.transform = 'translateY(0px)'
                    lable.style.transition = 'transform 0.5s ease'
                }
            }
        })
    })
})

// move pages
function moveSignInPage() {
    wrapper.style.transform = 'translateX(50%)'
    wrapper.style.transition = 'transform 1s ease'
}

function moveSignUpPage() {
    wrapper.style.transform = 'translateX(0px)'
    wrapper.style.transition = 'transform 1s ease'
}

// hide messages
function hideMessages() {
    inputsElems.forEach(input => {
        input.addEventListener('focus', () => {
            messages.forEach(message => {
                if (message.dataset.id === input.dataset.id) {
                    message.style.opacity = '0'
                    message.style.transition = 'transform 0.5s ease'
                }
            })
        })
    })
}

hideMessages()

// connect to back end funcs

// work with cookies
function setCookie() {
    let userNameValue = inputsElems[2].value
   
    if (userNameValue) {
        let now = new Date()
        now.setTime(now.getTime() + 10 * 24 * 60 * 60 * 10000)

        document.cookie = `userNameYogaForKids=${userNameValue};path=/;expires=${now}`
    }
}

function setCookieForLogIn() {
    let userNameValueForLogIn = inputsElems[0].value
    if (userNameValueForLogIn) {
        let now = new Date()
        now.setTime(now.getTime() + 10 * 24 * 60 * 60 * 10000)
    
        document.cookie = `userNameYogaForKids=${userNameValueForLogIn};path=/;expires=${now}`
    }
}

// pop up sign in message
function showSuccessfulSignIn() {
    successfulSignInMessage.style.display = 'block'
    successfulSignInMessage.style.transition = 'transform 0.5s ease'
    setTimeout(() => {
        successfulSignInMessage.style.display = 'none'
        successfulSignInMessage.style.transition = 'transform 0.5s ease'
        location.href = 'http://127.0.0.1:5500/public/index.html'
    } , 3000)
}

// send data to back end
async function sendDataToBackEnd() {
    let userNameValue = inputsElems[2].value
    let passwordValue = inputsElems[3].value

    let userInfoObj = {
        userName : userNameValue,
        password : passwordValue,
    }
        
    try {
        let res = await fetch('http://localhost:3000/api/users/newUserInfo' , {
        method : 'POST' ,
        headers : {
            "Content-type" : "application/json"
        },
        body : JSON.stringify(userInfoObj),
        })

        console.log(res)
        showSuccessfulSignIn()

    } catch (err) {
        console.log(err)
    }
}

// clear inputs 
function clearInputs() {
    inputsElems.forEach(input => {
        input.value = ''
    })
}

// move down all lables
function moveDownAllLables() {
    lableElems.forEach(lable => {
        lable.style.transform = 'translateY(0px)'
    })
}

// recieve data form back end

async function connectToBackEnd() {
    // check validation
    if ((inputsElems[2].value === '' || inputsElems[2].value.length < 3 || inputsElems[2].value.length > 20) && (inputsElems[3].value === '' || inputsElems[3].value.length < 3 || inputsElems[3].value.length > 30)) {
        messages[2].style.opacity = '1'
        messages[2].style.transition = 'transform 0.5s ease' 
        messages[4].style.opacity = '1'
        messages[4].style.transition = 'transform 0.5s ease'
    } else if ((inputsElems[2].value === '' || inputsElems[2].value.length < 3 || inputsElems[2].value.length > 20) && (inputsElems[3].value.length >= 3 || inputsElems[3].value.length <= 30)) {
        messages[2].style.opacity = '1'
        messages[2].style.transition = 'transform 0.5s ease'
    } else if ((inputsElems[2].value.length >= 3 || inputsElems[2].value.length <= 20) && (inputsElems[3].value === '' || inputsElems[3].value.length < 3 || inputsElems[3].value.length > 30)) {
        messages[4].style.opacity = '1'
        messages[4].style.transition = 'transform 0.5s ease'
    } else {
        let userNameValue = inputsElems[2].value

        try {
            let res = await fetch(`http://localhost:3000/api/users/${userNameValue}`)
            let data = await res.json()

            if (data.length) {
                takenUserNameMessage.style.opacity = '1'
                takenUserNameMessage.style.transform = 'transition 0.5s ease'
            } else {
                setCookie()
                sendDataToBackEnd()
            }

        } catch (error) {
            console.log(error)
        }
    }
    clearInputs()
    moveDownAllLables()
}

async function getUserInfos() {
    let userNameValue = inputsElems[0].value
    let passValue = inputsElems[1].value

    try {
        let res = await fetch(`http://localhost:3000/api/users/${userNameValue}/${passValue}`)
        let data = await res.json()

        if (data.length) {
            successfulLogInMessage.style.display = 'block'
            successfulLogInMessage.style.transition = 'transform 0.5s ease'
            setCookieForLogIn()
            setTimeout(() => {
                successfulLogInMessage.style.display = 'none'
                successfulLogInMessage.style.transition = 'transform 0.5s ease'
                location.href = 'http://127.0.0.1:5500/public/index.html'
            }, 3000)
        } else {
            failedLogInMessage.style.display = 'block'
            failedLogInMessage.style.transition = 'transform 0.5s ease'
            setCookieForLogIn()
            setTimeout(() => {
                failedLogInMessage.style.display = 'none'
                failedLogInMessage.style.transition = 'transform 0.5s ease'
            }, 3000)
        }

        clearInputs()
        moveDownAllLables()
           
    } catch (error) {
        console.log(error)
    }
}

// events
signInSpan.addEventListener('click', moveSignInPage)
signUpSpan.addEventListener('click', moveSignUpPage)
btns[1].addEventListener('click' , connectToBackEnd)
btns[0].addEventListener('click' , getUserInfos)
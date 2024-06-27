let lableElems = document.querySelectorAll('label')
let inputsElems = document.querySelectorAll('input')
let signInSpan = document.querySelector('.sign-in-span')
let signUpSpan = document.querySelector('.sign-up-span')
let wrapper = document.querySelector('.wrapper')
let messages = document.querySelectorAll('.message')

// move lables
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

// show messages
function checkUserNameValidation() {
    if (inputsElems[2].value === '' || inputsElems[2].value.length < 3 || inputsElems[2].value.length > 20) {
        messages[2].style.display = 'block'
        messages[2].style.transition = 'transform 0.5s ease'
    }
}

function checkPassWordValidation() {
    if (inputsElems[3].value === '' || inputsElems[3].value.length < 3 || inputsElems[3].value.length > 30) {
        messages[3].style.display = 'block'
        messages[3].style.transition = 'transform 0.5s ease'
    }
}

// hide messages
function hideMessages() {
    inputsElems.forEach(input => {
        input.addEventListener('focus', () => {
            messages.forEach(message => {
                if (message.dataset.id === input.dataset.id) {
                    message.style.display = 'none'
                    message.style.transition = 'transform 0.5s ease'
                }
            })
        })
    })
}

hideMessages()

// events
signInSpan.addEventListener('click', moveSignInPage)
signUpSpan.addEventListener('click', moveSignUpPage)
inputsElems[2].addEventListener('blur' , checkUserNameValidation)
inputsElems[3].addEventListener('blur' , checkPassWordValidation)

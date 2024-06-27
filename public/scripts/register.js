let lableElems = document.querySelectorAll('label')
let inputsElems = document.querySelectorAll('input')
let signInSpan = document.querySelector('.sign-in-span')
let signUpSpan = document.querySelector('.sign-up-span')
let wrapper = document.querySelector('.wrapper')

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

// events
signInSpan.addEventListener('click', moveSignInPage)
signUpSpan.addEventListener('click', moveSignUpPage)
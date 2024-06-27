let lableElems = document.querySelectorAll('label')
let inputsElems = document.querySelectorAll('input')

// move lables
function moveUserNameLableUp() {
    lableElems[0].style.transform = 'translateY(-30px)'
    lableElems[0].style.transition = 'transform .5s ease'
}

function moveUserNameLabledown() {
    if (inputsElems[0].value === '') {
        lableElems[0].style.transform = 'translateY(0px)'
        lableElems[0].style.transition = 'transform .5s ease'
    }
}

function movePassLableUp() {
    lableElems[1].style.transform = 'translateY(-30px)'
    lableElems[1].style.transition = 'transform .5s ease'
}

function movePassLabledown() {
    if (inputsElems[1].value === '') {
        lableElems[1].style.transform = 'translateY(0px)'
        lableElems[1].style.transition = 'transform .5s ease'
    }
}


// events
inputsElems[0].addEventListener('focus' , moveUserNameLableUp)
inputsElems[0].addEventListener('blur' , moveUserNameLabledown)
inputsElems[1].addEventListener('focus' , movePassLableUp)
inputsElems[1].addEventListener('blur' , movePassLabledown)
let pannelIcon = document.querySelector('.pannel-icon')
let sidePannel = document.querySelector('.side-pannel')
let overlay = document.querySelector('.overlay')
let closeElem = document.querySelector('.x-mark')

function showSidePannel() {
    sidePannel.style.transform = 'translateX(0px)'
    sidePannel.style.transition = 'transform 0.5s ease'
    overlay.style.display = 'block'
}

function hideSidePannel() {
    sidePannel.style.transform = 'translateX(300px)'
    sidePannel.style.transition = 'transform 0.5s ease'
    overlay.style.display = 'none'
}

pannelIcon.addEventListener('click', showSidePannel)
closeElem.addEventListener('click', hideSidePannel)
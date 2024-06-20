const darkThemeIcon = document.querySelector(".dark-theme-icon");
const lightThemeIcon = document.querySelector(".light-theme-icon");
let hamburgerIcon = document.querySelector('#hamburger')
let hamburgerFirstLine = document.querySelector('#hamburger-first-line')
let hamburgerSecondLine = document.querySelector('#hamburger-second-line')
let hamburgerThirdLine = document.querySelector('#hamburger-third-line')
let checkBoxInput = document.querySelector('#ham')

//changing the theme
function turnToDarkMode() {
    document.documentElement.classList.add("dark");
    darkThemeIcon.style.display = 'none'
    lightThemeIcon.style.display = 'block'
    localStorage.setItem('theme', 'dark')
}

function turnToLightMode() {
    document.documentElement.classList.remove("dark");
    darkThemeIcon.style.display = 'block'
    lightThemeIcon.style.display = 'none'
    localStorage.setItem('theme', 'light')
}

window.addEventListener('load',() => {
    let theme = localStorage.getItem('theme')
    console.log(theme);
    if (theme === 'dark') {
        turnToDarkMode()
    }
    else {
        turnToLightMode()
    }
})

// animation for hamburger icon
function animationForIcon(event) {
    let isChecked = event.target.checked
    if(isChecked) {
        console.log("change");
        hamburgerSecondLine.style.display = 'none'
        hamburgerFirstLine.style.transform = 'rotate(45deg) translateY(3.5px) translateX(4px)'
        hamburgerFirstLine.style.transition = 'transform .3s ease'
        hamburgerThirdLine.style.transform = 'rotate(-45deg) translateY(0.5px) translateX(0.5px)'
        hamburgerThirdLine.style.transition = 'transform .3s ease'
     }else{
        console.log("unchange");
        hamburgerSecondLine.style.display = 'block'
        hamburgerFirstLine.style.transform = 'rotate(0deg) translateY(0px) translateX(0px)'
        hamburgerFirstLine.style.transition = 'transform .3s ease'
        hamburgerThirdLine.style.transform = 'rotate(0deg) translateY(0px) translateX(0px)'
        hamburgerThirdLine.style.transition = 'transform .3s ease'
     }
}


darkThemeIcon.addEventListener('click', turnToDarkMode)
lightThemeIcon.addEventListener('click', turnToLightMode)
checkBoxInput.addEventListener('change', animationForIcon)
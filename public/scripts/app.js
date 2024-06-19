const darkThemeIcon = document.querySelector(".dark-theme-icon");
const lightThemeIcon = document.querySelector(".light-theme-icon");
let hamburgerIcon = document.querySelector('#hamburger')
let hamburgerFirstLine = document.querySelector('#hamburger-first-line')
let hamburgerSecondLine = document.querySelector('#hamburger-second-line')
let hamburgerThirdLine = document.querySelector('#hamburger-third-line')

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
hamburgerIcon.addEventListener('click', () => {
    hamburgerSecondLine.style.display = 'none'
    hamburgerFirstLine.style.transform = 'rotate(45deg) translateY(3.5px) translateX(4px)'
    hamburgerFirstLine.style.transition = 'transform .5s ease'
    hamburgerThirdLine.style.transform = 'rotate(-45deg) translateY(0.5px) translateX(0.5px)'
    hamburgerThirdLine.style.transition = 'transform .5s ease'
})












darkThemeIcon.addEventListener('click', turnToDarkMode)
lightThemeIcon.addEventListener('click', turnToLightMode)


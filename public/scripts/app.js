const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
let hamburgerIcon = document.querySelector('#hamburger')
let hamburgerFirstLine = document.querySelector('#hamburger-first-line')
let hamburgerSecondLine = document.querySelector('#hamburger-second-line')
let hamburgerThirdLine = document.querySelector('#hamburger-third-line')
let checkBoxInput = document.querySelector('#ham')
let liWithSub = document.querySelector('.has-sub-menu')
let liSub = document.querySelector('.sub-menu')
let chevronUp = document.querySelector('.chevron-up')
let sideNav = document.querySelector('.side-nav')
let overlayElem = document.querySelector('.overlay')
let meditationElem = document.querySelector('#meditations')
let coursesElem = document.querySelector('#courses')
let meditationContainer = document.querySelector('#meditation-slider')
let coursesContainer = document.querySelector('#courses-section')
let footerChevronUpElem = document.querySelector('#jump-to-top')
let headerElems = document.querySelectorAll('.header')
let phoneNumElem = document.querySelector('#copy-to-clipboard')
let copybadgeElem = document.querySelector('#copied')
let meditationSwiperWrapper = document.querySelector('#meditation-swiper-wrapper')
let pannelIcon = document.querySelector('.pannel-icon')
let pannelContainer = document.querySelector('.pannel-container')
let pannelSubIcon = document.querySelector('.pannel-sub-icon')
let pannelSubMenu = document.querySelector('.pannel-sub-menu')
let pannelSubli = document.querySelector('.has-pannel-sub')
let registerPopupWrapper = document.querySelector('.register-pop-up-wrapper')
let closeRegisterPopup = document.querySelector('.close-register-pop-up')
let logOutBtn = document.querySelector('.log-out-btn')

//changing the theme
toggleThemeBtns.forEach(function (btn) {
    btn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})
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

// changing display for side nav sub menu
let isUp = true
function changeSubmenuDisplay () {
    if (isUp) {
        chevronUp.style.transform = 'rotate(180deg)'
        chevronUp.style.transition = 'transform .2s ease'
        liSub.style.display = 'block'
        liSub.style.transition = 'all .2s ease'
        isUp = false
    } else {
        chevronUp.style.transform = 'rotate(0deg)'
        chevronUp.style.transition = 'transform .2s ease'
        liSub.style.display = 'none'
        liSub.style.transition = 'all .2s ease'
        isUp = true
    }
}

// move side nav
let isRight = true
function moveSideNav() {
    if (isRight) {
        sideNav.style.transform = 'translateX(0px)'
        sideNav.style.transition = 'transform .5s ease'
        isRight = false
        overlayElem.style.display = 'block'
    } else {
        sideNav.style.transform = 'translateX(256px)'
        sideNav.style.transition = 'transform .5s ease'
        isRight = true
        overlayElem.style.display = 'none'
    }
}

// scroll to specific element
function scrollToMeditationSection() {
    meditationContainer.scrollIntoView({ behavior : 'smooth'})
}

function scrollToCoursesSection() {
    coursesContainer.scrollIntoView({ behavior : 'smooth'})
}

function scrollToTop() {
    headerElems.forEach( header => {
        header.scrollIntoView({ behavior : 'smooth'})
    })
}

// copy phone number to clipboard
function copyToClipboard() {
    let clipBoardText = '09122600520'

    if (window.navigator.clipboard) {
        window.navigator.clipboard.writeText(clipBoardText)
        copybadgeElem.style.display = 'block'
        setTimeout(() => {
            copybadgeElem.style.display = 'none'
        } , 700)
    }
}

// load dynamic data
function loadmeditation() {
    fetch(`http://localhost:3000/api/meditations/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            meditationSwiperWrapper.insertAdjacentHTML(`beforeend` , 
                `<div class="swiper-slide">
                    <a href="singleMeditation.html?id=${obj.id}" class="inline-block w-full h-min p-3 md:p-5
                     bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                    <div class="hover:scale-110 overflow-hidden transition-transform mb-5
                    dark:bg-white/90 dark:rounded-xl">
                        <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${obj.src}" alt="">
                    </div>
                    <div>
                        <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                    </div>
                    </a>
                </div>`)
            }
        )
    })
    
}

//pannel
let isHide = true
function showPannel() {
    if (isHide) {
        pannelContainer.style.display = 'block'
        isHide = false
    } else {
        pannelContainer.style.display = 'none'
        isHide = true
    }
}

let isShown = true
function showPannelSub() {
    if(isShown) {
        pannelSubIcon.style.transform = 'rotate(180deg)'
        pannelSubIcon.style.transition = 'transform 0.2s ease'
        pannelSubli.style.marginBottom = '0px'
        pannelSubMenu.style.display = 'block'
        pannelSubMenu.style.transition = 'transform 0.2s ease'
        isShown = false
    } else {
        pannelSubIcon.style.transform = 'rotate(0deg)'
        pannelSubIcon.style.transition = 'transform 0.2s ease'
        pannelSubli.style.marginBottom = '24px'
        pannelSubMenu.style.display = 'none'
        pannelSubMenu.style.transition = 'transform 0.2s ease'
        isShown = true
    }
}

function showRegisterMsg() {
    let userName = document.cookie.split('=')
    if (userName.length === 1) {
        registerPopupWrapper.style.display = 'flex'
    } else {
        location.href = 'http://127.0.0.1:5500/public/info.html'
    }
}

function closeRegisterMsg() {
    registerPopupWrapper.style.display = 'none'
}

function logOut() {
    document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, name => location.hostname.split('.').reverse().reduce(domain => (domain=domain.replace(/^\.?[^.]+/, ''),document.cookie=`${name}=;max-age=0;path=/;domain=${domain}`,domain), location.hostname));
    location.href = 'http://127.0.0.1:5500/public/index.html'
}

// events
checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
meditationElem.addEventListener('click' , scrollToMeditationSection)
coursesElem.addEventListener('click' , scrollToCoursesSection)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadmeditation)
pannelIcon.addEventListener('click' , showPannel)
pannelSubIcon.addEventListener('click' , showPannelSub)
closeRegisterPopup.addEventListener('click' , closeRegisterMsg)
logOutBtn.addEventListener('click' , logOut)
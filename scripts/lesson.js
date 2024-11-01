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
let footerChevronUpElem = document.querySelector('#jump-to-top')
let headerElems = document.querySelectorAll('.header')
let phoneNumElem = document.querySelector('#copy-to-clipboard')
let copybadgeElem = document.querySelector('#copied')
let swiperWrapper = document.querySelector('.swiper-wrapper')
let productWrapper = document.querySelector('.product-wrapper')
let descriptionWrapper = document.querySelector('.desc')
let lessonWrapper = document.querySelector('.lesson-wrapper')
let lessonsSection = document.querySelector('.lessons')
let openCloseElem = document.querySelector('.openClose')
let courseDesc = document.querySelector('.course-desc')
let coursePrice = document.querySelector('.course-price')
let courseLessonCount = document.querySelector('.course-lesson-count')
let courseDurationTime = document.querySelector('.course-duration-time')
let detailWrapper = document.querySelector('.detail-wrapper')
let lessonContainer = document.querySelector('.lesson-container')
let lessonTitle = document.querySelector('.lesson-title')
let lessonDesc = document.querySelector('.lesson-desc')
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
        liSub.style.transition = 'all 2s ease'
        isUp = false
    } else {
        chevronUp.style.transform = 'rotate(0deg)'
        chevronUp.style.transition = 'transform .2s ease'
        liSub.style.display = 'none'
        liSub.style.transition = 'all 2s ease'
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

let locationSearch = location.search
let searchParams = new URLSearchParams(locationSearch)
let pageId = searchParams.get('id')

function loadLessonData() {
    fetch(`https://honareyogayekodak.liara.run/api/courseDataDetailAllLessons/${pageId}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            lessonContainer.insertAdjacentHTML(`afterbegin`,
                    `<div class="w-full h-[200px] md:h-[300px] xl:h-[400px] mb-8 drop-shadow-lg">
                        <video class="w-full h-full rounded-3xl" controls controlslist="nodownload" src="${obj.src}" oncontextmenu="preventDownloading(event)"></video>
                    </div>
                    `
            )
            lessonTitle.innerHTML = obj.title
            lessonDesc.innerHTML = obj.description
        })
    })
}

function loadLessonInfo() {
    fetch(`https://honareyogayekodak.liara.run/api/courseDataDetailAllLessons/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            lessonsSection.insertAdjacentHTML(`beforeend`,
                `<div class="flex items-end justify-between w-full py-4 border-b-[1px] border-black/10">
                    <a href="lesson.html?id=${obj.id}" class="inline-flex items-end gap-x-2.5 md:gap-x-3.5 cursor-pointer">
                        <p class="w-8 h-6 md:h-7 bg-white/90 flex items-end justify-center font-DanaMedium rounded">${obj.id}</p>
                        <p class="font-DanaMedium text-sm md:text-base">${obj.title}</p>
                    </a>
                    <div class="hidden md:flex items-end gap-x-2.5 md:gap-x-3.5">
                        <p class="font-DanaMedium text-sm md:text-base">${obj.duration}</p>
                        <svg class="w-6 h-6 md:w-7 md:h-7">
                            <use xlink:href="#unLock"></use>
                        </svg>
                    </div>
                </div>`
            )
        })
    })
}

//pannel
let isHide = true
function showPannel() {
    if (isHide) {
        pannelContainer.style.display = 'block'
        overlayElem.style.display = 'block'
        isHide = false
    } else {
        pannelContainer.style.display = 'none'
        overlayElem.style.display = 'none'
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
        location.href = 'https://honareyogayekodak.liara.run/info.html'
    }
}

function closeRegisterMsg() {
    registerPopupWrapper.style.display = 'none'
}

function logOut() {
    document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, name => location.hostname.split('.').reverse().reduce(domain => (domain=domain.replace(/^\.?[^.]+/, ''),document.cookie=`${name}=;max-age=0;path=/;domain=${domain}`,domain), location.hostname));
    location.href = 'https://honareyogayekodak.liara.run/index.html'
}

//prevent downloading
function preventDownloading(event) {
    event.preventDefault()
}

// events
checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadLessonData)
window.addEventListener('load' , loadLessonInfo)
pannelIcon.addEventListener('click' , showPannel)
pannelSubIcon.addEventListener('click' , showPannelSub)
closeRegisterPopup.addEventListener('click' , closeRegisterMsg)
logOutBtn.addEventListener('click' , logOut)
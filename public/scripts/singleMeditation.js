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
let sideShoppingCard = document.querySelector('.side-shopping-card')
let xMarkIcon = document.querySelector('.x-mark')
let shoppingCardIcon = document.querySelector('.shopping-card')
let overlayElem = document.querySelector('.overlay')
let footerChevronUpElem = document.querySelector('#jump-to-top')
let headerElems = document.querySelectorAll('.header')
let phoneNumElem = document.querySelector('.copy-to-clipboard')
let copybadgeElem = document.querySelector('.copied')
let swiperWrapper = document.querySelector('.swiper-wrapper')
let productWrapper = document.querySelector('.product-wrapper')
let swiperSlide1 = document.querySelector('.swiper-slide1')
let swiperSlide2 = document.querySelector('.swiper-slide2')
let swiperSlide3 = document.querySelector('.swiper-slide3')
let swiperSlide4 = document.querySelector('.swiper-slide4')
let allCardsInfo = [
    {id : 1, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "135,000"},
    {id : 2, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "145,000"},
    {id : 3, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "155,000"},
    {id : 4, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "165,000"},
    {id : 5, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "175,000"},
    {id : 6, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "185,000"},
    {id : 7, src : "./img/logo.png", title : "مراقبه های یوگای کودک", desc : "این مراقبه ها مخصوص یوگای کودک هستند و شما با استفاده از این مراقبه ها در کلاس یوگای کودک خود و یا در خانه می توانید کودک خود را سرگرم کنید." ,audioSrc : "./audio/radio-motamem-16-Time-management1.mp3" , price : "195,000"},
]

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

// move shopping card
function moveShoppingCardToRight() {
    sideShoppingCard.style.transform = 'translateX(0px)'
    sideShoppingCard.style.transition = 'transform .5s ease'
    overlayElem.style.display = 'block'
}

function moveShoppingCardToLeft() {
    sideShoppingCard.style.transform = 'translateX(-256px)'
    sideShoppingCard.style.transition = 'transform .5s ease' 
    overlayElem.style.display = 'none'
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

function loadData() {
    allCardsInfo.forEach(obj => {
        if (obj.id == pageId) {
            productWrapper.insertAdjacentHTML(`beforeend`,
            `<div class="container px-5 md:px-16 mt-14 md:mt-44 flex flex-col md:flex-row items-center md:justify-between gap-y-10 md:gap-y-0">
            <div class="w-[60%] md:w-[30%] h-min">
                <div class="w-full h-full p-3 md:p-5 rounded-3xl">
                    <img src="${obj.src}" alt="">
                </div>
            </div>
            <div class="w-full md:w-[60%] h-min text-zinc-700 dark:text-gray-100">
                <p class="font-MorabbaMedium text-lg md:text-xl lg:text-2xl xl:text-3xl mb-7 md:mb-10">${obj.title}</p>
                <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-justify mb-7 md:mb-10">${obj.desc}
                </p>
                <div class="w-full h-min p-[2px] bg-zinc-700 dark:bg-transparent rounded-full">
                    <audio class="w-full" controls src="${obj.audioSrc}"></audio>
                </div>
                <a dir="ltr" class="inline-flex text-zinc-700 dark:text-gray-100 w-full items-center justify-center text-sm md:text-base" href="${obj.audioSrc}" download="myAudio.mp3">Download</a>
            </div>
            </div>`)
        }
    })
}

// events
checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
shoppingCardIcon.addEventListener('click' , moveShoppingCardToRight)
xMarkIcon.addEventListener('click' , moveShoppingCardToLeft)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadData)
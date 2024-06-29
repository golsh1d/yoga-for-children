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

// fetch slider data from back end
async function fetchSliderData() {
    try {
        let res = await fetch('https://ekyr3.wiremockapi.cloud/boardGameSlider')
        let data = await res.json()
        
        console.log(data)

        data.forEach(info => {
            swiperWrapper.insertAdjacentHTML(`beforeend` , 
                `<div class="swiper-slide">
                        <a href="#" class="inline-block w-full h-min p-3 md:p-5
                        bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                        <div class="hover:scale-110 overflow-hidden transition-transform mb-5">
                            <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${info.src}" alt="">
                        </div>
                        <div class="flex flex-col gap-y-2.5">
                            <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${info.title}</p>
                            <div class="w-full flex items-center justify-between">
                                <p class="font-Dana text-xs lg:text-sm tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1"><span class="font-DanaMedium text-base lg:text-xl">${info.price}</span>تومان</p>
                                <div class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 text-gray-400 dark:bg-zinc-800 hover:text-white hover:bg-lime-900 dark:hover:bg-lime-900
                                 flex items-center justify-center">
                                    <svg class="w-4 h-4 md:w-5 md:h-5">
                                        <use xlink:href="#shopping-card"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>`)
        })
    } catch (error) {
        console.log(error);
    }
}

fetchSliderData()

// fetch all product data from back end
async function fetchProductData() {
    try {
        let res = await fetch ('https://9g47l.wiremockapi.cloud/boardGameInfo')
        let data = await res.json()

        data.forEach(info => {
            productWrapper.insertAdjacentHTML(`beforeend` , 
                `<a href="#" class="inline-block w-full h-min p-3 md:p-5
                        bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                        <div class="hover:scale-110 overflow-hidden transition-transform mb-5">
                            <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${info.src}" alt="">
                        </div>
                        <div class="flex flex-col gap-y-2.5">
                            <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${info.title}</p>
                            <div class="w-full flex items-center justify-between">
                                <p class="font-Dana text-xs lg:text-sm tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1"><span class="font-DanaMedium text-base lg:text-xl">${info.price}</span>تومان</p>
                                <div class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 text-gray-400 dark:bg-zinc-800 hover:text-white hover:bg-lime-900 dark:hover:bg-lime-900
                                 flex items-center justify-center">
                                    <svg class="w-4 h-4 md:w-5 md:h-5">
                                        <use xlink:href="#shopping-card"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                </a>`
            )
        })
    } catch (error) {
        console.log(error);
    }
}

fetchProductData()

checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
shoppingCardIcon.addEventListener('click' , moveShoppingCardToRight)
xMarkIcon.addEventListener('click' , moveShoppingCardToLeft)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
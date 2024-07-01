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
let cardElem = document.querySelector('#cards')
let boardGameElem = document.querySelector('#board-games')
let meditationElem = document.querySelector('#meditations')
let coursesElem = document.querySelector('#courses')
let cardSliderContainer = document.querySelector('#card-slider')
let boardGameContainer = document.querySelector('#board-game-slider')
let meditationContainer = document.querySelector('#meditation-slider')
let coursesContainer = document.querySelector('#courses-section')
let footerChevronUpElem = document.querySelector('#jump-to-top')
let headerElems = document.querySelectorAll('.header')
let phoneNumElem = document.querySelector('#copy-to-clipboard')
let copybadgeElem = document.querySelector('#copied')
let cardSwiperWrapper = document.querySelector('#card-swiper-wrapper')
let boardGameSwiperWrapper = document.querySelector('#boardgame-swiper-wrapper')
let meditationSwiperWrapper = document.querySelector('#meditation-swiper-wrapper')
let blogSwiperWrapper = document.querySelector('#blog-swiper-wrapper')

// database
let CardSlidrerInfo = [
    {id : 1, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "135,000"},
    {id : 2, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "145,000"},
    {id : 3, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "155,000"},
    {id : 4, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "165,000"},
    {id : 5, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "175,000"},
    {id : 6, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "185,000"},
    {id : 7, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "195,000"},
]
let BoardGameSliderInfo = [
    {id : 1, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "135,000"},
    {id : 2, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "145,000"},
    {id : 3, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "155,000"},
    {id : 4, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "165,000"},
    {id : 5, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "175,000"},
    {id : 6, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "185,000"},
    {id : 7, src : "./img/logo.png", title : "بوردگیم های یوگای کودک", price : "195,000"},
]
let meditationSliderInfo = [
    {id : 1, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
    {id : 2, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
    {id : 3, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
    {id : 4, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
    {id : 5, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
    {id : 6, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
    {id : 7, src : "./img/logo.png", title : "مراقبه های یوگای کودک"},
]
let blogSliderInfo = [
    {id : 1, src : "./img/blogimg.png" , title : "فواید یوگا برای کودکان" , author : "ندا تاری وردی" , desc : "در این مقاله سعی داریم تا به فواید یوگا برای کودکان و نحوه برگزاری کلاس های هنر یوگای کودک بپردازیم."},
    {id : 2, src : "./img/blogimg.png" , title : "فواید یوگا برای کودکان" , author : "ندا تاری وردی" , desc : "در این مقاله سعی داریم تا به فواید یوگا برای کودکان و نحوه برگزاری کلاس های هنر یوگای کودک بپردازیم."},
    {id : 3, src : "./img/blogimg.png" , title : "فواید یوگا برای کودکان" , author : "ندا تاری وردی" , desc : "در این مقاله سعی داریم تا به فواید یوگا برای کودکان و نحوه برگزاری کلاس های هنر یوگای کودک بپردازیم."},
    {id : 4, src : "./img/blogimg.png" , title : "فواید یوگا برای کودکان" , author : "ندا تاری وردی" , desc : "در این مقاله سعی داریم تا به فواید یوگا برای کودکان و نحوه برگزاری کلاس های هنر یوگای کودک بپردازیم."},
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
function scrollToCardSection() {
    cardSliderContainer.scrollIntoView({ behavior : 'smooth'})
}

function scrollToBoardGameSection() {
    boardGameContainer.scrollIntoView({ behavior : 'smooth'})
}

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
function loadCards() {
    CardSlidrerInfo.forEach(obj => {
        cardSwiperWrapper.insertAdjacentHTML(`beforeend` , 
            `<div class="swiper-slide">
                <a href="singleCard.html?id=${obj.id}" class="inline-block w-full h-min p-3 md:p-5
                 bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                <div class="hover:scale-110 overflow-hidden transition-transform mb-5">
                    <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${obj.src}" alt="">
                </div>
                <div class="flex flex-col gap-y-2.5">
                    <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                    <div class="w-full flex items-center justify-between">
                        <p class="font-Dana text-xs lg:text-sm tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1"><span class="font-DanaMedium text-base lg:text-xl">${obj.price}</span>تومان</p>
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
        }
    )
}

function loadBoardGames() {
    BoardGameSliderInfo.forEach(obj => {
        boardGameSwiperWrapper.insertAdjacentHTML(`beforeend` , 
            `<div class="swiper-slide">
                <a href="singleBoardGame.html?id=${obj.id}" class="inline-block w-full h-min p-3 md:p-5
                 bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                <div class="hover:scale-110 overflow-hidden transition-transform mb-5">
                    <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${obj.src}" alt="">
                </div>
                <div class="flex flex-col gap-y-2.5">
                    <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                    <div class="w-full flex items-center justify-between">
                        <p class="font-Dana text-xs lg:text-sm tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1"><span class="font-DanaMedium text-base lg:text-xl">${obj.price}</span>تومان</p>
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
        }
    )
}

function loadmeditation() {
    meditationSliderInfo.forEach(obj => {
        meditationSwiperWrapper.insertAdjacentHTML(`beforeend` , 
            `<div class="swiper-slide">
                <a href="singleMeditation.html?id=${obj.id}" class="inline-block w-full h-min p-3 md:p-5
                 bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                <div class="hover:scale-110 overflow-hidden transition-transform mb-5">
                    <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${obj.src}" alt="">
                </div>
                <div>
                    <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                </div>
                </a>
            </div>`)
        }
    )
}

function loadblogs() {
    blogSliderInfo.forEach(obj => {
        blogSwiperWrapper.insertAdjacentHTML(`beforeend`, 
            `<div class="swiper-slide">
                <div class="flex flex-row justify-around items-center w-full h-min p-3 md:p-5 bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                    <div class="hover:scale-110 overflow-hidden transition-transform w-[30%]">
                        <img class="w-full" src="${obj.src}" alt="">
                    </div>
                    <div class="flex flex-col gap-y-2 md:gap-y-1 lg:gap-y-2 w-[60%] h-min">
                        <p class="font-DanaDemiBold text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                        <p class="font-Dana text-[10px] lg:text-xs xl:text-sm text-lime-900 dark:text-lime-100 line-clamp-2 tracking-tightest">نویسنده : ${obj.author}</p>
                        <p class="font-DanaMedium text-xs lg:text-sm xl:text-base text-zinc-700 dark:text-gray-100 mb-3 md:mb-5 line-clamp-2">${obj.desc}</p>
                        <div class="w-full text-left">
                            <a href="#" class="group inline-flex items-center justify-between font-DanaMedium">
                                <p class="text-xs lg:text-sm tracking-tighter text-zinc-700 dark:text-gray-100  group-hover:text-zinc-500 dark:group-hover:text-lime-100 transition-colors">مشاهده</p>
                                <svg class="w-3 h-3 mt-[-2px] text-zinc-700 dark:text-gray-100  group-hover:text-zinc-500 dark:group-hover:text-lime-100 group-hover:-translate-x-1 transition-all">
                                    <use xlink:href="#chevron-left"></use>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`
        )
    })
}


// events
checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
shoppingCardIcon.addEventListener('click' , moveShoppingCardToRight)
xMarkIcon.addEventListener('click' , moveShoppingCardToLeft)
cardElem.addEventListener('click' , scrollToCardSection)
boardGameElem.addEventListener('click' , scrollToBoardGameSection)
meditationElem.addEventListener('click' , scrollToMeditationSection)
coursesElem.addEventListener('click' , scrollToCoursesSection)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadCards)
window.addEventListener('load' , loadBoardGames)
window.addEventListener('load' , loadmeditation)
window.addEventListener('load' , loadblogs)
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
let headerShoppingCard = document.querySelector('.header-shopping-card')
let headerShoppingCardPrice = document.querySelector('.header-shopping-card-price')
let headerShoppingCardItemCount = document.querySelector('.header-shopping-card-item-count')
let sideShoppingCardBody = document.querySelector('.side-shopping-card-body')
let sideShoppingCardPrice = document.querySelector('.side-shopping-card-price')
let pannelIcon = document.querySelector('.pannel-icon')
let pannelContainer = document.querySelector('.pannel-container')
let pannelSubIcon = document.querySelector('.pannel-sub-icon')
let pannelSubMenu = document.querySelector('.pannel-sub-menu')
let pannelSubli = document.querySelector('.has-pannel-sub')
let shoppingCardBtn = document.querySelectorAll('.shopping-card-btn')
let registerPopupWrapper = document.querySelector('.register-pop-up-wrapper')
let closeRegisterPopup = document.querySelector('.close-register-pop-up')
let shoppingCardProductArray = []

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
    fetch(`http://localhost:3000/api/boardgames/`)
   .then(res => res.json())
   .then(data => {
       data.forEach(obj => {
           if (obj.id == pageId) {
               swiperSlide1.insertAdjacentHTML(`afterbegin` , 
               `<img class="w-full h-full" src="${obj.src}" alt="">`)
               swiperSlide2.insertAdjacentHTML(`afterbegin`,
               `<img class="w-full h-full" src="${obj.src2}" alt="">`)
               swiperSlide3.insertAdjacentHTML(`afterbegin`,
               `<img class="w-full h-full" src="${obj.src3}" alt="">`)
               swiperSlide4.insertAdjacentHTML(`afterbegin`,
               `<img class="w-full h-full" src="${obj.src4}" alt="">`)
               productWrapper.insertAdjacentHTML(`beforeend`,
               `<div class="w-full md:w-[60%] h-min text-zinc-700 dark:text-gray-100">
                       <p class="font-MorabbaBold text-zinc-700 dark:text-gray-100 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6">${obj.title}</p>
                       <div class="mb-8">
                           <div class="flex items-center gap-x-2 mb-5">
                           <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                               <use xlink:href="#exclamation"></use>
                           </svg>
                           <p class="font-MorabbaBold text-zinc-700 dark:text-gray-100 text-base md:text-lg xl:text-xl tracking-tight">مشخصات فنی</p>
                           </div>
                           <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
                               <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                               font-Dana">
                               <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                   <use xlink:href="#document"></use>
                               </svg>
                               <div class="space-y-0.5 sm:space-y-1">
                                   <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">ابعاد</p>
                                   <p class="block text-sm opacity-70 text-zinc-700 dark:text-gray-100">${obj.size} cm</p>
                               </div>
                               </div>
                               <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                               font-Dana">
                               <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                   <use xlink:href="#documents"></use>
                               </svg>
                               <div class="space-y-0.5 sm:space-y-1">
                                   <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">تعداد</p>
                                   <p class="block text-sm opacity-70 text-zinc-700 dark:text-gray-100">${obj.count} عدد</p>
                               </div>
                               </div>
                               <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                               font-Dana">
                               <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                   <use xlink:href="#material"></use>
                               </svg>
                               <div class="space-y-0.5 sm:space-y-1">
                                   <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">جنس</p>
                                   <p class="block text-sm opacity-70 text-zinc-700 dark:text-gray-100">${obj.material}</p>
                               </div>
                               </div>
                               <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                               font-Dana">
                               <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                   <use xlink:href="#scale"></use>
                               </svg>
                               <div class="space-y-0.5 sm:space-y-1">
                                   <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">وزن</p>
                                   <p class="block text-sm opacity-70 text-zinc-700 dark:text-gray-100">${obj.weight} گرم</p>
                               </div>
                               </div>
                               <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                               font-Dana">
                               <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                   <use xlink:href="#users"></use>
                               </svg>
                               <div class="space-y-0.5 sm:space-y-1">
                                   <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">رده ی سنی</p>
                                   <p class="block text-sm opacity-70 text-zinc-700 dark:text-gray-100"> برای کودکان</p>
                               </div>
                               </div>
                               <div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                               font-Dana">
                               <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                   <use xlink:href="#question"></use>
                               </svg>
                               <div class="space-y-0.5 sm:space-y-1">
                                   <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">هدف</p>
                                   <p class="block text-sm opacity-70 text-zinc-700 dark:text-gray-100">آموزشی</p>
                               </div>
                               </div>
                           </div>
                       </div>
                       <div class="flex items-center gap-x-2 mb-5">
                           <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                               <use xlink:href="#desc"></use>
                           </svg>
                           <p class="font-MorabbaBold text-zinc-700 dark:text-gray-100 text-base md:text-lg xl:text-xl">توضیحات</p>
                       </div>
                       <p class="font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100 text-justify mb-8">${obj.description}</p>
                       <div class="flex items-center justify-between">
                           <div>
                               <p class="font-Dana text-sm md:text-base lg:text-lg xl:text-xl text-lime-900 dark:text-lime-100"><span class="text-lg md:text-xl lg:text-2xl xl:text-3xl">${obj.price}</span>تومان</p>
                           </div>
                           <div onclick="addBoardGameToShoppingCard(${obj.id})" class="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gray-300 text-gray-600 hover:text-white hover:bg-lime-900 dark:hover:bg-lime-900
                           inline-flex items-center justify-center cursor-pointer">
                               <svg class="w-5 h-5 lg:w-8 lg:h-8">
                                   <use xlink:href="#shopping-card"></use>
                               </svg>
                           </div> 
                       </div>
                       </div>`
               )
           }
       })
   })
}   

function addBoardGameToShoppingCard(id) {
    fetch(`http://localhost:3000/api/boardgames/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            if (obj.id === id) {
                let isInArray = shoppingCardProductArray.some(obj => {
                    if (obj.id === id) {
                        return true
                    }
                }
                )
                if (!isInArray){
                    shoppingCardProductArray.push(obj)
                    shoppingCardGenerator()
                    sideShoppingCardGenerator()
                    setLocalStorage()
                }
            }
        })
 
    })
}

// generate shopping card
function shoppingCardGenerator() {
    headerShoppingCard.innerHTML = ''
    shoppingCardProductArray.forEach(obj => {
        headerShoppingCard.insertAdjacentHTML(`beforeend`,
            `<div class="flex gap-x-2.5 items-center py-5 border-b-[1px] border-gray-300 dark:border-white/10">
                        <div>
                            <img class="w-[120px] h-[120px]" src="${obj.src}" alt="">
                        </div>
                        <div class="w-[230px]">
                            <div class="w-full flex justify-between text-base text-zinc-700 dark:text-white mb-[28px]">
                            <p class="font-DanaMedium">${obj.title}</p>
                            <svg onclick="removeItem(${obj.id})" class="mt-[2px] w-4 h-4 cursor-pointer hover:text-orange-300">
                                <use xlink:href="#X-mark"></use>
                            </svg>
                            </div>
                            <div class="flex items-end">
                                <div class="flex items-center justify-evenly w-[90px] h-11 ml-5 border-[1px] border-gray-300 rounded-full
                                font-DanaDemiBold text-orange-300">
                                <div onclick="inVal(${obj.id})" class="hover:text-orange-400 transition-colors">
                                    <svg class="w-4 h-4 cursor-pointer">
                                        <use xlink:href="#plus"></use>
                                    </svg>
                                </div>
                                <p data-id="${obj.id}" class="val text-xl tracking-tighter">${obj.value}</p>
                                <div onclick="decVal(${obj.id})" class="hover:text-orange-400 transition-colors">
                                    <svg class="w-4 h-4 cursor-pointer">
                                        <use xlink:href="#minus"></use>
                                    </svg>
                                </div>
                            </div>
                            <p class="font-Dana text-sm text-zinc-700 dark:text-white"><span class="font-DanaDemiBold text-xl">${obj.price}</span> تومان</p>
                            </div>
                        </div>
                     </div>`
        )
    })
    totalPrice()
    totalItem()
}

function sideShoppingCardGenerator() {
    sideShoppingCardBody.innerHTML = ''
    shoppingCardProductArray.forEach(obj => {
        sideShoppingCardBody.insertAdjacentHTML(`beforeend`,
            `<div class="flex gap-x-3 items-center py-5 border-b-[1px] border-gray-100 dark:border-white/10">
                <div>
                    <img class="w-[50px] h-[50px]" src="${obj.src}" alt="">
                </div>
                <div class="w-[170px] flex flex-col gap-y-3">
                    <div class="flex justify-between">
                    <p class="font-DanaMedium text-sm text-zinc-700 dark:text-white">${obj.title}</p>
                    <svg onclick="removeItem(${obj.id})" class="w-4 h-4 text-zinc-700 dark:text-white cursor-pointer hover:text-orange-300">
                        <use xlink:href="#X-mark"></use>
                    </svg>
                    </div>
                    <div class="flex items-center justify-evenly w-[70px] h-7 ml-5 border-[1px] border-gray-300 rounded-full
                        font-DanaDemiBold text-orange-300">
                        <div onclick="inVal(${obj.id})" class="hover:text-orange-400 transition-colors">
                            <svg class="w-4 h-4 cursor-pointer">
                                <use xlink:href="#plus"></use>
                            </svg>
                        </div>
                        <p class="text-base tracking-tighter">${obj.value}</p>
                        <div onclick="decVal(${obj.id})" class="hover:text-orange-400 transition-colors">
                            <svg class="w-4 h-4 cursor-pointer">
                                <use xlink:href="#minus"></use>
                            </svg>
                        </div>
                    </div>
                    <p class="font-Dana text-xs text-zinc-700 dark:text-white"><span class="font-DanaDemiBold text-base">${obj.price}</span> تومان</p>
                </div>
            </div>`
        )
    })
    totalPrice()
}

// remove item
function removeItem(id) {
    let objIndex = shoppingCardProductArray.findIndex(obj => {
        return obj.id === id
    })
    shoppingCardProductArray.splice(objIndex , 1)
    shoppingCardGenerator()
    sideShoppingCardGenerator()
    setLocalStorage()
}

// calculate value
function inVal(id) {
    shoppingCardProductArray.forEach(obj => {
        if (obj.id == id) {
            ++obj.value 
            totalPrice()
        }
    })
    shoppingCardGenerator()
    sideShoppingCardGenerator()
    setLocalStorage()
}

function decVal(id) {
    shoppingCardProductArray.forEach(obj => {
        if (obj.id == id) {
            if(obj.value > 1){
                --obj.value 
                totalPrice()
            }
        }
    })
    shoppingCardGenerator()
    sideShoppingCardGenerator()
    setLocalStorage()
}

function totalPrice() {
    let sum = 0
    headerShoppingCardPrice.innerHTML = '0'
    sideShoppingCardPrice.innerHTML = '0'
    shoppingCardProductArray.forEach(obj => {
        sum += obj.price * obj.value
        headerShoppingCardPrice.innerHTML = sum
        sideShoppingCardPrice.innerHTML = sum
    })
}

// calculate total items
function totalItem() {
    let sum = shoppingCardProductArray.length
    headerShoppingCardItemCount.innerHTML = sum
}

//local storage
function setLocalStorage() {
    localStorage.setItem('shoppingCardArray' , JSON.stringify(shoppingCardProductArray))
}

function loadHeaderShoppingCard() {
    let localStorageArray = JSON.parse(localStorage.getItem('shoppingCardArray'))
    if (localStorageArray) {
        shoppingCardProductArray = localStorageArray
        shoppingCardGenerator()
        sideShoppingCardGenerator()
    }
}

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
        location.href = 'http://127.0.0.1:5500/public/info.html'
    }
}

function closeRegisterMsg() {
    registerPopupWrapper.style.display = 'none'
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
window.addEventListener('load' , loadHeaderShoppingCard)
pannelIcon.addEventListener('click' , showPannel)
pannelSubIcon.addEventListener('click' , showPannelSub)
shoppingCardBtn.forEach(btn => {
    btn.addEventListener('click' , showRegisterMsg)
})
closeRegisterPopup.addEventListener('click' , closeRegisterMsg)
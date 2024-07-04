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
let headerShoppingCard = document.querySelector('.header-shopping-card')
let headerShoppingCardPrice = document.querySelector('.header-shopping-card-price')
let headerShoppingCardItemCount = document.querySelector('.header-shopping-card-item-count')
// data base
let cardSliderInfo = [
    {id : 1, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 135_000 , val : 1},
    {id : 2, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 145_000 , val : 1},
    {id : 3, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 155_000 , val : 1},
    {id : 4, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 165_000 , val : 1},
    {id : 5, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 175_000 , val : 1},
    {id : 6, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 185_000 , val : 1},
]
let allCardsInfo = [
    {id : 1, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 135_000 , val : 1},
    {id : 2, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 145_000 , val : 1},
    {id : 3, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 155_000 , val : 1},
    {id : 4, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 165_000 , val : 1},
    {id : 5, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 175_000 , val : 1},
    {id : 6, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 185_000 , val : 1},
    {id : 7, src : "./img/logo.png", title : "کارت های یوگای کودک", price : 195_000 , val : 1},
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

// fetch slider data 
async function fetchSliderData() {
    try {
        cardSliderInfo.forEach(obj => {
            swiperWrapper.insertAdjacentHTML(`beforeend` , 
                `<div class="swiper-slide">
                        <div class="w-full h-min p-3 md:p-5
                        bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                        <a href="singleCard.html?id=${obj.id}" class="inline-block w-full hover:scale-110 overflow-hidden transition-transform mb-5">
                            <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${obj.src}" alt="">
                        </a>
                        <div class="flex flex-col gap-y-2.5">
                            <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                            <div class="w-full flex items-center justify-between">
                                <p class="font-Dana text-xs lg:text-sm tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1"><span class="font-DanaMedium text-base lg:text-xl">${obj.price}</span>تومان</p>
                                <div onclick="addCardToShoppingCard(${obj.id})" class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 text-gray-400 dark:bg-zinc-800 hover:text-white hover:bg-lime-900 dark:hover:bg-lime-900
                                 flex items-center justify-center cursor-pointer">
                                    <svg class="w-4 h-4 md:w-5 md:h-5">
                                        <use xlink:href="#shopping-card"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>`)
        })
    } catch (error) {
        console.log(error);
    }
}

fetchSliderData()

// fetch all product data
async function fetchProductData() {
    try {
        allCardsInfo.forEach(obj => {
            productWrapper.insertAdjacentHTML(`beforeend` , 
                `<div class="inline-block w-full h-min p-3 md:p-5
                        bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                        <a href="singleCard.html?id=${obj.id}" class="inline-block w-full hover:scale-110 overflow-hidden transition-transform mb-5">
                            <img class="w-[90px] h-[90px] md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto" src="${obj.src}" alt="">
                        </a>
                        <div class="flex flex-col gap-y-2.5">
                            <p class="font-DanaMedium text-sm md:text-base lg:text-lg xl:text-xl text-zinc-700 dark:text-gray-100 line-clamp-2">${obj.title}</p>
                            <div class="w-full flex items-center justify-between">
                                <p class="font-Dana text-xs lg:text-sm tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1"><span class="font-DanaMedium text-base lg:text-xl">${obj.price}</span>تومان</p>
                                <div onclick="addAllCardToShoppingCard(${obj.id})" class="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 text-gray-400 dark:bg-zinc-800 hover:text-white hover:bg-lime-900 dark:hover:bg-lime-900
                                 flex items-center justify-center cursor-pointer">
                                    <svg class="w-4 h-4 md:w-5 md:h-5">
                                        <use xlink:href="#shopping-card"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>
                </div>`
            )
        })
    } catch (error) {
        console.log(error);
    }
}

fetchProductData()

// add element to shopping card array
function addCardToShoppingCard(id) {
    cardSliderInfo.forEach(obj => {
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
                setLocalStorage()
            }
        }
    })
}

function addAllCardToShoppingCard(id) {
    allCardsInfo.forEach(obj => {
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
                setLocalStorage()
            }
        }
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
                                <p data-id="${obj.id}" class="val text-xl tracking-tighter">${obj.val}</p>
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

// remove item
function removeItem(id) {
    let objIndex = shoppingCardProductArray.findIndex(obj => {
        return obj.id === id
    })
    shoppingCardProductArray.splice(objIndex , 1)
    shoppingCardGenerator()
    setLocalStorage()
}

// calculate value
function inVal(id) {
    shoppingCardProductArray.forEach(obj => {
        if (obj.id == id) {
            ++obj.val 
            totalPrice()
        }
    })
    shoppingCardGenerator()
    setLocalStorage()
}

function decVal(id) {
    shoppingCardProductArray.forEach(obj => {
        if (obj.id == id) {
            if(obj.val > 1){
                --obj.val 
                totalPrice()
            }
        }
    })
    shoppingCardGenerator()
    setLocalStorage()
}

function totalPrice() {
    let sum = 0
    headerShoppingCardPrice.innerHTML = '0'
    shoppingCardProductArray.forEach(obj => {
        sum += obj.price * obj.val
        headerShoppingCardPrice.innerHTML = sum
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
    }
}

// events
checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
shoppingCardIcon.addEventListener('click' , moveShoppingCardToRight)
xMarkIcon.addEventListener('click' , moveShoppingCardToLeft)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadHeaderShoppingCard)
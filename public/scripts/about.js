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
let phoneNumElem = document.querySelector('#copy-to-clipboard')
let copybadgeElem = document.querySelector('#copied')
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

// generate shopping card
function addCardToShoppingCard(id) {
    fetch(`http://localhost:3000/api/cards/`)
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

function logOut() {
    document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, name => location.hostname.split('.').reverse().reduce(domain => (domain=domain.replace(/^\.?[^.]+/, ''),document.cookie=`${name}=;max-age=0;path=/;domain=${domain}`,domain), location.hostname));
    location.href = 'http://127.0.0.1:5500/public/index.html'
}

checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
shoppingCardIcon.addEventListener('click' , moveShoppingCardToRight)
xMarkIcon.addEventListener('click' , moveShoppingCardToLeft)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadHeaderShoppingCard)
pannelIcon.addEventListener('click' , showPannel)
pannelSubIcon.addEventListener('click' , showPannelSub)
shoppingCardBtn.forEach(btn => {
    btn.addEventListener('click' , showRegisterMsg)
})
closeRegisterPopup.addEventListener('click' , closeRegisterMsg)
logOutBtn.addEventListener('click' , logOut)

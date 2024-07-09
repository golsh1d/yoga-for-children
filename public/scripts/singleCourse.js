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
let swiperWrapper = document.querySelector('.swiper-wrapper')
let productWrapper = document.querySelector('.product-wrapper')
let descriptionWrapper = document.querySelector('.desc')
let headerShoppingCard = document.querySelector('.header-shopping-card')
let headerShoppingCardPrice = document.querySelector('.header-shopping-card-price')
let headerShoppingCardItemCount = document.querySelector('.header-shopping-card-item-count')
let sideShoppingCardBody = document.querySelector('.side-shopping-card-body')
let sideShoppingCardPrice = document.querySelector('.side-shopping-card-price')
let lessonWrapper = document.querySelector('.lesson-wrapper')
let lessonsSection = document.querySelector('.lessons')
let openCloseElem = document.querySelector('.openClose')
let courseDesc = document.querySelector('.course-desc')
let coursePrice = document.querySelector('.course-price')
let courseLessonCount = document.querySelector('.course-lesson-count')
let courseDurationTime = document.querySelector('.course-duration-time')
let detailWrapper = document.querySelector('.detail-wrapper')
let courseData = [
    {id : 1 , 
    desc : `
    یوگا یک فعالیت فیزیکی و ذهنی است که به کودکان کمک می‌کند تا اعتماد به نفس، تعادل و آرامش را تجربه کنند. با شرکت در دوره یوگای کودک، فرزندتان می‌تواند با حرکات آسان و تنفس عمیق، ارتباط بین بدن و ذهن خود را تقویت کند. این دوره همچنین به کودکان کمک می‌کند تا استرس و اضطراب را کاهش دهند و بهبود خواب و تمرکز خود را افزایش دهند. با یوگای کودک، کودکان شادتر، متمرکز‌تر و پویاتر خواهند بود.
    دوره یوگای کودک یک فرصت عالی برای کودکان است تا با حرکات آسان و تنفس عمیق، اعتماد به نفس، تعادل و آرامش را تجربه کنند. این دوره به کودکان کمک می‌کند تا ارتباط بین بدن و ذهن خود را تقویت کنند و استرس و اضطراب را کاهش دهند. همچنین، با شرکت در یوگای کودک، کودکان می‌توانند بهبود خواب و تمرکز خود را تجربه کنند و شادتر، متمرکز‌تر و پویاتر شوند.
    `,
    price : "2,000,000",
    lessonCount : '10 جلسه',
    courseDuration : '10 ساعت',
    },
]

let detailData = {
    '1' : [
    {id : 1 , icon : "question", title1 : "وضعیت دوره", status : "تکمیل شده" ,},
    {id : 2 , icon : "clock", title1 : "مدت زمان دوره", status : "10 ساعت" ,},
    {id : 3 , icon : "calender", title1 : "بروزرسانی شده در", status : "1403/01/01" ,},
    {id : 4 , icon : "user", title1 : "نوع پشتیبانی", status : "آنلاین" ,},
    {id : 5 , icon : "video", title1 : "نوع مشاهده", status : "آنلاین" ,},
    {id : 6 , icon : "doc", title1 : "پیش نیاز", status : "آشنایی با یوگا" ,},
    {id : 7 , icon : "star", title1 : "رضایت", status : "5/5" ,},
    {id : 8 , icon : "users", title1 : "تعداد دانشجو", status : "70 نفر" ,},
    ]
}

let lessonsData = {
    1 : [
    {id : 1 , title : "قسمت اول دوره یوگای کودک", duration : "20:00"},
    {id : 2 , title : "قسمت دوم دوره یوگای کودک", duration : "10:00"},
    {id : 3 , title : "قسمت سوم دوره یوگای کودک", duration : "30:00"},
    {id : 4 , title : "قسمت چهارم دوره یوگای کودک", duration : "20:00"},
    {id : 5 , title : "قسمت پنجم دوره یوگای کودک", duration : "40:00"},
    {id : 6 , title : "قسمت ششم دوره یوگای کودک", duration : "10:00"},
    {id : 7 , title : "قسمت هفتم دوره یوگای کودک", duration : "5:00"},
    {id : 8 , title : "قسمت هشتم دوره یوگای کودک", duration : "10:00"},
    {id : 9 , title : "قسمت نهم دوره یوگای کودک", duration : "20:00"},
    {id : 10 , title : "قسمت دهم دوره یوگای کودک", duration : "30:00"},
    ]
}

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

function loadDetailData() {
    detailData[pageId].forEach(obj => {
            detailWrapper.insertAdjacentHTML(`beforeend` , 
                `<div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                    font-Dana">
                        <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                            <use xlink:href="#${obj.icon}"></use>
                        </svg>
                        <div class="space-y-0.5 sm:space-y-1">
                            <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">${obj.title1}</p>
                            <p class="course-status block text-sm opacity-70 text-zinc-700 dark:text-gray-100">${obj.status}</p>
                        </div>
                </div>`
            )
    })
}

function loadCourseData() {
    courseData.forEach(obj => {
        if(obj.id == pageId) {
            courseDesc.innerHTML= obj.desc
            coursePrice.innerHTML = `قیمت : ${obj.price}`
            courseLessonCount.innerHTML = obj.lessonCount
            courseDurationTime.innerHTML = obj.courseDuration
        }
    })
}

function loadLessonData() {
    lessonsData[pageId].forEach(obj => {
        lessonsSection.insertAdjacentHTML(`beforeend`,
            `<div class="flex items-end justify-between w-full py-4 border-b-[1px] border-black/10">
                <a href="#" class="inline-flex items-end gap-x-2.5 md:gap-x-3.5 cursor-pointer">
                    <p class="w-8 h-6 md:h-7 bg-white/90 flex items-end justify-center font-DanaMedium rounded">${obj.id}</p>
                    <p class="font-DanaMedium text-sm md:text-base">${obj.title}</p>
                </a>
                <div class="hidden md:flex items-end gap-x-2.5 md:gap-x-3.5">
                    <p class="font-DanaMedium text-sm md:text-base">${obj.duration}</p>
                    <svg class="w-6 h-6 md:w-7 md:h-7">
                        <use xlink:href="#lock"></use>
                    </svg>
                </div>
            </div>`
        )
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
                    <svg onclick="removeItem(${obj.id})" class="w-4 h-4 cursor-pointer text-zinc-700 dark:text-white , size : "10 در 10" , count: 20 , material : "کاغذ" , weight : "200 گرم" hover:text-orange-300">
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
                        <p class="text-base tracking-tighter">${obj.val}</p>
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
            ++obj.val 
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
            if(obj.val > 1){
                --obj.val 
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
        sum += obj.price * obj.val
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

//show lessons
let isHidden = true
function showLessons() {
    if (isHidden) {
        lessonsSection.style.display = 'block'
        lessonsSection.style.transition = 'display 0.5s linear'
        lessonWrapper.style.borderRadius = '24px 24px 0px 0px'
        openCloseElem.style.transform = 'rotate(180deg)'
        openCloseElem.style.transition = 'transform 0.5s ease'
        isHidden = false
    } else {
        lessonsSection.style.display = 'none'
        lessonsSection.style.transition = 'display 0.5s linear'
        lessonWrapper.style.borderRadius = '24px'
        openCloseElem.style.transform = 'rotate(0deg)'
        openCloseElem.style.transition = 'transform 0.5s ease'
        isHidden = true
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
window.addEventListener('load' , loadCourseData)
window.addEventListener('load' , loadDetailData)
window.addEventListener('load' , loadLessonData)
lessonWrapper.addEventListener('click', showLessons)
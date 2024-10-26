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
let pannelIcon = document.querySelector('.pannel-icon')
let pannelContainer = document.querySelector('.pannel-container')
let pannelSubIcon = document.querySelector('.pannel-sub-icon')
let pannelSubMenu = document.querySelector('.pannel-sub-menu')
let pannelSubli = document.querySelector('.has-pannel-sub')
let rollInCourse = document.querySelector('.roll-in-course')
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

function loadDetailData() {
    fetch(`http://localhost:3000/api/courseDataDetail/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
                detailWrapper.insertAdjacentHTML(`beforeend` , 
                    `<div class="flex flex-col md:flex-row text-center md:text-right items-center justify-center sm:justify-start gap-x-3 gap-y-2.5 bg-white/90 dark:bg-zinc-700 pt-4 pb-3.5 sm:py-3 px-4 rounded-xl
                        font-Dana">
                            <svg class="w-10 sm:w-11 h-10 sm:h-11 text-orange-300">
                                <use xlink:href="#${obj.icon}"></use>
                            </svg>
                            <div class="space-y-0.5 sm:space-y-1">
                                <p class="block font-DanaMedium text-sm sm:text-base text-zinc-700 dark:text-gray-100">${obj.title}</p>
                                <p class="course-status block text-sm opacity-70 text-zinc-700 dark:text-gray-100">${obj.status}</p>
                            </div>
                    </div>`
                )
        })
    })
}

function loadCourseData() {
    fetch(`http://localhost:3000/api/courseData/`)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            if(obj.id == pageId) {
                courseDesc.innerHTML= obj.description
                coursePrice.innerHTML = `قیمت : ${obj.price}`
                courseLessonCount.innerHTML = obj.lessonCount + 'جلسه'
                courseDurationTime.innerHTML = obj.courseDuration + 'ساعت'
            }
        })
    })
}

async function loadLessonData() {
    let userName = document.cookie.split('=')
    if (userName.length === 1) {
        fetch(`http://localhost:3000/api/courseDataDetailAllLessons/`)
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                data.forEach(obj => {
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
        })
    } else {
        let res = await fetch(`http://localhost:3000/api/courseOrder/${userName[1]}`)
        let data = await res.json()
        if (data.length) {
            let res = await fetch(`http://localhost:3000/api/courseDataDetailAllLessons/`)
            let data = await res.json()
            if (data.length) {
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
                                    <use xlink:href="#un-lock"></use>
                                </svg>
                            </div>
                        </div>`
                    )
                })
            }
        } else {
            let res = await fetch(`http://localhost:3000/api/courseDataDetailAllLessons/`)
            let data = await res.json()
            if (data.length) {
                data.forEach(obj => {
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
        }
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

function rollIn() {
    let userName = document.cookie.split('=')
    if (userName.length === 1) {
        registerPopupWrapper.style.display = 'flex'
    } else {
        rollInCourse.setAttribute('href','./afterPayingCourse.html')
    }
}

function closeRegisterMsg() {
    registerPopupWrapper.style.display = 'none'
}

function showRegisterMsg() {
    let userName = document.cookie.split('=')
    if (userName.length === 1) {
        registerPopupWrapper.style.display = 'flex'
    } else {
        location.href = 'http://127.0.0.1:5500/public/info.html'
    }
}

function logOut() {
    document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, name => location.hostname.split('.').reverse().reduce(domain => (domain=domain.replace(/^\.?[^.]+/, ''),document.cookie=`${name}=;max-age=0;path=/;domain=${domain}`,domain), location.hostname));
    location.href = 'http://127.0.0.1:5500/public/index.html'
}

// events
checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadCourseData)
window.addEventListener('load' , loadDetailData)
window.addEventListener('load' , loadLessonData)
lessonWrapper.addEventListener('click', showLessons)
pannelIcon.addEventListener('click' , showPannel)
pannelSubIcon.addEventListener('click' , showPannelSub)
rollInCourse.addEventListener('click' , rollIn)
closeRegisterPopup.addEventListener('click' , closeRegisterMsg)
logOutBtn.addEventListener('click' , logOut)
const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
let pannelIcon = document.querySelector('.pannel-icon')
let sidePannel = document.querySelector('.side-pannel')
let overlay = document.querySelector('.overlay')
let closeElem = document.querySelector('.x-mark')
let myInfoLi = document.querySelector('.my-info-li')
let myInfoLink = document.querySelector('.my-info-link')
let myInfotext = document.querySelector('.my-info-text')
let sideInfoLi = document.querySelector('.side-info-li')
let sideInfoLink = document.querySelector('.side-info-link')
let sideInfotext = document.querySelector('.side-info-text')
let myCoursesLi = document.querySelector('.my-courses-li')
let myCoursesLink = document.querySelector('.my-courses-link')
let myCoursestext = document.querySelector('.my-courses-text')
let sideCoursesLi = document.querySelector('.side-courses-li')
let sideCoursesLink = document.querySelector('.side-courses-link')
let sideCoursestext = document.querySelector('.side-courses-text')
let myOrderLi = document.querySelector('.my-order-li')
let myOrderLink = document.querySelector('.my-order-link')
let myOrdertext = document.querySelector('.my-order-text')
let sideOrderLi = document.querySelector('.side-order-li')
let sideOrderLink = document.querySelector('.side-order-link')
let sideOrdertext = document.querySelector('.side-order-text')
let mainSection = document.querySelector('.main-section')

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

function showSidePannel() {
    sidePannel.style.transform = 'translateX(0px)'
    sidePannel.style.transition = 'transform 0.5s ease'
    overlay.style.display = 'block'
}

function hideSidePannel() {
    sidePannel.style.transform = 'translateX(300px)'
    sidePannel.style.transition = 'transform 0.5s ease'
    overlay.style.display = 'none'
}

// dynamic data

let locationSearch = location.search
let searchParams = new URLSearchParams(locationSearch)
let pageId = searchParams.get('id')

function loadData() {
    if (pageId == 3) {
        myOrderLink.classList.add('text-gray-400')
        myOrderLink.classList.add('dark:text-gray-100')
        myOrdertext.classList.add('text-zinc-700')
        myOrdertext.classList.add('dark:text-gray-100')
        sideOrderLink.classList.add('text-gray-400')
        sideOrderLink.classList.add('dark:text-gray-100')
        sideOrdertext.classList.add('text-zinc-700')
        sideOrdertext.classList.add('dark:text-gray-100')
        myInfoLi.classList.add('bg-orange-300')
        myInfoLink.classList.add('text-white')
        myInfotext.classList.add('text-white')
        sideInfoLi.classList.add('bg-orange-300')
        sideInfoLink.classList.add('text-white')
        sideInfotext.classList.add('text-white')
        myCoursesLink.classList.add('text-gray-400')
        myCoursesLink.classList.add('dark:text-gray-100')
        myCoursestext.classList.add('text-zinc-700')
        myCoursestext.classList.add('dark:text-gray-100')
        sideCoursesLink.classList.add('text-gray-400')
        sideCoursesLink.classList.add('dark:text-gray-100')
        sideCoursestext.classList.add('text-zinc-700')
        sideCoursestext.classList.add('dark:text-gray-100')
        mainSection.insertAdjacentHTML(`beforeend`,
            `<div class="w-full md:w-[70%] h-full p-5 bg-lime-50 rounded-2xl
        flex md:items-center">
            <div class="w-full">
                <div class="flex flex-col md:flex-row items-center justify-between gap-y-5 w-full h-min mb-5 md:mb-10">
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="name" class="font-DanaMedium text-sm md:text-base text-zinc-700">نام</label>
                        <input id="name" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="گلشید">
                    </div>
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="Fname" class="font-DanaMedium text-sm md:text-base text-zinc-700">نام خانوادگی</label>
                        <input id="Fname" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="ابراهیمی">
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between gap-y-5 w-full h-min mb-5 md:mb-10">
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="userName" class="font-DanaMedium text-sm md:text-base text-zinc-700">نام کاربری</label>
                        <input id="userName" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="golshid">
                    </div>
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="pass" class="font-DanaMedium text-sm md:text-base text-zinc-700">رمز عبور</label>
                        <input id="pass" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="123">
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between gap-y-5 w-full h-min mb-5 md:mb-10">
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="tel" class="font-DanaMedium text-sm md:text-base text-zinc-700">شماره تلفن</label>
                        <input id="tel" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="09394008198">
                    </div>
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="mail" class="font-DanaMedium text-sm md:text-base text-zinc-700">ایمیل</label>
                        <input id="mail" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="example@gmail.com">
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between gap-y-5 w-full h-min">
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="address" class="font-DanaMedium text-sm md:text-base text-zinc-700">آدرس</label>
                        <input id="address" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="">
                    </div>
                    <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                        <label for="code" class="font-DanaMedium text-sm md:text-base text-zinc-700">کد پستی</label>
                        <input id="code" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-200 opacity-40" value="">
                    </div>
                </div>
            </div>
        </div>`
        )
    }
    if (pageId == 2) {
        myOrderLink.classList.add('text-gray-400')
        myOrderLink.classList.add('dark:text-gray-100')
        myOrdertext.classList.add('text-zinc-700')
        myOrdertext.classList.add('dark:text-gray-100')
        sideOrderLink.classList.add('text-gray-400')
        sideOrderLink.classList.add('dark:text-gray-100')
        sideOrdertext.classList.add('text-zinc-700')
        sideOrdertext.classList.add('dark:text-gray-100')
        myInfoLink.classList.add('text-gray-400')
        myInfoLink.classList.add('dark:text-gray-100')
        myInfotext.classList.add('text-zinc-700')
        myInfotext.classList.add('dark:text-gray-100')
        sideInfoLink.classList.add('text-gray-400')
        sideInfoLink.classList.add('dark:text-gray-100')
        sideInfotext.classList.add('text-zinc-700')
        sideInfotext.classList.add('dark:text-gray-100')
        myCoursesLi.classList.add('bg-orange-300')
        myCoursesLink.classList.add('text-white')
        myCoursestext.classList.add('text-white')
        sideCoursesLi.classList.add('bg-orange-300')
        sideCoursesLink.classList.add('text-white')
        sideCoursestext.classList.add('text-white')
    }
}

pannelIcon.addEventListener('click', showSidePannel)
closeElem.addEventListener('click', hideSidePannel)
window.addEventListener('load', loadData)
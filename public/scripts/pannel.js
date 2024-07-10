const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
let pannelIcon = document.querySelector('.pannel-icon')
let sidePannel = document.querySelector('.side-pannel')
let overlay = document.querySelector('.overlay')
let closeElem = document.querySelector('.x-mark')
let myInfoLi = document.querySelector('.my-info-li')
let sideInfoLi = document.querySelector('.side-info-li')
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
        myInfoLi.classList.add('bg-orange-300')
        sideInfoLi.classList.add('bg-orange-300')
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
}

pannelIcon.addEventListener('click', showSidePannel)
closeElem.addEventListener('click', hideSidePannel)
window.addEventListener('load', loadData)
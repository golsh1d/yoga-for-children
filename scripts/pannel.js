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
let mainSection = document.querySelector('.main-section')
let logOutBtns = document.querySelectorAll('.log-out-btn')
let userName = document.cookie.split('=')

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

async function loadData() {
    if (pageId == 3) {
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
        try {
            let res = await fetch(`https://honareyogayekodak.liara.run/api/users/${userName[1]}`)
            let data = await res.json()
            if (data.length) {
                document.querySelector('.recivedDataWrapper').insertAdjacentHTML(`beforeend`,
                    `<div class="w-full">
                        <div class="flex flex-col md:flex-row items-center justify-between gap-y-3 w-full h-min mb-3 md:mb-5">
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="name" class="font-DanaMedium text-sm md:text-base text-zinc-700">نام</label>
                                <input id="name" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].name}">
                            </div>
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="Fname" class="font-DanaMedium text-sm md:text-base text-zinc-700">نام خانوادگی</label>
                                <input id="Fname" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].familyName}">
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between gap-y-3 w-full h-min mb-3 md:mb-5">
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="userName" class="font-DanaMedium text-sm md:text-base text-zinc-700">نام کاربری</label>
                                <input id="userName" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" readonly value="${data[0].userName}">
                            </div>
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="pass" class="font-DanaMedium text-sm md:text-base text-zinc-700">رمز عبور</label>
                                <input id="pass" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].password}">
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between gap-y-3 w-full h-min mb-3 md:mb-5">
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="tel" class="font-DanaMedium text-sm md:text-base text-zinc-700">شماره تلفن</label>
                                <input id="tel" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].phone}">
                            </div>
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="mail" class="font-DanaMedium text-sm md:text-base text-zinc-700">ایمیل</label>
                                <input id="mail" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].mail}">
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row items-center justify-between gap-y-3 w-full mb-3 md:mb-5 h-min">
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="address" class="font-DanaMedium text-sm md:text-base text-zinc-700">آدرس</label>
                                <input id="address" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].address}">
                            </div>
                            <div class="w-[65%] md:w-[45%] flex flex-col gap-y-2">
                                <label for="code" class="font-DanaMedium text-sm md:text-base text-zinc-700">کد پستی</label>
                                <input id="code" type="text" class="w-full h-11 md:h-14 p-2 font-DanaMedium text-sm md:text-base rounded-lg outline-none text-black bg-lime-300 drop-shadow-md opacity-40" value="${data[0].postalCode}">
                            </div>
                        </div>
                        <div class="w-full">    
                            <button class="info-btn w-full h-11 md:h-14 p-2 mt-3 font-DanaMedium text-sm md:text-base text-white bg-orange-300 rounded-lg drop-shadow-md">ویرایش اطلاعات</button>
                        </div>
                    </div>`
                )
            }
        } catch (error) {
            console.log(error);
        }
        document.querySelector('.info-btn').addEventListener('click' , async () => {
            let userNewInfoObj = {
                name : document.querySelector('#name').value,
                familyName : document.querySelector('#Fname').value,
                userName : document.querySelector('#userName').value,
                password : document.querySelector('#pass').value,
                phone : document.querySelector('#tel').value,
                mail : document.querySelector('#mail').value,
                address : document.querySelector('#address').value,
                postalCode : document.querySelector('#code').value,
            }
            
            // console.log(userName[1]);

            try {
                let res = await fetch(`https://honareyogayekodak.liara.run/api/users/editUser/${userName[1]}` , {
                    method : 'PUT',
                    headers : {
                        'Content-type' : 'application/json'
                    },
                    body : JSON.stringify(userNewInfoObj)
                })
                console.log(res);
                location.reload()
            } catch (error) {
                console.log('err');
                console.log(error);
            }
        })
    }
    if (pageId == 2) {
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
        try {
            let res = await fetch(`https://honareyogayekodak.liara.run/api/courseOrder/${userName[1]}`)
            let data = await res.json() 
            if (data.length) {
                data.forEach(obj => {
                    document.querySelector('.recivedDataWrapper').insertAdjacentHTML(`beforeend`,
                        `<div class="inline-flex flex-row items-center gap-x-3 md:gap-x-5 w-full md:w-[70%] h-min mx-auto p-3 md:p-5
                            bg-white/90 dark:bg-zinc-700 rounded-2xl drop-shadow">
                            <a href="singleCourse.html?id=1" class="inline-block hover:scale-110 overflow-hidden transition-transform">
                                <img class="w-28 md:w-32 h-full mx-auto" src="./img/logo.png" alt="">
                            </a>
                            <div class="flex flex-col gap-y-2 md:gap-y-2.5 w-full">
                                <p class="font-DanaDemiBold text-sm lg:text-base text-zinc-700 dark:text-gray-100 line-clamp-2">دوره ی یوگای کودک</p>
                                <p class="font-DanaMedium text-xs lg:text-sm text-zinc-700 dark:text-gray-100 line-clamp-2">
                                هنر یوگای کودک در این دوره سعی دارد تا با استفاده از جدید ترین تکنیک ها شما را تبدیل به یک مربی حرفه ای یوگای کودک کند. 
                                </p>
                                <div class="w-full flex items-center justify-between">
                                    <p class="font-Dana text-sm lg:text-base tracking-tighter text-lime-900 dark:text-lime-100 flex items-baseline gap-x-1">رایگان</p>
                                </div>
                            </div>
                        </div>`
                    )
                })
            }
        } catch (error) {
           console.log(error); 
        }
    }
}

function logOut() {
    document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g, name => location.hostname.split('.').reverse().reduce(domain => (domain=domain.replace(/^\.?[^.]+/, ''),document.cookie=`${name}=;max-age=0;path=/;domain=${domain}`,domain), location.hostname));
    location.href = 'https://honareyogayekodak.liara.run/index.html'
}


//events
pannelIcon.addEventListener('click', showSidePannel)
closeElem.addEventListener('click', hideSidePannel)
window.addEventListener('load', loadData)
logOutBtns.forEach(btn => {
    btn.addEventListener('click' , logOut)
})
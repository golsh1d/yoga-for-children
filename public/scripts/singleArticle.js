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
let blogWrapper = document.querySelector('#blog-wrapper')
let allblogsInfo = [
    {id : 1, src : "./img/blogimg.png" , title : "مقاله ی اول یوگای کودک" , author : "ندا تاری وردی" , 
    desc : 
    `یوگا یکی از روش‌های محبوب تمرین بدنی و ذهنی است که به عنوان یک شیوه زندگی سالم شناخته می‌شود. این تمرینات شامل تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز است که برای بهبود اعتماد به نفس، تعادل و آرامش بسیار مفید است. اما آیا یوگا برای کودکان هم این قدرت و تأثیر خود را دارد؟ بله، یوگا برای کودکان نیز می‌تواند اثرات بسیار مثبتی داشته باشد. انجام تمرینات یوگا برای کودکان می‌تواند بهبود قدرت بدنی، افزایش اعتماد به نفس و کاهش استرس و اضطراب آن‌ها را فراهم کند. همچنین، این تمرینات می‌توانند به کودکان کمک کنند تا تمرکز و توجه خود را تقویت کنند و بهتر با احساسات خود کنار بیایند.

    علاوه بر این، یوگا برای کودکان می‌تواند بهبود مهارت‌های اجتماعی آن‌ها را نیز تقویت کند. با انجام تمرینات یوگا، کودکان می‌توانند مهارت‌های همکاری، احترام و صبر را یاد بگیرند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به همه این فواید، یوگا برای کودکان می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه آن‌ها باشد. این ورزش نه تنها به سلامت جسمی کودکان کمک می‌کند، بلکه به آن‌ها کمک می‌کند تا هماهنگی بین بدن و ذهن خود را تقویت کنند.

    به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است. این ورزش مفید می‌تواند به کودکان کمک کند تا به دنبال یک سبک زندگی سالم و معنادار بروند و با مشکلات روزمره بهتر مقابله کنند.

    یوگا برای کودکان یک روش فوق‌العاده برای افزایش اعتماد به نفس، تعادل و آرامش در کودکان است. با انجام تمرینات یوگا، کودکان می‌توانند قدرت بدنی خود را افزایش دهند و از استرس و اضطراب خود رها شوند. این تمرینات شامل حرکات آسانی مانند تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز هستند.

    یوگا برای کودکان همچنین می‌تواند بهبود تمرکز و توجه آن‌ها را تقویت کند و به آن‌ها کمک کند تا بهتر با احساسات خود کنار بیایند. این ورزش همچنین می‌تواند به کودکان کمک کند تا مهارت‌های اجتماعی خود را تقویت کنند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به فواید بسیاری که یوگا برای کودکان دارد، این ورزش می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه کودکان باشد. به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است.`
    },
    {id : 2, src : "./img/blogimg.png" , title : "مقاله ی دوم یوگای کودک" , author : "ندا تاری وردی" , 
    desc : 
    `یوگا یکی از روش‌های محبوب تمرین بدنی و ذهنی است که به عنوان یک شیوه زندگی سالم شناخته می‌شود. این تمرینات شامل تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز است که برای بهبود اعتماد به نفس، تعادل و آرامش بسیار مفید است. اما آیا یوگا برای کودکان هم این قدرت و تأثیر خود را دارد؟ بله، یوگا برای کودکان نیز می‌تواند اثرات بسیار مثبتی داشته باشد. انجام تمرینات یوگا برای کودکان می‌تواند بهبود قدرت بدنی، افزایش اعتماد به نفس و کاهش استرس و اضطراب آن‌ها را فراهم کند. همچنین، این تمرینات می‌توانند به کودکان کمک کنند تا تمرکز و توجه خود را تقویت کنند و بهتر با احساسات خود کنار بیایند.

    علاوه بر این، یوگا برای کودکان می‌تواند بهبود مهارت‌های اجتماعی آن‌ها را نیز تقویت کند. با انجام تمرینات یوگا، کودکان می‌توانند مهارت‌های همکاری، احترام و صبر را یاد بگیرند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به همه این فواید، یوگا برای کودکان می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه آن‌ها باشد. این ورزش نه تنها به سلامت جسمی کودکان کمک می‌کند، بلکه به آن‌ها کمک می‌کند تا هماهنگی بین بدن و ذهن خود را تقویت کنند.

    به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است. این ورزش مفید می‌تواند به کودکان کمک کند تا به دنبال یک سبک زندگی سالم و معنادار بروند و با مشکلات روزمره بهتر مقابله کنند.

    یوگا برای کودکان یک روش فوق‌العاده برای افزایش اعتماد به نفس، تعادل و آرامش در کودکان است. با انجام تمرینات یوگا، کودکان می‌توانند قدرت بدنی خود را افزایش دهند و از استرس و اضطراب خود رها شوند. این تمرینات شامل حرکات آسانی مانند تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز هستند.

    یوگا برای کودکان همچنین می‌تواند بهبود تمرکز و توجه آن‌ها را تقویت کند و به آن‌ها کمک کند تا بهتر با احساسات خود کنار بیایند. این ورزش همچنین می‌تواند به کودکان کمک کند تا مهارت‌های اجتماعی خود را تقویت کنند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به فواید بسیاری که یوگا برای کودکان دارد، این ورزش می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه کودکان باشد. به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است.`
    },
    {id : 3, src : "./img/blogimg.png" , title : "مقاله ی سوم یوگای کودک" , author : "ندا تاری وردی" , 
    desc : 
    `یوگا یکی از روش‌های محبوب تمرین بدنی و ذهنی است که به عنوان یک شیوه زندگی سالم شناخته می‌شود. این تمرینات شامل تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز است که برای بهبود اعتماد به نفس، تعادل و آرامش بسیار مفید است. اما آیا یوگا برای کودکان هم این قدرت و تأثیر خود را دارد؟ بله، یوگا برای کودکان نیز می‌تواند اثرات بسیار مثبتی داشته باشد. انجام تمرینات یوگا برای کودکان می‌تواند بهبود قدرت بدنی، افزایش اعتماد به نفس و کاهش استرس و اضطراب آن‌ها را فراهم کند. همچنین، این تمرینات می‌توانند به کودکان کمک کنند تا تمرکز و توجه خود را تقویت کنند و بهتر با احساسات خود کنار بیایند.

    علاوه بر این، یوگا برای کودکان می‌تواند بهبود مهارت‌های اجتماعی آن‌ها را نیز تقویت کند. با انجام تمرینات یوگا، کودکان می‌توانند مهارت‌های همکاری، احترام و صبر را یاد بگیرند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به همه این فواید، یوگا برای کودکان می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه آن‌ها باشد. این ورزش نه تنها به سلامت جسمی کودکان کمک می‌کند، بلکه به آن‌ها کمک می‌کند تا هماهنگی بین بدن و ذهن خود را تقویت کنند.

    به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است. این ورزش مفید می‌تواند به کودکان کمک کند تا به دنبال یک سبک زندگی سالم و معنادار بروند و با مشکلات روزمره بهتر مقابله کنند.

    یوگا برای کودکان یک روش فوق‌العاده برای افزایش اعتماد به نفس، تعادل و آرامش در کودکان است. با انجام تمرینات یوگا، کودکان می‌توانند قدرت بدنی خود را افزایش دهند و از استرس و اضطراب خود رها شوند. این تمرینات شامل حرکات آسانی مانند تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز هستند.

    یوگا برای کودکان همچنین می‌تواند بهبود تمرکز و توجه آن‌ها را تقویت کند و به آن‌ها کمک کند تا بهتر با احساسات خود کنار بیایند. این ورزش همچنین می‌تواند به کودکان کمک کند تا مهارت‌های اجتماعی خود را تقویت کنند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به فواید بسیاری که یوگا برای کودکان دارد، این ورزش می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه کودکان باشد. به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است.`
    },
    {id : 4, src : "./img/blogimg.png" , title : "مقاله ی چهارم یوگای کودک" , author : "ندا تاری وردی" , 
    desc : 
    `یوگا یکی از روش‌های محبوب تمرین بدنی و ذهنی است که به عنوان یک شیوه زندگی سالم شناخته می‌شود. این تمرینات شامل تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز است که برای بهبود اعتماد به نفس، تعادل و آرامش بسیار مفید است. اما آیا یوگا برای کودکان هم این قدرت و تأثیر خود را دارد؟ بله، یوگا برای کودکان نیز می‌تواند اثرات بسیار مثبتی داشته باشد. انجام تمرینات یوگا برای کودکان می‌تواند بهبود قدرت بدنی، افزایش اعتماد به نفس و کاهش استرس و اضطراب آن‌ها را فراهم کند. همچنین، این تمرینات می‌توانند به کودکان کمک کنند تا تمرکز و توجه خود را تقویت کنند و بهتر با احساسات خود کنار بیایند.

    علاوه بر این، یوگا برای کودکان می‌تواند بهبود مهارت‌های اجتماعی آن‌ها را نیز تقویت کند. با انجام تمرینات یوگا، کودکان می‌توانند مهارت‌های همکاری، احترام و صبر را یاد بگیرند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به همه این فواید، یوگا برای کودکان می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه آن‌ها باشد. این ورزش نه تنها به سلامت جسمی کودکان کمک می‌کند، بلکه به آن‌ها کمک می‌کند تا هماهنگی بین بدن و ذهن خود را تقویت کنند.

    به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است. این ورزش مفید می‌تواند به کودکان کمک کند تا به دنبال یک سبک زندگی سالم و معنادار بروند و با مشکلات روزمره بهتر مقابله کنند.

    یوگا برای کودکان یک روش فوق‌العاده برای افزایش اعتماد به نفس، تعادل و آرامش در کودکان است. با انجام تمرینات یوگا، کودکان می‌توانند قدرت بدنی خود را افزایش دهند و از استرس و اضطراب خود رها شوند. این تمرینات شامل حرکات آسانی مانند تمرینات تنفسی، پوزهای مختلف و تمرینات تمرکز هستند.

    یوگا برای کودکان همچنین می‌تواند بهبود تمرکز و توجه آن‌ها را تقویت کند و به آن‌ها کمک کند تا بهتر با احساسات خود کنار بیایند. این ورزش همچنین می‌تواند به کودکان کمک کند تا مهارت‌های اجتماعی خود را تقویت کنند و با دیگران بهتر ارتباط برقرار کنند.

    با توجه به فواید بسیاری که یوگا برای کودکان دارد، این ورزش می‌تواند یک راه بسیار موثر برای بهبود رفتار و روحیه کودکان باشد. به طور کلی، یوگا برای کودکان یک راه عالی برای ارتقاء سلامت جسمی و روحی آن‌ها است.`
    },
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

let locationSearch = location.search
let searchParams = new URLSearchParams(locationSearch)
let pageId = searchParams.get('id')

function loadData() {
    allblogsInfo.forEach(obj => {
        if (obj.id == pageId) {
            blogWrapper.insertAdjacentHTML(`beforeend`,
                `<div class="flex items-center justify-between mb-3 md:mb-5">
                    <!-- right section -->
                    <div>
                        <p class="font-MorabbaBold text-zinc-700 dark:text-gray-100 text-lg md:text-xl lg:text-2xl xl:text-3xl mb-1 md:mb-3">${obj.title}</p>
                        <p class="font-DanaMedium text-lime-900 dark:text-lime-100 text-xs md:text-sm lg:text-base xl:text-lg tracking-tighter">نویسنده : ${obj.author}</p>
                    </div>
                    <!-- left section -->
                    <div>
                        <img class="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 rotate-1" src="${obj.src}" alt="">
                    </div>
                </div>
                <p class="font-Dana text-zinc-700 dark:text-gray-100 text-base leading-[2rem] md:text-lg md:leading-[2.5rem] lg:text-xl lg:leading-[3rem] xl:text-2xl xl:leading-[3.5rem] text-justify ">${obj.desc}</p> `
            )
        }
    })
}

checkBoxInput.addEventListener('change', animationForIcon)
chevronUp.addEventListener('click', changeSubmenuDisplay)
hamburgerIcon.addEventListener('click' , moveSideNav)
shoppingCardIcon.addEventListener('click' , moveShoppingCardToRight)
xMarkIcon.addEventListener('click' , moveShoppingCardToLeft)
footerChevronUpElem.addEventListener('click' , scrollToTop)
phoneNumElem.addEventListener('click' , copyToClipboard)
window.addEventListener('load' , loadData)
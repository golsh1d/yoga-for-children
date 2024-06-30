let allCardsInfo = [
    {id : 1, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "135,000"},
    {id : 2, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "145,000"},
    {id : 3, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "155,000"},
    {id : 4, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "165,000"},
    {id : 5, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "175,000"},
    {id : 6, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "185,000"},
    {id : 7, src : "./img/logo.png", title : "کارت های یوگای کودک", price : "195,000"},
]
let locationSearch = location.search
let searchParams = new URLSearchParams(locationSearch)
let pageId = searchParams.get('id')
console.log(pageId)
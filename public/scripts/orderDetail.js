let shoppingCardBody = document.querySelector('.shopping-card')
let orderPriceElem = document.querySelector('.order-price')
let totalPriceElem = document.querySelector('.total-price')
let deliveryPriceElem = document.querySelector('.delivery-price')
function mainShoppingCardGenerator() {
    shoppingCardBody.innerHTML = ''
    shoppingCardProductArray.forEach(obj => {
        shoppingCardBody.insertAdjacentHTML(`beforeend`, 
                `<div class="flex gap-x-3 md:gap-x-5 items-center p-1 md:p-3 border-b-[1px] border-gray-300 dark:border-white/10">
                    <div>
                        <img class="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px]" src="${obj.src}" alt="">
                    </div>
                    <div class="min-w-min">
                        <p class="font-DanaMedium text-base md:text-lg text-zinc-700 dark:text-white mb-[10px] md:mb-[20px]">${obj.title}</p>
                        <div class="flex items-center gap-x-3">
                        <p class="font-DanaDemiBold text-base md:text-lg tracking-tighter text-orange-300
                        flex items-center gap-x-3">
                            ${obj.value}
                            <svg class="w-4 h-4 md:w-5 md:h-5 text-zinc-700 dark:text-white">
                                <use xlink:href="#X-mark"></use>
                            </svg>
                        </p>
                        <p class="font-Dana text-sm"><span class="font-DanaDemiBold text-base md:text-lg">${obj.price}</span> تومان</p>
                        </div>
                    </div>
                </div>`
        )
    })
    orderPrice()
}

// order price
function orderPrice() {
    let sum = 0
    orderPriceElem.innerHTML = ''
    shoppingCardProductArray.forEach(obj => {
        sum += obj.price * obj.value
    })
    orderPriceElem.innerHTML = sum
    totalPrice(sum)
}

// total price
function totalPrice(orderPrice) {
    let sum = orderPrice + 40_000
    totalPriceElem.innerHTML = sum
}

//local storage
function setLocalStorage() {
    localStorage.setItem('shoppingCardArray' , JSON.stringify(shoppingCardProductArray))
}

function loadHeaderShoppingCard() {
    let localStorageArray = JSON.parse(localStorage.getItem('shoppingCardArray'))
    console.log(localStorageArray);
    if (localStorageArray) {
        shoppingCardProductArray = localStorageArray
        mainShoppingCardGenerator()
    }
}


window.addEventListener('load' , loadHeaderShoppingCard)
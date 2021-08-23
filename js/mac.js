// memory upgrade
const smallMemory = document.getElementById('small-memory');
const largeMemory = document.getElementById('large-memory');
smallMemory.addEventListener('click', function () {
    extraMemoryPrice.innerText = '0';
    updateTotal()
})
largeMemory.addEventListener('click', function () {
    extraMemoryPrice.innerText = '180';
    updateTotal()

})

// Storage upgrade
const smallStorage = document.getElementById('small-storage');
const mediumStorage = document.getElementById('medium-storage');
const largeStorage = document.getElementById('large-storage');
smallStorage.addEventListener('click', function () {
    extraStoragePrice.innerText = '0';
    updateTotal()
})
mediumStorage.addEventListener('click', function () {
    extraStoragePrice.innerText = '100';
    updateTotal()
})
largeStorage.addEventListener('click', function () {
    extraStoragePrice.innerText = '180';
    updateTotal()
})

// delivery charge

const freeDelivery = document.getElementById('free-delivery');
freeDelivery.addEventListener('click', function () {
    deliveryPrice.innerText = '0';

    updateTotal();



})
const paidDelivery = document.getElementById('paid-delivery');
paidDelivery.addEventListener('click', function () {
    deliveryPrice.innerText = '20';
    updateTotal()
})



const bestPrice = document.getElementById('best-price');
const extraMemoryPrice = document.getElementById('extraMemory-price');
const extraStoragePrice = document.getElementById('extraStorage-price');
const deliveryPrice = document.getElementById('delivery-price');
const totalPrice = document.getElementById('total-price');


// update subtotal
function updateTotal() {
    const extraMemoryPrice = document.getElementById('extraMemory-price');
    const extraMemoryCost = parseInt(extraMemoryPrice.innerText);
    const extraStoragePrice = document.getElementById('extraStorage-price');
    const extraStorageCost = parseInt(extraStoragePrice.innerText);
    const deliveryPrice = document.getElementById('delivery-price');
    const deliveryCost = parseInt(deliveryPrice.innerText);
    const totalPrice = document.getElementById('total-price');
    const subTotal = parseInt(totalPrice.innerText);
    const total = extraMemoryCost + extraStorageCost + deliveryCost + 1299;
    totalPrice.innerText = total;

    return subTotal;

}

// update grand total
document.getElementById('promo-button').addEventListener('click', function () {
    calculateTotal()
})
function calculateTotal() {
    const promoInput = document.getElementById('promo-input');
    const promoTotal = document.getElementById('promo-total');
    const grandTotal = parseFloat(promoTotal.innerText);
    const inputValue = promoInput.value;
    if (promoInput.value = 'steevkaku') {
        const discount = updateTotal() / 20;
        promoTotal.innerText = updateTotal() - discount;
        promoInput.value = '';

    }

}



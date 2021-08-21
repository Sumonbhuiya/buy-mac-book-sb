// set all amount 
function getAmount(product, amount) {
    const productAmount = document.getElementById(product + '-amount');
    if (amount == 0) {
        productAmount.innerText = 0;
    }
    else if (amount == 180) {
        productAmount.innerText = 180;
    }
    else if (amount == 100) {
        productAmount.innerText = 100;
    }
    else if (amount == 20) {
        productAmount.innerText = 20;
    }
    calculateTotal();
}

// get total amount 
function setupTotal(product) {
    const productInput = document.getElementById(product + '-amount');
    const getProductAmount = parseInt(productInput.innerText);
    return getProductAmount;
}

// calculate total amount 
function calculateTotal() {
    const memoryTotal = setupTotal('memory');
    const storageTotal = setupTotal('storage');
    const deliverTotal = setupTotal('delivery');
    const total = memoryTotal + storageTotal + deliverTotal;
    const totalPrice = total + parseInt('1299');
    const totalAmount = document.getElementById('total-amount');
    totalAmount.innerText = totalPrice;
    const finalAmount = document.getElementById('final-amount');
    finalAmount.innerText = totalPrice;
}

// for get and set memory purpase 
document.getElementById('8Gb-memory').addEventListener('click', function () {
    getAmount('memory', 0);
})
document.getElementById('16Gb-memory').addEventListener('click', function () {
    getAmount('memory', 180);
})

// for get and set storage purpase
document.getElementById('256GB-storage').addEventListener('click', function () {
    getAmount('storage', 0);
})
document.getElementById('512GB-storage').addEventListener('click', function () {
    getAmount('storage', 100);
})
document.getElementById('1TB-storage').addEventListener('click', function () {
    getAmount('storage', 180);
})

// for get and set delivery purpase
document.getElementById('free-delivery').addEventListener('click', function () {
    getAmount('delivery', 0);
})
document.getElementById('charged-delivery').addEventListener('click', function () {
    getAmount('delivery', 20);
})

// for using promo Code discount
document.getElementById('promo-code').addEventListener('click', function () {
    const getPromoCode = document.getElementById('applicant-code');
    const promoValue = getPromoCode.value;
    const inputValue = 'stevekaku';
    // checking promo code 
    if (promoValue.toLowerCase() == inputValue.toLowerCase()) {
        const getTotalAmount = document.getElementById('total-amount');
        const totalAmountValue = parseInt(getTotalAmount.innerText);
        const discount = 20 / 100;
        const promotion = totalAmountValue * discount;
        const yourAmount = totalAmountValue - promotion;
        const finalAmount = document.getElementById('final-amount');
        finalAmount.innerText = yourAmount;
    }
    getPromoCode.value = '';
})
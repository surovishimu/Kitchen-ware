let total = 0;

function handleCLikBtn(target) {
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
    const p = document.createElement("p");
    const count = selectedItemContainer.childElementCount;
    p.innerHTML = `${count + 1} . ${itemName}`
    selectedItemContainer.appendChild(p);
    const price = target.parentNode.parentNode.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    const totalPriceCount = document.getElementById("total");
    totalPriceCount.innerText = total.toFixed(2);
    const purchesButton = document.getElementById('purches-btn');
    if (total > 0) {
        purchesButton.removeAttribute('disabled');
    }

    const couponButton = document.getElementById('coupon-btn');
    if (total > 200) {
        couponButton.removeAttribute('disabled');
    }


    const discountPrice = document.getElementById('discount-price');
    const finalPrice = document.getElementById('final-price');

    const goHomeBtn = document.getElementById('go-home');
    goHomeBtn.addEventListener('click', function () {
        totalPriceCount.innerText = "0";
        discountPrice.innerText = "0";
        finalPrice.innerText = '0';

        selectedItemContainer.innerText = "";

    })
}

const couponButton = document.getElementById('coupon-btn');
couponButton.addEventListener('click', function () {
    const couponField = document.getElementById('coupon-field');
    const discountPrice = document.getElementById('discount-price');
    const finalPrice = document.getElementById('final-price');
    if (couponField.value === "SELL200") {
        discountPrice.innerText = ((20 / 100) * total).toFixed(2);
        finalPrice.innerText = (total - (discountPrice.innerText)).toFixed(2);
    }
    else if (couponField.value !== "SELL200") {
        alert("please provide a valid coupon code ");
        finalPrice.innerText = total;
    }
    else {
        discountPrice.innerText = "0";

    }
})





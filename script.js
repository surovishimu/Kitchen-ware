let total = 0;

function handleCLikBtn(target) {
    // get the item list area
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = target.childNodes[3].childNodes[3].innerText;
    // set the item to the list
    const p = document.createElement("p");
    const count = selectedItemContainer.childElementCount;
    p.innerHTML = `${count + 1} . ${itemName}`
    selectedItemContainer.appendChild(p);
    // get the price of item
    const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    // set the price to total field and final total field
    total = parseInt(total) + parseInt(price);
    priceField("total", total.toFixed(2));
    priceField('final-price', total.toFixed(2));

    // button enable
    const purchesButton = document.getElementById('purches-btn');
    if (total > 0) {
        purchesButton.removeAttribute('disabled');
    }

    const couponButton = document.getElementById('coupon-btn');
    if (total >= 200) {
        couponButton.removeAttribute('disabled');
    }

}
// Modal button click and return to go home again
const goHomeBtn = document.getElementById('go-home');
goHomeBtn.addEventListener('click', function () {
    window.location.href = 'index.html';
})
// get the coupon button and apply coupon code
const couponButton = document.getElementById('coupon-btn');
couponButton.addEventListener('click', function () {
    const couponField = document.getElementById('coupon-field');
    const discountPrice = document.getElementById('discount-price');
    const finalPrice = document.getElementById('final-price');
    if (couponField.value === "SELL200") {
        discountPrice.innerText = ((20 / 100) * total).toFixed(2);
        finalPrice.innerText = (total - (discountPrice.innerText)).toFixed(2);
    }
    else if (couponField.value !== "SELL200" && couponField.value !== "") {
        alert("please provide a valid coupon code ");
        finalPrice.innerText = total.toFixed(2);
    }
    else {
        discountPrice.innerText = "0";

    }
    couponField.value = "";
})
// get all the price field value
function priceField(priceFieldId, value) {
    const priceField = document.getElementById(priceFieldId);
    priceField.innerText = value;
    return priceField;
}



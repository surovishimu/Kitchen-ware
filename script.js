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
    totalPriceCount.innerText = total;
    const purchesButton = document.getElementById('purches-btn');
    if (total > 0) {
        purchesButton.removeAttribute('disabled');
    }
    const goHomeBtn = document.getElementById('go-home');
    goHomeBtn.addEventListener('click', function () {
        selectedItemContainer.innerText = "";
    })
}





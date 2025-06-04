const checkbox = document.getElementById("box");
const submess = document.getElementById("sub");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const Rupay = document.getElementById("Rupay");
const submit = document.getElementById("submit");
const pay = document.getElementById("pay");

submit.onclick = function () {
    if (checkbox.checked) {
        submess.textContent = `You are now subscribed`;
    }
    if (!(checkbox.checked) && (visa.checked || mastercard.checked || Rupay.checked)) {
        window.alert("First subscribe");
        submess.textContent = `You are Not Subscribed`;
        pay.textContent = "First Subscribe then select payment option"
    }
    else if (!(checkbox.checked)) {
        alert("You are not subscribed");
        submess.textContent = `You are Not subscribed`;
    }
    else {
        if (visa.checked) {
            pay.textContent = `You are Paying with VISA`;
        } else if (mastercard.checked) {
            pay.textContent = `You are Paying with MASTERCARD`;
        } else if (Rupay.checked) {
            pay.textContent = `You are Paying with Rupay`;
        } else {
            pay.textContent = "";
        }
    }
};

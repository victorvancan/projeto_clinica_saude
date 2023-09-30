document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var cardNumber = document.getElementById('card-number').value;
    var expiryDate = document.getElementById('expiry-date').value;
    var cvv = document.getElementById('cvv').value;

    if (!validateCardNumber(cardNumber)) {
        alert('Card number is invalid');
        return;
    }

    if (!validateExpiryDate(expiryDate)) {
        alert('Expiry date is invalid');
        return;
    }

    if (!validateCVV(cvv)) {
        alert('CVV is invalid');
        return;
    }

    alert('Form submitted successfully');
});

function validateCardNumber(cardNumber) {
    var regex = new RegExp("^[0-9]{16}$");
    return regex.test(cardNumber);
}

function validateExpiryDate(expiryDate) {
    var regex = new RegExp("^(0[1-9]|1[0-2])/[0-9]{2}$");
    return regex.test(expiryDate);
}

function validateCVV(cvv) {
    var regex = new RegExp("^[0-9]{3,4}$");
    return regex.test(cvv);
}

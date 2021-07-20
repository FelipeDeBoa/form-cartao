function setIconCreditCard(element, creditNumber) {

     
    let typeOfBrand = IsValidCreditCardNumber(creditNumber)

    let icon = '';
   
    switch (typeOfBrand) {
        case 'americanexpress':
            icon = 'fa fa-cc-amex';
            break;

        case 'discover':
            icon = 'fa fa-cc-discover';
            break;

        case 'mastercard':
        case 'dinerclub':
            icon = 'fa fa-cc-mastercard';
            break;

        case 'visa':
            icon = 'fa fa-cc-visa';
            break;

        default:
            icon = 'fa fa-credit-card';
            break;
    }

    let brand = document.getElementById(element)
    // Query the icon element
    if(brand)
    {
        brand.setAttribute('class', icon);
    }
}

function AmexCardnumber(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;
    return cardno.test(inputtxt);
}

function VisaCardnumber(inputtxt) {
    var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;    
    return cardno.test(inputtxt);
}

function MasterCardnumber(inputtxt) {
    var cardno = /^(?:5[1-5][0-9]{14})$/;
    return cardno.test(inputtxt);
}

function DiscoverCardnumber(inputtxt) {
    var cardno = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    return cardno.test(inputtxt);
}

function DinerClubCardnumber(inputtxt) {
    var cardno = /^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/;
    return cardno.test(inputtxt);
}

function JCBCardnumber(inputtxt) {
    var cardno = /^(?:(?:2131|1800|35\d{3})\d{11})$/;
    return cardno.test(inputtxt);
}

function IsValidCreditCardNumber(cardNumber) {

    cardNumber = cardNumber.replace(/\s/g, "")
    console.log(cardNumber)
    var cardType = null;
    if (VisaCardnumber(cardNumber)) {
        cardType = "visa";
    } else if (MasterCardnumber(cardNumber)) {
        cardType = "mastercard";
    } else if (AmexCardnumber(cardNumber)) {
        cardType = "americanexpress";
    } else if (DiscoverCardnumber(cardNumber)) {
        cardType = "discover";
    } else if (DinerClubCardnumber(cardNumber)) {
        cardType = "dinerclub";
    } else if (JCBCardnumber(cardNumber)) {
        cardType = "jcb";
    }else{
        cardType = ""
    }

    return cardType;
}
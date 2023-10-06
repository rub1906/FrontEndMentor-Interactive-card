const nameText = document.getElementById("name");
const cardNumberText = document.getElementById("number");
const monthText = document.getElementById("month");
const yearText = document.getElementById("year");
const cvcText = document.getElementById("CVC");
const confirmButton = document.getElementById("confirm");

let cardNumber = document.querySelector(".card-number");
let cardName = document.querySelector(".card-name");
let cardMonth = document.querySelector(".card-month");
let cardYear = document.querySelector(".card-year");
let cardCvc = document.querySelector(".card-cvc");

let errorName = document.getElementById("errorName");
let errorCard = document.getElementById("errorCard");
let errorExp = document.getElementById("errorExp");
let errorCvc = document.getElementById("errorCvc");

const inputForm = document.getElementById("form-for-input");
const thankForm = document.getElementById("thank-form");
const continueButton = document.getElementById("continueButton");

function updateCardNumber(e) {
  if (e.target.value == "") {
    cardNumber.textContent = "0000 0000 0000 0000";
  } else {
    cardNumber.innerText = format(e.target.value);
  }
}

function updateCardName(e) {
  if (e.target.value == "") {
    cardName.textContent = "JANE APPLESEED";
  } else {
    cardName.textContent = e.target.value;
  }
}

function updateCardMonth(e) {
  if (e.target.value == "") {
    cardMonth.textContent = "00";
  } else if (e.target.value > 12) {
    errorExp.textContent = "Select a valid month";
    monthText.classList.add("error-state");
    cardMonth.textContent = "00";
  } else {
    cardMonth.textContent = e.target.value;
    monthText.classList.remove("error-state");
    errorExp.textContent = "";
  }
}

function updateCardYear(e) {
  if (e.target.value == "") {
    cardYear.textContent = "00";
  } else {
    cardYear.textContent = e.target.value;
  }
}

function updateCardCvc(e) {
  if (e.target.value == "") {
    cardCvc.textContent = "000";
  } else {
    cardCvc.textContent = e.target.value;
  }
}

function format(s) {
  return s.toString().replace(/(\d{4})/g, "$1 ");
}

function checkErrors(correctForm) {
  if (nameText.value == "") {
    errorName.textContent = "Can't be blank";
    nameText.classList.add("error-state");
  } else {
    errorName.textContent = "";
    nameText.classList.remove("error-state");
  }
  if (cardNumberText.value == "") {
    errorCard.textContent = "Can't be blank";
    cardNumberText.classList.add("error-state");
  } else {
    errorCard.textContent = "";
    cardNumberText.classList.remove("error-state");
  }
  if (monthText.value == "") {
    errorExp.textContent = "Cant't be blank";
    monthText.classList.add("error-state");
  } else {
    errorExp.textContent = "";
    monthText.classList.remove("error-state");
  }
  if (yearText.value == "") {
    errorExp.textContent = "Cant't be blank";
    yearText.classList.add("error-state");
  } else {
    errorExp.textContent = "";
    yearText.classList.remove("error-state");
  }
  if (cvcText.value == "") {
    errorCvc.textContent = "Cant't be blank";
    cvcText.classList.add("error-state");
  } else {
    errorCvc.textContent = "";
    cvcText.classList.remove("error-state");
  }
  if (monthText.value > 12) {
    errorExp.textContent = "Select a valid month";
    monthText.classList.add("error-state");
    cardMonth.textContent = "00";
  } else {
    monthText.classList.remove("error-state");
    errorExp.textContent = "";
  }

  if (
    nameText.classList.contains("error-state") ||
    cardNumberText.classList.contains("error-state") ||
    monthText.classList.contains("error-state") ||
    yearText.classList.contains("error-state") ||
    cvcText.classList.contains("error-state")
  ) {
    correctForm = false;
    console.log(correctForm);
  } else {
    correctForm = true;
    console.log(correctForm);
  }

  if (correctForm == true) {
    inputForm.classList.add("display-none");
    thankForm.style.display = "flex";
  }
}

cardNumberText.addEventListener("keyup", updateCardNumber);
nameText.addEventListener("keyup", updateCardName);
cvcText.addEventListener("keyup", updateCardCvc);
monthText.addEventListener("keyup", updateCardMonth);
yearText.addEventListener("keyup", updateCardYear);

confirmButton.addEventListener("click", () => {
  checkErrors();
});

continueButton.addEventListener("click", () => {
  inputForm.classList.remove("display-none");
  thankForm.style.display = "none";
});

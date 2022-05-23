var textCallTotal = 0;
var textSmsTotal = 0;
var roundedBillTot1 = 0;
const addBillButtono = document.querySelector(".addToBillBtn")

function textBill() {
  const totalCallElement = document.querySelector(".callTotalOne")
  const textBillElement = document.querySelector('.billTypeText')
  const totalSmsElement = document.querySelector(".smsTotalOne");
  const totalElement = document.querySelector(".totalOne")
  var billString = textBillElement.value;
  if (roundedBillTot1 > 50.00) {
    textCallTotal += 0.00;
    textSmsTotal += 0.00;

  } else if (billString === "call" || billString === "CALL" || billString === "Call") {
    textCallTotal += 2.75;
    totalCallElement.innerHTML = textCallTotal.toFixed(2);
  } else if (billString === "sms" || billString === "SMS" || billString === "Sms") {
    textSmsTotal += 0.75;
    totalSmsElement.innerHTML = textSmsTotal.toFixed(2);
  }
  roundedBillTot1 = (textCallTotal + textSmsTotal).toFixed(2)
  totalElement.innerHTML = roundedBillTot1;
  if (roundedBillTot1 < 30.00) {
    totalElement.classList.remove('warning');
    totalElement.classList.remove('danger');

  }
  if (roundedBillTot1 > 30.00) {
    totalElement.classList.add('warning');
    totalElement.classList.remove('danger');

  }

  if (roundedBillTot1 > 50.00) {
    totalElement.classList.remove('warning');
    totalElement.classList.add('danger');

  }
}
addBillButtono.addEventListener('click', textBill)


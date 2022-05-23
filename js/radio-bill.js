var radioCallTotal = 0;
var radioSmsTotal = 0;
var roundedBillTot = 0;
const addButnElement = document.querySelector('.radioBillAddBtn')

function radioBill() {
  const billitemRadio = document.querySelector('.billItemTypeRadio:checked')
  const totElement = document.querySelector(".totalTwo")
  const totCallElement = document.querySelector(".callTotalTwo")
  const totSmsElement = document.querySelector(".smsTotalTwo");
  var bill = billitemRadio.value;

  if (bill === "call" && roundedBillTot < 50.00) {
    radioCallTotal += 2.75;
    totCallElement.innerHTML = radioCallTotal.toFixed(2);
  } else if (bill === "sms" && roundedBillTot < 50.00) {
    radioSmsTotal += 0.75;
    totSmsElement.innerHTML = radioSmsTotal.toFixed(2);
  }

  roundedBillTot = (radioCallTotal + radioSmsTotal).toFixed(2)
  totElement.innerHTML = roundedBillTot;
  if (roundedBillTot < 30.00) {
    totElement.classList.remove('warning');
    totElement.classList.remove('danger');

  }
  if (roundedBillTot > 30.00) {
    totElement.classList.add('warning');
    totElement.classList.remove('danger');

  }

  if (roundedBillTot > 50.00) {
    totElement.classList.remove('warning');
    totElement.classList.add('danger');

  }
}
addButnElement.addEventListener('click', radioBill)

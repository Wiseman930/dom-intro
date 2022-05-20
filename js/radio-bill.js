var clicks3 = 0;
var clicks4 = 0;
const addButnElement = document.querySelector('.radioBillAddBtn')
function on() {
    const billitemRadio = document.querySelector('.billItemTypeRadio:checked')
    const totElement = document.querySelector(".totalTwo")
    const totCallElement = document.querySelector(".callTotalTwo")
    const totSmsElement = document.querySelector(".smsTotalTwo");
  var bill = billitemRadio.value;
if (bill === "call"){
  clicks3 += 2.75;
  totCallElement.innerHTML = clicks3.toFixed(2);
}
if (bill === "sms"){
  clicks4 += 0.75;
  totSmsElement.innerHTML = clicks4.toFixed(2);
}
var roundedBillTot = (clicks3 + clicks4).toFixed(2)
totElement.innerHTML = roundedBillTot;
if(roundedBillTot < 30.00){
    totElement.classList.remove('warning');
    totElement.classList.remove('danger');

}
if(roundedBillTot > 30.00) {
    totElement.classList.add('warning');
    totElement.classList.remove('danger');

}

if(roundedBillTot > 50.00) {
    totElement.classList.remove('warning');
    totElement.classList.add('danger');

    }
}
addButnElement.addEventListener('click', on)


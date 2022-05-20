
var clicks = 0;
var clicks2 = 0;
const addBillButtono = document.querySelector(".addToBillBtn")
function text() {
  const totalCallElement = document.querySelector(".callTotalOne")
  const textBillElement = document.querySelector('.billTypeText')
  const totalSmsElement = document.querySelector(".smsTotalOne");
  const totalElement = document.querySelector(".totalOne")
  var billString = textBillElement.value;
if (billString === "call" || billString === "CALL" || billString === "Call"){
  clicks += 2.75;
  totalCallElement.innerHTML = clicks.toFixed(2);
}
else if (billString === "sms" || billString === "SMS" || billString === "Sms"  ){
  clicks2 += 0.75;
  totalSmsElement.innerHTML = clicks2.toFixed(2);
}
var roundedBillTot1 = (clicks + clicks2).toFixed(2)
totalElement.innerHTML = roundedBillTot1;
if(roundedBillTot1 < 30.00){
    totalElement.classList.remove('warning');
    totalElement.classList.remove('danger');

}
if(roundedBillTot1 > 30.00) {
    totalElement.classList.add('warning');
    totalElement.classList.remove('danger');

}

if(roundedBillTot1 > 50.00) {
    totalElement.classList.remove('warning');
    totalElement.classList.add('danger');

    }
}
addBillButtono.addEventListener('click', text)



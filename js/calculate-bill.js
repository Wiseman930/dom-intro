//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringElement = document.querySelector(".billString");

const RElement = document.querySelector(".total")

function calculateBtnClicked() {
  // get the string entered in the textArea
  var billString = billStringElement.value;
  //split the string
  var billItems = billString.split(",");
  // a variable for the total phone bill.
  var billTotal = 0;
  //loop over all the bill items
  for (var i = 0; i < billItems.length; i++) {
    var billItem = billItems[i].trim();
    if (roundedBillTotal > 30.00) {
      billTotal += 0.00;

    } else if (billItem === "call" || billItem === "CALL" || billItem === "Call") {
      billTotal += 2.75;
    } else if (billItem === "sms" || billItem === "SMS" || billItem === "Sms") {
      billTotal += 0.75;
    }
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
    if (roundedBillTotal < 20.00) {
      billTotalElement.classList.remove('warning');
      billTotalElement.classList.remove('danger');


    }
    if (roundedBillTotal > 20.00) {
      billTotalElement.classList.add('warning');
      billTotalElement.classList.remove('danger');


    }

    if (roundedBillTotal > 30.00) {
      billTotalElement.classList.remove('warning');
      billTotalElement.classList.add('danger');

    }

  }

}
calculateBtn.addEventListener('click', calculateBtnClicked);
// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.

const updateButnElement = document.querySelector('.updateSettings');
const callSettingElement = document.querySelector(".callCostSetting");
const smsSettingElement = document.querySelector(".smsCostSetting");
const warningSettingElement = document.querySelector('.warningLevelSetting');
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

function settingsBill() {


  smsCost = Number(smsSettingElement.value);

  callCost = Number(callSettingElement.value);

  warning = Number(warningSettingElement.value);

  critical = Number(criticalLevelSetting.value);

}
updateButnElement.addEventListener('click', settingsBill)
settingsBill();



var callTotal = 0;
var smsTotal = 0;
var roundedsetBillTot = 0;
const addsetButnElement = document.querySelector('.settingsBillT')

function Billtype() {
  const billsetitemRadio = document.querySelector('.billItemTypeWithSettings:checked')
  const totsetElement = document.querySelector(".totalSettings")
  const totsetCallElement = document.querySelector(".callTotalSettings")
  const totsetSmsElement = document.querySelector(".smsTotalSettings")
  var billset = billsetitemRadio.value;
  if (roundedsetBillTot > critical) {
    callTotal += 0.00;
    smsTotal += 0.00;

  } else if (billset === "call") {
    callTotal += callCost;
    totsetCallElement.innerHTML = callTotal.toFixed(2);
  } else if (billset === "sms") {
    smsTotal += smsCost;
    totsetSmsElement.innerHTML = smsTotal.toFixed(2);
  }
  roundedsetBillTot = (callTotal + smsTotal).toFixed(2)
  totsetElement.innerHTML = roundedsetBillTot;
  if (roundedsetBillTot < warning) {
    totsetElement.classList.remove('warning');
    totsetElement.classList.remove('danger');

  }
  if (roundedsetBillTot > warning) {
    totsetElement.classList.add('warning');
    totsetElement.classList.remove('danger');

  }

  if (roundedsetBillTot > critical) {
    totsetElement.classList.remove('warning');
    totsetElement.classList.add('danger');

  }
}
addsetButnElement.addEventListener('click', Billtype)




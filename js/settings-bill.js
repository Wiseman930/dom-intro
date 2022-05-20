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
function onClickid() {


    Num1 = Number(smsSettingElement.value);

    Num2 = Number(callSettingElement.value);

    warn = Number(warningSettingElement.value);

    crit = Number(criticalLevelSetting.value);

}
updateButnElement.addEventListener('click', onClickid)
onClickid();



var clicks5 = 0;
var clicks6 = 0;
const addsetButnElement = document.querySelector('.settingsBillT')
function Click() {
    const billsetitemRadio = document.querySelector('.billItemTypeWithSettings:checked')
    const totsetElement = document.querySelector(".totalSettings")
    const totsetCallElement = document.querySelector(".callTotalSettings")
    const totsetSmsElement = document.querySelector(".smsTotalSettings")
  var billset = billsetitemRadio.value;
if (billset === "call"){
  clicks5 += Num2;
  totsetCallElement.innerHTML = clicks5.toFixed(2);
}
if (billset === "sms"){
  clicks6 += Num1;
  totsetSmsElement.innerHTML = clicks6.toFixed(2);
}
var roundedsetBillTot = (clicks5 + clicks6).toFixed(2)
totsetElement.innerHTML = roundedsetBillTot;
if(roundedsetBillTot < warn){
    totsetElement.classList.remove('warning');
    totsetElement.classList.remove('danger');

}
if(roundedsetBillTot > warn) {
    totsetElement.classList.add('warning');
    totsetElement.classList.remove('danger');

}

if(roundedsetBillTot > crit) {
    totsetElement.classList.remove('warning');
    totsetElement.classList.add('danger');

    }
}
addsetButnElement.addEventListener('click', Click)




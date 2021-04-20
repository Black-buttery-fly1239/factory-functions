function checkedRadioBtn(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    var billItemType = checkedRadioBtn.value
    if (billItemType === "call"){
        callTotal2 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal2 += 0.75;
    }

    callTotalTwo.innerHTML = callTotal2.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal2.toFixed(2);
    var totalCost = callTotal2 + smsTotal2;
    totalTwo.innerHTML = totalCost.toFixed(2);
    
    if (totalCost <= 20.00){
        totalTwo.classList.remove("warning");
        totalTwo.classList.remove("danger")
    }
else if ( totalCost > 30.00 && totalCost <= 50.00) {
    totalTwo.classList.add("warning");
} else if( totalCost > 50.00) {
    totalTwo.classList.remove("warning");``
    totalTwo.classList.add('danger');
}
}

radioBillAddBtn.addEventListener('click',checkedRadioBtn)
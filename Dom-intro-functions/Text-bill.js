function textBillTotal(){
    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call"){
        callTotal1 += 2.75
    }
    else if (billTypeEntered === "sms"){
        smsTotal1 += 0.75;
    }
    
    
    callTotalOne.innerHTML = callTotal1.toFixed(2);
    smsTotalOne.innerHTML = smsTotal1.toFixed(2);
    var totalCost = callTotal1 + smsTotal1;
    totalOne.innerHTML = totalCost.toFixed(2);
 
 if (totalCost >= 30 && totalCost < 50){
    totalOne.classList.add("warning");  
}
else if (totalCost >= 50){
    totalOne.classList.add("danger");
}

}

addToBillBtn.addEventListener('click', textBillTotal);

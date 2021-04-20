function calculateBtnClicked(){
    var billString = billStringField.value;
    var billItems = billString.split(",");
    var billTotal = 0;
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        } else if (billItem === "sms"){
            billTotal += 0.75;
        } 
    }
        var roundedBillTotal = billTotal.toFixed(2);
        billTotalElement.innerHTML = roundedBillTotal;

        // colour(roundedBillTotal);

        // var colour = function (roundedBillTotal){
            if (roundedBillTotal < 20){
                billTotalElement.classList.remove("warning");
                billTotalElement.classList.remove("danger")
            }
        else if ( roundedBillTotal >= 20 && roundedBillTotal < 30.00) {
            billTotalElement.classList.remove("danger");
            billTotalElement.classList.add("warning");
          
        } else if( roundedBillTotal >= 30.00){
        billTotalElement.classList.remove("warning");
            billTotalElement.classList.add("danger");
        } 
    }
 

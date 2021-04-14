function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;

    function setCallCost(callCost){
      theCallCost = callCost;
    }
    function getCallCost(){
      return theCallCost
    }
    function setSmsCost(callCost){
      theCallCost = callCost;
    }
    function getSmsCost(){
      return theCallCost
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
    }
}
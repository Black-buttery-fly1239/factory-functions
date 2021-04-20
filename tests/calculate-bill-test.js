describe("The bill with calculate factory function", function() {
    
    it("should be able to set the call set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(3.05);
        assert.equal(3.05, settingsBill2.getCallCost());
    });

    it("should be able to set the sms set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.75);
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.95);
        assert.equal(0.95, settingsBill2.getSmsCost());
    });

    it("should be able to set the sms  and call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.75);
        settingsBill.setCallCost(2.75);

        assert.equal(0.75, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.95);
        settingsBill2.setCallCost(3.05);

        assert.equal(0.95, settingsBill2.getSmsCost());
        assert.equal(3.05, settingsBill2.getCallCost());
 
    });

    it("should be able to set the Warning level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());
    });

    it("should be able to set the Critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(30);
        assert.equal(30, settingsBill.getCriticalLevel());
    });

    it("should be able to set the Warning and Critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(20);
        assert.equal(20, settingsBill.getWarningLevel());

        settingsBill.setCriticalLevel(30);
        assert.equal(30, settingsBill.getCriticalLevel());
    });

});
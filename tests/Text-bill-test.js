describe("The bill with text factory function", function() {
    
    it("should be able to set the call set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(3.75);
        assert.equal(3.75, settingsBill2.getCallCost());
    });

    it("should be able to set the sms set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.75);
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.99);
        assert.equal(0.99, settingsBill2.getSmsCost());
    });

    it("should be able to set the sms  and call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.75);
        settingsBill.setCallCost(2.75);

        assert.equal(0.75, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.99);
        settingsBill2.setCallCost(3.75);

        assert.equal(0.99, settingsBill2.getSmsCost());
        assert.equal(3.75, settingsBill2.getCallCost());
 
    });

    it("should be able to set the Warning level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(30);
        assert.equal(30, settingsBill.getWarningLevel());
    });

    it("should be able to set the Critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(50);
        assert.equal(50, settingsBill.getCriticalLevel());
    });
    it("should be able to set the Warning and Critical level", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setWarningLevel(30);
        assert.equal(30, settingsBill.getWarningLevel());

        settingsBill.setCriticalLevel(50);
        assert.equal(50, settingsBill.getCriticalLevel());
    });
    
    });

    
    



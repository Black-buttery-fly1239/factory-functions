describe("The bill with radio factory function", function() {
    
    it("should be able to set the call set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.75);
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(1.85);
        assert.equal(1.85, settingsBill2.getCallCost());
    });
});
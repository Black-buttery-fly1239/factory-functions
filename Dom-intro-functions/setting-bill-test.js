describe("The bill with setting factory function", function() {
    it("should be able to set the call set", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());
    });
});
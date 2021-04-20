describe("The bill with setting factory function", function() {
    
    it("should be able to set the call set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });

    it("should be able to set the sms set", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
    });

    it("should be able to set the sms  and call cost", function(){
        let settingsBill = BillWithSettings();

        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(2.75);

        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();

        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());

        settingsBill2.setCallCost(1.85);
        assert.equal(1.85, settingsBill2.getCallCost());
 
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

        settingsBill.setWarningLevel(15);
        assert.equal(15, settingsBill.getWarningLevel());

        settingsBill.setCriticalLevel(25);
        assert.equal(25, settingsBill.getCriticalLevel());
    });
    
    });

    describe("use Value", function(){
        it("should be able to use the call cost set", function(){
          let settingsBill = BillWithSettings();

          settingsBill.setCallCost(2.25);
          settingsBill.setSmsCost(0.85);
          settingsBill.setCriticalLevel(10);

          settingsBill.makeCall();
          settingsBill.makeCall();
          settingsBill.makeCall();

          assert.equal(6.75, settingsBill.getTotalCost());
          assert.equal(6.75, settingsBill.getTotalCallCost());
          assert.equal(0.00, settingsBill.getTotalSmsCost());
        });

        it("should be able to use the call cost for 2 calls at 1.85", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(10);
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
  
            settingsBill.makeCall();
            settingsBill.makeCall();
  
            assert.equal(2.70, settingsBill.getTotalCost());
            assert.equal(2.70, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
          });

          it("should be able to send 2 sms's at 0.85 each", function(){
            let settingsBill = BillWithSettings();
            
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
  
            settingsBill.sendSms();
            settingsBill.sendSms();
  
            assert.equal(1.70, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
          });

          it("should be able to send 2 sms's at 0.85 each & make 1 call at 1.35", function(){
            let settingsBill = BillWithSettings();
            
            settingsBill.setCriticalLevel(10);
            settingsBill.setCallCost(1.35);
            settingsBill.setSmsCost(0.85);
            
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();

            assert.equal(1.35, settingsBill.getTotalCallCost());
            assert.equal(1.70, settingsBill.getTotalSmsCost());
            assert.equal(3.05, settingsBill.getTotalCost());
              
          });
        });

          describe("warning & critical level", function(){
           it("it should return a class name of 'warning' if warning level is reached", function(){
               let settingsBill = BillWithSettings();

               settingsBill.setCallCost(1.35);
               settingsBill.setSmsCost(0.85);
               settingsBill.setWarningLevel(5);
               settingsBill.setCriticalLevel(10);

               settingsBill.makeCall();
               settingsBill.makeCall();
               settingsBill.makeCall();
               settingsBill.makeCall();


               assert.equal("warning", settingsBill.totalClassName());
           });

           it("it should return a class name of 'critical' if critical level has been reached", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setWarningLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();


            assert.equal("critical", settingsBill.totalClassName());
        });

        it("it should stop the total call cost from increasing when critical level has been reached' if critical level has been reached", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();


            assert.equal("critical", settingsBill.totalClassName());
        });

         it("it should allow the total to increase after reaching the critical level & then upping the critical level", function(){
            let settingsBill = BillWithSettings();

            settingsBill.setCallCost(2.50);
            settingsBill.setSmsCost(0.85);
            settingsBill.setCriticalLevel(10);

            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();


            assert.equal("critical", settingsBill.totalClassName());
         })
        });
          
    

    


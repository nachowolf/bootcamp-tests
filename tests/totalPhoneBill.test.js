describe("Tests the totalPhoneBill function", function(){

  it("Should calculate the total price of calls", function(){
    assert.equal(totalPhoneBill("call, call, call, call, call, call, call"), "R19.25")
    })

  it("Should calculate the total price of sms", function(){
      assert.equal(totalPhoneBill("sms, sms, sms, sms,"), "R2.60")
    })

    it("Should calculate the overall price of calls and sms", function(){
      assert.equal(totalPhoneBill("sms, call, sms, sms, call, call, sms, sms, sms, call, call"), "R17.65")

    })
})

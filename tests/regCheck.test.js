describe('Tests the regCheck function' , function(){

    it("should return true if the number plate and province code match" , function(){
      assert.equal(regCheck("958424GP","GP"), true);

});

it("should return false if the number plate and province code do not match" , function(){
    assert.equal(regCheck("9847593GP", "CA"), false);
})
})

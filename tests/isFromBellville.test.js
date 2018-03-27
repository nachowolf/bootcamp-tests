describe('Tests the isFromBellville function' , function(){

    it('should return true for a number plate from Bellville' , function(){
        assert.equal(isFromBellville("CY"), true);
})

it("should return false for a number plate not from Bellville" , function(){
  assert .equal(isFromBellville("CT"), false);
})

});

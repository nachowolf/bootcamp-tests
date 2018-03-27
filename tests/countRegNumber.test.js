describe('Tests the countRegNumber function' , function(){

  it('should return 1' , function(){
      assert.equal(countRegNumber("CA 495949"), 1);
  });

    it('should return 4' , function(){
        assert.equal(countRegNumber(countReg), 4);
});
var countReg = ("CA 343534, CJ8375833, CY993853, CA757358");



});

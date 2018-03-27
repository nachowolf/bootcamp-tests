describe("Tests the countAllPaarl function (CJ)", function(){

it("Should return 2", function(){
  assert.equal(countAllPaarl("CJ3848, CJ846582, BP83475"), 2)
})

it("Should return 0", function(){
  assert.equal(countAllPaarl("BP83475, CA84739"), 0)
})
})

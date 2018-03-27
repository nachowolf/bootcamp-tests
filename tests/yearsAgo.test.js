describe("Tests the yearsAgo function", function(){

  it("Should return 8", function(){
    assert.equal(yearsAgo(2010), 8)
  })

  it("Should return 0", function(){
    assert.equal(yearsAgo(2018), 0)
  })

})

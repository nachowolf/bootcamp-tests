describe("Tests the fromWhere function", function(){

  it("Should return Cape Town (CA)", function(){
    assert.equal(fromWhere("CA 238242"), "Cape Town")
  })

  it("Should return Bellville (CY)", function(){
    assert.equal(fromWhere("CY 795839"), "Bellville")
  })

  it("Should return Paarl (CJ)", function(){
    assert.equal(fromWhere("CJ 84849"), "Paarl")
  })

  it("Should return Some other place", function(){
    assert.equal(fromWhere("rfef"), "Some other place!")
  })
})

describe("Tests the transportFee function", function(){

  it("Should return the transport fee for morning", function(){
    assert.equal(transportFee("morning"), "R20")
  })

  it("Should return the transport fee for afternoon", function(){
    assert.equal(transportFee("afternoon"), "R10")
  })

  it("Should return the transport fee for nightshift", function(){
    assert.equal(transportFee("nightshift"), "free")
  })

  it("Should ask for a travel time", function(){
    assert.equal(transportFee(" "), "please input travel time")
  })
})

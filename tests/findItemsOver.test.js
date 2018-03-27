describe("Tests findItemsOver function", function(){

  it("Should return the items over 30", function(){
    assert.deepEqual(findItemsOver([{"name":"pears","qty":37},
                                      {"name":"bananas","qty":38},
                                      {"name":"apples","qty":14}]), [] )
  })

  it("should return an empty object", function(){
    assert.deepEqual(findItemsOver([{"name":"pears","qty":12}]), [])

  })

  it("should return an empty object", function(){
    assert.deepEqual(findItemsOver([{}]), [])


  })
})

describe("Tests the isWeekday function" , function(){

  it("Should print false for Weekend" , function(){
    assert.equal(isWeekday("Saturday"), false)
})

it("should print true for weekdays", function(){
  assert.equal(isWeekday('Monday'), true)
})
})

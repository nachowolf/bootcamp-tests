describe("Checks countAllFromTown function ", function(){

  it("should return 2", function(){
    assert.deepEqual(countAllFromTown("CL799, CH98677, CL86858, FC7575688","CL"), 2)
  })

  it("should return 0 because of no parameters", function(){
    assert.deepEqual(countAllFromTown(" ","CL"), 0)
  })

  it("should return 0", function(){
    assert.deepEqual(countAllFromTown("CH70700, CA087070, CB88007","CL"), 0)
    })
  it("should return 3", function(){
    assert.deepEqual(countAllFromTown("CL8899, CL97780, CL9797089","CL"), 3)
  })
})

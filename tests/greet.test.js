describe('Tests the greet function' , function(){

    it('It should greet Bob' , function(){
        assert.equal(greet("Bob"), "Hello, Bob");
});

it('It should greet Nath' , function(){
    assert.equal(greet("Nath"), "Hello, Nath");
});

});

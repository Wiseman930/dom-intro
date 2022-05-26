describe (" calculateBtnClicked function", function(){
    it("returns the number of registration numbers that only match the first code 'CL' with '3' ", function(){
        assert.equal(3,  calculateBtnClicked())
    });
    it("returns the number of registration numbers that only match the first code 'CF' with '2' ", function(){
        assert.equal(1,  calculateBtnClicked())
    });
    it("returns the number of registration numbers that only match the first code 'CA' with '2' ", function(){
        assert.equal(2,  calculateBtnClicked())
    })
})
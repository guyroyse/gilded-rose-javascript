const { expect } = require('chai');

describe("Gilded Rose", function() {

  // it("should do something", function() {
  //   update_quality();
  // });

  it('should verify mocha works fine', () => {
    let a = 1, b = 2;
    expect(a).to.be.lessThan(b)
  })

});

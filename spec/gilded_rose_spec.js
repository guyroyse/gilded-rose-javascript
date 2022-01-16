const { expect } = require('chai');
const { Item } = require('../src/gilded_rose');

// function Item(name, sell_in, quality) {
//   this.name = name;
//   this.sell_in = sell_in;
//   this.quality = quality;
// }

describe('Gilded Rose', () => {

  // it("should do something", function() {
  //   update_quality();
  // });

  // it('should verify mocha works fine', () => {
  //   let a = 1, b = 2;
  //   expect(a).to.be.lessThan(b)
  // });
  //
  // it('should verify mocha test setup is a success', () => {
  //   expect(true).to.be.true;
  // });

  // it('should set an array of items', () => {
  //   expect(items instanceof Array).to.be.true;
  // });

  //do not alter the Item class or items property as those belong to the goblin in the corner
  it('should verify Item constructor is present', () => {
    expect(Item).to.be.a('function');
  });
});

const { expect } = require('chai');
const { Item, items, update_quality } = require('../src/gilded_rose');

// function Item(name, sell_in, quality) {
//   this.name = name;
//   this.sell_in = sell_in;
//   this.quality = quality;
// }

describe('Gilded Rose', () => {

  // it("should do something", function() {
  //   update_quality();
  // });

  //do not alter the Item class or items property as those belong to the goblin in the corner
  it('should verify Item constructor is present', () => {
    expect(Item).to.be.a('function');
  });

  it('should set an array of items', () => {
    expect(items instanceof Array).to.be.true;
    expect(items.length).to.be.greaterThan(0);
  });

  //We have a system in place that updates our inventory for us...
  it('should verify the presence of an update_quality function', () => {
    expect(update_quality).to.be.a('function');
  });
});

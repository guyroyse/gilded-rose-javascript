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

  // items have a sell_in value ...
  it('should verify that an item has a sell_in parameter', () => {
    const testItem = new Item('itemName', 2, 3);
    expect(testItem.sell_in === 2).to.be.true;
  });

  //items have a quality value ...
  it('should verify that an item has a quality parameter', () => {
    const testItem = new Item('itemName', 2, 3);
    expect(testItem.quality === 3).not.to.be.false;
  });

  // At the end of each day our system lowers both values for every item
  it('should verify sell_in value goes down each day', () => {
    const previous_sell_in = items[0].sell_in;
    const previous_quality = items[0].quality;
    update_quality(items);
    expect(items[0].sell_in).to.be.lessThan(previous_sell_in);
    expect(items[0].quality).to.be.lessThan(previous_quality);
  });

  // Once the sell_in days is less then zero, quality degrades twice as fast
  it('should verify quality degrades twice as fast once sell_in value is below 0', () => {
    items.push(new Item('testItem', 0, 5));
    update_quality(items);
    expect(items[items.length - 1].quality).to.equal(3);
  });

  it ('should verify an update_quality f-n returns an array of items ',() =>{
    update_quality(items);
    expect(items instanceof Array).to.be.true;
    expect(items.length).to.be.greaterThan(0);
  })

  // 'Sulfuras', being a legendary item, never has to be sold or decreases in Quality
  it('should not update quality for Sulfuras', () => {
    expect(items[3].name).contains('Sulfuras');
    for (let i = 0; i < 50; i++) {
      previous_quality = items[3].quality;
      update_quality(items);
      expect(items[3].quality).to.equal();
    }
  });

});




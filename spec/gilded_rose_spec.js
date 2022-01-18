const { expect } = require('chai');
const { NAMES, ITEMS_DATA } = require('../src/constants');
const {getItemData} = require('../src/helpers');
const { Item, update_quality } = require('../src/gilded_rose');
const { new_update_quality } = require('../src/gilded_rose_refactored');

describe("Gilded Rose", function() {

  let items;

  beforeEach(() => {
    items = [
      new Item(NAMES.SULFURAS, ...getItemData(NAMES.SULFURAS)),
      new Item(NAMES.DEX, ...getItemData(NAMES.DEX)),
      new Item(NAMES.AGED, ...getItemData(NAMES.AGED)),
      new Item(NAMES.ELIXIR, ...getItemData(NAMES.ELIXIR)),
      new Item(NAMES.BACKSTAGE, ...getItemData(NAMES.BACKSTAGE)),
      new Item(NAMES.CONJURED, ...getItemData(NAMES.CONJURED)),
    ];
  });

  it('should verify new instance of Item class is succesfully created with matching data', () => {
    const { name, sell_in, quality } = new Item(NAMES.AGED, ...getItemData(NAMES.AGED));

    const [matching_sell_in, matching_quality] = getItemData(NAMES.AGED)

    expect(name).to.equal(NAMES.AGED);
    expect(sell_in).to.equal(matching_sell_in);
    expect(quality).to.equal(matching_quality);
  })

  // The Quality of an item is never more than 50
  it('should verify update_quality f-n correctly updates "Sulfuras"', () => {
    update_quality(items);

    const [{name, sell_in, quality}] = items;

    const [matching_sell_in, matching_quality] = getItemData(NAMES.SULFURAS)

    expect(name).to.equal(NAMES.SULFURAS);
    expect(sell_in).to.equal(matching_sell_in);
    expect(quality).to.equal(matching_quality);
  });
});

describe("Gilded Rose over new_update_function", function() {

  let items;

  beforeEach(() => {
    items = [
      new Item(NAMES.SULFURAS, ...getItemData(NAMES.SULFURAS)),
      new Item(NAMES.DEX, ...getItemData(NAMES.DEX)),
      new Item(NAMES.AGED, ...getItemData(NAMES.AGED)),
      new Item(NAMES.ELIXIR, ...getItemData(NAMES.ELIXIR)),
      new Item(NAMES.BACKSTAGE, ...getItemData(NAMES.BACKSTAGE)),
      new Item(NAMES.CONJURED, ...getItemData(NAMES.CONJURED)),
    ];
  });

  it('should verify a new_update_quality f-n returns an array of items ', () => {
    const new_updated_quality_result = new_update_quality(items);

    expect(new_updated_quality_result instanceof Array).to.be.true;
    expect(new_updated_quality_result.length).to.equal(Object.values(ITEMS_DATA).length);
  })

  // At the end of each day our system lowers both values
  it('should verify the sell_in value goes down every day', () => {
    const [, {sell_in}] = new_update_quality(items);

    expect(sell_in).to.equal(items[1].sell_in - 1);
  });

  it('should verify the sell_in value for "Sulfarus" does not go down', () => {
    const [{sell_in}] = new_update_quality(items);

    expect(sell_in).to.equal(items[0].sell_in);
  });

  it('should verify quality of the regular item decreases day by day', () => {
    const [, {quality}] = new_update_quality(items);

    expect(quality).to.equal(items[1].quality - 1);
  });

  it('should verify quality of the regular item decreases faster as its sell_in gets below zero', () => {
    items[1].sell_in = - 1;
    const [, {quality}]  = new_update_quality(items);

    expect(quality).to.equal(items[1].quality - 2);
  });

  it('should verify the "Aged Brie" and Backstage increases in its quality the older it gets', () => {
    const [, ,{quality}]  = new_update_quality(items);

    expect(quality).to.equal(items[2].quality + 1);
  });

  it('should verify quality of the Aged Brie will increase by 1 more as sell_in gets below zero', () => {
    items[2].sell_in = - 1;
    const [,, {quality}]  = new_update_quality(items);

    expect(quality).to.equal(items[2].quality + 2);
  });

  it('should verify quality of the Backstage goes up by 2 as its sell_in gets below 11, and it never gets above 50 in its quality', () => {
    items[4].sell_in = 10;
    const [,,,, {quality}]  = new_update_quality(items);

    expect(quality).to.equal(items[4].quality + 2);
  });

  it('should verify quality of the Backstage goes up by 3 as its sell_in gets below 6, and it never gets above 50 in its quality', () => {
    items[4].sell_in = 5;
    const [,,,, {quality}]  = new_update_quality(items);

    expect(quality).to.equal(items[4].quality + 3);
  });

  it('should verify quality of the Backstage passes drops to 0 after the concert', () => {
    items[4].sell_in = - 1;
    const [,,,, {quality}]  = new_update_quality(items);

    expect(quality).to.equal(0);
  });

  //At the end of each day our system lowers both values for every item
  it('should verify the quality of regular items goes down at the end of each day', () => {
    console.log(items)
    const [, {quality}] = new_update_quality(items);
    expect(quality).to.equal(items[1].quality - 1);
  });

  it('should verify the quality of "Sulfuras" product always stays at 80', () => {
    console.log(items)
    const [{quality}] = new_update_quality(items);
    expect(quality).to.equal(80);
  });

  it('should verify quality of "Conjured" item decreases in quality twice as fast as normal items', () => {
    console.log(items);
    const [,,,,, {quality}]  = new_update_quality(items);
    expect(quality).to.equal(items[5].quality - 2);
  });

  it('should verify that quality of any item except Sulfuras never gets more than 50', () => {
    items[2].quality = 50;
    const [,, {quality}] = new_update_quality(items);
    expect( quality).to.equal(50);
  });

});


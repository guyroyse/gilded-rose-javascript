
'use strict'


describe("Gilded Rose Normal", () =>{

  it("1 when given name, sell-in and quality should return same values", ()=> {
    var  myitem = new Item('item1',2,3)
    expect(myitem.name).toBe('item1');
    expect(myitem.sell_in).toBe(2);
    expect(myitem.quality).toBe(3);
  });

  it("2 when test item on the array update_quality returns Quality 20 ", ()=> {
    var  myitem = new Item('test item',3,21)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].quality).toBe(20);

  });

});
describe('Gilded Rose Normal Items', () => {
  it("3 when test item with sell-in 3 quality 6 returns sell-in 2 quality 5 ", ()=> {
    var  myitem = new Item('test item',3,6)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(2);
    expect(items[item_index].quality).toBe(5);
  });
  it("4 when test item with sell-in 1 quality 4 returns sell-in 0 quality 3  ", ()=> {
    var  myitem = new Item('test item',1,4)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(0);
    expect(items[item_index].quality).toBe(3);
  });
  it("5 when conjure cake sell-in 0 quality 3 call update_quality 1 more time returns sell-in -1 quality 1 ", ()=> {
    var  myitem = new Item('test item',0,3)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(-1);
    expect(items[item_index].quality).toBe(1);
  });
  it("6 when conjure cake sell-in -1 quality 1 call update_quality 1 more time returns sell-in -2 quality 0 ", ()=> {
    var  myitem = new Item('test item',-1,1)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(-2);
    expect(items[item_index].quality).toBe(0);
  });
})

describe('Gilded Rose Aged Brie', () => {
  it("7 when Aged Brie with sell-in 2 quality 0 returns sell-in 1 quality 1 ", ()=> {
    var  myitem = new Item('Aged Brie', 2, 0)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(1);
    expect(items[item_index].quality).toBe(1);
  });

  it('8 Quality of item never goes over 50', () => {
    var  myitem = new Item('Aged Brie', 2, 50)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].quality).toBe(50);
  });
  it("9 when Aged Brie with sell-in 0 quality 0 returns sell-in -1 quality 2 ", ()=> {
    var  myitem = new Item('Aged Brie', 0, 0)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(-1);
    expect(items[item_index].quality).toBe(2);
  });
});
describe('Sulfuras', () => {
  it("10 when Sulfuras with sell-in 0 quality 80 returns sell-in 0 quality 80 ", ()=> {
    var  myitem = new Item('Sulfuras, Hand of Ragnaros', 0, 80)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(0);
    expect(items[item_index].quality).toBe(80);
  });
});
describe('Backstage', () => {
  it("11 when Backstage with sell-in 15 quality 20 returns sell-in 14 quality 20 ", ()=> {
    var  myitem = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(14);
    expect(items[item_index].quality).toBe(21);
  });
  it("12 when Backstage with sell-in 10 quality 25 returns sell-in 9 quality 27 ", ()=> {
    var  myitem = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 25)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(9);
    expect(items[item_index].quality).toBe(27);
  });
  it("13 when Backstage with sell-in 4 quality 38 returns sell-in 3 quality 41 ", ()=> {
    var  myitem = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 38)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(3);
    expect(items[item_index].quality).toBe(41);
  });
  it("14 when Backstage with sell-in 0 quality 50 returns sell-in -1 quality 0 ", ()=> {
    var  myitem = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50)
    items.push(myitem)
    var item_index = items.length -1
    update_quality()
    expect(items[item_index].sell_in).toBe(-1);
    expect(items[item_index].quality).toBe(0);
  });
});

describe("Gilded Rose", function() {

  /*
  Degrade the quatliy after every day.
  */
  it('vest - normal degrade', function () {
    testTick(items[0], 10, 10, 9, 9);
  });
  
  /*
  Once the sell_in days is less then zero, quality degrades twice as fast
  */
  it('vest - extreme degrade', function () {
    testTick(items[0], 10, -5, 8, -6);
  });
  
  /*
  The quality of an item is never negative
  */
  it('vest - zero quality', function () {
    testTick(items[0], 0, -5, 0, -6);
  });
  
  it('brie - normal degrade', function () {
    testTick(items[1], 10, 10, 11, 9);
  });
  
  /*
  "Aged Brie" actually increases in quality the older it gets
  */
  it('brie - extreme degrade', function () {
    testTick(items[1], 10, -5, 12, -6);
  });
  
  /*
  The quality of an item is never more than 50
  */
  it('brie - extreme quality', function () {
    testTick(items[1], 50, -5, 50, -6);
  });
  
  /*
  "Sulfuras", being a legendary item, never has to be sold nor does
  it decrease in quality
  */
  it('Sulfuras - normal degrade', function () {
    testTick(items[3], 80, 0, 80, 0);
  });
  
  /*
  "Backstage passes", like aged brie, increases in quality as it 's sell_in
  value decreases; quality increases by 2 when there are 10 days or less and
  by 3 when there are 5 days or less but quality drops to 0 after the concert
  */
  
  /*
  "Backstage passes", like aged brie, increases in quality as it 's sell_in
  value decreases
  */
  it('Backstage Pass - normal degrade', function () {
    testTick(items[4], 10, 20, 11, 19) ;
  });
  
  /*
  "Backstage passes", quality increases by 2 when there are 10 days or less
  */
  it('Backstage Pass - extreme degrade', function () {
    testTick(items[4], 10, 7, 12, 6) ;
  });
  
  /*
  "Backstage passes", quality increases by 3 when there are 5 days or less
  */
  it('Backstage Pass - super extreme degrade', function () {
    testTick(items[4], 10, 3, 13, 2) ;
  });

  /*
  "Backstage passes", quality drops to 0 after the concert
  */
  it('Backstage Pass - after concert', function () {
    testTick(items[4], 10, 0, 0, -1) ;
  });
  
  /*
  "Conjured" items degrade in quality twice as fast as normal items
  */
  it('Conjured - normal degrade', function () {
    testTick(items[5], 10, 10, 8, 9);
  });
  
  /*
  "Conjured" items degrade in quality twice as fast as normal items
  */
  it('Conjured - extreme degrade', function () {
    testTick(items[5], 10, -5, 6, -6);
  });
  
  /*
  Test function: sets start values, runs an interation, and tests end values
  */
  function testTick(item, startQuality, startSellIn, endQuality, endSellIn) {
    item.quality = startQuality;
    item.sell_in = startSellIn;
    
    update_quality();
    
    expect(item.quality).toBe(endQuality);
    expect(item.sell_in).toBe(endSellIn);
  }
});

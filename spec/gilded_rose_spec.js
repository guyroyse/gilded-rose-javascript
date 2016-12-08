describe("Gilded Rose", function() {

  describe('normal items (dexterity and Elixir)', () => {
    it("+5 Dexterity Vest should update quality minus 1 and sell_in minus 1 with sell_In still above zero", function() {
      items = []
      items.push(new Item('+5 Dexterity Vest', 10, 20));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: '+5 Dexterity Vest',
        sell_in: 9,
        quality: 19
      }))
    });
    it('Exlixir should update quality minus 1 and sell_in minus 1 with sell_In still above zero', () => {
      items = []
      items.push(new Item('Elixir of the Mongoose', 5, 7));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Elixir of the Mongoose',
        sell_in: 4,
        quality: 6
      }))
    });
    it('once sell_in days is less than zero, quality decreases twice as fast (by 2 for Dexterity)', () => {
      items = []
      items.push(new Item('+5 Dexterity Vest', 0, 20));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: '+5 Dexterity Vest',
        sell_in: -1,
        quality: 18
      }))
    })
    it('once sell_in days is less than zero, quality decreases twice as fast (by 2 for Elixir of the Mongoose)', () => {
      items = []
      items.push(new Item('Elixir of the Mongoose', 0, 20));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Elixir of the Mongoose',
        sell_in: -1,
        quality: 18
      }))
    })

    it('the quality of Dexterity is never negative but stays at zero', () => {
      items=[]
      items.push(new Item('+5 Dexterity Vest', -1, 1));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: '+5 Dexterity Vest',
        sell_in: -2,
        quality: 0
      }))
    })
    it('the quality of Elixir is never negative but stays at zero', () => {
      items = []
      items.push(new Item('Elixir of the Mongoose', 10, 0))

      update_quality()
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Elixir of the Mongoose',
        sell_in: 9,
        quality: 0
      }))
    })
  })

  describe('Aged Brie item', () => {
    it('Aged Brie should update quality plus 1 and sell_in minus 1 with sell_In still above zero', () => {
      items = []
      items.push(new Item('Aged Brie', 2, 0));

      update_quality()
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Aged Brie',
        sell_in: 1,
        quality: 1
      }))
    });
    it('Aged Brie should update quality of an item to never be more than 50', () => {
      items = []
      items.push(new Item('Aged Brie', 2, 50));

      update_quality()
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Aged Brie',
        sell_in: 1,
        quality: 50
      }))
    });
  })

  describe("Sulfuras item", () => {
    it('Sulfuras should never decrease in quality and sell_in should remain 0', () => {
      items = []
      items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Sulfuras, Hand of Ragnaros',
        sell_in: 0,
        quality: 80
      }))
    });
  })

  describe("Backstage passes item", () => {
    it('Backstage passes quality increases by 1 when the sell_in days are greater than 10 and sell_in days decrease by 1', () => {
      items = []
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sell_in: 14,
        quality: 21
      }))
    });
    it('Backstage passes quality increases by 2 when the sell_in days are between 5 and 10 and sell_in days decrease by 1', () => {
      items = []
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 7, 20));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sell_in: 6,
        quality: 22
      }))
    });
    it('Backstage passes quality increases by 3 when the sell_in days are 5 days or less and sell_in days decrease by 1 ', () => {
      items = []
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 3, 11));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sell_in: 2,
        quality: 14
      }))
    });
    it('Backstage passes quality drops to zero after the concert (when the sell_in days are negative) and sell_in days decrease by 1 ', () => {
      items = []
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 0, 80));

      update_quality();
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sell_in: -1,
        quality: 0
      }))
    });
    it('Backstage passes should update quality to never be more than 50 (increasing by 3 b/c less than 5 days)', () => {
      items = []
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 2, 49));

      update_quality()
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sell_in: 1,
        quality: 50
      }))
    });
    it('Backstage passes should update quality to never be more than 50 (increasing by 1 b/c greater than 10 days)', () => {
      items = []
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 77, 50));

      update_quality()
      expect(items[0]).toEqual(jasmine.objectContaining({
        name: 'Backstage passes to a TAFKAL80ETC concert',
        sell_in: 76,
        quality: 50
      }))
    });
  })
})

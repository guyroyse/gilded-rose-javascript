
/* globals describe, beforeEach, afterEach, it, expect, update_quality, items */
describe('Gilded Rose', function () {
  describe('update_quality function', () => {
    beforeEach(() => {
      this.firsItem = items[0]
      this.prevName = this.firsItem.name
      this.prevQuality = this.firsItem.quality
      this.prevSellInDays = this.firsItem.sell_in
    })

    afterEach(() => {
      this.firsItem.name = this.prevName
      this.firsItem.quality = this.prevQuality
      this.firsItem.sell_in = this.prevSellInDays
    })

    describe('when product is normal', () => {
      it('should decrement the `sell_in` days by one', () => {
        const expectedSellInDays = this.prevSellInDays - 1

        update_quality()

        expect(this.firsItem.sell_in).toBe(expectedSellInDays)
      })

      it('should degrade the `quality` by one', () => {
        const expectedQuality = this.prevQuality - 1

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should degrade the `quality` twice as fast when the `sell_in` days is less than zero', () => {
        this.firsItem.sell_in = 0
        const expectedQuality = this.prevQuality - 2

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should never degrade the quality to less than zero', () => {
        this.firsItem.quality = 0
        const expectedQuality = 0

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })
    })

    describe('when product is Legendary (`Sulfuras, Hand of Ragnaros`)', () => {
      beforeEach(() => {
        this.firsItem.name = 'Sulfuras, Hand of Ragnaros'
      })

      it('should never degrade nor increment its quality', () => {
        this.firsItem.quality = 80
        const expectedQuality = this.firsItem.quality

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should never decrement its `sell_in` days', () => {
        const expectedSellInDays = this.prevSellInDays

        update_quality()

        expect(this.firsItem.sell_in).toBe(expectedSellInDays)
      })
    })

    describe('when product is Aged (`Aged Brie`)', () => {
      beforeEach(() => {
        this.firsItem.name = 'Aged Brie'
      })

      it('should decrement the `sell_in` days by one', () => {
        const expectedSellInDays = this.prevSellInDays - 1

        update_quality()

        expect(this.firsItem.sell_in).toBe(expectedSellInDays)
      })

      it('should increment the quality by one', () => {
        this.firsItem.quality = 10
        const expectedQuality = this.firsItem.quality + 1

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should not increment the quality to more than 50', () => {
        this.firsItem.quality = 50
        const expectedQuality = 50

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })
    })

    describe('when product is Backstage (`Backstage passes to a TAFKAL80ETC concert`)', () => {
      beforeEach(() => {
        this.firsItem.name = 'Backstage passes to a TAFKAL80ETC concert'
      })

      it('should decrement the `sell_in` days by one', () => {
        const expectedSellInDays = this.prevSellInDays - 1

        update_quality()

        expect(this.firsItem.sell_in).toBe(expectedSellInDays)
      })

      it('should increment the quality by one', () => {
        this.firsItem.sell_in = 20
        this.firsItem.quality = 11
        const expectedQuality = this.firsItem.quality + 1

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should increment the quality by two when there are 10 days or less', () => {
        this.firsItem.sell_in = 9
        this.firsItem.quality = 10
        const expectedQuality = this.firsItem.quality + 2

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should increment the quality by three when there are 5 days or less', () => {
        this.firsItem.sell_in = 4
        this.firsItem.quality = 10
        const expectedQuality = this.firsItem.quality + 3

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should drop quality to 0 when `sell_in` days is less than zero (concert has passed)', () => {
        this.firsItem.sell_in = 0
        const expectedQuality = 0

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should not increment the quality to more than 50', () => {
        this.firsItem.quality = 50
        const expectedQuality = 50

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })
    })

    describe('when product is Conjured (`Conjured Mana Cake`)', () => {
      beforeEach(() => {
        this.firsItem.name = 'Conjured Mana Cake'
      })

      it('should decrement the `sell_in` days by one', () => {
        const expectedSellInDays = this.prevSellInDays - 1

        update_quality()

        expect(this.firsItem.sell_in).toBe(expectedSellInDays)
      })

      it('should degrade the `quality` by one', () => {
        const expectedQuality = this.prevQuality - 1

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should degrade the quality twice as fast of a normal product when `sell_in` days is less than zero', () => {
        this.firsItem.sell_in = 0
        const expectedQuality = this.prevQuality - 4

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })

      it('should never degrade the quality to less than zero', () => {
        this.firsItem.quality = 0
        const expectedQuality = 0

        update_quality()

        expect(this.firsItem.quality).toBe(expectedQuality)
      })
    })
  })
})

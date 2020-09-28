/* eslint camelcase: 0, no-unused-vars: 0 */

function Item (name, sell_in, quality) {
  this.name = name
  this.sell_in = sell_in
  this.quality = quality
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20))
items.push(new Item('Aged Brie', 2, 0))
items.push(new Item('Elixir of the Mongoose', 5, 7))
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80))
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20))
items.push(new Item('Conjured Mana Cake', 3, 6))

function handleNormalItem (item) {
  if (item.quality > 0) {
    if (item.sell_in >= 0) {
      item.quality--
    } else {
      item.quality -= 2
    }
  }
}

function handleAgedItem (item) {
  if (item.quality < 50) {
    item.quality++
  }
}

function handleBackstageItem (item) {
  if (item.quality < 50) {
    if (item.sell_in < 0) {
      item.quality = 0
    } else if (item.sell_in <= 5) {
      item.quality += 3
    } else if (item.sell_in <= 10) {
      item.quality += 2
    } else {
      item.quality++
    }
  }
}

function handleConjuredItem (item) {
  if (item.quality > 0) {
    if (item.sell_in >= 0) {
      item.quality--
    } else {
      item.quality -= 4
    }
  }
}

function isLegendaryItem (item) {
  return item.name.includes('Sulfuras')
}

function handleItem (item) {
  if (isLegendaryItem(item)) return

  item.sell_in--

  if (item.name.includes('Aged')) {
    handleAgedItem(item)
  } else if (item.name.includes('Backstage')) {
    handleBackstageItem(item)
  } else if (item.name.includes('Conjured')) {
    handleConjuredItem(item)
  } else {
    handleNormalItem(item)
  }
}

function update_quality () {
  items.forEach(handleItem)
}

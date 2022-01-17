const { NAMES } = require("../src/constants");
const { getItemData } = require("../src/helpers");

class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
  }
}

const items = []

items.push(new Item(NAMES.DEX, ...getItemData(NAMES.DEX)));
items.push(new Item(NAMES.AGED, ...getItemData(NAMES.AGED)));
items.push(new Item(NAMES.ELIXIR, ...getItemData(NAMES.ELIXIR)));
items.push(new Item(NAMES.SULFURAS, ...getItemData(NAMES.SULFURAS)));
items.push(new Item(NAMES.BACKSTAGE, ...getItemData(NAMES.BACKSTAGE)));
items.push(new Item(NAMES.CONJURED, ...getItemData(NAMES.CONJURED)));

function update_quality() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name != NAMES.AGED && items[i].name != NAMES.BACKSTAGE) {
      if (items[i].quality > 0) {
        if (items[i].name != NAMES.SULFURAS) {
          items[i].quality = items[i].quality - 1
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1
        if (items[i].name == NAMES.BACKSTAGE) {
          if (items[i].sell_in < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1
            }
          }
        }
      }
    }
    if (items[i].name != NAMES.SULFURAS) {
      items[i].sell_in = items[i].sell_in - 1;
    }
    if (items[i].sell_in < 0) {
      if (items[i].name != NAMES.AGED) {
        if (items[i].name != NAMES.BACKSTAGE) {
          if (items[i].quality > 0) {
            if (items[i].name != NAMES.SULFURAS) {
              items[i].quality = items[i].quality - 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1
        }
      }
    }
  }
}

module.exports = { Item, items, update_quality };

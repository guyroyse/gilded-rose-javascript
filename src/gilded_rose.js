function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

const names = {
  aged: "Aged Brie",
  sulfuras: "Sulfuras, Hand of Ragnaros",
  backstage: "Backstage passes to a TAFKAL80ETC concert",
};

const quality = {
  max: 50
}

function update_quality() {
  items.map(update_item);
}

const update_item = (item) => {
  if(item.name === names.sulfuras){
    return;
  }

    if (item.name != names.aged && item.name != names.backstage) {
      if (item.quality > 0) {
          item.quality--;
        }
    } else {
      if (item.quality < quality.max) {
        item.quality = item.quality + 1
        if (item.name == names.backstage) {
          if (item.sell_in < 11) {
            if (item.quality < quality.max) {
              item.quality++;
            }
          }
          if (item.sell_in < 6) {
            if (item.quality < quality.max) {
              item.quality++;
            }
          }
        }
      }
    }
      item.sell_in--;
    if (item.sell_in < 0) {
      if (item.name != names.aged) {
        if (item.name != names.backstage) {
          if (item.quality > 0) {
              item.quality--;
            }
        } else {
          item.quality = 0;
        }
      } else {
        if (item.quality < quality.max) {
          item.quality++;
        }
      }
    }
}
module.exports = {Item, items, update_quality};
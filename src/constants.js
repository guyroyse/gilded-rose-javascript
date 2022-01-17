const NAMES = {
    DEX: "+5 Dexterity Vest",
    AGED: "Aged Brie",
    ELIXIR: "Elixir of the Mongoose",
    SULFURAS: "Sulfuras, Hand of Ragnaros",
    BACKSTAGE: "Backstage passes to a TAFKAL80ETC concert",
    CONJURED: "Conjured Mana Cake",
};

const ITEMS_DATA = {
    [NAMES.DEX]: {
        sell_in: 10,
        quality: 20,
    },
    [NAMES.AGED]: {
        sell_in: 2,
        quality: 0,
    },
    [NAMES.ELIXIR]: {
        sell_in: 5,
        quality: 7,
    },
    [NAMES.SULFURAS]: {
        sell_in: 0,
        quality: 80,
    },
    [NAMES.BACKSTAGE]: {
        sell_in: 15,
        quality: 20,
    },
    [NAMES.CONJURED]: {
        sell_in: 3,
        quality: 6,
    },
};
 module.exports ={NAMES, ITEMS_DATA}
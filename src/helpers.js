const {ITEMS_DATA} = require('./constants');

const getItemData = (key) => {
    const { sell_in, quality } = ITEMS_DATA[key];

    return [sell_in, quality];
};

module.exports = { getItemData }
const {ITEMS_DATA} = require('./constants');

const getItemData = (key) => {
    const { sell_in, quality } = ITEMS_DATA[key];

    return [sell_in, quality];
};

const decreaseValue = (value, decreasingValue = 1) => value - decreasingValue;

const updateValueByCondition = (updatedValue, value, cond) =>
    cond ? updatedValue : value;

module.exports = { getItemData, decreaseValue, updateValueByCondition }
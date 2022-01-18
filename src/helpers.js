const {ITEMS_DATA} = require('./constants');

const getItemData = (key) => {
    const { sell_in, quality } = ITEMS_DATA[key];

    return [sell_in, quality];
};

const decreaseValue = (value, decreasingValue = 1) => value - decreasingValue;

const increaseValue = (value, increasingValue = 1) => value + increasingValue;

const updateValueByCondition = (updatedValue, value, cond) =>
    cond ? updatedValue : value;

module.exports = { getItemData, decreaseValue, updateValueByCondition, increaseValue }
const { NAMES } = require('./constants');
const { items } = require('./gilded_rose');
const { decreaseValue, updateValueByCondition, increaseValue } = require('./helpers');

const matchingHandlers = {
    [NAMES.DEX]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            quality > 0
        );

        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            sell_in < 0 && quality > 0
        );

        return {
            quality,
            sell_in,
            name,
        };
    },
    [NAMES.AGED]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);

        quality = updateValueByCondition(
            increaseValue(quality),
            quality,
            quality < 50
        );

        quality = updateValueByCondition(
            increaseValue(quality),
            quality,
            sell_in < 0 && quality < 50
        );

        return {
            quality,
            sell_in,
            name,
        };
    },
    [NAMES.ELIXIR]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            quality > 0
        );
        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            sell_in < 0 && quality > 0
        );

        return {
            quality,
            sell_in,
            name,
        };
    },
    [NAMES.SULFURAS]: (item) => ({
        ...item,
    }),
    [NAMES.BACKSTAGE]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
        quality = updateValueByCondition(
            increaseValue(quality),
            quality,
            quality < 50
        );

        quality = updateValueByCondition(
            increaseValue(quality),
            quality,
            sell_in < 11 && quality < 50
        );

        quality = updateValueByCondition(
            increaseValue(quality),
            quality,
            sell_in < 6 && quality < 50
        );

        quality = updateValueByCondition(
            decreaseValue(quality, quality),
            quality,
            sell_in < 0
        );

        return {
            quality,
            sell_in,
            name,
        };
    },
    [NAMES.CONJURED]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
        quality = updateValueByCondition(
            decreaseValue(quality, 2),
            quality,
            quality > 0
        );

        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            sell_in < 0 && quality > 0
        );
        return {
            quality,
            sell_in,
            name,
        };
    },
};

const new_update_quality = (items) => {
    const mapHandler = (item) => {
        const { name } = item;

        return matchingHandlers[name](item);
    };

    return items.map(mapHandler);
};
console.log(new_update_quality(items))

module.exports = { new_update_quality }


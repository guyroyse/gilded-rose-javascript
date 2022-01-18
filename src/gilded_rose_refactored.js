const { NAMES } = require('./constants');
const { items } = require('./gilded_rose');
const { decreaseValue, updateValueByCondition } = require('./helpers');

const matchingHandlers = {
    [NAMES.DEX]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            quality > 0
        );
        return {
            quality,
            sell_in,
            name,
        };
    },
    [NAMES.AGED]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
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
        return {
            quality,
            sell_in,
            name,
        };
    },
    [NAMES.CONJURED]: ({ quality, sell_in, name }) => {
        sell_in = decreaseValue(sell_in);
        quality = updateValueByCondition(
            decreaseValue(quality),
            quality,
            quality > 0
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


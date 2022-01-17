const getItemData = (key) => {
    const { sell_in, quality } = itemsData[key];

    return [sell_in, quality];
};

module.exports = { getItemData }
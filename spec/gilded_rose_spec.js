const { expect } = require('chai');
const { NAMES } = require('../src/constants');
const {getItemData} = require('../src/helpers');
const { Item } = require('../src/gilded_rose');



describe("Gilded Rose", function() {

  it('should verify new instance of Item class is succesfully created with matching data', () => {
    const { name, sell_in, quality } = new Item(NAMES.AGED, ...getItemData(NAMES.AGED));

    const [matching_sell_in, matching_quality] = getItemData(NAMES.AGED)

    expect(name).to.be(NAMES.AGED);
    expect(sell_in).to.be(matching_sell_in);
    expect(quality).to.be(matching_quality);
  })

});
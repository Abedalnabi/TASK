const { addCountry } = require('./country');
const { addState } = require('./state');
const { addCity } = require('./city');
const { addTown } = require('./town');
const { addProduct } = require('./product');
const { addSubProduct } = require('./subProduct');
const db = require('../../config/db/db');
const { sequelize } = db;
const { QueryTypes } = require('sequelize');

module.exports = {
  getAllProductWithInfo: async () => {
    let data = await sequelize.query(
      'SELECT * FROM Product inner join SubProduct on Product.intProductID = SubProduct.intProductID',
      { type: QueryTypes.SELECT }
    );

    return { Product: data };
  },

  addProductWithInfo: async (args) => {
    const { strCountry, strState, strCity, strTown, strProductName, strSubProduct } =
      args.productWithInfoInput;

    const { intCountryID } = await addCountry({ strCountry });
    const { intStateID } = await addState({ strState, intCountryID });
    const { intCityID } = await addCity({ strCity, intStateID });
    const { intTownID } = await addTown({ strTown, intCityID });
    const { intProductID } = await addProduct({
      strCountry,
      strState,
      strCity,
      strTown,
      strProductName,
      intCountryID,
      intStateID,
      intCityID,
      intTownID,
    });
    await addSubProduct({ strSubProduct, intProductID });

    return 'Product with related information created';
  },
};

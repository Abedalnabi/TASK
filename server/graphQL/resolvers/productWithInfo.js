const { addCountry } = require('./country');
const { addState } = require('./state');
const { addCity } = require('./city');
const { addTown } = require('./town');
const { addProduct } = require('./product');
const { addSubProduct } = require('./subProduct');

const db = require('../../config/db/db');
const { tblProduct } = db;

module.exports = {
  getAllProductWithInfo: async () => {
    const data = await tblProduct.findAll({});
    return { Product: data };

    // let country = { allIds: [] };
    // let town = { allIds: [] };

    // data.forEach((ele) => {
    //   // console.log('ele.intCountryID', ele.dataValues);

    //   const intCountryID = ele.intCountryID;
    //   const intTownID = ele.intTownID;

    //   // add Country
    //   if (!country[intCountryID]) {
    //     country[intCountryID] = { strCountry: ele.strCountry };
    //     country.allIds.push(intCountryID);
    //   }
    //   if (!country[intCountryID].States) {
    //     country[intCountryID].States = [];
    //   }
    //   if (!town[intTownID]) {
    //     country[intCountryID].States.push(intTownID);
    //   }

    //   // Add Town
    //   if (!town[intTownID]) {
    //     town[intTownID] = { strTown: ele.strTown };
    //     town.allIds.push(intTownID);
    //   }

    //   if (!town[intTownID].Product) {
    //     town[intTownID].Product = [];
    //   }

    //   town[intTownID].Product.push(ele.intProductID);
    // });
    // console.log('country', country);
    // console.log('town', town);

    // return { Country: JSON.stringify(country), Town: JSON.stringify(town) };
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

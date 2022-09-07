const Sequelize = require('sequelize');
const db = require('../../config/db/db');
const { Op } = Sequelize;
const { tblProduct, tblSubProduct } = db;

module.exports = {
  getAllProduct: async () => {
    try {
      const data = await tblProduct.findAll();

      return { Product: data };
    } catch (err) {
      throw new Error(err);
    }
  },

  addProduct: async (args) => {
    const {
      strProductName,
      strCountry,
      strState,
      strCity,
      strTown,
      intCountryID,
      intStateID,
      intCityID,
      intTownID,
    } = args.productInput || args;

    try {
      const [Product, created] = await tblProduct.findOrCreate({
        where: {
          [Op.and]: [{ strProductName: strProductName }, { intTownID: intTownID }],
        },
        defaults: {
          strProductName,
          strCountry,
          strState,
          strCity,
          strTown,
          intCountryID,
          intStateID,
          intCityID,
          intTownID,
        },
      });

      if (!created && args.productInput) throw new Error('product Already Exist');

      const newProductInfo = Product.dataValues;

      return newProductInfo;
    } catch (err) {
      throw new Error(err);
    }
  },
};

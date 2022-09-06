const db = require('../../config/db/db');
const { tblCountry, tblState } = db;

module.exports = {
  getAllCountries: async () => {
    try {
      // find all counties
      let countries = await tblCountry.findAll();

      return countries;
    } catch (err) {
      throw new Error(err);
    }
  },

  addCountry: async (args) => {
    const { strCountry } = args.countryInput || args;

    try {
      const [Country, created] = await tblCountry.findOrCreate({
        where: {
          strCountry: strCountry,
        },
        defaults: {
          strCountry,
        },
      });

      if (!created && args.countryInput) throw new Error('Country Already Exist');

      const newCountryInfo = Country.dataValues;

      return newCountryInfo;
    } catch (err) {
      throw new Error(err);
    }
  },
};

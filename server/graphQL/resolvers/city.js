const Sequelize = require('sequelize');
const db = require('../../config/db/db');
const { Op } = Sequelize;
const { tblCity, tblTown } = db;

module.exports = {
  getAllCity: async () => {
    try {
      // find all Cities
      let cities = await tblCity.findAll();

      return cities;
    } catch (err) {
      throw new Error(err);
    }
  },

  addCity: async (args) => {
    const { strCity, intStateID } = args.cityInput || args;

    try {
      const [City, created] = await tblCity.findOrCreate({
        where: {
          [Op.and]: [{ strCity: strCity }, { intStateID: intStateID }],
        },
        defaults: {
          strCity,
          intStateID,
        },
      });

      if (!created && args.cityInput) throw new Error('City Already Exist');

      const newCityInfo = City.dataValues;

      return newCityInfo;
    } catch (err) {
      throw new Error(err);
    }
  },
};

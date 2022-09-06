const Sequelize = require('sequelize');
const db = require('../../config/db/db');
const { Op } = Sequelize;
const { tblTown } = db;

module.exports = {
  getAllTowns: async () => {
    let towns = await tblTown.findAll();
    return towns;
  },

  addTown: async (args) => {
    const { strTown, intCityID } = args.townInput || args;

    try {
      const [Town, created] = await tblTown.findOrCreate({
        where: {
          [Op.and]: [{ strTown: strTown }, { intCityID: intCityID }],
        },
        defaults: {
          strTown,
          intCityID,
        },
      });

      if (!created) throw new Error('Town Already Exist');

      const newTownInfo = Town.dataValues;

      return newTownInfo;
    } catch (err) {
      throw new Error(err);
    }
  },
};

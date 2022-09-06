const Sequelize = require('sequelize');
const db = require('../../config/db/db');
const { Op } = Sequelize;
const { tblState, tblCity } = db;

module.exports = {
  getAllStates: async () => {
    try {
      // find all states
      let states = await tblState.findAll();

      return states;
    } catch (err) {
      throw new Error(err);
    }
  },

  addState: async (args) => {
    const { strState, intCountryID } = args.stateInput || args;

    try {
      const [State, created] = await tblState.findOrCreate({
        where: {
          [Op.and]: [{ strState: strState }, { intCountryID: intCountryID }],
        },
        defaults: {
          strState,
          intCountryID,
        },
      });

      if (!created && args.stateInput) throw new Error('State Already Exist');

      const newStateInfo = State.dataValues;

      return newStateInfo;
    } catch (err) {
      throw new Error(err);
    }
  },
};

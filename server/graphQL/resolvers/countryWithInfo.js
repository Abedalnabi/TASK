const { addCountry, getAllCountries } = require('./country');
const { addState, getAllStates } = require('./state');
const { addCity, getAllCity } = require('./city');
const { addTown, getAllTowns } = require('./town');

module.exports = {
  getAllCountryWithInfo: async () => {
    const countries = await getAllCountries();
    const states = await getAllStates();
    const cities = await getAllCity();
    const towns = await getAllTowns();

    return { Country: countries, State: states, City: cities, Town: towns };
  },

  addCountryWithInfo: async (args) => {
    const { strCountry, strState, strCity, strTown } = args.countryWithInfoInput;

    const { intCountryID } = await addCountry({ strCountry });
    const { intStateID } = await addState({ strState, intCountryID });
    const { intCityID } = await addCity({ strCity, intStateID });
    await addTown({ strTown, intCityID });

    return 'Country with related information created';
  },
};

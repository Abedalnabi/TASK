const { buildSchema } = require('graphql');
const countrySchema = require('./schemas/country');
const stateSchema = require('./schemas/state');
const citySchema = require('./schemas/city');
const townSchema = require('./schemas/town');
const countryWithInfoSchema = require('./schemas/countryWithInfo');

module.exports = buildSchema(
  `
        ${countrySchema.Country}
        ${countrySchema.CountryInput}

        ${stateSchema.State}
        ${stateSchema.StateInput}

        ${citySchema.City}
        ${citySchema.CityInput}

        ${townSchema.Town}
        ${townSchema.TownInput}

        ${countryWithInfoSchema.CountryWithInfo}
        ${countryWithInfoSchema.CountryWithInfoInput}

        type RootQuery {
            ${countrySchema.CountryQueries}
            ${stateSchema.StateQueries}
            ${citySchema.CityQueries}
            ${townSchema.TownQueries}
            ${countryWithInfoSchema.CountryDetailsQueries}
        }

        type RootMutation {
            ${countrySchema.CountryMutation}
            ${stateSchema.StateMutation}
            ${citySchema.CityMutation}
            ${townSchema.TownMutation}
            ${countryWithInfoSchema.CountryWithInfoMutation}

        }

        schema {
            query:RootQuery
            mutation:RootMutation
        }
    `
);

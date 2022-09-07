const { buildSchema } = require('graphql');
const countrySchema = require('./schemas/country');
const stateSchema = require('./schemas/state');
const citySchema = require('./schemas/city');
const townSchema = require('./schemas/town');
const productSchema = require('./schemas/Product');

const productWithInfoSchema = require('./schemas/productWithInfo');

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

        ${productWithInfoSchema.ProductWithInfo}
        ${productWithInfoSchema.ProductWithInfoInput}

        ${productSchema.Product}
        ${productSchema.ProductInput}


        type RootQuery {
            ${countrySchema.CountryQueries}
            ${stateSchema.StateQueries}
            ${citySchema.CityQueries}
            ${townSchema.TownQueries}
            ${productWithInfoSchema.ProductWithInfoQueries}
        }

        type RootMutation {
            ${countrySchema.CountryMutation}
            ${stateSchema.StateMutation}
            ${citySchema.CityMutation}
            ${townSchema.TownMutation}
            ${productSchema.ProductMutation}

            ${productWithInfoSchema.ProductWithInfoMutation}


        }

        schema {
            query:RootQuery
            mutation:RootMutation
        }
    `
);

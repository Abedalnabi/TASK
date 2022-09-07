const countryResolver = require('./resolvers/country');
const stateResolver = require('./resolvers/state');
const cityResolver = require('./resolvers/city');
const townResolver = require('./resolvers/town');
const productWithInfoSchema = require('./resolvers/productWithInfo');

const rootResolver = {
  ...countryResolver,
  ...stateResolver,
  ...cityResolver,
  ...townResolver,
  ...productWithInfoSchema,
};

module.exports = rootResolver;

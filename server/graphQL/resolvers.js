const countryResolver = require('./resolvers/country');
const stateResolver = require('./resolvers/state');
const cityResolver = require('./resolvers/city');
const townResolver = require('./resolvers/town');
const countryWithInfoResolver = require('./resolvers/countryWithInfo');

const rootResolver = {
  ...countryResolver,
  ...stateResolver,
  ...cityResolver,
  ...townResolver,
  ...countryWithInfoResolver,
};

module.exports = rootResolver;

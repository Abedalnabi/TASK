exports.Country = `
type Country {
    intCountryID:Int,
    strCountry:String,
}
`;

exports.CountryInput = `
input CountryInput {
    strCountry:String!
}
`;

exports.CountryQueries = `
    getAllCountries:[Country]
`;

exports.CountryMutation = `
    addCountry(countryInput:CountryInput):Country
`;

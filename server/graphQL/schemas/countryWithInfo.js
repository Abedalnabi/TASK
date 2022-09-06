exports.CountryWithInfo = `
type CountryWithInfo {
    Country:[Country],
    State:[State],
    City:[City],
    Town:[Town]
}
`;

exports.CountryWithInfoInput = `
input CountryWithInfoInput {
    strCountry:String!,
    strState:String!,
    strCity:String!,
    strTown:String!,
}
`;

exports.CountryDetailsQueries = `
    getAllCountryWithInfo:CountryWithInfo

`;

exports.CountryWithInfoMutation = `
    addCountryWithInfo(countryWithInfoInput:CountryWithInfoInput):String
`;

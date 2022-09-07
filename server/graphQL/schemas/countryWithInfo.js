exports.CountryWithInfo = `
type CountryWithInfo {
    Product:[Product],
  
}
`;

exports.CountryWithInfoInput = `
input CountryWithInfoInput {
    strCountry:String!,
    strState:String!,
    strCity:String!,
    strTown:String!,
    strProductName:String!,
    strSubProduct:String!,

}
`;

exports.CountryDetailsQueries = `
    getAllCountryWithInfo:CountryWithInfo

`;

exports.CountryWithInfoMutation = `
    addCountryWithInfo(countryWithInfoInput:CountryWithInfoInput):String
`;

exports.Product = `
type Product {
    intProductID:Int,
    strProductName:String,
    strCountry:String,
    strState:String,
    strCity:String,
    strTown:String,
    intCountryID:Int,
    intStateID:Int,
    intCityID:Int,
    intTownID:Int,
}
`;

exports.ProductInput = `
input ProductInput {
    strProductName:String,
    strCountry:String,
    strState:String,
    strCity:String,
    strTown:String,
    intCountryID:Int,
    intStateID:Int,
    intCityID:Int,
    intTownID:Int,
}
`;

// exports.CountryQueries = `
//     getAllCountries:[Country]
// `;

exports.ProductMutation = `
    addProduct(productInput:ProductInput):Product
`;

exports.Product = `
type Product {
    intProductID:Int,
    strProductName:String,
    strCountry:String,
    strState:String,
    strCity:String,
    strTown:String,
    strSUbProductName:String,
    intCountryID:Int,
    intStateID:Int,
    intCityID:Int,
    intTownID:Int,
    intSubProductID:Int,

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

exports.ProductMutation = `
    addProduct(productInput:ProductInput):Product
`;

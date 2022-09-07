exports.ProductWithInfo = `
type ProductWithInfo {
    Product:[Product],
}
`;

exports.ProductWithInfoInput = `
input ProductWithInfoInput {
    strCountry:String!,
    strState:String!,
    strCity:String!,
    strTown:String!,
    strProductName:String!,
    strSubProduct:String!

}
`;

exports.ProductWithInfoQueries = `
    getAllProductWithInfo:ProductWithInfo

`;

exports.ProductWithInfoMutation = `
    addProductWithInfo(productWithInfoInput:ProductWithInfoInput):String
`;

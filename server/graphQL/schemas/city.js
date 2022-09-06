exports.City = `
type City {
    intCityID:Int,
    strCity:String,
    intStateID:Int,
}
`;

exports.CityInput = `
input CityInput {
    strCity:String!,
    intStateID:Int!
}
`;

exports.CityQueries = `
    getAllCity:[City]
`;

exports.CityMutation = `
    addCity(cityInput:CityInput):City
`;

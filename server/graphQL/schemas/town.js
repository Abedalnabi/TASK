exports.Town = `
type Town {
    intTownID:Int,
    strTown:String,
    intCityID:Int,
}
`;

exports.TownInput = `
input TownInput {
    strTown:String!,
    intCityID:Int!
}
`;

exports.TownQueries = `
    getAllTowns:[Town]
`;

exports.TownMutation = `
    addTown(townInput:TownInput):Town
`;

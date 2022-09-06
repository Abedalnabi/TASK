exports.State = `
type State {
    intStateID:Int,
    strState:String,
    intCountryID:Int,
}
`;

exports.StateInput = `
input StateInput {
    strState:String!,
    intCountryID:Int!
}
`;

exports.StateQueries = `
    getAllStates:[State]
`;

exports.StateMutation = `
    addState(stateInput:StateInput):State
`;

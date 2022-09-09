// this code just to show how global state like (just for explication)

const globalState = {
    countries: {
        1: {
            intCountryID: 1,
            strCountry: 'Jordan',
            StateIDs: [2, 3],
        },
        2: {
            intCountryID: 2,
            strCountry: 'USA',
            StateIDs: [1, 4],
        },
        allIds: [1, 2],
    },
    states: {
        1: {
            intStateID: 1,
            strState: 'New york',
            CityIDs: [1],
        },
        2: {
            intStateID: 2,
            strState: 'Amman',
            CityIDs: [2, 4],
        },
        3: {
            intStateID: 3,
            strState: 'Zarqa',
            CityIDs: [9, 5],
        },
        4: {
            intStateID: 4,
            strState: 'New jersey',
            CityIDs: [6, 12],
        },
        allIds: [1, 2, 3, 4],
    },

    City: {
        1: {
            intCityID: 1,
            strCity: 'Marka',
            TownIDs: [1, 6],
        },
        2: {
            intCityID: 2,
            strCity: 'Al-Naser',
            TownIDs: [7, 9, 13],
        },
        3: {
            intCityID: 3,
            strCity: 'Al-Nadee',
            TownIDs: [5, 22],
        },
        4: {
            intCityID: 4,
            strCity: 'sufea',
            TownIDs: [3, 23],
        },
        5: {
            intCityID: 5,
            strCity: 'new amman',
            TownIDs: [15, 16],
        },
        allIds: [1, 2, 3, 4, 5],
    },
    // ..etc
};

import ACTIONS from '../actions/CountryInfoAction';

export const initialState = {
	countriesInfo: {
		country: {},
		state: {},
		city: {},
		town: {},
		product: {},
		subProduct: {},
	},
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_COUNTRIES_INFO: {
			console.log('payload', payload);
			return { ...state, countriesInfo: payload  };
		}

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;

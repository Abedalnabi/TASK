import ACTIONS from '../actions/CountryInfoAction';

export const initialState = {
	countriesInfo: {
		Country: [],
		State: [],
		City: [],
		Town: [],
	},
};

const Reducer = (state, { type, payload }) => {
	switch (type) {
		case ACTIONS.SET_COUNTRIES_INFO:
			return { ...state, countriesInfo: payload };

		default:
			throw new Error(`No case for this type ==> ${type}`);
	}
};

export default Reducer;

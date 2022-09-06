import { createContext, useContext, useReducer } from 'react';
import Reducer, { initialState } from '../reducers/CountyInfoReducer';
import ACTIONS from '../actions/CountryInfoAction';

const CountriesContext = createContext();

export const CountriesInfoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const setCountriesInfo = (countriesInfo) => {
		dispatch({
			type: ACTIONS.SET_COUNTRIES_INFO,
			payload: countriesInfo,
		});
	};

	const value = {
		countriesInfo: state.countriesInfo,
		setCountriesInfo,
	};

	return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

const useCountriesContext = () => {
	const context = useContext(CountriesContext);

	if (!context) {
		throw new Error('useCountriesContext must be used within Parent and his child');
	}

	return context;
};

export default useCountriesContext;

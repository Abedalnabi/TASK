import axios from '../axios';
// End points
const graphql = '/graphql';

export async function addCountryWithInfo(countryInfo) {
	let query = `mutation {
      addCountryWithInfo(countryWithInfoInput: {
        strCountry: "${countryInfo.country}",
        strState: "${countryInfo.state}",
        strCity: "${countryInfo.city}",
        strTown: "${countryInfo.town}"
      })
    }
    `;

	try {
		const data = await axios.post(graphql, {
			query: query,
		});
		const newUserInfo = data.data;
		return newUserInfo;
	} catch (error) {
		throw new Error(error);
	}
}

export async function getCountriesWithInfo() {
	let query = `query {
    getAllCountryWithInfo {
      Country {
        intCountryID
        strCountry
      }
      State {
        intStateID
        intCountryID
        strState
      }
      City {
        intCityID
        intStateID
        strCity
      }
      Town{
        intTownID
        intCityID
        strTown
      }
    }
  }`;
	try {
		const data = await axios.post(graphql, {
			query: query,
		});
		const countryWithAllInfo = data.data.data.getAllCountryWithInfo;
		return countryWithAllInfo;
	} catch (error) {
		throw new Error(error);
	}
}

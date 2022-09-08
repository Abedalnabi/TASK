import axios from '../axios';
// End points
const graphql = '/graphql';

export async function addProductWithInfo(countryInfo) {
  let query = `mutation {
    addProductWithInfo(productWithInfoInput: {
        strCountry: "${countryInfo.country}",
        strState: "${countryInfo.state}",
        strCity: "${countryInfo.city}",
        strTown: "${countryInfo.town}"
        strProductName: "${countryInfo.product}"
        strSubProduct: "${countryInfo.subProduct}"
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

export async function getAllProductWithInfo() {
  let query = `query {
    getAllProductWithInfo {
      Product{
        intProductID
        strProductName
        strCountry
        strState
        strCity
        strTown
        strSUbProductName
        intCountryID
        intStateID
        intCityID
        intTownID
        intSubProductID
      }
    }
  }`;
  try {
    const data = await axios.post(graphql, {
      query: query,
    });
    const productWithInfo = data.data.data.getAllProductWithInfo;
    return productWithInfo;
  } catch (error) {
    throw new Error(error);
  }
}

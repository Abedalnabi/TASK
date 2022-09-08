export function normalization(countriesWithInfo) {
	const normalizationInfo = {
		country: { allIds: [] },
		state: { allIds: [] },
		city: { allIds: [] },
		town: { allIds: [] },
		product: { allIds: [] },
		subProduct: { allIds: [] },
	};

	countriesWithInfo.Product.forEach((ele) => {
		const intCountryID = ele.intCountryID;
		const intStateID = ele.intStateID;
		const intCityID = ele.intCityID;
		const intTownID = ele.intTownID;
		const intProductID = ele.intProductID;
		const intSubProductID = ele.intSubProductID;

		// add Country
		if (!normalizationInfo.country[intCountryID]) {
			normalizationInfo.country[intCountryID] = {
				strCountry: ele.strCountry,
			};
			normalizationInfo.country.allIds.push(intCountryID);
		}
		if (!normalizationInfo.country[intCountryID].States) {
			normalizationInfo.country[intCountryID].States = [];
		}
		if (!normalizationInfo.state[intStateID]) {
			normalizationInfo.country[intCountryID].States.push(intStateID);
		}

		// add state
		if (!normalizationInfo.state[intStateID]) {
			normalizationInfo.state[intStateID] = { strState: ele.strState };
			normalizationInfo.state.allIds.push(intStateID);
		}
		if (!normalizationInfo.state[intStateID].City) {
			normalizationInfo.state[intStateID].City = [];
		}
		if (!normalizationInfo.city[intCityID]) {
			normalizationInfo.state[intStateID].City.push(intCityID);
		}

		// add City
		if (!normalizationInfo.city[intCityID]) {
			normalizationInfo.city[intCityID] = { strCity: ele.strCity };
			normalizationInfo.city.allIds.push(intCityID);
		}
		if (!normalizationInfo.city[intCityID].Town) {
			normalizationInfo.city[intCityID].Town = [];
		}
		if (!normalizationInfo.town[intTownID]) {
			normalizationInfo.city[intCityID].Town.push(intTownID);
		}

		// Add Town
		if (!normalizationInfo.town[intTownID]) {
			normalizationInfo.town[intTownID] = { strTown: ele.strTown };
			normalizationInfo.town.allIds.push(intTownID);
		}

		if (!normalizationInfo.town[intTownID].Product) {
			normalizationInfo.town[intTownID].Product = [];
		}
		if (!normalizationInfo.product[intProductID]) {
			normalizationInfo.town[intTownID].Product.push(ele.intProductID);
		}
		// Add Product
		if (!normalizationInfo.product[intProductID]) {
			normalizationInfo.product[intProductID] = {
				strProductName: ele.strProductName,
			};
			normalizationInfo.product.allIds.push(intProductID);
		}

		if (!normalizationInfo.product[intProductID].SubProduct) {
			normalizationInfo.product[intProductID].SubProduct = [];
		}
		if (!normalizationInfo.subProduct[intSubProductID]) {
			normalizationInfo.product[intProductID].SubProduct.push(
				ele.intSubProductID
			);
		}

		// Add SubProduct
		if (!normalizationInfo.subProduct[intSubProductID]) {
			normalizationInfo.subProduct[intSubProductID] = {
				strSUbProductName: ele.strSUbProductName,
			};
			normalizationInfo.subProduct.allIds.push(intSubProductID);
		}
	});
	return normalizationInfo;
}

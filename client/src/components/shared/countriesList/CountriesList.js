import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getCountriesWithInfo } from '../../../api/graphql/countries';
import { goToTop } from '../common/goToTop';
import Loader from '../Utilities/Loader/Loader';
import Country from './section/Country';
import useCountryInfoContext from '../../../contextApi/contexts/CountryInfoContext';
import STATIC_TEXT from './staticText';
import style from './style';
import { useNavigate } from 'react-router-dom';

const CountriesList = () => {
	const [loader, setLoader] = useState(false);
	const theme = useTheme();
	const navigate = useNavigate();

	const { setCountriesInfo, countriesInfo } = useCountryInfoContext();

	useEffect(() => {
		getAllCountryWithInfo();
		goToTop();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function getAllCountryWithInfo() {
		const countriesWithInfo = await getCountriesWithInfo();
		await setCountriesInfo(countriesWithInfo);
		setLoader(true);
	}

	return (
		<Box sx={style.countriesListContainerStyle}>
			{!loader && <Loader />}
			<Box
				sx={{ mt: 12, bgcolor: theme.palette.black.main, p: 3, color: 'white', minHeight: '400px' }}
			>
				{loader && (
					<Box>
						{
							<Typography
								color={theme.palette.typography.main}
								sx={{ textAlign: 'left', mb: 3, ml: 2, mt: 2 }}
								variant="h4"
							>
								{countriesInfo.Country[0] ? STATIC_TEXT.countryList : STATIC_TEXT.noCountryAdded}
							</Typography>
						}

						<Box>
							{countriesInfo.Country &&
								countriesInfo.Country.map((country, index) => {
									return <Country key={index} country={country} countriesInfo={countriesInfo} />;
								})}
						</Box>
					</Box>
				)}
			<Button sx={{ ml: 2,mt:16 }} size="large" variant="contained" onClick={() => navigate('/')}>
				{STATIC_TEXT.addCountry}
			</Button>
		</Box>
			</Box>
	);
};

export default CountriesList;

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getAllProductWithInfo } from '../../../api/graphql/products';
import { goToTop } from '../common/goToTop';
import { normalization } from '../common/normalization';

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
    const countriesWithInfo = await getAllProductWithInfo();
    const normalizeCountriesInfo = normalization(countriesWithInfo);
    await setCountriesInfo(normalizeCountriesInfo);
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
                {countriesInfo.country.allIds
                  ? STATIC_TEXT.countryList
                  : STATIC_TEXT.noCountryAdded}
              </Typography>
            }

            <Box>
              {countriesInfo.country.allIds &&
                countriesInfo.country.allIds &&
                countriesInfo.country.allIds.map((intCountryID, index) => {
                  return (
                    <Country
                      key={index}
                      intCountryID={intCountryID}
                      countriesInfo={countriesInfo}
                    />
                  );
                })}
            </Box>
          </Box>
        )}
        <Button
          sx={{ ml: 2, mt: 16 }}
          size="large"
          variant="contained"
          onClick={() => navigate('/')}
        >
          {STATIC_TEXT.addCountry}
        </Button>
      </Box>
    </Box>
  );
};

export default CountriesList;

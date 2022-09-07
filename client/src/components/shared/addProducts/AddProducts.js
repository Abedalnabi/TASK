import React, { useState, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useForm from '../formApi/useForm';
import FormControl from '../formApi/FormControl';
import STATIC_TEXT from './staticText';
import { useNavigate } from 'react-router-dom';
import style from './style.js';
import { goToTop } from '../common/goToTop';
import { addProductWithInfo } from '../../../api/graphql/products';

const AddCountries = () => {
  const [message, setMessage] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const [formStates, setFormStates] = useState({
    fields: [
      { control: 'text', name: 'country', value: '' },
      { control: 'text', name: 'state', value: '' },
      { control: 'text', name: 'city', value: '' },
      { control: 'text', name: 'town', value: '' },
      { control: 'text', name: 'product', value: '' },
      { control: 'text', name: 'subProduct', value: '' },
    ],
  });

  useEffect(() => {
    goToTop();
  }, []);

  const handleAddProduct = async (e) => {
    let currentValue = getCurrentFormValues(e);
    const newCountry = await addProductWithInfo(currentValue);
    if (newCountry.errors) setMessage(newCountry.errors[0].message);
    else {
      setMessage('product added successfully');
      deleteInputValues();
    }
  };

  const { eventInputValue, getCurrentFormValues, deleteInputValues } = useForm(
    formStates,
    setFormStates
  );

  return (
    <Box sx={style.containerStyle}>
      <Box
        sx={{
          ...style.boxForStyle,
          bgcolor: theme.palette.black.main,
        }}
      >
        <form onSubmit={handleAddProduct} style={style.formStyle}>
          {formStates.fields.map((field, i) => {
            return (
              <FormControl
                key={i}
                control={field.control}
                stateName={field.name}
                label={field.name}
                formStates={formStates}
                eventInputValue={eventInputValue}
              />
            );
          })}

          <p style={{ color: 'white' }}>{message}</p>
          <Button type="submit" variant="contained" size="large">
            {STATIC_TEXT.addCountry}
          </Button>
          <Button size="large" onClick={() => navigate('/countriesList')}>
            {STATIC_TEXT.countryList}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddCountries;

import React, { useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import STATIC_TEXT from '../staticText';
import Product from './Product';

const Town = ({ intTownID, countriesInfo }) => {
  const [showProduct, setShowProduct] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setShowProduct(!showProduct);
  };

  return (
    <Box sx={{ pl: 2 }}>
      <ListItemButton
        sx={{
          bgcolor: showProduct ? theme.palette.primary.dark : theme.palette.primary.light,
          border: '1px solid black',
          color: 'black',
          '&:hover': {
            background: theme.palette.primary.dark,
          },
          m: 2,
        }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <ApartmentIcon sx={{ color: theme.palette.black.main }} />
        </ListItemIcon>
        <ListItemText
          primary={countriesInfo.town[intTownID].strTown}
          sx={{ color: theme.palette.black.main }}
        />
        {showProduct ? (
          <ExpandLess sx={{ color: theme.palette.black.main }} />
        ) : (
          <ExpandMore sx={{ color: theme.palette.black.main }} />
        )}
      </ListItemButton>

      <Collapse in={showProduct} timeout="auto" unmountOnExit>
        <List>
          <Typography
            color={theme.palette.typography.main}
            sx={{ textAlign: 'left', ml: 3 }}
            variant="h5"
          >
            {STATIC_TEXT.product}
          </Typography>
          {countriesInfo.town[intTownID].Product.map((intProductID, index) => {
            return (
              <Product key={index} intProductID={intProductID} countriesInfo={countriesInfo} />
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
};

export default Town;

import React, { useState } from 'react';
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
import LocationCityIcon from '@mui/icons-material/LocationCity';
import STATIC_TEXT from '../staticText';
import { useTheme } from '@mui/material/styles';
import Town from './Town';

const City = ({ intCityID, countriesInfo }) => {
  const [showTown, setShowTown] = useState(false);
  const theme = useTheme();

  console.log('countriesInfo.city[intCityID]', countriesInfo.city[intCityID]);
  const handleClick = () => {
    setShowTown(!showTown);
  };

  return (
    <Box sx={{ pl: 2 }}>
      <ListItemButton
        sx={{
          bgcolor: showTown ? theme.palette.primary.dark : theme.palette.primary.light,
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
          <LocationCityIcon sx={{ color: theme.palette.black.main }} />
        </ListItemIcon>
        <ListItemText
          primary={countriesInfo.city[intCityID].strCity}
          sx={{ color: theme.palette.black.main }}
        />
        {showTown ? (
          <ExpandLess sx={{ color: theme.palette.black.main }} />
        ) : (
          <ExpandMore sx={{ color: theme.palette.black.main }} />
        )}
      </ListItemButton>

      <Collapse in={showTown} timeout="auto" unmountOnExit>
        <List>
          <Typography
            color={theme.palette.typography.main}
            sx={{ textAlign: 'left', ml: 3 }}
            variant="h5"
          >
            {STATIC_TEXT.town}
          </Typography>
          {countriesInfo.city[intCityID].Town &&
            countriesInfo.city[intCityID].Town.map((intTownID, index) => {
              return <Town key={index} intTownID={intTownID} countriesInfo={countriesInfo} />;
            })}
        </List>
      </Collapse>
    </Box>
  );
};

export default City;

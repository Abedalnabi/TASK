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
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import City from './City';
import { useTheme } from '@mui/material/styles';
import STATIC_TEXT from '../staticText';

const State = ({ intStateID, countriesInfo }) => {
  const [showCity, setShowCity] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setShowCity(!showCity);
  };

  return (
    <Box sx={{ pl: 2 }}>
      <ListItemButton
        sx={{
          bgcolor: showCity ? theme.palette.primary.dark : theme.palette.primary.light,
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
          <AccountBalanceIcon sx={{ color: theme.palette.black.main }} />
        </ListItemIcon>
        <ListItemText
          primary={countriesInfo.state[intStateID].strState}
          sx={{ color: theme.palette.black.main }}
        />
        {showCity ? (
          <ExpandLess sx={{ color: theme.palette.black.main }} />
        ) : (
          <ExpandMore sx={{ color: theme.palette.black.main }} />
        )}
      </ListItemButton>

      <Collapse in={showCity} timeout="auto" unmountOnExit>
        <List>
          <Typography
            color={theme.palette.typography.main}
            sx={{ textAlign: 'left', ml: 3 }}
            variant="h5"
          >
            {STATIC_TEXT.city}
          </Typography>
          {countriesInfo.state[intStateID].City &&
            countriesInfo.state[intStateID].City.map((intCityID, index) => {
              return <City key={index} intCityID={intCityID} countriesInfo={countriesInfo} />;
            })}
        </List>
      </Collapse>
    </Box>
  );
};

export default State;

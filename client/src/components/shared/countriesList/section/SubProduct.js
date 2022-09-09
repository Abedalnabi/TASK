import React, { useState } from 'react';
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import CategoryIcon from '@mui/icons-material/Category';
import { useTheme } from '@mui/material/styles';

const SubProduct = ({ intSubProductID, countriesInfo }) => {
  const [showSub, setShowSub] = useState(false);
  const theme = useTheme();

  const handleClick = () => {
    setShowSub(!showSub);
  };

  return (
    <Box sx={{ pl: 2 }}>
      <ListItemButton
        sx={{
          bgcolor: theme.palette.primary.main,
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
          <CategoryIcon sx={{ color: theme.palette.black.main }} />
        </ListItemIcon>
        <ListItemText
          primary={countriesInfo.subProduct[intSubProductID].strSUbProductName}
          sx={{ color: theme.palette.black.main }}
        />
      </ListItemButton>
    </Box>
  );
};

export default SubProduct;

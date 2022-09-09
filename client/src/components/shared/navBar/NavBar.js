import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import STATIC_TEXT from './staticText';
import ScrollTo from '../Utilities/ScrollTo/ScrollTo';
import { Box, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './style.scss';

const NavBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [toggleOpen, setToggleOpen] = useState(false);

  function handelToggle() {
    setToggleOpen(!toggleOpen);
  }

  function goToPath(path) {
    navigate(path);
    handelToggle();
  }

  let navItems = (
    <Button variant="contained" onClick={() => goToPath('countriesList')}>
      {STATIC_TEXT.CountryList}
    </Button>
  );

  return (
    <nav
      id="nav-bar"
      className="navBar-container "
      style={{ backgroundColor: theme.palette.black.main }}
    >
      <Box className="logo">
        <ScrollTo componentId={'home'}>{STATIC_TEXT.logo}</ScrollTo>
      </Box>
      <div className={`navBar-item ${!toggleOpen && 'open'} `}>
        {toggleOpen && (
          <span
            className="x-button nav-item"
            onClick={() => {
              handelToggle();
            }}
          >
            &#10006;
          </span>
        )}

        {navItems}
      </div>
      <div onClick={handelToggle} className="nav-toggle">
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;

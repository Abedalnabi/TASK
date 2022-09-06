import React, { useState } from 'react';
import {  Box, Typography,ListItemButton ,ListItemIcon,ListItemText,} from '@mui/material';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import City from './City';
import { useTheme } from '@mui/material/styles';
import STATIC_TEXT from '../staticText';

const State = ({ state, countriesInfo }) => {
	const [showCity, setShowCity] = useState(false);
	const theme = useTheme();

	const handleClick = (event) => {
		setShowCity(!showCity);
	};

	return (
		<Box sx={{ pl: 5 }}>
			<ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={state.strState} />
        {showCity ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
			{showCity && (
				<Box>
					<Typography
						color={theme.palette.primary.light}
						sx={{ textAlign: 'left', ml: 2 }}
						variant="h6"
					>
						{STATIC_TEXT.city}
					</Typography>
					{countriesInfo.City.map((city, index) => {
						if (state.intStateID === city.intStateID) {
							return <City key={index} city={city} countriesInfo={countriesInfo} />;
						}
						return '';
					})}
				</Box>
			)}
		</Box>
	);
};

export default State;

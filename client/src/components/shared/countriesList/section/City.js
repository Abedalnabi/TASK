import React, { useState } from 'react';
import {  Box, Typography,ListItemButton ,ListItemIcon,ListItemText,} from '@mui/material';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import STATIC_TEXT from '../staticText';
import { useTheme } from '@mui/material/styles';
import Town from './Town';

const City = ({ city, countriesInfo }) => {
	const [showTown, setShowTown] = useState(false);
	const theme = useTheme();

	const handleClick = (event) => {
		setShowTown(!showTown);
	};
	return (
		<Box sx={{ pl: 5 }}>
			<ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={city.strCity} />
        {theme ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
			{showTown && (
				<Box>
					<Typography
						color={theme.palette.primary.light}
						sx={{ textAlign: 'left', ml: 2 }}
						variant="h6"
					>
						{STATIC_TEXT.town}
					</Typography>
					{countriesInfo.Town.map((town, index) => {
						if (city.intCityID === town.intCityID) {
							return <Town key={index} town={town} countriesInfo={countriesInfo} />;
						}
						return '';
					})}
				</Box>
			)}
		</Box>
	);
};

export default City;

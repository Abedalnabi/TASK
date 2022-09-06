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
import InboxIcon from '@mui/icons-material/MoveToInbox';
import City from './City';
import { useTheme } from '@mui/material/styles';
import STATIC_TEXT from '../staticText';

const State = ({ state, countriesInfo }) => {
	const [showCity, setShowCity] = useState(false);
	const theme = useTheme();

	const handleClick = () => {
		setShowCity(!showCity);
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
					<InboxIcon sx={{ color: theme.palette.black.main }} />
				</ListItemIcon>
				<ListItemText
					primary={state.strState}
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
					{countriesInfo.City.map((city, index) => {
						if (state.intStateID === city.intStateID)
							return (
								<City key={index} city={city} countriesInfo={countriesInfo} />
							);
						return '';
					})}
				</List>
			</Collapse>
		</Box>
	);
};

export default State;

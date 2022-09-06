import React, { useState } from 'react';
import State from './State';
import {
	Box,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	List,
} from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useTheme } from '@mui/material/styles';
import StarBorder from '@mui/icons-material/StarBorder';

import STATIC_TEXT from '../staticText';

const Country = ({ country, countriesInfo }) => {
	const [showState, setShowState] = useState(false);
	const theme = useTheme();

	const handleClick = () => {
		setShowState(!showState);
	};
	return (
		<Box>
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
					primary={country.strCountry}
					sx={{ color: theme.palette.black.main }}
				/>
				{showState ? (
					<ExpandLess sx={{ color: theme.palette.black.main }} />
				) : (
					<ExpandMore sx={{ color: theme.palette.black.main }} />
				)}
			</ListItemButton>

			<Collapse in={showState} timeout="auto" unmountOnExit>
				<List>
					{countriesInfo.State.map((state, index) => {
						if (country.intCountryID === state.intCountryID)
							return (
								<State
									key={index}
									state={state}
									countriesInfo={countriesInfo}
								/>
							);
						return '';
					})}
				</List>
			</Collapse>
		</Box>
	);
};

export default Country;

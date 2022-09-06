import React, { useState } from 'react';
import State from './State';
import {
	Box,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Collapse,
	List,
	Typography,
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
					bgcolor: showState
						? theme.palette.primary.dark
						: theme.palette.primary.light,
					border: '1px solid black',
					color: 'black',
					'&:hover': {
						background: theme.palette.primary.main,
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
					<Typography
						color={theme.palette.typography.main}
						sx={{ textAlign: 'left', ml: 3 }}
						variant="h5"
					>
						{STATIC_TEXT.state}
					</Typography>
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

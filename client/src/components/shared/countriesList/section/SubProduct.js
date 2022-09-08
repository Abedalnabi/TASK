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
import STATIC_TEXT from '../staticText';
import { useTheme } from '@mui/material/styles';
import Town from './Town';

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
					<InboxIcon sx={{ color: theme.palette.black.main }} />
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

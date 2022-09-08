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
import SubProduct from './SubProduct';

const Product = ({ intProductID, countriesInfo }) => {
	const [showSubProduct, setShowSubProduct] = useState(false);
	const theme = useTheme();

	const handleClick = () => {
		setShowSubProduct(!showSubProduct);
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
					primary={countriesInfo.product[intProductID].strProductName}
					sx={{ color: theme.palette.black.main }}
				/>
				{showSubProduct ? (
					<ExpandLess sx={{ color: theme.palette.black.main }} />
				) : (
					<ExpandMore sx={{ color: theme.palette.black.main }} />
				)}
			</ListItemButton>


			<Collapse in={showSubProduct} timeout="auto" unmountOnExit>
				<List>
					<Typography
						color={theme.palette.typography.main}
						sx={{ textAlign: 'left', ml: 3 }}
						variant="h5"
					>
						{STATIC_TEXT.subProduct}
					</Typography>
					{countriesInfo.product[intProductID].SubProduct.map((intSubProductID, index) => {
						return <SubProduct key={index} intSubProductID={intSubProductID} countriesInfo={countriesInfo} />;
					})}
				</List>
			</Collapse>
		</Box>
	);
};

export default Product;

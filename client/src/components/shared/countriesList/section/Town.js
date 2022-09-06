import React from 'react';
import { Box, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useTheme } from '@mui/material/styles';

const Town = ({ town }) => {
	const theme = useTheme();
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
			>
				<ListItemIcon>
					<InboxIcon sx={{ color: theme.palette.black.main }} />
				</ListItemIcon>
				<ListItemText
					primary={town.strTown}
					sx={{ color: theme.palette.black.main }}
				/>
			</ListItemButton>
		</Box>
	);
};

export default Town;

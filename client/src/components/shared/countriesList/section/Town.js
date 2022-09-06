import React from 'react';
import {  Box,ListItemButton ,ListItemIcon,ListItemText,} from '@mui/material';
import InboxIcon from "@mui/icons-material/MoveToInbox";

const Town = ({ town }) => {
	return (
		<Box sx={{ pl: 5 }}>
			<ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={town.strTown} />
      </ListItemButton>
		</Box>
	);
};

export default Town;

import React from 'react';
import './style.scss';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
	const theme = useTheme();
	return (
		<footer
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: theme.palette.black.main,
			}}
		>
			<p style={{ color: 'white' }} className="">
				&copy; 2022 Mohammad Abedalnabi
			</p>
		</footer>
	);
};

export default Footer;

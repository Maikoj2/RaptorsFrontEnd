import React from 'react';
import { BoxFooter, BoxCopyright, BodyCopyright } from '../../style-components-private/footer.styled';
import { useTheme } from '@mui/material';
export interface FooterProps {}

const Footer : React.FC<FooterProps> = () => {
	const theme:any = useTheme()
	return <BoxFooter>

		<BoxCopyright>
			<BodyCopyright $color={theme.palette.neutral[200]}>
					Copyright © Developed by <span style={{
						fontWeight:700,
						color: theme.palette.neutral[10]
					} }>Maiik Jimnz</span>  2023
			</BodyCopyright>
		</BoxCopyright>
	</BoxFooter>;
};

export default Footer;

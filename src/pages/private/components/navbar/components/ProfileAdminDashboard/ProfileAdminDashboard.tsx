import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { FlexBetween } from '../../../../style-components-private/flexBetween';
import { useTheme } from '@mui/material';
import { User } from '@/models';
export interface ProfileAdminDashboardProps {
	alt: string,
	borderRadius: string,
	height: string,
	width: string,
	userData: User,
    Children? : React.ReactNode
}

const ProfileAdminDashboard: React.FC<ProfileAdminDashboardProps> = ({ alt, borderRadius, height, width, userData, Children }) => {
	const theme = useTheme();
	return <FlexBetween textTransform='none' gap='0.25rem' m='0.5rem 2rem 0 1rem'>
		<Box
			component='img'
			alt={alt}
			src={userData.img}
			height={`${height}px`}
			width={`${width}px`}
			borderRadius={`${borderRadius}%`}
			sx={{ odjectFit: "cover" }}
		/>
		<Box>
			<Typography fontWeight='bold' fontSize='0.9rem'
				sx={{ color: theme.palette.neutral[100] }}>
				{userData.Names}
			</Typography>
			<Typography fontWeight='bold' fontSize='0.8rem'
				sx={{ color: theme.palette.neutral[100] , opacity: ' 0.5'}}>
				{userData.email}
			</Typography>
			
		</Box>
		<IconButton>
		{Children}
		</IconButton>
		
	</FlexBetween>;
};

export default ProfileAdminDashboard;

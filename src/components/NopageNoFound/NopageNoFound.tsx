import { PrivateRoutes } from '@/models';
import { IconShape } from '@/pages/private/components/IconShape';
import { Box404, BoxInfo, Cloack, CloakContainer, CloakWrapper, Title404 } from '@/style-components';
import { Button } from '@mui/material';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



export interface NopageNoFoundInterface { }

const NopageNoFound: React.FC<NopageNoFoundInterface> = () => {
	const Navigate = useNavigate();
	return (
	<Box404 className='body404'>
		<Title404>404</Title404>
		<CloakWrapper>
			<CloakContainer >
				<Cloack className="cloak"></Cloack>
			</CloakContainer>
		</CloakWrapper>
		<BoxInfo 
		onClick={() => {
			Navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
		  }} >
			<h2>We can't find that page</h2>
			<p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p>
			<Button ><IconShape Children={<FaHome/>}></IconShape>home</Button>
		</BoxInfo>
	</Box404>)
};

export default NopageNoFound;


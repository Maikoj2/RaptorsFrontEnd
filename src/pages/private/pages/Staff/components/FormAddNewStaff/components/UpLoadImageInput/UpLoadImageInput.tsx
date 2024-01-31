import React, { useState } from 'react';
import { DataInputsProps } from '../../models';
import { Box, Button } from '@mui/material';
import { IconStyler } from '@/pages/private/style-components-private';
import { FaUpload } from 'react-icons/fa';
import { useRef } from 'react';
import { NoImage } from '@/pages/private/models';
import { CustomInput as CustomInput } from '@/pages/Login';
import { useUpload } from '@/pages/private/hooks';
import { BackDropLoading } from '@/pages/private/components';

const UpLoadImageInput: React.FC<DataInputsProps> = ({ values, handleChange }) => {
	const fileInputRef = useRef<HTMLInputElement>(null);
	const [isUpLoading, setIsUpLoading] = useState(false)
	const { UploadImg } = useUpload()
	const handleInputChange = (event: React.ChangeEvent<any>) => {
		if (event.target.files) {
			setIsUpLoading(true)
			UploadImg(event.target.files[0])
				.then((res) => {
					setIsUpLoading(false)
					handleChange({
						target: {
							name: 'img',
							value: res
						}
					} as React.ChangeEvent<any>)
				})
		}
	}
	return <>
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
		}}>

			<Box marginBottom={'1rem'}>
				<Box
					component='img'
					alt={'uploadImg'}
					src={!values.img ? NoImage : values.img}
					height={`10rem`}
					width={`10rem`}
					borderRadius={200}
					sx={{ odjectFit: 'cover' }}
				/>
				<CustomInput
					type='file'
					name='img'
					onChange={handleInputChange}
					$display={'none'}
					ref={fileInputRef}
				/>
			</Box>
			<BackDropLoading upLoading={isUpLoading} />
			<Button aria-label="upload" startIcon={<IconStyler> <FaUpload /></IconStyler>} sx={{
				backgroundImage: 'linear-gradient(310deg, #EF4405 0%, #FC9772 100%)',
				borderRadius: '25px',
				padding: '0px 20px'
			}}
				onClick={() => { fileInputRef.current?.click() }}>
				Subir imagen
			</Button>
		</Box></>;
};

export default UpLoadImageInput;

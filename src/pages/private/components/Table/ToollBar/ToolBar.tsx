import { FlexBetween, IconStyler } from '@/pages/private/style-components-private'
import React from 'react'
import { Typography, useTheme, Button } from '@mui/material'
import { GridToolbarQuickFilter } from '@mui/x-data-grid'
import { FaPlusCircle } from 'react-icons/fa'
import { dialogOpenSubject$ } from '@/components/Customdialago/Customdialago'
import { useManagerContext } from '@/pages/private/Context'

export interface ToollBarProps {
  NameHeaderTable: string
}

const ToolBar: React.FC<ToollBarProps> = ({ NameHeaderTable = '' }) => {
  const theme: any = useTheme();
  const { setnameOpenDialog } = useManagerContext();
  const HandelClick = () => {
	setnameOpenDialog(NameHeaderTable)
    dialogOpenSubject$.setSubject = true
  }
  return (
		<FlexBetween padding={'20px'} sx={{ flexFlow: 'wrap' }}>
			<Typography variant='h4' fontSize={'1rem'} marginBottom={0} color={theme.palette.neutral[100]} fontWeight={600}>
				{NameHeaderTable}
			</Typography>
			<GridToolbarQuickFilter />
			<Button aria-label="add" startIcon={<IconStyler> <FaPlusCircle/></IconStyler>} sx={{
			  backgroundImage: 'linear-gradient(310deg, #EF4405 0%, #FC9772 100%)',
			  borderRadius: '25px',
			  padding: '0px 20px'
			}}
			onClick={HandelClick}>
			   Nuevo {NameHeaderTable}
			</Button>
		</FlexBetween>
  )
}
export default ToolBar

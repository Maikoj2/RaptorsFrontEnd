
import { makeStyles } from '@mui/material/styles'
import { IconButton, Card, useTheme, Typography } from '@mui/material'
import { type CustomContentProps, SnackbarContent, useSnackbar } from 'notistack'
import React, { useCallback } from 'react'
import { FaTimes } from 'react-icons/fa'

import { bodercolorMatcher, svgMatcher } from '@/models/svGMatcher'

export enum TypesSnackbar {
  SUCCESS = 'Success',
  ERROR = 'Error',
  WARNNING = 'Warnning',
  INFO = 'Info',
}

export interface ReportCompleteProps extends CustomContentProps {
  allowDownload: boolean
  Type?: string
}

const CustomErrorMsg = React.forwardRef<HTMLDivElement, ReportCompleteProps>((props, ref) => {
  const theme: any = useTheme()
  const { closeSnackbar } = useSnackbar()
  const {
    id,
    message,
    Type,
    persist,
    anchorOrigin, autoHideDuration, hideIconVariant, iconVariant,
    ...other
  } = props
  const handleDismiss = useCallback(() => {
    closeSnackbar(id)
  }, [id, closeSnackbar])

  return (
		<SnackbarContent ref={ref} {...other} >
			<Card sx={{
			  display: 'grid',
			  padding: '0.5rem 1rem',
			  borderRadius: '10px',
			  borderLeft: '0.5rem solid hsl(0, 0%, 100%)',
			  borderLeftColor: `${bodercolorMatcher(Type)}`,
			  background: `url(${svgMatcher(Type)}), hsl(0, 0%, 100%) no-repeat`,
			  backgroundSize: '35px',
			  color: `${bodercolorMatcher(Type)}`,
			  backgroundPosition: '100% 100%',
			  backgroundRepeat: 'no-repeat'
			}}>

				<Typography variant='h1' fontSize={'1.1rem'} fontWeight={500} textTransform={'capitalize'}>
					{Type}
				</Typography>
				<Typography variant ='h6' maxWidth={320} fontSize={'0.8rem'} gridColumn={'1/-1'}>
					{message}
				</Typography>
				<IconButton sx={{
				  background: 'none',
				  border: 'none',
				  color: theme.palette.neutral.main,
				  gridColumn: '2/3',
				  gridRow: '1/2',
				  alignSelf: 'center',
				  padding: 0,
				  fontSize: '0.8rem'
				}} onClick={handleDismiss} >
					<FaTimes />
				</IconButton>

			</Card>
		</SnackbarContent>
  )
})

CustomErrorMsg.displayName = 'CustomErrorMsg'

export default CustomErrorMsg

import { DialogTitle, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import React from 'react'

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  handleClose: () => void
}

const CustomTitleDialog = (props: DialogTitleProps) => {
  const { children, handleClose, ...other } = props
  return (
	<DialogTitle sx={{ m: 0, p: 2 }} {...other} >
	{children}
	{handleClose
	  ? (
	  <IconButton
		aria-label="close"
		onClick={handleClose}
		sx={{
		  position: 'absolute',
		  right: 8,
		  top: 8,
		  color: (theme) => theme.palette.grey[500]
		}}
	  >
		<CloseIcon />
	  </IconButton>
	    )
	  : null}
  </DialogTitle>
  )
}

export default CustomTitleDialog

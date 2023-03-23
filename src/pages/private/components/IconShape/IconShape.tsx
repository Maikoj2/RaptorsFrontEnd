import { ListItemIcon, useTheme } from '@mui/material'
import React from 'react'
export interface IconShapeProps {
  Children: React.ReactNode
  Active?: boolean
}

const IconShape: React.FC<IconShapeProps> = ({ Children, Active = false }) => {
  const theme: any = useTheme()
  return <ListItemIcon
	sx={
	  {
	    minWidth: 32,
	    width: 32,
	    height: 32,
	    backgroundPosition: 'center',
	    backgroundImage: Active ? 'linear-gradient(310deg, #EF4405 0%, #FC9772 100%)' : 'linear-gradient(310deg, #3B3B3B 0%, #8D8D8D 100%)',
	    borderRadius: '0.5rem',
	    textAlign: 'center',
	    marginRight: '0.5rem',
	    justifyContent: 'center',
	    boxShadow: '0 0.3125rem 0.625rem 0 rgba(0, 0, 0, 0.514) ',
	    alignItems: 'center',
	    fill: 'currentColor',
	    stroke: 'none',
	    whiteSpace: 'nowrap',
	    fontWeight: '500',
	    fontSize: '0.875rem',
	    color: theme.palette.primary[100]
	  }
	}
  >
	{Children}
  </ListItemIcon>
}

export default IconShape

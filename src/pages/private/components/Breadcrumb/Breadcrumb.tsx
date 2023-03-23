
import { Box, useTheme } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { BreadcrumbList, Breadcrumbtitle } from './style-components/breadcrumb.style'

export interface BreadcrumbInterface { }

const Breadcrumb: React.FC<BreadcrumbInterface> = () => {
  const { pathname } = useLocation()
  const pathSepared = pathname.substring(1).split('/')

  const theme: any = useTheme()
  return (
		<Box sx={{
		  display: 'block',
		  padding: '0.25rem 1rem 0.25rem 1rem'
		}}>
			<BreadcrumbList>
			{pathSepared.map((path) => {
			  return <li key={path}>{path}</li>
			})}

			</BreadcrumbList>
			<Breadcrumbtitle color={theme.palette.neutral[100]}>{pathSepared[pathSepared.length - 1]}</Breadcrumbtitle>
		</Box>
  )
}

export default Breadcrumb

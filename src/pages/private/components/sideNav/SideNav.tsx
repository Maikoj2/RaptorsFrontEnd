import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'
import { FaChevronRight, FaHome, FaServicestack, FaChevronLeft, FaCog, FaLandmark, FaMoneyCheck, FaCodeBranch, FaCalendarAlt, FaCalendarDay, FaSkating, FaUsersCog } from 'react-icons/fa'

import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme
} from '@mui/material'

import { useLocation, useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../../../models/routes'
import { ProfileAdminDashboard } from '../navbar/components'
import { useSelector } from 'react-redux'
import { type AppStore } from '../../../../redux/storer'
import { DividerHori } from '@/style-components/divider.styled'
import { BoxSidebar, IconStyler } from '../../style-components-private'
import { IconShape } from '../IconShape'
import { LogoImage } from '../../models/ImageUrl'

interface sideBarProps {
  setisSidebarOpen: Dispatch<SetStateAction<boolean>>
  isSidebarOpen: boolean
  isNonMobile: boolean
  drawerWidth?: string
}

const navItems = [
  {
    Text: PrivateRoutes.DASHBOARD,
    icon: <FaHome />
  },
  {
    Text: 'Disiplinas',
    icon: null
  },
  {
    Text: 'Clases',
    icon: <FaServicestack />
  },
  {
    Text: 'Cursos',
    icon: <FaCalendarAlt />
  },
  {
    Text: 'Horarios',
    icon: <FaCalendarDay />
  },
  {
    Text: 'Usuarios',
    icon: null
  },
  {
    Text: PrivateRoutes.USERS,
    icon: <FaUsersCog />
  },
  {
    Text: 'Deportistas',
    icon: <FaSkating />
  },
  {
    Text: PrivateRoutes.STAFF,
    icon: <FaCodeBranch />
  },
  {
    Text: 'Contabilidad',
    icon: null
  },
  {
    Text: 'Pagos',
    icon: <FaMoneyCheck />
  },

  {
    Text: 'Deudas',
    icon: <FaLandmark />
  }

]

const sidebar: React.FunctionComponent<sideBarProps> = ({ setisSidebarOpen, isSidebarOpen, isNonMobile, drawerWidth }) => {
  const user = useSelector((state: AppStore) => state.loginUser)
  const { pathname } = useLocation()
  const [Active, setActive] = useState('')
  const Navigate = useNavigate()
  const theme: any = useTheme()
  useEffect(() => {
    const pathAtive = pathname.substring(1).split('/')
    setActive(pathAtive[pathAtive.length - 1])
  }, [pathname])

  return (
    <Box component='nav' >
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => { setisSidebarOpen(false) }}
          variant='persistent'
          anchor='left'

          sx={{
            width: drawerWidth,
            transition: 'width 0.6s ease',
            '& .MuiDrawer-paper': {
              color: theme.palette.secondary[200],

              boxSizing: 'border-box',
              borderWidth: isNonMobile ? 0 : '2px',
              maxWidth: drawerWidth,
              transitionDuration: '0.45s'
            }
          }}
        >
          <BoxSidebar sx={{
            boxShadow: 'none',
            overflow: 'hidden',
            touchAction: 'auto',
            transition: 'all 0.3s ease',
            borderRadius: '1rem',
            m: '1rem 0 1rem 1rem',
            backgroundColor: !isNonMobile ? theme.palette.background.alt : 'transparent'
          }} >
            <Box height={'4.875rem'}>
              {/* /**Sidebar header */}
              <Box color={theme.palette.secondary.main} >
                {!isNonMobile &&
                  (<IconButton
                    onClick={() => { setisSidebarOpen(!isSidebarOpen) }} sx={
                      {
                        color: theme.palette.neutral[10],
                        padding: ' 1rem',
                        right: '0',
                        top: '0',
                        position: 'absolute'
                      }
                    }>
                    <FaChevronLeft />
                  </IconButton>)}
                <IconButton onClick={() => { console.log('action') }} sx={
                  {
                    m: '0',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.025rem',
                    '&.MuiButtonBase-root:hover': {
                      bgcolor: 'transparent'
                    }
                  }} >
                  <Box
                    component='img'
                    alt='logo'
                    src={LogoImage}
                    maxWidth={'100%'}
                    maxHeight={'4rem'}
                    sx={{ transition: 'all 0.2s ease-in-out' }}
                  />
                  <Typography fontWeight='bold' marginLeft={'0.25rem'} sx={{ fontSize: '1.25rem', transition: 'all 0.2s ease-in-out' }}>
                    RaptorsVLC
                  </Typography>
                </IconButton>
              </Box>
            </Box>
            {/* /** End Sidebar header */}
            <DividerHori mode={(theme.palette.mode === 'dark') ? '$light' : '$dark'} />
            {/* /**Sidebar list item */}
            <Box sx={
              {
                display: 'block',
                overflow: 'auto',
                height: 'calc(100vh - 360px)',
                width: 'auto'
              }

            }>
              <List>
                {
                  navItems.map(({ Text, icon }) => {
                    if (icon == null) {
                      return (
                        <Typography variant='h6' key={Text} sx={{
                          m: '2.25rem 0 1rem 3rem ',
                          paddingLeft: ' 1.5rem',
                          opacity: 0.6,
                          color: theme.palette.neutral[300],
                          fontWeight: '700',
                          fontSize: '0.75rem',
                          lineHeight: ' 1.25',
                          marginLeft: ' 0.5rem'

                        }}>
                          {Text.toLocaleUpperCase()}
                        </Typography>
                      )
                    }
                    return (
                      <ListItem key={Text} disablePadding>
                        <ListItemButton
                          onClick={() => {
                            setActive(Text)
                            Navigate(`${Text}`, { replace: true })
                          }}
                          autoFocus= {Active === Text}
                          sx={{
                            padding: '0.625rem 1rem 0.625rem 1rem',
                            m: '0 1rem',
                            whiteSpace: 'nowrap',
                            borderRadius: ' 0.5rem',
                            transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
                            backgroundColor: 'transparent',
                            color: theme.palette.neutral[100],
                            '&.MuiButtonBase-root:focus': {
                              transform: 'scale(1.03)',
                              bgcolor: theme.palette.background.alt,
                              boxShadow: 'box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.0514) '
                            },
                            '&.MuiButtonBase-root:hover': {
                              transform: 'scale(1.05)',
                              bgcolor: theme.palette.background.alt,
                              boxShadow: 'box-shadow: 0 0.3125rem 0.625rem rgba(0, 0, 0, 0.0514) '
                            }
                          }}>
                          <IconShape Children={icon} Active={Active === Text}/>
                          <ListItemText primary={Text}
                            sx={{
                              transition: '0.3s ease',
                              opacity: 1,
                              marginLeft: ' 0.25rem'

                            }}
                          />
                          {Active === Text && (<FaChevronRight />)}
                        </ListItemButton>
                      </ListItem>
                    )
                  })
                }
              </List>
            </Box>
            {/* /**Sidebar list item */}
            {/* /**Sidebar footer */}
            <Box bottom='2rem'>
              <DividerHori mode={(theme.palette.mode === 'dark') ? '$light' : '$dark'} />
              <ProfileAdminDashboard alt={'profile'}
                borderRadius={'50'}
                height={'40'}
                width={'40'}
                userData={user.Data.user}
                Children={<IconStyler children={<FaCog />}/>}
              />
            </Box>
            {/* /**Sidebar end footer */}
          </BoxSidebar>

        </Drawer>
      )}
    </Box>
  )
}
export default sidebar

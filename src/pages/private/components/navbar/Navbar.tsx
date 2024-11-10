import { forwardRef, useState, type Dispatch, type SetStateAction } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetMode } from '../../../../redux/slices/theme.slice'
import { type AppStore } from '@/redux/storer'

// MUI imports
import {
  AppBar,
  Box,
  IconButton,
  Button,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
  ListItemText
} from '@mui/material'
import { ProfileAdminDashboard } from './components'
// icons imports
import { FaSignOutAlt, FaSun, FaCog, FaMoon, FaAngleDown, FaBars, FaSearch } from 'react-icons/fa'
// my componentes
import { FlexBetween, IconStyler } from '../../style-components-private'
import { IconShape } from '../IconShape'
import { UseAuthStore } from '@/hooks'
import { UseThemeMode } from '../../hooks/useThemeMode'

interface sideBarProps {
  setisSidebarOpen: Dispatch<SetStateAction<boolean>>
  isSidebarOpen: boolean
  isNonMobile: boolean
}

const Navbar= forwardRef<HTMLDivElement, sideBarProps>(({ isSidebarOpen, setisSidebarOpen, isNonMobile },ref) => {
  const user = useSelector((state: AppStore) => state.loginUser)
  const theme: any = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const { LogOut } = UseAuthStore()
  const { setThemeMode } = UseThemeMode()
  const isOpen = Boolean(anchorEl)
  const handleClick = (event: any) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }

  return (

    <AppBar
    ref={ref}
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none'

      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* {left side } */}
        <FlexBetween >
          <IconButton onClick={() => { setisSidebarOpen(!isSidebarOpen) }} >
            <FaBars />
          </IconButton>
          <FlexBetween
            bgcolor={theme.palette.background.alt}
            borderRadius='9px'
            gap='1rem'
            p='0.1rem 1.5rem'
          >
            <InputBase placeholder="Search..." />
            <FaSearch />
          </FlexBetween>
        </FlexBetween>
        {/* {left side } */}
        <FlexBetween >
          <IconButton onClick={() => { setThemeMode() }}>
            {theme.palette.mode === 'dark'
              ? (<IconStyler children={<FaMoon />} $size='20px' />)
              : (<IconStyler children={<FaSun />} $size='20px' />)}
          </IconButton>
          <IconButton sx={{ display: !isNonMobile && 'none' }}>
            <IconStyler children={<FaCog />} $size='20px' />
          </IconButton >
          <Box
            onClick={handleClick}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              textTransform: 'none',
              gap: '1rem'
            }}>
            <ProfileAdminDashboard alt={'profile'}
              borderRadius={'50'}
              height={'40'}
              width={'40'} userData={user.Data.user}
              Children={<IconStyler children={<FaAngleDown />} $size='25px' />}
            />
          </Box>

        </FlexBetween>
        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          sx={
            {
              '& .MuiPaper-root': {
                backgroundColor: theme.palette.background.alt,
                borderRadius: ' 0.5rem'
              }
            }
          }>
          <MenuItem onClick={LogOut} sx={{
            marginBottom: '0.5rem',
            display: 'block',
            padding: '0.3rem 1rem',
            clear: 'both',
            fontWeight: '400',
            color: theme.palette.neutral[100],
            whiteSpace: 'nowrap',
            backgroundColor: 'transparent',
            border: 0
          }}>
            <Box sx={{
              paddingBottom: '0.25rem',
              paddingTop: '0.25rem',
              display: 'flex'

            }}>
              <IconShape Children={<FaSignOutAlt />} />
              <ListItemText primary={'Log Out'} sx={{
                '&.MuiListItemText-root': {
                  transform: 'scale(1.05)',
                  bgcolor: 'transparent',
                  justifyContent: 'center',
                  display: 'flex',
                  flexDirection: 'column'

                }
              }} />
            </Box>

          </MenuItem>
        </Menu>
      </Toolbar>

    </AppBar>
  )
})
export default Navbar

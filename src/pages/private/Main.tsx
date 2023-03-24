import { Box, CssBaseline, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { Navbar, SideNav, Breadcrumb } from './components'
import { Outlet } from 'react-router-dom'
import { useUserStore } from './hooks'
import { useSelector } from 'react-redux'
import { type AppStore } from '../../redux/storer'
import { StatusUsers } from '@/models'

import { UseAuthStore } from '@/hooks'
import { validateTokenexpire } from '@/utilities'
import { Customdialago } from '@/components'
import { searchByKey } from '@/helpers'
import { useManagerContext } from '@/pages/private/Context';

export const Main = () => {
  const { getAllUsersDataBase } = useUserStore()
  const { status } = useSelector((state: AppStore) => state.apiUsers)
  const { nameOpenDialg } = useManagerContext();
  const [atOpenedDialog, setatOpenedDialog] = useState('')
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const [isSidebarOpen, setisSidebarOpen] = useState(isNonMobile)
  const limit = 50; const from = 0
  const DialogOpen: any = (atOpenedDialog !== '') && searchByKey(atOpenedDialog)
  const { CheckAuthToken } = UseAuthStore()
  useEffect(() => {
    validateTokenexpire() && CheckAuthToken()
  }, [])
  useEffect(() => {
    console.log(nameOpenDialg);
    
    setatOpenedDialog(nameOpenDialg)
  }, [nameOpenDialg])

  useEffect(() => {
    isNonMobile && setisSidebarOpen(!isSidebarOpen)
  }, [isNonMobile])
  useEffect(() => {
    if (status === StatusUsers.NO_OBTAINED && !validateTokenexpire()) {
      getAllUsersDataBase({ limit, from })
    }
  }, [])
  return (
        <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%" >
            <CssBaseline />
            <SideNav
                isNonMobile={isNonMobile}
                drawerWidth='15.625rem'
                isSidebarOpen={isSidebarOpen}
                setisSidebarOpen={setisSidebarOpen}
            />
            <Box flexGrow={1} marginLeft='1rem'>
                <Navbar
                    isNonMobile={isNonMobile}
                    isSidebarOpen={isSidebarOpen}
                    setisSidebarOpen={setisSidebarOpen} />
                <Breadcrumb />
                <Box flexGrow={2} sx={
                    {
                      // background: `linear-gradient(to right top, rgb(39 39 39 / 50% ) , rgb(39 39 39 / 60% ) 20%, rgb(39 39 39 / 10%)), linear-gradient(to right bottom, #272727, transparent 66%), linear-gradient(to bottom, transparent, #272727 80%), url(${BackgroundUrl}) no-repeat`,
                      backgroundSize: 'auto 48.25rem',
                      display: 'flex',
                      padding: '2rem  2rem 0 2rem'
                      // boxShadow: ' inset 31px 36px 92px 17px #272727',
                    }
                }>
                    <Customdialago>
                        {<>{DialogOpen?.value}</>}</Customdialago>
                    <Outlet />
                </Box>
            </Box>
        </Box>

  )
}

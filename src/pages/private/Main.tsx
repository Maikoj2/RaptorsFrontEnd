import { Box, CssBaseline, useMediaQuery } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { Navbar, SideNav, Breadcrumb } from './components'
import { Outlet } from 'react-router-dom'
import { useUserDataManager } from './hooks'
import { useSelector } from 'react-redux'
import { type AppStore } from '../../redux/storer'
import { StatusData } from '@/models'

import { UseAuthStore } from '@/hooks'
import { validateTokenexpire } from '@/utilities'
import { Customdialago } from '@/components'
import { searchByKey } from '@/helpers'
import { useManagerApiDataContext, useManagerContext } from '@/pages/private/Context';
import { Footer } from './components/Footer'

export const Main = () => {
  const { getAllUsersDataBase } = useUserDataManager()
  const { status } = useSelector((state: AppStore) => state.apiUsers);
  const { staffState, getDataStaff, BaseSalaryState, getBaseSalary } = useManagerApiDataContext()
  const { nameOpenDialog } = useManagerContext();
  const [atOpenedDialog, setatOpenedDialog] = useState('')


  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const [isSidebarOpen, setisSidebarOpen] = useState(isNonMobile)
  const limit = 50;
  const from = 0;
  // Memoize Dialog Content based on `atOpenedDialog`
  const DialogOpen = useMemo(() => atOpenedDialog ? searchByKey(atOpenedDialog) : null, [atOpenedDialog])

  useEffect(() => {
      setatOpenedDialog(nameOpenDialog);

      if (status === StatusData.NO_OBTAINED ) {
        getAllUsersDataBase({ limit, from });
      }
      if (staffState.status === StatusData.NO_OBTAINED ) {
        getDataStaff(limit, from);
      }
      // if (BaseSalaryState.status === StatusData.NO_OBTAINED ) {
      //   getBaseSalary(limit, from);
      // }
    
  }, [status]);

  return (
    <Box display={isNonMobile ? 'flex' : 'block'} width="100%" height="100%" >
      <CssBaseline />
      <SideNav
        isNonMobile={isNonMobile}
        drawerWidth='15.625rem'
        isSidebarOpen={isSidebarOpen}
        setisSidebarOpen={setisSidebarOpen}
      />
      <Box flexGrow={1} marginLeft='1rem' width={'100%'}>
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
          <Box width={'100%'}>
            <Customdialago>
              {<>{DialogOpen?.value}</>}</Customdialago>
            <Outlet />
            <Footer></Footer>
          </Box>

        </Box>
      </Box>
    </Box>

  )
}

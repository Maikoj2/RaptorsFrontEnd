import { BrowserRouter, Route, Navigate } from 'react-router-dom'
import { Layout } from '@/style-components'
import { RoutesWithNotFound } from './utilities'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import { AuthGuard } from './guards'
import { lazy, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { type AppStore } from './redux/storer'
import { createTheme, ThemeProvider } from '@mui/material'
import { themeSettings } from './pages'
import { SnackbarProvider } from 'notistack'
import CustomErrorMsg from './components/SnackBAr/SnackBAr.Notitask'
import { StatusLogin } from './models'

const Home = lazy(async () => await import('./pages/home/Home'))
const Login = lazy(async () => await import('./pages/Login/Login'))
const Private = lazy(async () => await import('./pages/private/routes'))
declare module 'notistack' {
  interface VariantOverrides {
    CustomErrorMsg: true
    customErrorMsg: {
      allowDownload: boolean
    }
  }
}

const Routes = () => {
  const sessionData = useSelector((state: AppStore) => state.loginUser)
  const Mode = useSelector((state: AppStore) => state.theme.Mode)
  const theme = useMemo(() => createTheme(themeSettings(Mode)), [Mode])
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <SnackbarProvider Components={
            {
              customErrorMsg: CustomErrorMsg
            }
          }
            preventDuplicate
            maxSnack={3}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
          >
            <RoutesWithNotFound>
              <Route path='/' element={<Home />} />
              <Route path={PublicRoutes.LOGIN} element={<>{(sessionData.status === StatusLogin.AUTHENTICATED) ? <Navigate replace to={`/${PrivateRoutes.PRIVATE}`} /> : <Login />}</>} />
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route element={<AuthGuard PrivateValditation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </SnackbarProvider>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default Routes

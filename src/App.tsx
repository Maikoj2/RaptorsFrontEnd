
import { Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, StatusLogin } from './models';
import { Authguard } from './guards';
import RoutesWithNotFound from './utilities/routes-with-not-found';
import { Suspense, lazy, useMemo } from 'react';
import { Layout } from './style-components';
import { useSelector } from 'react-redux';
import { AppStore } from './redux/storer';
import { createTheme, ThemeProvider } from '@mui/material';
import { themeSettings } from './pages/private/theme';
const Home = lazy(() => import('./pages/home/Home'))
const Loading = lazy(() => import('./components/Loading/Loading'))
const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/private/private'))

function App() {
  const user = useSelector((state: AppStore) => state.user)
  const Mode = useSelector((state: AppStore) => state.theme.Mode);
  const theme = useMemo(() => createTheme(themeSettings(Mode)), [Mode]);


  return (

    <div className="App">
      <Suspense fallback={<>{ <Loading />}</>} >
        <BrowserRouter>
            <ThemeProvider theme={theme}>
          <Layout>
              <RoutesWithNotFound>
                <Route path='/' element={<Home />} />
                <Route path={PublicRoutes.LOGIN} element={<>{(user.status !== StatusLogin.AUTENTICATED)&&<Login />}</>} />
                <Route path={PublicRoutes.HOME} element={<Home />} />
                <Route element={<Authguard />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
              </RoutesWithNotFound>
          </Layout>
            </ThemeProvider>
        </BrowserRouter>

      </Suspense>
    </div>
  )
}

export default App

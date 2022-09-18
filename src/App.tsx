
import { Route, Navigate, BrowserRouter } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, StatusLogin } from './models';
import { Authguard } from './guards';
import RoutesWithNotFound from './utilities/routes-with-not-found';
import { Suspense, lazy } from 'react';
import { Layout } from './style-components';
import { useSelector } from 'react-redux';
import { AppStore } from './redux/storer';
const Home = lazy(() => import('./pages/home/Home'))
const Loading = lazy(() => import('./components/Loading/Loading'))
const Login = lazy(() => import('./pages/Login/Login'))
const Private = lazy(() => import('./pages/private/private'))

function App() {
  const user = useSelector((state: AppStore) => state.user)


  return (


    <div className="App">
      <Suspense fallback={<>{(user.status !== StatusLogin.AUTENTICATED) && <Loading />}</>} >
        <BrowserRouter>
          <Layout>
            <RoutesWithNotFound>
              <Route path='/' element={<Home />}/>
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.HOME} element={<Home />} />
              <Route element={<Authguard />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
            </RoutesWithNotFound>
          </Layout>
        </BrowserRouter>

      </Suspense>
    </div>
  )
}

export default App

import { PrivateRoutes } from '@/models';
import { RoutesWithNotFound } from '@/utilities';
import { Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
import { Main } from './Main';
import { Dashboard } from './pages/Dashboard';
import { Users } from './pages/Users';

// const Dashboard = lazy(() => import('./pages/Dashboard/Dashboard'))
// const Users = lazy(() => import('./pages/Users/Users'))

const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route element={<Main />}>
                <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.USERS} element={<Users />} />
            </Route>
        </RoutesWithNotFound>
    )
}
export default Private
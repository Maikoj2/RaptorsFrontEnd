import { PrivateRoutes, StatusLogin } from '@/models';
import { RoutesWithNotFound } from '@/utilities';
import { Route, Navigate } from 'react-router-dom';

import { lazy, Suspense } from 'react';
import { Loading } from '@/components';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/storer';



const Dashboard = lazy(()=> import('./dashboard/Dashboard')) 

 const Private = () => {
    return (
        <RoutesWithNotFound>
            <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
        </RoutesWithNotFound>

 
    )
}
export default Private
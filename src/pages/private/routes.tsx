import { UseAuthStore } from '@/hooks'
import { PrivateRoutes } from '@/models'
import { RoutesWithNotFound } from '@/utilities'
import { Route, Navigate } from 'react-router-dom'
import { DataApiContextProvider, DataContextProvider } from './Context'
import { Main } from './Main'
import { Dashboard, Users } from './pages'
import { Staff } from './pages/Staff'


const Private = () => {
  return (
    <DataContextProvider>
      <DataApiContextProvider>
        <RoutesWithNotFound>
          <Route element={<Main />}>
            <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.USERS} element={<Users />} />
            <Route path={PrivateRoutes.STAFF} element={<Staff />} />
          </Route>
        </RoutesWithNotFound>
      </DataApiContextProvider>
    </DataContextProvider>
  )
}
export default Private

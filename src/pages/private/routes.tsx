import { UseAuthStore } from '@/hooks'
import { PrivateRoutes } from '@/models'
import { RoutesWithNotFound } from '@/utilities'
import { Route, Navigate } from 'react-router-dom'
import { DataContextProvider } from './Context'
import { Main } from './Main'
import { Dashboard, Users } from './pages'


const Private = () => {
  return (
    <DataContextProvider>
      <RoutesWithNotFound>
        <Route element={<Main />}>
          <Route path='/' element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
          <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          <Route path={PrivateRoutes.USERS} element={<Users />} />
        </Route>
      </RoutesWithNotFound>
    </DataContextProvider>
  )
}
export default Private

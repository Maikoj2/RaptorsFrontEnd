import { UseAuthStore } from '@/hooks'
import { StatusLogin } from '@/models'
import { type AppStore } from '@/redux/storer'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../models/routes'
import { useEffect } from 'react'
import { validateTokenexpire } from '@/utilities'

interface props {
  PrivateValditation: boolean
}

export const AuthGuard = ({ PrivateValditation }: props) => {
  const userState = useSelector((state: AppStore) => state.loginUser)
  const { CheckAuthToken } = UseAuthStore()
  const ExpiredToken = validateTokenexpire();
  if (ExpiredToken){
    useEffect(() => {
     CheckAuthToken()
    }, [CheckAuthToken])
  } 
  return (userState.status === StatusLogin.AUTHENTICATED)
    ? (PrivateValditation
        ? (<Outlet />)
        : (<Navigate replace to={PrivateRoutes.PRIVATE} />))
    : (<Navigate replace to={PublicRoutes.LOGIN} />)
}

export default AuthGuard

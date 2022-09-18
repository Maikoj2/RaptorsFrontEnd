import { StatusLogin } from "@/models";
import { AppStore } from "@/redux/storer"
import { useSelector } from "react-redux"
import { Outlet, Navigate } from "react-router-dom";
import { PublicRoutes } from '../models/routes';

export const AuthGuard = () => {
    const userState = useSelector((state: AppStore) => state.user)

    return (userState.status === StatusLogin.AUTENTICATED) ? <Outlet/>: <Navigate replace to={PublicRoutes.LOGIN}/>
 
}

export default AuthGuard;
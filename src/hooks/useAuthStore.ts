
import RaptorsApi from '@/api/LoginApi';
import { LocalStorageType, LoginRoutes, PrivateRoutes } from '@/models';
import { chackingCredentials, chackingRemenberme, clearErrorMessage, login, logOut } from '@/redux/slices/auth.slice';
import { AppStore } from '@/redux/storer';
import { getLocalStorage } from '@/utilities';
import { ManegerErrors } from '@/utilities/managerErrors';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';



export const UseAuthStore = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const clearMessageError = () => {
        setTimeout(() => {
            dispatch(clearErrorMessage(''));
        }, 10)
    }

    const loginUserinfo = useSelector((state: AppStore) => state.user);
    const startLogin = async ({ email = '', password = '' }, remerberMe= false) => {
       
        dispatch(chackingCredentials());
        try {
            const { data } = await RaptorsApi.post(LoginRoutes.LOGIN, { email: email, password: password });
            dispatch(chackingRemenberme(remerberMe));
            dispatch(login(data));
            Navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true}); 
        } catch (error: any) {
            console.log(error);
            
            if (error.response.data) {             
               const message =ManegerErrors(error.response.data)
               dispatch(logOut(message));
                clearMessageError();
            }
            if (error.code === "ERR_NETWORK") {
                dispatch(logOut(error.message));
                clearMessageError();
            }
            console.log(error);
        }


    }

    const CheckAuthToken= async () => {
        const token = getLocalStorage(LocalStorageType.TOKEN);
        dispatch(chackingCredentials());
        if (!token) return dispatch(logOut(''))
        try {
            const  { data } = await  RaptorsApi.get(LoginRoutes.RE_NEW);
            dispatch(chackingRemenberme(true));
            dispatch(login(data));
            Navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true}); 
        } catch (error) {
            dispatch(logOut(''));
        }
    }

    return {
        loginUserinfo,
        dispatch,
        startLogin,
        CheckAuthToken
    }

}

 
import { LocalStorageType, ApiLoginRoutes, PrivateRoutes } from '@/models'
import { chackingCredentials, chackingRemenberme, clearErrorMessage, login, logOut, UpdateToken } from '@/redux/slices/auth.slice'
import { type AppStore } from '@/redux/storer'
import { getLocalStorage } from '@/utilities'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AxiosGetLogin, AxiosLogin } from '../services/longIn'
import { type UserLogin } from '../models/authUser.types'

export const UseAuthStore = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()

  const clearMessageError = () => {
    setTimeout(() => {
      dispatch(clearErrorMessage(''))
    }, 10)
  }
  const loginUserinfo = useSelector((state: AppStore) => state.apiUsers)

  const startLogin = async ({ email = '', password = '' }, remerberMe = false) => {
    dispatch(chackingCredentials())
    AxiosLogin(ApiLoginRoutes.LOGIN, { email, password })
      .then((res) => {
        dispatch(chackingRemenberme(remerberMe))
        dispatch(login(res))
        Navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
      })
      .catch(() => {
        dispatch(logOut(''))
      })
  }

  const CheckAuthToken = async () => {
    const { Data }: UserLogin = getLocalStorage(LocalStorageType.DATA_SESSION)
    if (!Data.token) return dispatch(logOut(''))
    dispatch(chackingCredentials())
    AxiosGetLogin(ApiLoginRoutes.RE_NEW)
      .then((res) => {
        dispatch(chackingRemenberme(true))
        dispatch(UpdateToken(res))
      })
      .catch(() => dispatch(logOut('')))
  }

  const LogOut = () => {
    dispatch(logOut(''))
  }

  return {
    loginUserinfo,
    dispatch,
    startLogin,
    CheckAuthToken,
    LogOut
  }
}

import { getEnvVariable } from '@/helpers'
import { LocalStorageType } from '@/models'
import { logOut } from '@/redux/slices/auth.slice'
import { getLocalStorage, getValidationError } from '@/utilities'
import { SnackbarUtilities } from '@/utilities/Snackbar-manager'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { TypesSnackbar } from '@/components/SnackBAr/SnackBAr.Notitask'

const { VITE_REACT_URL_PRODUCTION } = getEnvVariable()

const RaptorsApi = axios.create({
  baseURL: VITE_REACT_URL_PRODUCTION
})

RaptorsApi.interceptors.request.use((config: AxiosRequestConfig) => {
  const Datalogin = getLocalStorage(LocalStorageType.DATA_SESSION)

  config.headers = {
    ...config.headers,
    token: !Datalogin ? '' : Datalogin.Data.token
  }
  return config
})

RaptorsApi.interceptors.response.use(

  (response: AxiosResponse) => {
    // console.log(response)
    SnackbarUtilities.customErrorMsg(response.data.message, TypesSnackbar.SUCCESS)
    return response
  },
  async (error: any) => {
    console.log(error)
    if (!error.response.data) {
      SnackbarUtilities.customErrorMsg(getValidationError(error.code), TypesSnackbar.ERROR)
      logOut('')
      return await Promise.reject(error)
    }
    SnackbarUtilities.customErrorMsg(getValidationError(error.response.data.message), TypesSnackbar.ERROR)
    logOut('')
    return await Promise.reject(error)
  }
)

export default RaptorsApi


import { type AppStore } from '@/redux/storer'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, chackingDataBase, clearErrorMessage, onAllUsers } from '../../../redux/slices/user.slice'
import { ApiUserRoutes } from '@/models/RoutsApi'

import { AxiosGetallitems, AxiosSetAitem } from '../pages/Users/services'

export const useUserStore = () => {
  const dispatch = useDispatch()
  const Usersinfo = useSelector((state: AppStore) => state.apiUsers)
  const clearMessageError = () => {
    setTimeout(() => {
      dispatch(clearErrorMessage(''))
    }, 10)
  }

  const getAllUsersDataBase = async ({ limit = 50, from = 0 }) => {
    dispatch(chackingDataBase())
    AxiosGetallitems(ApiUserRoutes.API_USER, { params: { limit, from } })
      .then((data) => {
        dispatch(onAllUsers(data))
        clearMessageError()
      })
  }
  const AddUsersDataBase = async (Data: any) => {
    dispatch(chackingDataBase())
    AxiosSetAitem(ApiUserRoutes.API_USER, Data)
      .then((data: any) => {
        dispatch(addUser(data))
        clearMessageError()
      })
  }
  const EditUsersDataBase = async (Data: any) => {
    dispatch(chackingDataBase())
    AxiosSetAitem(ApiUserRoutes.API_USER, Data)
      .then((data: any) => {
        dispatch(addUser(data))
        clearMessageError()
      })
  }
  return {
    getAllUsersDataBase,
    AddUsersDataBase,
    EditUsersDataBase,
    Usersinfo
  }
}

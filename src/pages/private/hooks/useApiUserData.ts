
import { type AppStore } from '@/redux/storer'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, chaangeStatusDataBase, chackingDataBase, clearErrorMessage, DeletedUser, onAllUsers, updateUser } from '../../../redux/slices/user.slice'
import {  ApiRoutes } from '@/models/RoutsApi'

import { AxiosDeleteAitem, AxiosGetallitems, AxiosSetAitem, AxiosUpdateAitem } from '../pages/Users/services'
import { StatusUsers } from '@/models'

export const useUserStore = () => {
  const dispatch = useDispatch();
  const Usersinfo = useSelector((state: AppStore) => state.apiUsers);
  const clearMessageError = () => {
    setTimeout(() => {
      dispatch(clearErrorMessage(''))
    }, 10);
  };

  const getAllUsersDataBase = async ({ limit = 50, from = 0 }) => {
    dispatch(chackingDataBase());
    AxiosGetallitems(ApiRoutes.API_USER, { params: { limit, from } })
      .then((data) => {
        dispatch(onAllUsers(data));
        clearMessageError();
      });
  }
  const AddUsersDataBase = async (Data: any) => {
    dispatch(chackingDataBase());
    AxiosSetAitem(ApiRoutes.API_USER, Data)
      .then((data: any) => {
        dispatch(addUser(data));
        clearMessageError();
      })
  }
  const upDateUsersDataBase = async (Data: any) => {
    delete Data.isNew;
    dispatch(chackingDataBase());
    AxiosUpdateAitem(`${ApiRoutes.API_USER}/${Data._id}`, Data)
      .then((data: any) => {
        data.Data = Data;
         dispatch(updateUser(data));
         clearMessageError();
      })
  }
  const deleteUsersDataBase = async (Data: any) => {
  console.log(Data);
  
    dispatch(chackingDataBase());
    AxiosDeleteAitem(`${ApiRoutes.API_USER}/${Data}`)
      .then((data: any) => {
         dispatch(DeletedUser(data));
         clearMessageError();
      }).catch(()=>
        dispatch(chaangeStatusDataBase(StatusUsers.OBTAINED))
      )
  }
  return {
    getAllUsersDataBase,
    AddUsersDataBase,
    upDateUsersDataBase,
    deleteUsersDataBase,
    Usersinfo
  }
}


import { type AppStore } from '@/redux/storer'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, chaangeStatusDataBase, chackingDataBase, clearErrorMessage, DeletedUser, onAllUsers, updateUser } from '../../../redux/slices/user.slice'
import {  ApiRoutes } from '@/models/RoutsApi'

import {  AxiosDeleteAitemuser, AxiosGetallitemsuser,  AxiosSetAitemuser, AxiosUpdateAitemuser } from '../pages/Users/services'
import { StatusData } from '@/models'

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
    AxiosGetallitemsuser(ApiRoutes.API_USER, { params: { limit, from } })
      .then((data) => {
        dispatch(onAllUsers(data));
        clearMessageError();
      });
  }
  const AddUsersDataBase = async (Data: any) => {
    dispatch(chackingDataBase());
    AxiosSetAitemuser(ApiRoutes.API_USER, Data)
      .then((data: any) => {
        dispatch(addUser(data));
        clearMessageError();
      })
  }
  const upDateUsersDataBase = async (Data: any) => {
    delete Data.isNew;
    console.log(Data);
    dispatch(chackingDataBase());
    AxiosUpdateAitemuser(`${ApiRoutes.API_USER}/${Data._id}`, Data)
      .then((data: any) => {
        
        data.Data = Data;
        console.log(data.Data);
        
         dispatch(updateUser(data));
         clearMessageError();
      })
  }
  const deleteUsersDataBase = async (Data: any) => {
  console.log(Data);
  
    dispatch(chackingDataBase());
    AxiosDeleteAitemuser(`${ApiRoutes.API_USER}/${Data}`)
      .then((data: any) => {
         dispatch(DeletedUser(data));
         clearMessageError();
      }).catch(()=>
        dispatch(chaangeStatusDataBase(StatusData.OBTAINED))
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


import { ApiRoutes } from '@/models/RoutsApi'
import { AxiosDeleteAitemuser, AxiosGetallitemsuser, AxiosSetAitemuser, AxiosUpdateAitemuser } from '../pages/Users/services'
import { StatusData, UserEmptyState } from '@/models'
import { useReducer } from 'react';
import { UserReducer } from '../Context'
import { UsersActionReducers, UsersEmptyState } from '../models'

export const useUserDataManager = () => {
  const [state, dispatch] = useReducer(UserReducer, UsersEmptyState);
  const DispatchAction = (type:string, payload: any) => {
    dispatch({type: type,payload: payload})
  };
  const clearMessageError = () => {
    setTimeout(() => {
      DispatchAction( UsersActionReducers.CLEAR_MESSAGE, '')
    }, 10);
  };

  const getAllUsersDataBase = async ({ limit = 50, from = 0 }) => {
    DispatchAction(UsersActionReducers.CHECKING,{UserContext:UserEmptyState});
    AxiosGetallitemsuser(ApiRoutes.API_USER, { params: { limit, from } })
      .then((data) => {
        console.log(data);
        DispatchAction(UsersActionReducers.GET_ALL_USERS, {UserContext:data});
        clearMessageError();
      });
  }
  const AddUsersDataBase = async (Data: any) => {
    DispatchAction(UsersActionReducers.CHECKING,{UserContext:UserEmptyState});
    AxiosSetAitemuser(ApiRoutes.API_USER, Data)
      .then((data: any) => {
        DispatchAction(UsersActionReducers.SET_USER, {UserContext:data});
        clearMessageError();
      })
  }
  const upDateUsersDataBase = async (Data: any) => {
    delete Data.isNew;
    console.log(Data);
    DispatchAction(UsersActionReducers.CHECKING,{UserContext:UserEmptyState});
    AxiosUpdateAitemuser(`${ApiRoutes.API_USER}/${Data._id}`, Data)
      .then((data: any) => {
        data.Data = Data;
        DispatchAction(UsersActionReducers.UPDATE_USER, {UserContext:data});        
        clearMessageError();
      })
  }
  const deleteUsersDataBase = async (Data: any) => {
    console.log(Data);

    DispatchAction(UsersActionReducers.CHECKING,{UserContext:UserEmptyState});
    AxiosDeleteAitemuser(`${ApiRoutes.API_USER}/${Data}`)
      .then((data: any) => {
        DispatchAction(UsersActionReducers.DELETE_USER, {UserContext:data});        
        clearMessageError();
      }).catch(() =>
        DispatchAction(UsersActionReducers.DELETE_USER, {UserContext: StatusData.OBTAINED})
      )
  }
  return {
    getAllUsersDataBase,
    AddUsersDataBase,
    upDateUsersDataBase,
    deleteUsersDataBase,
    UserState: state
  }
}

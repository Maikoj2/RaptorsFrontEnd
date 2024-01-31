import { StatusData } from '@/models'

import { createSlice } from '@reduxjs/toolkit'
import { UsersEmptyState, type UsersData } from '../../pages/private/models/apiUsers.types'
import { ApiUser } from '../../models/apiData.types';

interface Action {
  payload: UsersData
}

export const userSlice = createSlice({
  name: 'UserApp',
  initialState: UsersEmptyState,
  reducers: {

    chackingDataBase: (state: UsersData) => {
      state.status = StatusData.CHECKING
    },
    chaangeStatusDataBase: (state: UsersData, {payload}:any) => {
      state.status = payload
    },
    onAllUsers: (state: UsersData, { payload }: Action) => {
      state.status = StatusData.OBTAINED
      state.Data = payload.Data
      state.message = payload.message
      state.total = payload.total
    },
    addUser: (state: UsersData, { payload }: any) => {
      state.status = StatusData.OBTAINED
      state.Data.push(payload.Data)
      state.message = payload.message
      state.total = state.total + 1
    },
    updateUser: (state: UsersData, { payload }: any) => {
      state.Data = state.Data.map((row: ApiUser) => (row._id === payload.Data._id ? payload.Data : row))
      state.status = StatusData.OBTAINED
      state.message = payload.message
    },
    DeletedUser: (state: UsersData, { payload }: any) => {
      state.status = StatusData.OBTAINED
      state.message = payload.message
      state.total = state.total - 1
      state.Data = state.Data.filter((row:ApiUser) => (row._id !== payload.Data._id))
    },
    clearErrorMessage: (state: UsersData, action: any) => {
      state.message = action.payload
    },
    clearUserData: (state: UsersData, action: any) => {
      state.status = StatusData.NO_OBTAINED
      state.Data = UsersEmptyState.Data
      state.message = action.payload
      state.total = 0
    }

  }

})

export const {chaangeStatusDataBase, onAllUsers, chackingDataBase,updateUser, clearErrorMessage, clearUserData, addUser,DeletedUser } = userSlice.actions
export default userSlice.reducer

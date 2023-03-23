import { StatusUsers } from '@/models'

import { createSlice } from '@reduxjs/toolkit'
import { UsersEmptyState, type UsersData } from '../../pages/private/models/apiUsers.types'

interface Action {
  payload: UsersData
}

export const userSlice = createSlice({
  name: 'UserApp',
  initialState: UsersEmptyState,
  reducers: {

    chackingDataBase: (state: UsersData) => {
      state.status = StatusUsers.CHEKING
    },
    onAllUsers: (state: UsersData, { payload }: Action) => {
      state.status = StatusUsers.OBTAINED
      state.Data = payload.Data
      state.message = payload.message
      state.total = payload.total
    },
    addUser: (state: UsersData, { payload }: any) => {
      state.status = StatusUsers.OBTAINED
      state.Data.push(payload.Data)
      state.message = payload.message
      state.total = state.total + 1
    },
    clearErrorMessage: (state: UsersData, action: any) => {
      state.message = action.payload
    },
    clearUserData: (state: UsersData, action: any) => {
      state.status = StatusUsers.NO_OBTAINED
      state.Data = UsersEmptyState.Data
      state.message = action.payload
      state.total = 0
    }

  }

})

export const { onAllUsers, chackingDataBase, clearErrorMessage, clearUserData, addUser } = userSlice.actions
export default userSlice.reducer

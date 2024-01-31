import { type UserLogin, LocalStorageType, StatusLogin, UserLoginEmptystate } from '@/models'
import { clearLocalStorage, getLocalStorage, setLocalStorage } from '@/utilities'
import { createSlice } from '@reduxjs/toolkit'

interface Action {
  payload: UserLogin
}

export const authSlice = createSlice({
  name: 'user',
  initialState: (getLocalStorage(LocalStorageType.DATA_SESSION))
    ? getLocalStorage(LocalStorageType.DATA_SESSION)
    : UserLoginEmptystate,
  reducers: {

    login: (state: UserLogin, { payload }: Action) => {
      state.status = StatusLogin.AUTHENTICATED
      state.Data.user = payload.Data.user
      state.Data.token = payload.Data.token
      if (state.remerberMe) {
        setLocalStorage(LocalStorageType.DATA_SESSION, state)
        setLocalStorage(LocalStorageType.TOKEN_DATE_CREATED, new Date().getTime())
      }
    },
    logOut: (state: UserLogin, action: any) => {
      state.status = StatusLogin.NOT_AUTHENTICATED
      state.message = action.payload
      state.Data.user = UserLoginEmptystate.Data.user
      state.Data.token = UserLoginEmptystate.Data.token
      clearLocalStorage(LocalStorageType.DATA_SESSION)
      clearLocalStorage(LocalStorageType.TOKEN_DATE_CREATED)
    },
    chackingCredentials: (state: UserLogin) => {
      state.status = StatusLogin.CHECKING
    },
    UpdateToken: (state: UserLogin, { payload }: Action) => {
      state.status = StatusLogin.AUTHENTICATED
      state.Data.token = payload.Data.token
      setLocalStorage(LocalStorageType.DATA_SESSION, state)
      setLocalStorage(LocalStorageType.TOKEN_DATE_CREATED, new Date().getTime())
    },
    chackingRemenberme: (state: UserLogin, action: any) => {
      state.remerberMe = action.payload
    },
    clearErrorMessage: (state: UserLogin, action: any) => {
      state.message = action.payload
    }

  }

})

export const { login, logOut, chackingCredentials, clearErrorMessage, chackingRemenberme, UpdateToken } = authSlice.actions
export default authSlice.reducer

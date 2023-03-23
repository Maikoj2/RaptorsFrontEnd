import { configureStore } from '@reduxjs/toolkit'
import { authSlice, themeSlice, userSlice, placeDialogopenSlice } from '@/redux/slices'
import { type UserLogin } from '../models/authUser.types'
import { type themeMode } from '@/pages/private/models'
import { type UsersData } from '../pages/private/models/apiUsers.types'
import { type DialogopenAt } from './slices/placeDialogopen.slice'

export interface AppStore {
  loginUser: UserLogin
  theme: themeMode
  apiUsers: UsersData
  Dialog: DialogopenAt
}

export default configureStore<AppStore>({

  reducer: {
    loginUser: authSlice,
    theme: themeSlice,
    apiUsers: userSlice,
    Dialog: placeDialogopenSlice
  }
})

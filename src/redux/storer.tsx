import { configureStore } from '@reduxjs/toolkit'
import { authSlice, themeSlice, userSlice } from '@/redux/slices'
import { type UserLogin } from '../models/authUser.types'
import { type themeMode } from '@/pages/private/models'
import { type UsersData } from '../pages/private/models/apiUsers.types'


export interface AppStore {
  loginUser: UserLogin
  theme: themeMode
  apiUsers: UsersData
}

export default configureStore<AppStore>({

  reducer: {
    loginUser: authSlice,
    theme: themeSlice,
    apiUsers: userSlice,
  }
})

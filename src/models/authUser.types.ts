import { type ApiUser } from './apiData.types'
import { StatusLogin } from './StatusLogin'

export interface UserLogin {
  status: string
  message: string
  remerberMe: boolean
  Data: {
    user: ApiUser
    token: string
  }
}
export const UserEmptyState: ApiUser = {
  _id: '',
  Names: '',
  email: '',
  img: '',
  role: '',
  createdAt: '',
  updatedAt: ''
}

export const UserLoginEmptystate: UserLogin = {

  status: StatusLogin.NOT_AUTHENTICATED,
  message: '',
  remerberMe: false,
  Data: {
    user: UserEmptyState,
    token: ''
  }
}

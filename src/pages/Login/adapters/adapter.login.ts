import { type ApiUserLogin, type UserLogin } from '@/models'

export const loginAdapter = ({ ok, message, Data }: ApiUserLogin): UserLogin => {
  const { user, token } = Data
  const Userdata = {
    _id: user._id,
    Names: user.Names,
    email: user.email,
    img: user.img,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }
  return {
    status: ok,
    message,
    remerberMe: true,
    Data: {
      user: Userdata,
      token
    }
  }
}

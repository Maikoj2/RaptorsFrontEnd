import { ApiUser } from '@/models'
import { type ApiAUser, type ApiUsers, type AUserData, type UsersData } from '@/pages/private/models/apiUsers.types'

export const UsersAdacter = ({ ok, message, Data, total }: ApiUsers): UsersData => {
  const Userdata = Data.map((user) => ({
    _id: user._id,
    Names: user.Names,
    email: user.email,
    img: user.img,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  }))
  return {
    status: ok,
    message,
    Data: Userdata,
    total

  }
}

export const AUserAdacter = ({ ok, message, Data, total }: ApiAUser): AUserData => {
  const Userdata = {
    _id: Data._id,
    Names: Data.Names,
    email: Data.email,
    img: Data.img,
    role: Data.role,
    createdAt: Data.createdAt,
    updatedAt: Data.updatedAt
  }
  return {
    status: ok,
    message,
    Data: Userdata,
    total

  }
}

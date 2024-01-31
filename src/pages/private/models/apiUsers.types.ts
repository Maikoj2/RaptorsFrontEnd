import { StatusData } from '@/models'
import { type ApiUser } from '../../../models/apiData.types'

export interface UsersData {
  status: string
  message: string
  Data: ApiUser[]
  total: number
}
export interface AUserData {
  status: string
  message: string
  Data: ApiUser
  total: number
}
export interface ApiUsers {
  ok: string
  message: string
  Data: ApiUser[]
  total: number
}
export interface ApiAUser {
  ok: string
  message: string
  Data: ApiUser
  total: number
}
const UserEmptyState: ApiUser[] = []

export const UsersEmptyState: UsersData = {
  status: StatusData.NO_OBTAINED,
  message: '',
  Data: UserEmptyState,
  total: 0
}

import { RaptorsApi } from '@/api'
import { AUserAdacter, UsersAdacter } from '../adacter/adacter.user'

export const AxiosGetallitems = async (url: string, params: any) => {
  return await RaptorsApi.get(url, params).then(({ data }) => (UsersAdacter(data)))
}
export const AxiosSetAitem = async (url: string, body: any) => {
  return await RaptorsApi.post(url, body).then(({ data }) => (AUserAdacter(data)))
}
export const AxiosUpdateAitem = async (url: string, body: any) => {
  return await RaptorsApi.put(url, body).then(({ data }) => (AUserAdacter(data)))
}
export const AxiosDeleteAitem = async (url: string) => {
  return await RaptorsApi.delete(url).then(({ data }) => (AUserAdacter(data)))
}

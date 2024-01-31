import { RaptorsApi } from '@/api'
import { AUserAdapter, UsersAdapter } from '../adapters/adapter.user'

export const AxiosGetallitemsuser = async (url: string, params: any) => {
  return await RaptorsApi.get(url, params).then(({ data }) => (UsersAdapter(data)))
}
export const AxiosSetAitemuser = async (url: string, body: any) => {
  return await RaptorsApi.post(url, body).then(({ data }) => (AUserAdapter(data)))
}
export const AxiosUpdateAitemuser = async (url: string, body: any) => {
  return await RaptorsApi.put(url, body).then(({ data }) => (AUserAdapter(data)))
}
export const AxiosDeleteAitemuser = async (url: string) => {
  return await RaptorsApi.delete(url).then(({ data }) => (AUserAdapter(data)))
}

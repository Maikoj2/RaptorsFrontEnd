import { RaptorsApi } from '@/api'
import { allStaffAdapter } from '../adapters'

export const AxiosGetallitems = async (url: string, params: any) => {
  return await RaptorsApi.get(url, params).then(({ data }) => (allStaffAdapter(data)))
}
// export const AxiosSetAitem = async (url: string, body: any) => {
//   return await RaptorsApi.post(url, body).then(({ data }) => (AUserAdapter(data)))
// }
// export const AxiosUpdateAitem = async (url: string, body: any) => {
//   return await RaptorsApi.put(url, body).then(({ data }) => (AUserAdapter(data)))
// }
// export const AxiosDeleteAitem = async (url: string) => {
//   return await RaptorsApi.delete(url).then(({ data }) => (AUserAdapter(data)))
// }
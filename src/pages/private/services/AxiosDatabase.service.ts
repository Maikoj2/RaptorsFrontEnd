import { RaptorsApi } from '@/api'

export const AxiosGetAllItems = async (url: string, params: any, adapterData: any) => {
  return await RaptorsApi.get(url, params).then(({ data }) => (adapterData(data)))
}
export const AxiosSetItem = async (url: string, body: any, adapterData: any) => {
  return await RaptorsApi.post(url, body).then(({ data }) => (adapterData(data)))
}
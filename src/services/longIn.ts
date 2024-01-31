import { RaptorsApi } from '@/api'
import { loginAdapter } from '@/pages/Login/adapters'

interface logInCredentials {
  email: string
  password: string
}

export const AxiosLogin = async (url: string, Data: logInCredentials) => {
  return await RaptorsApi.post(url, Data).then(({ data }) => (loginAdapter(data)))
}

export const AxiosGetLogin = async (url: string) => {
  return await RaptorsApi.get(url).then(({ data }) => (loginAdapter(data)))
}

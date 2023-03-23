import { RaptorsApi } from '@/api'
import { loginAdacter } from '@/pages/Login/adacter/adacter.login'

interface logInCredentials {
  email: string
  password: string
}

export const AxiosLogin = async (url: string, Data: logInCredentials) => {
  return await RaptorsApi.post(url, Data).then(({ data }) => (loginAdacter(data)))
}

export const AxiosGetLogin = async (url: string) => {
  return await RaptorsApi.get(url).then(({ data }) => (loginAdacter(data)))
}

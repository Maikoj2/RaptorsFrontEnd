import { LocalStorageType } from '@/models'
import { getLocalStorage } from './localStorage.utilite'

export const validateTokenexpire = () => {
  if (!localStorage.getItem(LocalStorageType.TOKEN_DATE_CREATED)) return false
  const dateLastLogin = getLocalStorage(LocalStorageType.TOKEN_DATE_CREATED)
  const MinutesPass: number = new Date(new Date().getTime() - dateLastLogin).getMinutes()
  console.log(MinutesPass);
  
  if (MinutesPass >= 60) return true

  return false
}

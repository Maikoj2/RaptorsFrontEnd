import { LocalStorageType } from '@/models'
import { getLocalStorage } from './localStorage.utilite'

export const validateTokenexpire = () => {
  const tokenCreationDate = getLocalStorage(LocalStorageType.TOKEN_DATE_CREATED);
  if (!tokenCreationDate) return false

  const now = new Date().getTime();

  const MinutesPassed: number = (now - tokenCreationDate) /(1000 *60);
  console.log(MinutesPassed);
  
  return MinutesPassed >= 60
}

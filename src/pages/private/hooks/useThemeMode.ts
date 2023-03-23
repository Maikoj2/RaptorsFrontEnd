import { SetMode } from '@/redux/slices/theme.slice'
import { useDispatch } from 'react-redux'

export const UseThemeMode = () => {
  const dispatch = useDispatch()

  const setThemeMode = () => {
    dispatch(SetMode())
  }

  return {
    setThemeMode
  }
}

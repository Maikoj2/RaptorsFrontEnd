import { SetOpenPlace } from '@/redux/slices/placeDialogopen.slice'
import { useDispatch } from 'react-redux'

export const useOpenedDialogAt = () => {
  const dispatch = useDispatch()
  const setNameOpenedDialog = (name: string) => {
    dispatch(SetOpenPlace(name))
  }
  return {
    setNameOpenedDialog
  }
}

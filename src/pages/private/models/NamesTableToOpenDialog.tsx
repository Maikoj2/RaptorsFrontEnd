
import { FormNewUser } from '../pages/Users/components'
import { nameModals } from './modalsNames'
import { NameTables } from './NameTables'
import WindowsToConfirm from '../components/WindowsToConfirm/WindowsToConfirm';

export const ComponentOnpenOnDialog = [
  {
    key: NameTables.USERS,
    value: <FormNewUser></FormNewUser>
  },
  {
    key: nameModals.CONFIRMACION,
    value: <WindowsToConfirm></WindowsToConfirm>
  }
]

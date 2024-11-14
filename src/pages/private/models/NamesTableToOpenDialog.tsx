
import { FormNewUser } from '../pages/Users/components'
import { nameModals } from './modalsNames'
import { NameTables } from './NameTables'
import WindowsToConfirm from '../components/WindowsToConfirm/WindowsToConfirm';
import FormNewStaff from '../pages/Staff/components/FormNewStaff/NewStaff';

export const ComponentOnpenOnDialog = [
  {
    key: NameTables.USERS,
    value: <FormNewUser></FormNewUser>
  },
  {
    key: nameModals.CONFIRMATION,
    value: <WindowsToConfirm></WindowsToConfirm>
  }
  ,
  {
    key: NameTables.STAFF,
    value: <FormNewStaff></FormNewStaff>
  }
]

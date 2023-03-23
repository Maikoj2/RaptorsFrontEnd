import { type AppStore } from '../redux/storer'
import { useSelector } from 'react-redux'

interface props {
  rol: string
}

export const RoleGuards = ({ rol }: props) => {
  const userState = useSelector((state: AppStore) => state.loginUser)
  return (
    <>
    </>
  )
}
export default RoleGuards

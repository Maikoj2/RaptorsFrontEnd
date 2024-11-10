import { TypeWithKey } from '@/models';
import {ReactNode, createContext, useContext, useState, Dispatch} from 'react'

 interface Props {
  children: ReactNode
}
interface RowModesModelContextType {
  setSelectvalueContx: Dispatch<React.SetStateAction<TypeWithKey<string>>>,
  SelectvalueContx:TypeWithKey<string>,
  setnameOpenDialog: Dispatch<React.SetStateAction<string>>,
  nameOpenDialog:string
  setConfirm: Dispatch<React.SetStateAction<boolean>>,
  confirm:boolean
}

export const managerContext = createContext<RowModesModelContextType>({}as RowModesModelContextType)

export const DataContextProvider = ({ children }: Props) => {


  const [SelectvalueContx, setSelectvalueContx] = useState<TypeWithKey<string>>({})
  const [ nameOpenDialog,setnameOpenDialog] = useState<string>('')
  const [ confirm,setConfirm] = useState<boolean>(false)

  return <managerContext.Provider value={{ 
    SelectvalueContx,
    setSelectvalueContx,
    nameOpenDialog, 
    setnameOpenDialog,
    confirm,
    setConfirm
  }}>{children}</managerContext.Provider>
}

export const useManagerContext = () => {
  const context = useContext(managerContext);
  if (context === undefined) {
    throw new Error('useManagerContext must be used within a DataProvider')
  }
  return context
}

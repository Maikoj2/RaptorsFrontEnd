import { typeWithKey } from '@/models';
import {ReactNode, createContext, useContext, useState, Dispatch,useCallback} from 'react'

export interface Props {
  children: ReactNode
}
interface RowModesModelContextType {
  setSelectvalueContx: Dispatch<React.SetStateAction<typeWithKey<string>>>,
  SelectvalueContx:typeWithKey<string>,
  setnameOpenDialg: Dispatch<React.SetStateAction<string>>,
  nameOpenDialg:string
  setConfirm: Dispatch<React.SetStateAction<boolean>>,
  confirm:boolean
}

export const managerContext = createContext<RowModesModelContextType>({}as RowModesModelContextType)

export const DataContextProvider = ({ children }: Props) => {


  const [SelectvalueContx, setSelectvalueContx] = useState<typeWithKey<string>>({})
  const [ nameOpenDialg,setnameOpenDialg] = useState<string>('')
  const [ confirm,setConfirm] = useState<boolean>(false)

  return <managerContext.Provider value={{ 
    SelectvalueContx,
    setSelectvalueContx,
    nameOpenDialg, 
    setnameOpenDialg,
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

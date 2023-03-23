import { typeWithKey } from '@/models';
import { GridRowModesModel } from '@mui/x-data-grid';
import {ReactNode, createContext, useContext, useState, Dispatch,useCallback} from 'react'

export interface Props {
  children: ReactNode
}
interface RowModesModelContextType {
  setSelectvalueContx: Dispatch<React.SetStateAction<typeWithKey<string>>>;
  SelectvalueContx:typeWithKey<string>
}

export const rowModesModelContext = createContext<RowModesModelContextType>({}as RowModesModelContextType)

export const DataApiProvider = ({ children }: Props) => {


  const [SelectvalueContx, setSelectvalueContx] = useState<typeWithKey<string>>({})

  return <rowModesModelContext.Provider value={{ SelectvalueContx,setSelectvalueContx }}>{children}</rowModesModelContext.Provider>
}

export const useModeModelContext = () => {
  const context = useContext(rowModesModelContext);
  if (context === undefined) {
    throw new Error('useModeModelContext must be used within a DataProvider')
  }
  return context
}

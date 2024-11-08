import { ReactNode, createContext, useContext, useMemo } from 'react';
import { useStaffDataManager } from '../hooks/useApiStaffData';
import { staffDataContext,  } from '../models/apiStaff.types';
import { useBaseSalaryDataManager } from '../hooks/useApiBaseSalaryData';
import { BaseSalaryDataContext } from '../models/apiSalaryBase.types';



interface Props {
    children: ReactNode
}

interface DataApiContextsTypes {
    getDataStaff: (limit:number, from:number) => void,
    addStaff: (data:any) => void,
    staffState: staffDataContext,
    getBaseSalary: (limit:number, from:number) => void,
    BaseSalaryState: BaseSalaryDataContext,

}



export const managerApiDataContext = createContext<DataApiContextsTypes>({} as DataApiContextsTypes)

export const DataApiContextProvider = ({ children }: Props) => {
    const {staffState, loadStaff,SaveStaff } = useStaffDataManager ();
    const {BaseSalaryState, loadBaseSalary} = useBaseSalaryDataManager();

    const getDataStaff= ( limit:number, from:number)=> {
        loadStaff({limit, from})
    }
    const addStaff= ( data:any)=> {
        console.log('in');
        
        SaveStaff(data)
    }
    const getBaseSalary= ( limit:number, from:number)=> {
        loadBaseSalary({limit, from})
    }
    const memoizedValues = useMemo(() => ({
        staffState,
        getDataStaff,
        addStaff,
        BaseSalaryState,
        getBaseSalary
      }), [staffState, getDataStaff, BaseSalaryState, getBaseSalary])


    return <managerApiDataContext.Provider value={memoizedValues}>
        {children}
    </managerApiDataContext.Provider>
}

export const useManagerApiDataContext = () => {
    const context = useContext(managerApiDataContext);
    if (context === undefined) {
      throw new Error('managerApiDataContext must be used within a DataProvider')
    }
    return context
  }
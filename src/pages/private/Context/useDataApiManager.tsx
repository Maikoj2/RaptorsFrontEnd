import { ReactNode, createContext, useContext, useMemo } from 'react';
import { useStaffDataManager } from '../hooks/useApiStaffData';
import { staffDataContext,  } from '../models/apiStaff.types';
import { useBaseSalaryDataManager } from '../hooks/useApiBaseSalaryData';
import { BaseSalaryDataContext } from '../models/apiSalaryBase.types';
import { useUserDataManager } from '../hooks';
import { UsersData } from '../models';



interface Props {
    children: ReactNode
}

interface DataApiContextsTypes {
    // user data manager
    UserState: UsersData, 
    getDataUsers: (limit: number,  from: number)=> void, 
    addUser: (data:any)=> void, 
    updateUser: (data:any)=> void, 
    deleteUser: (data:any)=> void, 
    // staff data
    staffState: staffDataContext,
    getDataStaff: (limit:number, from:number) => void,
    addStaff: (data:any) => void,
    // Base salary data
    getBaseSalary: (limit:number, from:number) => void,
    BaseSalaryState: BaseSalaryDataContext,

}



export const managerApiDataContext = createContext<DataApiContextsTypes>({} as DataApiContextsTypes)

export const DataApiContextProvider = ({ children }: Props) => {
    const { UserState, getAllUsersDataBase, AddUsersDataBase, upDateUsersDataBase, deleteUsersDataBase } =useUserDataManager();
    const {staffState, loadStaff,SaveStaff } = useStaffDataManager ();
    const {BaseSalaryState, loadBaseSalary} = useBaseSalaryDataManager();
    

    // Data User actions 
    const getDataUsers= ( limit:number=50, from:number=0 )=> {
        getAllUsersDataBase({limit, from})
    }
    const addUser  =(data: any) => {
        AddUsersDataBase(data)
    }
    const updateUser  =(data: any) => {
        upDateUsersDataBase(data)
    }
    const deleteUser  =(data: any) => {
        deleteUsersDataBase(data)
    }

    // Data staff actions
    const getDataStaff= ( limit:number=50, from:number=0)=> {
        console.log("Fetching Base Salary Data...");
        loadStaff({limit, from})
    }
    const addStaff= ( data:any)=> {
        SaveStaff(data)
    }
    // Data base salary actions
    const getBaseSalary= ( limit:number=50, from:number=0)=> {
        loadBaseSalary({limit, from})
    }
    const memoizedValues = useMemo(() => ({
        UserState,
        getDataUsers,
        addUser,
        updateUser,
        deleteUser,
        staffState,
        getDataStaff,
        addStaff,
        BaseSalaryState,
        getBaseSalary
      }), 
      [
        staffState, 
        getDataStaff, 
        BaseSalaryState, 
        getBaseSalary,
        UserState,
        addUser,
        updateUser,
        deleteUser
    ])


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

import { useCallback,  memo } from 'react'
import { type AppStore } from '@/redux/storer'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Table } from '../../components/Table'
import { NameTables } from '../../models'

import { useColDataTableUsers } from '../../hooks/useColDataUser'
import { useUserDataManager } from '../../hooks'
import { GridRowModel } from '@mui/x-data-grid'
import { SubjectManager } from '@/utilities';
import { ApiUser } from '@/models';

export interface UsersProps { }

export const addRowSubjectManager = new SubjectManager<any>()

const Users = () => {
  const  { upDateUsersDataBase,  deleteUsersDataBase } =useUserDataManager()
  const { Data, status } = useSelector((state: AppStore) => state.apiUsers)
  const  { UserColumnDef }  =   useColDataTableUsers()

  const isLoading = status !== 'obtained';
  
  const [Row, setRow] = useState<ApiUser[]>(Data ||[])
  useEffect(() => {
    setRow(Data)
  }, [Data])
  
  const handleUpdateAction = useCallback((data: GridRowModel) => {
    upDateUsersDataBase(data);
  }, [upDateUsersDataBase]);
  
  const handleDeleteAction = useCallback((userId: string) => {
    deleteUsersDataBase(userId);
  }, [deleteUsersDataBase]);

 
  return <Table
    data={Row}
    columns={UserColumnDef}
    NameHeaderTable={NameTables.USERS}
    loading={isLoading}
    actions
    UpdateOnDataBAse={handleUpdateAction }
    DeleteOnDataBAse={handleDeleteAction}

  />

}

export default memo(Users)

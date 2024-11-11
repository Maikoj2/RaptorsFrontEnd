
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
import { ApiUser, StatusData } from '@/models';
import { useManagerApiDataContext } from '../../Context';

export interface UsersProps { }

export const addRowSubjectManager = new SubjectManager<any>()

const FETCH_LIMIT = 50;

const Users = () => {
  const  { upDateUsersDataBase,  deleteUsersDataBase } =useUserDataManager()
  const { UserState:{Data,status}, getDataUsers  } = useManagerApiDataContext()
  const  { UserColumnDef }  =   useColDataTableUsers()
  const [Row, setRow] = useState(Data)
  useEffect(() => {
    setRow(Data)},[Data])

  const isLoading = status !== StatusData.OBTAINED;
  
  useEffect(() => {
    if (status === StatusData.NO_OBTAINED) getDataUsers(FETCH_LIMIT, 0);
  }, [getDataUsers])
  
  const handleUpdateAction = useCallback((data: GridRowModel) => {
    upDateUsersDataBase(data);
  }, [upDateUsersDataBase]);
  
  const handleDeleteAction = useCallback((userId: string) => {
    deleteUsersDataBase(userId);
  }, [deleteUsersDataBase]);

 
  return <Table
    data={Row || {}}
    columns={UserColumnDef}
    NameHeaderTable={NameTables.USERS}
    loading={isLoading}
    actions
    UpdateOnDataBAse={handleUpdateAction }
    DeleteOnDataBAse={handleDeleteAction}

  />

}

export default memo(Users)

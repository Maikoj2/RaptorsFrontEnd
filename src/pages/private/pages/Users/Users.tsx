
import React from 'react'
import { type AppStore } from '@/redux/storer'
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Table } from '../../components/Table'
import { NameTables } from '../../models'
import { SubjectManager } from '@/models'
import { useColDataTable } from '../../hooks/useColData'
import { useUserStore } from '../../hooks'
import { GridRowModel } from '@mui/x-data-grid'
export interface UsersProps { }


export const addRowSubjectManager = new SubjectManager<any>()
const Users: React.FC<UsersProps> = () => {
 const  { upDateUsersDataBase,  deleteUsersDataBase } =useUserStore()
  const { Data, status } = useSelector((state: AppStore) => state.apiUsers)
  const { UserColumnDef } = useColDataTable()
  const [Row, setRow] = useState(Data)
  useEffect(() => {
    setRow(Data)
  }, [Data])
  
  const UpdateAtion = (data:GridRowModel)=>{
    upDateUsersDataBase(data);
  }
  const DeleteAtion = (data:string)=>{
    deleteUsersDataBase(data);
  }

 
  return <Table
    data={Row}
    columns={UserColumnDef}
    NameHeaderTable={NameTables.USERS}
    loanding={status !== 'obtained'}
    actions
    UpdateOnDataBAse={UpdateAtion}
    DeleteOnDataBAse={DeleteAtion}

  />

}

export default React.memo(Users)

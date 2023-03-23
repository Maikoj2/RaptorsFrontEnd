
import React from 'react'
import { type AppStore } from '@/redux/storer'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Table } from '../../components/Table'
import { NameTables } from '../../models'
import { SubjectManager } from '@/models'
import { useColDataTable } from '../../hooks/useColData'
export interface UsersProps { }


export const addRowSubjectManager = new SubjectManager<any>()
const Users: React.FC<UsersProps> = () => {
  const { Data, status } = useSelector((state: AppStore) => state.apiUsers)
  const { UserColumnDef } = useColDataTable()
  const [Row, setRow] = useState(Data)
 
  return <Table
    data={Row}
    columns={UserColumnDef}
    NameHeaderTable={NameTables.USERS}
    loanding={status !== 'obtained'}
    actions

  />

}

export default React.memo(Users)

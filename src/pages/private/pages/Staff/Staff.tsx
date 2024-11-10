import { useManagerApiDataContext } from '../../Context';
import { memo, useEffect, useState, } from 'react';
import { useColDataTableStuff } from '../../hooks';
import { DataApp, NameTables } from '../../models';
import { Table } from '../../components';
import { StatusData } from '@/models';



const FETCH_LIMIT = 50;
const Staff = () => {
  const { staffState:{Data,status}, getDataStaff } = useManagerApiDataContext()

  const { staffColumnDef } =  useColDataTableStuff();
  
  const isLoading = status !== StatusData.OBTAINED;
  
  
  useEffect(() => {
    if (status === StatusData.NO_OBTAINED) getDataStaff(FETCH_LIMIT, 0);
  }, [getDataStaff])


  return (<Table
    data={Data || {}}
    columns={staffColumnDef}
    NameHeaderTable={NameTables.STAFF}
    loading={isLoading}
    actions={false}
  // UpdateOnDataBAse={UpdateAtion}
  // DeleteOnDataBAse={DeleteAtion}

  />)
};

export default memo(Staff)

import { useManagerApiDataContext } from '../../Context';
import { useEffect, } from 'react';
import { useColDataTableStuff } from '../../hooks';
import { NameTables } from '../../models';
import { Table } from '../../components';
import { StatusData } from '@/models';


const FETCH_LIMIT = 50;
const Staff = () => {
  const { staffState, getDataStaff } = useManagerApiDataContext()

  const {staffColumnDef} =  useColDataTableStuff();

  const isLoading = staffState.status !== StatusData.OBTAINED;
  
  useEffect(() => {
    if (staffState.status === StatusData.NO_OBTAINED) getDataStaff(FETCH_LIMIT, 0);
  }, [staffState.status, getDataStaff])

  return (<Table
    data={staffState.Data || {}}
    columns={staffColumnDef}
    NameHeaderTable={NameTables.STAFF}
    loading={isLoading}
    actions={false}
  // UpdateOnDataBAse={UpdateAtion}
  // DeleteOnDataBAse={DeleteAtion}

  />)
};

export default Staff;

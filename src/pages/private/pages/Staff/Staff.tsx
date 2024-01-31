import { useManagerApiDataContext } from '../../Context';
import { useEffect, useState} from 'react';
import { useColDataTableStuff } from '../../hooks';
import { NameTables } from '../../models';
import { Table } from '../../components';
import { StatusData } from '@/models';



const Staff = () => {
 
	const { staffState, getDataStaff} = useManagerApiDataContext()
	const { staffColumnDef} = useColDataTableStuff()
	const [Row, setRow] = useState((staffState)?staffState.Data:{})
    

	useEffect(() => {
		setRow(!staffState.Data?{}:staffState.Data)
	}, [staffState])
  useEffect(() => {
    if(staffState.status === StatusData.NO_OBTAINED )getDataStaff( 50,0 );
  }, [])
	return (<Table
    data={Row}
    columns={staffColumnDef}
    NameHeaderTable={NameTables.STAFF}
    loading={staffState.status !== StatusData.OBTAINED}
    actions = {false}
    // UpdateOnDataBAse={UpdateAtion}
    // DeleteOnDataBAse={DeleteAtion}

  />)
};

export default Staff;

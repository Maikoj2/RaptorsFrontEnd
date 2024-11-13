import {
  DataGrid,
  GridActionsCellItem,
  GridColDef,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowModes,
  GridRowModesModel,
  GridRowParams,
  MuiEvent,
} from '@mui/x-data-grid'
import { useTheme } from '@mui/material';
import { ToolBar } from './ToollBar'
import { CustomPagination } from './CustomPagination'
import { useState, useEffect, } from 'react';
import { ApiUser } from '../../../../models/apiData.types';
import { BoxTable } from '../../style-components-private'
import { FaSave, FaTimes, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useManagerContext } from '../../Context';
import { AppStore } from '@/redux/storer';
import { useSelector } from 'react-redux';
import { dialogOpenSubject$ } from '@/components/Customdialago/Customdialago';
import { nameModals } from '../../models';
export interface TableProps {
  columns: GridColDef[]
  pageSize?: number
  data: any
  NameHeaderTable: string,
  loading?: boolean,
  actions?: boolean,
  UpdateOnDataBAse?: (newRow: any) => void
  DeleteOnDataBAse?: (id: string) => void
}




const Table = ({
  data ,
  columns,
  NameHeaderTable,
  loading,
  actions = false,
  UpdateOnDataBAse,
  DeleteOnDataBAse
}:TableProps) => {
  const theme: any = useTheme()
  const { Data } = useSelector((state: AppStore) => state.loginUser)
   const { setnameOpenDialog } = useManagerContext();
  const [rows, setRows] = useState(data);
  // const [confirmdeleted, setconfimdeleted] = useState(false);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});
  const { SelectvalueContx } = useManagerContext()

  useEffect(() => {
    setRows(data)
  }, [data])



  const ActionsCol: GridColDef[] = [
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      renderCell: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key={`${id}-save`}
              icon={<FaSave />}
              label="Save"
              onClick={handleSaveClick(id)}

            />,
            <GridActionsCellItem
              key={`${id}-cancel`}
              icon={<FaTimes />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ]
        }
        return [
          <GridActionsCellItem
            key={`${id}-edit`}
            icon={<FaEdit />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<FaTrashAlt />}
            key={`${id}-delete`}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />
        ]
      }

    }
  ]

  const handleRowEditStart = (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>
  ) => {
    event.defaultMuiPrevented = true
  }
  const handleRowEditStop: GridEventListener<'rowEditStop'> = (params, event) => {
    event.defaultMuiPrevented = true;
  };
  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });


  const handleDeleteClick = (id: GridRowId) => () => {
      setnameOpenDialog(nameModals.CONFIRMACION)
    DeleteOnDataBAse!(id as string);
     dialogOpenSubject$.setSubject = true 
      if (Data.user._id !== id) {
        setRows(rows.filter((row: ApiUser) => row._id !== id));
      }
     
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row: ApiUser) => row._id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row: ApiUser) => row._id !== id));
    }
  };

  const processRowUpdate = (newRow: GridRowModel) => {

    
    if (!!SelectvalueContx[newRow._id]) { newRow.role = SelectvalueContx[newRow._id] }
    const updatedRow = { ...newRow, isNew: false };

    UpdateOnDataBAse!(updatedRow);
    setRows(rows.map((row: ApiUser) => (row._id === newRow._id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => { setRowModesModel(newRowModesModel) }

  return (
    <BoxTable height={450} width={'100%'} $background={theme.palette.background.glass}>
      <DataGrid
        rows={rows}
        columns={actions ? columns.concat(ActionsCol) : columns}
        pagination
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        pageSizeOptions={[5]}
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 }
          }
        }}
       
        getRowId={(row) => row._id || Math.random().toString(36).substr(2, 9)}
        sx={{
          '&.MuiDataGrid-root': {
            borderRadius: '2rem'
          },
          '.MuiTablePagination-displayedRows': {
            display: 'none'
          }

        }}
        slots={{
          toolbar: ToolBar,
          pagination: CustomPagination
        }}
        componentsProps={{ toolbar: { NameHeaderTable } }}
      />
    </BoxTable>)
}

export default Table

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
import React from 'react';
import { FaSave, FaTimes, FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useModeModelContext } from '../../Context';




export interface Propsselect {
  value: string
  id?: GridRowId
}

export interface TableProps {
  columns: GridColDef[]
  pageSize?: number
  data: any
  NameHeaderTable: string,
  loanding?: boolean,
  actions?: boolean,
  handleEditClick?: (id: GridRowId) => void
  handleDeleteClick?: (id: GridRowId) => void
  handleCancelClick?: (id: GridRowId) => void
  handleSaveClick?: (id: GridRowId) => void
}




const Table: React.FC<TableProps> = ({
  data,
  columns,
  NameHeaderTable,
  loanding,
  actions = false,
  // handleEditClick,
  // handleCancelClick,
  // handleDeleteClick,
  // handleSaveClick 
}) => {
  const theme: any = useTheme()
  const [rows, setRows] = useState(data);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>({});
  const { SelectvalueContx, setSelectvalueContx}= useModeModelContext()

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
              icon={<FaSave />}
              label="Save"
              onClick={handleSaveClick(id)}

            />,
            <GridActionsCellItem
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
            icon={<FaEdit />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<FaTrashAlt />}
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

  const handleSaveClick = (id: GridRowId) => () => {
    console.log(rowModesModel);
    
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row: ApiUser) => row._id !== id));
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
    newRow.role = SelectvalueContx[newRow._id];
    const updatedRow = { ...newRow, isNew: false }
  /**TODO: enviar los datos al hook que actualiza el usuarioen el la base de dato */
    setRows(rows.map((row: ApiUser) => (row._id === newRow._id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {

    setRowModesModel(newRowModesModel)

  }

  return (
    <BoxTable height={380} width={'100%'} $background={theme.palette.background.glass}>
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
        loading={loanding}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 }
          }
        }}

        getRowId={(row) => row._id}
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
      />;
    </BoxTable>)
}

export default React.memo(Table)

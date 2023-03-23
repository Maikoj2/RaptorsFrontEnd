
import { roles } from '@/models';
import { Box, Typography } from '@mui/material';
import {  GridColDef, GridRenderCellParams, GridRowModes } from '@mui/x-data-grid';

import { CustomSelect } from '../pages/Users/components/FormNewUser/CustomSelect';

import { dateformat } from '../utilities'
import { useModeModelContext } from '../Context';
export const useColDataTable = () => {
  const { SelectvalueContx , setSelectvalueContx}= useModeModelContext()
  const UserColumnDef: GridColDef[] = [
    {
      field: 'img',
      headerName: '',
      flex: 1,
      minWidth: 60,
      maxWidth: 70,
      renderCell: (params: GridRenderCellParams) => <><Box
        component='img'
        alt={'alt'}
        src={params.value}
        height={'40px'}
        width={'40px'}
        borderRadius={'50%'}
        marginLeft={'10px'}
        marginRight={'30px'}
        sx={{ odjectFit: 'cover' }}
      /></>

    },
    {
      field: 'Names',
      headerName: 'Nombres',
      flex: 1,
      editable: true,
      minWidth: 200,
      maxWidth: 230,
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>

    },
    {
      field: 'email',
      headerName: 'email',
      flex: 1,
      minWidth: 200,
      maxWidth: 230,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'role',
      headerName: 'Rol',
      flex: 1,
      editable: true,
      minWidth: 125,
      maxWidth: 180,
      renderEditCell: (params: GridRenderCellParams) =>
        <CustomSelect
          value={SelectvalueContx[params.id]?SelectvalueContx[params.id]:params.value}
          onChange={(e: any) => {
            setSelectvalueContx({...SelectvalueContx,[params.id]: e.target.value})
          }
          }
          name='rol'
          m='0'
          options={[
            { value: roles.ADMIN, label: 'Administrador' },
            { value: roles.USER, label: 'Usuario' },
            { value: roles.TEACHER, label: 'Profesor' },
          ]}
        />


    },
    {
      field: 'createdAt',
      headerName: 'Creado en',
      flex: 1,
      minWidth: 100,
      maxWidth: 180,
      renderCell: (params: GridRenderCellParams) => dateformat(params.value)
    },
    {
      field: 'updatedAt',
      headerName: 'actualizado en',
      minWidth: 100,
      maxWidth: 180,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => dateformat(params.value)
    }
  ]
  return {
    UserColumnDef
  }
}

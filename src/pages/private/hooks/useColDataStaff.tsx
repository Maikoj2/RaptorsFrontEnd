
import { roles, Salary } from '@/models';
import { Box, Typography } from '@mui/material';
import {  GridColDef, GridColumnHeaderParams, GridRenderCellParams, GridRowModes } from '@mui/x-data-grid';

import { CustomSelect } from '../pages/Users/components/FormNewUser/CustomSelect';

import { dateformat } from '../utilities'
import { useManagerContext } from '../Context';
export const useColDataTableStuff = () => {
  const { SelectvalueContx , setSelectvalueContx}= useManagerContext()
  const staffColumnDef: GridColDef[] = [
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
      field: 'Personaid',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Id'}
        </strong>),
      flex: 1,
      editable: true,
      minWidth: 100,
      maxWidth: 130,
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>

    },
    {
      field: 'Names',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Nombres '}
        </strong>),
      flex: 1,
      editable: true,
      minWidth: 100,
      maxWidth: 130,
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>

    },
    {
      field: 'SureNames',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Apellidos'}
        </strong>),
      flex: 1,
      editable: true,
      minWidth: 130,
      maxWidth: 150,
      headerAlign: 'left',
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>

    },
    {
      field: 'email',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Email'}
        </strong>),
      flex: 1,
      minWidth: 150,
      maxWidth: 180,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'Phone',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Teléfono'}
        </strong>),
      flex: 1,
      minWidth: 100,
      maxWidth: 120,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'Gender',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Sexo'}
        </strong>),
      flex: 1,
      editable: true,
      maxWidth: 55,
      renderEditCell: (params: GridRenderCellParams) =>
        <CustomSelect
          value={SelectvalueContx[params.id]?SelectvalueContx[params.id]:params.value}
          onChange={(e: any) => {
            setSelectvalueContx({...SelectvalueContx,[params.id]: e.target.value})
          }
          }
          name='gender'
          m='0'
          options={[
            { value: 'M', label: 'Masculino' },
            { value: 'F', label: 'Femenino' },
            { value: 'N/N', label: 'Otro' },
          ]}
        />


    },
    {
      field: 'Address',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Direccion'}
        </strong>),
      flex: 1,
      minWidth: 100,
      maxWidth: 130,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'neighborhood',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Barrio'}
        </strong>),
      flex: 1,
      minWidth: 80,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'occupation',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Ocupacion'}
        </strong>),
      flex: 1,
      minWidth: 80,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'profession',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Profesion'}
        </strong>),
      flex: 1,
      minWidth: 80,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'TypeSalary',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Tipo salario'}
        </strong>),
      flex: 1,
      maxWidth: 100,
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
            { value: Salary.BIWEEKLY, label: 'Quincenal' },
            { value: Salary.DAILY, label: 'Diario' },
            { value: Salary.MONTHLY, label: 'Mensual' },
            { value: Salary.WEEKLY, label: 'Semanal' },
            { value: Salary.PERHOUR, label: 'por hora' },
            
          ]}
        />
    },
    {
      field: 'BaseSalary',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Salario'}
        </strong>),
      flex: 1,
      maxWidth: 110,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'DateofBirth',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Fecha Nacimineto'}
        </strong>),
      flex: 1,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams) => dateformat(params.value)
    },
    {
      field: 'DepartamentBirth',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Dapart Naci.'}
        </strong>),
      flex: 1,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'MunicipeBirth',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Muni. Naci'}
        </strong>),
      flex: 1,
      maxWidth:  100,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'role',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Role'}
        </strong>),
      flex: 1,
      editable: true,
      maxWidth: 120,
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
            { value: roles.USER, label: 'Deportista' },
            { value: roles.STAFF, label: 'Empleado' },
          ]}
        />
    },
    {
      field: 'useremail',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Creado por'}
        </strong>),
      flex: 1,
      maxWidth:  130,
      renderCell: (params: GridRenderCellParams) => <Typography fontSize={'12px'} >{params.value}</Typography>
    },
    {
      field: 'createdAt',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Creado el'}
        </strong>),
      flex: 1,
   
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams) => dateformat(params.value)
    },
    {
      field: 'updatedAt',
      renderHeader: (params: GridColumnHeaderParams) => (
        <strong style={{
          fontWeight: 'bold',
        }}>
          {'Actualizado el'}
        </strong>),
  
      maxWidth: 100,
      flex: 1,
      renderCell: (params: GridRenderCellParams) => dateformat(params.value)
    }
  ]
  return {
   staffColumnDef,
  }
}

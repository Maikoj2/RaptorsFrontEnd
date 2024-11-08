import { ApiRoutes } from '@/models';
import { useReducer } from 'react';
import { BaseSalaryReducer } from '../Context';
import { BaseSalaryDataContextEmptyState, BaseSalaryDataContext } from '../models/apiSalaryBase.types';
import { BaseSalaryActionsReducers } from '../models/typesActionsReducer';
import { AxiosGetAllItems } from '../services/AxiosDatabase.service';
import { allBAseSalaryAdacter } from '../pages/Staff/adapters/adacter.BaseSalary';




export const useBaseSalaryDataManager = () => {
    const [state, dispatch] = useReducer( BaseSalaryReducer, BaseSalaryDataContextEmptyState );

    const loadBaseSalary = ({ limit = 50, from = 0 }) => {
        dispatch({
                type: BaseSalaryActionsReducers.CHECKING,
                payload: {
                    StaffContext: BaseSalaryDataContextEmptyState
                }
            })
            AxiosGetAllItems(ApiRoutes.API_BASE_SALARY, { params: { limit, from } }, allBAseSalaryAdacter)
            .then(( DataFromDatabase: BaseSalaryDataContext)=> {
                    dispatch({
                        type: BaseSalaryActionsReducers.GET_ALL_BASE_SALARY,
                        payload: {
                            StaffContext: DataFromDatabase
                        }
                    })
                });       
    }

    return {
        BaseSalaryState:state,
        loadBaseSalary,

    }
}
import { ApiRoutes } from '@/models';
import { useReducer } from 'react';
import { StaffReducer } from '../Context';
import { staffDataContextEmptyState } from '../models';
import { StaffActionReducers } from '../models/typesActionsReducer';

import { AxiosGetAllItems, AxiosSetItem } from '../services/AxiosDatabase.service';
import { SaveStaffAdapter, allStaffAdapter } from '../pages/Staff/adapters';


export const useStaffReducer = () => {

    const [state, dispatch] = useReducer(StaffReducer, staffDataContextEmptyState);

    const loadStaff = ({ limit = 50, from = 0 }) => {
        dispatch({
                type: StaffActionReducers.CHECKING_STAFF,
                payload: {
                    StaffContext: staffDataContextEmptyState
                }
            })
            AxiosGetAllItems(ApiRoutes.API_STAFF, { params: { limit, from } }, allStaffAdapter )
            .then(( DataFromDatabase )=> {
                    dispatch({
                        type: StaffActionReducers.GET_ALL_STAFF,
                        payload: {
                            StaffContext: DataFromDatabase
                        }
                    })
                });       
    }
    const SaveStaff = (data: any) => {
        dispatch({
                type: StaffActionReducers.CHECKING_STAFF,
                payload: {
                    StaffContext: staffDataContextEmptyState
                }
            })
            AxiosSetItem(ApiRoutes.API_STAFF, data,  SaveStaffAdapter )
            .then(( DataFromDatabase )=> {
                    dispatch({
                        type: StaffActionReducers.SET_STAFF,
                        payload: {
                            StaffContext: DataFromDatabase
                        }
                    })
                });       
    }

    return {
        staffState:state,
        loadStaff,
        SaveStaff,

    }
}
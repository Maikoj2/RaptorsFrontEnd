import { StatusData } from "@/models";
import { StaffActions, StaffActionReducers } from "../../models/typesActionsReducer";
import { staffDataContext } from "../../models";



export const StaffReducer = (state: staffDataContext, action: StaffActions): any => {

    switch (action.type) {
        case StaffActionReducers.GET_ALL_STAFF:
            return {
                Data: action.payload.StaffContext.Data,
                status: StatusData.OBTAINED,
                message: action.payload.StaffContext.message,
                total: action.payload.StaffContext.total,
            }
        case StaffActionReducers.SET_STAFF:
            return {
                Data: [...state.Data, action.payload.StaffContext.Data[0]],
                total: state.total + 1,
                message: action.payload.StaffContext.message,
                status: StatusData.OBTAINED,
              }
        case StaffActionReducers.SET_STAFF:
            return {
            };
        case StaffActionReducers.CHECKING_STAFF:
            return {
                ...state,
                status: StatusData.CHECKING,
            };

        default:
            return state;
    }
}
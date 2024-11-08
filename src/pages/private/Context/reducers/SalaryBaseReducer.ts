import { StatusData } from "@/models";
import { BaseSalaryDataContext } from "../../models/apiSalaryBase.types";
import { BaseSalaryActionsReducers, BaseSalaryActions } from "../../models/typesActionsReducer";



export const BaseSalaryReducer = (state: BaseSalaryDataContext, action: BaseSalaryActions): any => {

    switch (action.type) {
        case BaseSalaryActionsReducers.GET_ALL_BASE_SALARY:
            return {
                Data: action.payload.StaffContext.Data,
                status: StatusData.OBTAINED,
                message: action.payload.StaffContext.message,
                total: action.payload.StaffContext.total,
            }
        case BaseSalaryActionsReducers.GET_ALL_BASE_SALARY:
            return {
            };
        case BaseSalaryActionsReducers.CHECKING:
            return {
                ...state,
                status: StatusData.CHECKING,
            };

        default:
            return state;
    }
}
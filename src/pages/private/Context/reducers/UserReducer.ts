import { StatusData } from "@/models";
import { StaffActionReducers, UsersActionReducers, UsersActions, UsersData } from "../../models";
interface Action {
    type: string;
    payload: any;
}
export const UserReducer = (state: UsersData, action: Action): any => {

    switch (action.type) {
        case UsersActionReducers.GET_ALL_USERS:
            return {
                Data: action.payload.UserContext.Data,
                status: StatusData.OBTAINED,
                message: action.payload.UserContext.message,
                total: action.payload.UserContext.total,
            }
        case UsersActionReducers.SET_USER:              
              const newUser = action.payload.UserContext.Data;
              return {
                ...state,
                Data: [...state.Data, newUser],
                total: state.total + 1,
                message: action.payload.UserContext.message,
                status: StatusData.OBTAINED,
            }
        case StaffActionReducers.CHECKING_USER:
            return {
                ...state,
                status: StatusData.CHECKING,
            };
        case StaffActionReducers.CLEAR_MESSAGE:
            return {
                ...state,
                message: action.payload,
            };

        default:
            return state;
    }
}
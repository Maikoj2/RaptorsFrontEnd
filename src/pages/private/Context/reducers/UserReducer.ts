import { StatusData } from "@/models";
import { StaffActionReducers, UsersActionReducers, UsersActions, UsersData } from "../../models";

export const UserReducer = (state: UsersData, action: UsersActions): any => {

    switch (action.type) {
        case UsersActionReducers.GET_ALL_USERS:
            return {
                Data: action.payload.UserContext.Data,
                status: StatusData.OBTAINED,
                message: action.payload.UserContext.message,
                total: action.payload.UserContext.total,
            }
        case UsersActionReducers.SET_USER:
            return {
                Data: [...state.Data, action.payload.UserContext.Data[0]],
                total: state.total + 1,
                message: action.payload.UserContext.message,
                status: StatusData.OBTAINED,
              }
        case StaffActionReducers.SET_USER:
            return {
            };
        case StaffActionReducers.CHECKING_USER:
            return {
                ...state,
                status: StatusData.CHECKING,
            };

        default:
            return state;
    }
}
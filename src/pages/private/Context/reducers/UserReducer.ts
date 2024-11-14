import { ApiUser, StatusData } from "@/models";
import { StaffActionReducers, UsersActionReducers, UsersActions, UsersData } from "../../models";
import { ApiUsers } from '../../models/apiUsers.types';
import { string } from "zod";
interface UserContextPayload {
    UserContext: {
        Data: ApiUser;  // Specify the exact type of User objects here
        message: string;
        total: number;
    };
}
export interface ActionUserReducer {
    type: string;
    payload: UserContextPayload | string;
}
export const UserReducer = (state: UsersData, { type, payload }: ActionUserReducer): any => {

    switch (type) {
        case UsersActionReducers.GET_ALL_USERS:
            if (typeof payload != 'string') {
                return {
                    Data: payload.UserContext.Data,
                    status: StatusData.OBTAINED,
                    message: payload.UserContext.message,
                    total: payload.UserContext.total,
                }
            }

        case UsersActionReducers.SET_USER:
            if (typeof payload != 'string') {
                const newUser = payload.UserContext.Data;
                return {
                    ...state,
                    Data: [...state.Data, newUser],
                    total: state.total + 1,
                    message: payload.UserContext.message,
                    status: StatusData.OBTAINED,
                }
            }


        case UsersActionReducers.UPDATE_USER:
            if (typeof payload != 'string') {
                return {
                    Data: state.Data.map((row: ApiUser) => {
                        return (row._id === payload.UserContext.Data._id) ?
                            payload.UserContext.Data : row;
                    }),
                    status: StatusData.OBTAINED,
                    message: payload.UserContext.message
                };
            }
        case UsersActionReducers.DELETE_USER:
            if (typeof payload != 'string') {
                return {
                    Data: state.Data.filter((row: ApiUser) => {
                        return (row._id !== payload.UserContext.Data._id)         
                    }),
                    status: StatusData.OBTAINED,
                    message: payload.UserContext.message,
                    total: state.total - 1
                };
            }
        case UsersActionReducers.CLEAR_MESSAGE:
            return {
                ...state,
                message: payload,
            }

        case UsersActionReducers.CHECKING_USER:

        case UsersActionReducers.CHANGE_STATUS:
            return {
                ...state,
                status: StatusData.CHECKING,
            }
            return {
                ...state,
                status: payload,
            };

        default:
            return state;
    }
}
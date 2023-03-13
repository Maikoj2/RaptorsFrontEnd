import { ApiUserLogin, LocalStorageType, StatusLogin, UserLoginEmptystate, UserOnLogin } from "@/models";
import { clearLocalStorage, setLocalStorage, getLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';



interface Action {
    payload: ApiUserLogin
}


export const authSlice = createSlice({
    name: "user",
    initialState: UserLoginEmptystate,
    reducers: {

        login: (state: ApiUserLogin, { payload }: Action) => {
            state.status = StatusLogin.AUTENTICATED;
            state.Data.user = payload.Data.user;
            state.Data.token = payload.Data.token;
            if (state.remerberMe) {
                setLocalStorage(LocalStorageType.TOKEN, payload.Data.token);
                setLocalStorage(LocalStorageType.TOKEN_DATE_CREATED, new Date().getTime());
            }
        },
        logOut: (state: ApiUserLogin, action: any) => {
            state.status = StatusLogin.NOT_AUTENTICATED;
            state.message = action.payload;
            state.Data.user = UserLoginEmptystate.Data.user;
            state.Data.token = UserLoginEmptystate.Data.token;
            clearLocalStorage(LocalStorageType.TOKEN);
            clearLocalStorage(LocalStorageType.TOKEN_DATE_CREATED);

        },
        chackingCredentials: (state: ApiUserLogin) => {
            state.status = StatusLogin.CHEKING
        },
        chackingRemenberme: (state: ApiUserLogin, action: any) => {
            state.remerberMe = action.payload
        }
        ,
        clearErrorMessage: (state: ApiUserLogin, action: any) => {
            state.message = action.payload;
        }

    },

});

export const { login, logOut, chackingCredentials, clearErrorMessage, chackingRemenberme } = authSlice.actions;
export default authSlice.reducer;
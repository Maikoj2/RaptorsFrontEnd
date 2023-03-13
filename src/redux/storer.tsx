import { configureStore } from '@reduxjs/toolkit';
import { authSlice} from '@/redux/slices'
import { ApiUserLogin } from '../models/authUser.types';
import { themeMode } from '@/pages/private/models';
import  GlobalSlice  from '@/redux/slices/theme.slice';



export interface AppStore {
    user: ApiUserLogin,
    theme: themeMode,
}


export default configureStore<AppStore>({

    reducer: {
        user: authSlice,
        theme: GlobalSlice,
     
    }
})
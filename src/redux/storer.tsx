import { configureStore } from '@reduxjs/toolkit';
import { authSlice} from '@/redux/slices'
import { ApiUserLogin } from '../models/authUser.types';


export interface AppStore {
    user: ApiUserLogin;
}


export default configureStore<AppStore>({

    reducer: {
        user: authSlice
    }
})
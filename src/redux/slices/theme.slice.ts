import { LocalStorageType } from '@/models';
import { setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';
import { themeInicialState, themeMode, themeModes } from '../../pages/private/models';
import { getLocalStorage } from '../../utilities/localStorage.utilite';

const getInitialThemeMode = () => {
     if (getLocalStorage(LocalStorageType.THEME))
     themeInicialState.Mode = getLocalStorage(LocalStorageType.THEME)
     return themeInicialState;
}

export const GlobalSlice = createSlice({
    name: 'global',
    initialState: getInitialThemeMode(),
    reducers: {
        SetMode:(state: themeMode) => {
            state.Mode = state.Mode === themeModes.LIGHT ? themeModes.DARK : themeModes.LIGHT;
            setLocalStorage(LocalStorageType.THEME,state.Mode);
        }
    }
})

export const { SetMode } =  GlobalSlice.actions;

export default GlobalSlice.reducer 

import { createSlice } from '@reduxjs/toolkit'
export interface DialogopenAt {
  name: string
}
const dialogoInitialState: DialogopenAt = {
  name: ''
}
export const PlaceDialogOpen = createSlice({
  name: 'DialogOpen',
  initialState: dialogoInitialState,
  reducers: {
    SetOpenPlace: (state: DialogopenAt, action) => {
      state.name = action.payload
    }
  }
})

export const { SetOpenPlace } = PlaceDialogOpen.actions

export default PlaceDialogOpen.reducer

import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"
export interface UxState {
  mobileNavEnabled: boolean
}
const initialState: UxState = {
  mobileNavEnabled: false,
}

export const uxSlice = createSlice({
  name: "ux",
  initialState,
  reducers: {
    toggleMobileNav: (state, action: PayloadAction<boolean>) => {
      state.mobileNavEnabled = action.payload
    },
  },
})

export const { toggleMobileNav } = uxSlice.actions
export const mobileNavEnabled = (state: RootState) => state.ux.mobileNavEnabled
export default uxSlice.reducer

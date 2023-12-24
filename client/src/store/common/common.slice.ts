import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TCommonSlice } from './common.type'
import { RootState } from '../rootStore'

const initialCommonState: TCommonSlice = {
  isMobile: false,
}
export const commonStore = createSlice({
  name: 'common',
  initialState: initialCommonState,
  reducers: {
    setIsMobile: (state, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setIsMobile } = commonStore.actions

export const selectIsMobile = (state: RootState) => {
  return state.common.isMobile
}
export default commonStore.reducer

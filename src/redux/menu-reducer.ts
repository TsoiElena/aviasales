import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { menuActionTypes, MenuState } from '../types/types';

const initialState: MenuState = {
  sort: menuActionTypes.CHEAP,
};

const menuSlice = createSlice({
  name: 'menuComponent',
  initialState,
  reducers: {
    cheap(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    fast(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
    opt(state, action: PayloadAction<string>) {
      state.sort = action.payload;
    },
  },
});

export const { cheap, fast, opt } = menuSlice.actions;

export default menuSlice.reducer;

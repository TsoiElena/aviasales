import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MenuState {
  sort: string;
}

export enum menuActionTypes {
  CHIP = 'chip',
  FAST = 'fast',
  OPT = 'optimal',
}

const initialState: MenuState = {
  sort: menuActionTypes.CHIP,
};

const menuSlice = createSlice({
  name: 'menuComponent',
  initialState,
  reducers: {
    chip(state, action: PayloadAction<string>) {
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

export const { chip, fast, opt } = menuSlice.actions;

export default menuSlice.reducer;

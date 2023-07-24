import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { filtersState } from '../types/types';

const initialState: filtersState = {
  all: false,
  withoutTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
};

const filtersSlice = createSlice({
  name: 'filterComponent',
  initialState,
  reducers: {
    allAC(state, action: PayloadAction<boolean>) {
      state.all = action.payload;
      state.withoutTransfer = action.payload;
      state.oneTransfer = action.payload;
      state.twoTransfer = action.payload;
      state.threeTransfer = action.payload;
    },
    withoutAC(state, action: PayloadAction<boolean>) {
      state.withoutTransfer = action.payload;
      if (!action.payload && state.all) state.all = action.payload;
      if (action.payload && state.oneTransfer && state.twoTransfer && state.threeTransfer && !state.all)
        state.all = action.payload;
    },
    oneAC(state, action: PayloadAction<boolean>) {
      state.oneTransfer = action.payload;
      if (!action.payload && state.all) state.all = action.payload;
      if (action.payload && state.withoutTransfer && state.twoTransfer && state.threeTransfer && !state.all)
        state.all = action.payload;
    },
    twoAC(state, action: PayloadAction<boolean>) {
      state.twoTransfer = action.payload;
      if (!action.payload && state.all) state.all = action.payload;
      if (action.payload && state.oneTransfer && state.withoutTransfer && state.threeTransfer && !state.all)
        state.all = action.payload;
    },
    threeAC(state, action: PayloadAction<boolean>) {
      state.threeTransfer = action.payload;
      if (!action.payload && state.all) state.all = action.payload;
      if (action.payload && state.oneTransfer && state.twoTransfer && state.withoutTransfer && !state.all)
        state.all = action.payload;
    },
  },
});

export const { allAC, withoutAC, oneAC, twoAC, threeAC } = filtersSlice.actions;

export default filtersSlice.reducer;

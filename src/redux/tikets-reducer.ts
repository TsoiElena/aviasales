import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { tiketsState, resType, filterAC, tiketType, menuActionTypes } from '../types/types';
import {
  cheapFilter,
  fastFilter,
  optFilter,
  withoutTransferFilter,
  oneTransferFilter,
  twoTransferFilter,
  threeTransferFilter,
  deleteDuplicate,
} from '../heplers';

const initialState: tiketsState = {
  loading: false,
  tikets: [],
  error: 0,
  idError: null,
  searchId: null,
  stop: false,
  sortTikets: [],
  showTikets: [],
  totalPage: 0,
  page: 0,
};

export const searcgIdFetch = createAsyncThunk<any, undefined, { rejectValue: string }>(
  'tiketsComponent/searcgIdFetch',
  async function (_, { rejectWithValue }) {
    let res = await fetch('https://aviasales-test-api.kata.academy/search');
    if (!res.ok) return rejectWithValue('something went wrong');
    res = await res.json();
    return res;
  }
);

export const getTikets = createAsyncThunk<resType, string, { rejectValue: string }>(
  'tiketsComponent/getTikets',
  async function (searhgId, { rejectWithValue }) {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searhgId}`);
    if (!res.ok) return rejectWithValue('something went wrong');
    return (await res.json()) as resType;
  }
);

const tiketsSlice = createSlice({
  name: 'tiketsComponent',
  initialState,
  reducers: {
    cheapFilterAll(state, action: PayloadAction) {
      const arr = JSON.parse(JSON.stringify(state.tikets));
      state.sortTikets = cheapFilter(arr);
      state.totalPage = Math.ceil(state.sortTikets.length / 5);
      state.page = 1;
      state.showTikets = state.sortTikets.slice(0, 5);
    },
    fastFilterALL(state, action: PayloadAction) {
      const arr = JSON.parse(JSON.stringify(state.tikets));
      state.sortTikets = fastFilter(arr);
      state.totalPage = Math.ceil(state.sortTikets.length / 5);
      state.page = 1;
      state.showTikets = state.sortTikets.slice(0, 5);
    },
    optimalFilterAll(state, action: PayloadAction) {
      const arr = JSON.parse(JSON.stringify(state.tikets));
      state.sortTikets = optFilter(arr);
      state.totalPage = Math.ceil(state.sortTikets.length / 5);
      state.page = 1;
      state.showTikets = state.sortTikets.slice(0, 5);
    },
    clear(state, action: PayloadAction) {
      state.showTikets = [];
      state.page = 0;
    },
    changePage(state, action: PayloadAction<number>) {
      state.showTikets = state.sortTikets.slice(0, action.payload * 5);
      state.page = action.payload;
    },
    filterChange(state, action: PayloadAction<filterAC>) {
      const arr = JSON.parse(JSON.stringify(state.tikets));
      let res: Array<tiketType> = [];

      if (action.payload.withoutTransfer) res.push(...withoutTransferFilter(arr));
      if (action.payload.oneTransfer) res.push(...oneTransferFilter(arr));
      if (action.payload.twoTransfer) res.push(...twoTransferFilter(arr));
      if (action.payload.threeTransfer) res.push(...threeTransferFilter(arr));

      res = deleteDuplicate(res);

      if (action.payload.sort === menuActionTypes.CHEAP) state.sortTikets = cheapFilter(res);
      if (action.payload.sort === menuActionTypes.FAST) state.sortTikets = fastFilter(res);
      if (action.payload.sort === menuActionTypes.OPT) state.sortTikets = optFilter(res);

      state.totalPage = Math.ceil(state.sortTikets.length / 5);
      state.page = 1;
      state.showTikets = state.sortTikets.slice(0, 5);
    },
    load(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searcgIdFetch.pending, (state) => {
        state.idError = null;
      })
      .addCase(searcgIdFetch.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId;
      })
      .addCase(searcgIdFetch.rejected, (state, action) => {
        state.idError = 'something went wrong';
      })
      .addCase(getTikets.fulfilled, (state, action) => {
        const arr = action.payload.tickets.map((tiket) => {
          return { ...tiket, id: uuidv4() };
        });
        if (state.tikets.length < 2000) state.tikets = state.tikets.concat(...arr);
        state.stop = action.payload.stop;
        state.error = 0;
      })
      .addCase(getTikets.rejected, (state) => {
        state.error = state.error + 1;
      });
  },
});

export const { cheapFilterAll, fastFilterALL, optimalFilterAll, clear, changePage, filterChange, load } =
  tiketsSlice.actions;

export default tiketsSlice.reducer;

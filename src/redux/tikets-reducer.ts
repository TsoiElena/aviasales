import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export type tiketType = {
  price: number;
  carrier: string;
  segments: [
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    },
    {
      origin: string;
      destination: string;
      date: string;
      stops: string[];
      duration: number;
    }
  ];
};

export interface tiketsState {
  loading: boolean;
  tikets: Array<tiketType>;
  error: number;
  idError: null | string;
  searchId: null | string;
  stop: null | boolean;
}

const initialState: tiketsState = {
  loading: false,
  tikets: [],
  error: 0,
  idError: null,
  searchId: null,
  stop: false,
};

type resType = { tickets: Array<tiketType>; stop: boolean };

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
  reducers: {},
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
      .addCase(getTikets.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTikets.fulfilled, (state, action) => {
        state.tikets = state.tikets.concat(...action.payload.tickets);
        state.stop = action.payload.stop;
        state.loading = false;
        state.error = 0;
      })
      .addCase(getTikets.rejected, (state) => {
        state.error = state.error + 1;
      });
  },
});

//export const {} = tiketsSlice.actions;

export default tiketsSlice.reducer;

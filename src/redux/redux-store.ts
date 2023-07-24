import { configureStore } from '@reduxjs/toolkit';

import menuReducer from './menu-reducer';
import filtersReducer from './filters-reducer';
import tiketsReducer from './tikets-reducer';

const store = configureStore({
  reducer: {
    menuComponent: menuReducer,
    filterComponent: filtersReducer,
    tiketsComponent: tiketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

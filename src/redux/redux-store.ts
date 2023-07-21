import { configureStore } from '@reduxjs/toolkit';

import menuReducer from './menu-reducer';
//import filtersReducer from './filters-reducer';

const store = configureStore({
  reducer: {
    menuComponent: menuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

//filterComponent: filtersReducer,

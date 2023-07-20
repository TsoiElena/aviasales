import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import menuReducer from './menu-reducer';
import filtersReducer from './filters-reducer';

const reducers = combineReducers({
  menuComponent: menuReducer,
  filterComponent: filtersReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

export default store;

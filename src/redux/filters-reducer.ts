import { Dispatch } from 'redux';

import { filtersActionTypes, filtersState, filtersAction } from '../types/reducersTypes';

import { AppDispatch } from './redux-store';

const initialState: filtersState = {
  all: false,
  withoutTransfer: true,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
};

const filtersReducer = (state = initialState, action: filtersAction): filtersState => {
  switch (action.type) {
    case filtersActionTypes.ALL:
      return { ...state, all: action.value };

    case filtersActionTypes.WIHTHOUT:
      return { ...state, withoutTransfer: action.value };

    case filtersActionTypes.ONE:
      return { ...state, oneTransfer: action.value };

    case filtersActionTypes.TWO:
      return { ...state, twoTransfer: action.value };

    case filtersActionTypes.THREE:
      return { ...state, threeTransfer: action.value };

    default:
      return state;
  }
};

const all = (value: boolean) => ({ type: filtersActionTypes.ALL, value });
const withoutTransfer = (value: boolean) => ({ type: filtersActionTypes.WIHTHOUT, value });
const oneTransfer = (value: boolean) => ({ type: filtersActionTypes.ONE, value });
const twoTransfer = (value: boolean) => ({ type: filtersActionTypes.TWO, value });
const threeTransfer = (value: boolean) => ({ type: filtersActionTypes.THREE, value });

export const allAC = (value: boolean) => {
  console.log(5);
  return (dispach: Dispatch<filtersAction>) => {
    dispach(all(value));
    console.log(1);
  };
};

export const withoutTransferAC = (value: boolean) => (dispach: AppDispatch) => {
  dispach(withoutTransfer(value));
};

export const oneTransferAC = (value: boolean) => (dispach: AppDispatch) => {
  dispach(oneTransfer(value));
};

export const twoTransferAC = (value: boolean) => (dispach: AppDispatch) => {
  dispach(twoTransfer(value));
};

export const threeTransferAC = (value: boolean) => (dispach: AppDispatch) => {
  dispach(threeTransfer(value));
};

export default filtersReducer;

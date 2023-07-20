import { MenuState, menuAction, menuActionTypes } from '../types/reducersTypes';

const initialState: MenuState = {
  sort: 'chip',
};

const menuReducer = (state = initialState, action: menuAction): MenuState => {
  switch (action.type) {
    case menuActionTypes.CHIP:
      return { sort: action.value };

    case menuActionTypes.FAST:
      return { sort: action.value };

    case menuActionTypes.OPT:
      return { sort: action.value };

    default:
      return state;
  }
};

export const chip = (value: string) => ({ type: menuActionTypes.CHIP, value });
export const fast = (value: string) => ({ type: menuActionTypes.FAST, value });
export const opt = (value: string) => ({ type: menuActionTypes.OPT, value });

export default menuReducer;

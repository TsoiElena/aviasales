export enum filtersActionTypes {
  ALL = 'all',
  WIHTHOUT = 'WIHTHOUT',
  ONE = 'ONE',
  TWO = 'TWO',
  THREE = 'THREE',
}

export interface filtersState {
  all: boolean;
  withoutTransfer: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

export interface allAction {
  type: filtersActionTypes.ALL;
  value: boolean;
}

export interface withoutTransferAction {
  type: filtersActionTypes.WIHTHOUT;
  value: boolean;
}

export interface oneTransferAction {
  type: filtersActionTypes.ONE;
  value: boolean;
}

export interface twoTransferAction {
  type: filtersActionTypes.TWO;
  value: boolean;
}

export interface threeTransferAction {
  type: filtersActionTypes.THREE;
  value: boolean;
}

export type filtersAction =
  | allAction
  | withoutTransferAction
  | twoTransferAction
  | threeTransferAction
  | oneTransferAction;

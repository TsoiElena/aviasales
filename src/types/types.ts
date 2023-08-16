export interface filtersState {
  all: boolean;
  withoutTransfer: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
}

export interface MenuState {
  sort: string;
}

export enum menuActionTypes {
  CHEAP = 'cheap',
  FAST = 'fast',
  OPT = 'optimal',
}

export type resType = { tickets: Array<tiketType>; stop: boolean };

export type tiketType = {
  id: string;
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
  sortTikets: Array<tiketType>;
  showTikets: Array<tiketType>;
  totalPage: number;
  page: number;
}

export interface filterAC {
  withoutTransfer: boolean;
  oneTransfer: boolean;
  twoTransfer: boolean;
  threeTransfer: boolean;
  sort: string;
}

import { uniqWith, isEqual } from 'lodash';

import { tiketType } from './types/types';

export const cheapFilter = (arr: Array<tiketType>) => {
  return arr.sort((a: tiketType, b: tiketType) => {
    return a.price - b.price;
  });
};

export const fastFilter = (arr: Array<tiketType>) => {
  return arr.sort((a: tiketType, b: tiketType) => {
    return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
  });
};

export const optFilter = (arr: Array<tiketType>) => {
  const fastArr = fastFilter(arr);
  const resArr = cheapFilter(fastArr);
  return resArr;
};

export const withoutTransferFilter = (arr: Array<tiketType>) => {
  return arr.filter((item) => item.segments[0].stops.length === 0 && item.segments[1].stops.length === 0);
};

export const oneTransferFilter = (arr: Array<tiketType>) => {
  return arr.filter((item) => item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1);
};

export const twoTransferFilter = (arr: Array<tiketType>) => {
  return arr.filter((item) => item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2);
};

export const threeTransferFilter = (arr: Array<tiketType>) => {
  return arr.filter((item) => item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3);
};

export const deleteDuplicate = (arr: Array<tiketType>) => {
  return uniqWith(arr, isEqual);
};

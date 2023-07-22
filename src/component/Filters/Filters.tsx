import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { allAC, withoutAC, oneAC, twoAC, threeAC } from '../../redux/filters-reducer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Filters.module.scss';

const Filters = () => {
  const { all, oneTransfer, twoTransfer, threeTransfer, withoutTransfer } = useAppSelector(
    (state) => state.filterComponent
  );
  const dispatch = useAppDispatch();
  const handleChange = (s: string) => {
    if (s === 'a') all ? dispatch(allAC(false)) : dispatch(allAC(true));
    if (s === 'w') withoutTransfer ? dispatch(withoutAC(false)) : dispatch(withoutAC(true));
    if (s === 'o') oneTransfer ? dispatch(oneAC(false)) : dispatch(oneAC(true));
    if (s === 't') twoTransfer ? dispatch(twoAC(false)) : dispatch(twoAC(true));
    if (s === 'th') threeTransfer ? dispatch(threeAC(false)) : dispatch(threeAC(true));
  };
  return (
    <div className={s.filters}>
      <div className={s['filters-title']}>Количество пересадок</div>
      <label className={s.container}>
        <span className={s['filter-name']}>Все</span>
        <input type="checkbox" checked={all} onChange={() => handleChange('a')} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>Без пересадок</span>
        <input type="checkbox" checked={withoutTransfer} onChange={() => handleChange('w')} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>1 пересадка</span>
        <input type="checkbox" checked={oneTransfer} onChange={() => handleChange('o')} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>2 пересадка</span>
        <input type="checkbox" checked={twoTransfer} onChange={() => handleChange('t')} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>3 пересадка</span>
        <input type="checkbox" checked={threeTransfer} onChange={() => handleChange('th')} />
        <span className={s.checkmark}></span>
      </label>
    </div>
  );
};

export default Filters;

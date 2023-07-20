import React from 'react';

import { useTypeSelector } from '../../hooks/useTypeSelector';
import { allAC, oneTransferAC, threeTransferAC, twoTransferAC, withoutTransferAC } from '../../redux/filters-reducer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Filters.module.scss';

const Filters = () => {
  const { all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = useTypeSelector(
    (state) => state.filterComponent
  );
  const handleAll = () => {
    console.log(2);
    all ? allAC(false) : allAC(true);
  };

  const handleWithout = () => {
    withoutTransfer ? withoutTransferAC(false) : withoutTransferAC(true);
  };

  const handleOne = () => {
    oneTransfer ? oneTransferAC(false) : oneTransferAC(true);
  };

  const handleTwo = () => {
    twoTransfer ? twoTransferAC(false) : twoTransferAC(true);
  };

  const handleThree = () => {
    threeTransfer ? threeTransferAC(false) : threeTransferAC(true);
  };

  console.log(all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer);

  return (
    <div className={s.filters}>
      <div className={s['filters-title']}>Количество пересадок</div>
      <label className={s.container}>
        <span className={s['filter-name']}>Все</span>
        <input type="checkbox" checked={all} onChange={handleAll} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>Без пересадок</span>
        <input type="checkbox" checked={withoutTransfer} onChange={handleWithout} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>1 пересадка</span>
        <input type="checkbox" checked={oneTransfer} onChange={handleOne} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>2 пересадка</span>
        <input type="checkbox" checked={twoTransfer} onChange={handleTwo} />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>3 пересадка</span>
        <input type="checkbox" checked={threeTransfer} onChange={handleThree} />
        <span className={s.checkmark}></span>
      </label>
    </div>
  );
};

export default Filters;

import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Filters.module.scss';

const Filters = () => {
  return (
    <div className={s.filters}>
      <div className={s['filters-title']}>Количество пересадок</div>
      <label className={s.container}>
        <span className={s['filter-name']}>Все</span>
        <input type="checkbox" />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>Без пересадок</span>
        <input type="checkbox" />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>1 пересадка</span>
        <input type="checkbox" />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>2 пересадка</span>
        <input type="checkbox" />
        <span className={s.checkmark}></span>
      </label>
      <label className={s.container}>
        <span className={s['filter-name']}>3 пересадка</span>
        <input type="checkbox" />
        <span className={s.checkmark}></span>
      </label>
    </div>
  );
};

export default Filters;

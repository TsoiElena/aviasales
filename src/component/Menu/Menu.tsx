import React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import classNames from 'classnames';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Menu.module.scss';

const Menu = () => {
  const btnActiveClass = classNames([s['menu-button'], s['menu-button--active']]);
  return (
    <div className={s.menu}>
      <button className={btnActiveClass}>Самый дешевый</button>
      <button className={s['menu-button']}>Самый быстрый</button>
      <button className={s['menu-button']}>Оптимальный</button>
    </div>
  );
};

export default Menu;

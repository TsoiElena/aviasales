import React from 'react';
import { useDispatch } from 'react-redux';

import { menuActionTypes } from '../../types/reducersTypes';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { chip, fast, opt } from '../../redux/menu-reducer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Menu.module.scss';

const Menu: React.FC = () => {
  const { sort } = useTypeSelector((state) => state.menuComponent);
  const dispatch = useDispatch();
  console.log(sort);
  const handleClick = (e: any) => {
    e.preventDefault();
    if (e.target.innerHTML === 'Самый дешевый') dispatch(chip(menuActionTypes.CHIP));
    if (e.target.innerHTML === 'Самый быстрый') dispatch(fast(menuActionTypes.FAST));
    if (e.target.innerHTML === 'Оптимальный') dispatch(opt(menuActionTypes.OPT));
  };

  return (
    <div className={s.menu}>
      <button
        className={sort === menuActionTypes.CHIP ? `${s['menu-button']} ${s['menu-button--active']}` : s['menu-button']}
        onClick={handleClick}
      >
        Самый дешевый
      </button>
      <button
        className={sort === menuActionTypes.FAST ? `${s['menu-button']} ${s['menu-button--active']}` : s['menu-button']}
        onClick={handleClick}
      >
        Самый быстрый
      </button>
      <button
        className={sort === menuActionTypes.OPT ? `${s['menu-button']} ${s['menu-button--active']}` : s['menu-button']}
        onClick={handleClick}
      >
        Оптимальный
      </button>
    </div>
  );
};

export default Menu;

import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { changePage } from '../../redux/tikets-reducer';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './ShowMore.module.scss';

const ShowMore = () => {
  const { page, totalPage, showTikets } = useAppSelector((state) => state.tiketsComponent);
  const dispatch = useAppDispatch();

  const handlePage = () => {
    if (page < totalPage) dispatch(changePage(page + 1));
  };

  if (!page || !totalPage || !showTikets) return <></>;

  return (
    <button className={s.showMore} onClick={handlePage}>
      Показать еще 5 билетов!
    </button>
  );
};

export default ShowMore;

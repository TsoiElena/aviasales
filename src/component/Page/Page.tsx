import React, { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/useTypeSelector';
import { menuActionTypes } from '../../types/types';
import { cheapFilterAll, fastFilterALL, optimalFilterAll, clear, filterChange, load } from '../../redux/tikets-reducer';
import TicketCard from '../TicketCard/TicketCard';
import Menu from '../Menu/Menu';
import ShowMore from '../ShowMore/ShowMore';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Page.module.scss';

const Page: React.FC = () => {
  const { all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer } = useAppSelector(
    (state) => state.filterComponent
  );
  const { tikets, sortTikets, showTikets, loading } = useAppSelector((state) => state.tiketsComponent);
  const { sort } = useAppSelector((state) => state.menuComponent);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if ((!all && !withoutTransfer && !oneTransfer && !twoTransfer && !threeTransfer) || !tikets.length) {
      setError(true);
      dispatch(clear());
    } else if (!sortTikets.length) {
      setError(true);
    } else if (!showTikets.length) {
      setError(true);
    } else {
      if (error) setError(false);
    }
  }, [all, withoutTransfer, oneTransfer, twoTransfer, threeTransfer, tikets, sortTikets]);

  useEffect(() => {
    dispatch(clear());
    if (all && tikets.length) {
      dispatch(load(true));
      if (sort === menuActionTypes.CHEAP) dispatch(cheapFilterAll());
      if (sort === menuActionTypes.FAST) dispatch(fastFilterALL());
      if (sort === menuActionTypes.OPT) dispatch(optimalFilterAll());
    }
    dispatch(load(false));
  }, [all, tikets, sort]);

  useEffect(() => {
    if (withoutTransfer && oneTransfer && twoTransfer && threeTransfer) return;
    if (!withoutTransfer && !oneTransfer && !twoTransfer && !threeTransfer) return;
    dispatch(load(true));
    dispatch(clear());
    if (tikets.length) dispatch(filterChange({ withoutTransfer, oneTransfer, twoTransfer, threeTransfer, sort }));
    dispatch(load(false));
  }, [withoutTransfer, oneTransfer, twoTransfer, threeTransfer, tikets, sort]);

  if (loading) return <div>...Идет загрузка</div>;

  return (
    <div className={s.page}>
      <Menu />
      {error && <div className={s.error}>Рейсов, подходящих под заданные фильтры, не найдено</div>}
      {showTikets && showTikets.map((tiket) => <TicketCard key={tiket.id} ticket={tiket} />)}
      <ShowMore />
    </div>
  );
};

export default Page;

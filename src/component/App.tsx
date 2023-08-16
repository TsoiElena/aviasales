import React, { useEffect } from 'react';

import { getTikets, searcgIdFetch } from '../redux/tikets-reducer';
import { useAppDispatch, useAppSelector } from '../hooks/useTypeSelector';
import logoApp from '../assets/Logo.svg';

import s from './App.module.scss';
import Page from './Page/Page';
import Filters from './Filters/Filters';

function App() {
  const state = useAppSelector((state) => state.tiketsComponent);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(searcgIdFetch());
  }, []);

  useEffect(() => {
    if (state.searchId) dispatch(getTikets(state.searchId));
  }, [state.searchId]);

  useEffect(() => {
    if (!state.stop && state.searchId) dispatch(getTikets(state.searchId));
  }, [state.tikets, state.error]);

  if (state.idError) return <div>{state.idError}</div>;
  return (
    <div className={s.App}>
      <div className={s.header}>
        <img className={s['header-logo']} src={logoApp} alt="" />
      </div>
      <div className={s.content}>
        <Filters />
        <Page />
      </div>
    </div>
  );
}

export default App;

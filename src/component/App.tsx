import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logoApp from '../assets/Logo.svg';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './App.module.scss';
import Page from './Page/Page';
import Filters from './Filters/Filters';

function App() {
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

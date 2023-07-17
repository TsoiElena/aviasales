import React from 'react';

import TicketCard from '../TicketCard/TicketCard';
import Menu from '../Menu/Menu';
import ShowMore from '../ShowMore/ShowMore';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Page.module.scss';

const Page = () => {
  return (
    <div className={s.page}>
      <Menu />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <ShowMore />
    </div>
  );
};

export default Page;

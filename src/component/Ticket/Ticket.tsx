import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './Ticket.module.scss';

const Ticket = () => {
  return (
    <div className={s.ticket}>
      <div>
        <div className={s['ticket-title']}>MOW - HKT</div>
        <div className={s['ticket-info']}>10:45 - 08:00</div>
      </div>
      <div>
        <div className={s['ticket-title']}>В пути</div>
        <div className={s['ticket-info']}>21ч 15м</div>
      </div>
      <div>
        <div className={s['ticket-title']}>2 пересадки</div>
        <div className={s['ticket-info']}>HKG, JNB</div>
      </div>
    </div>
  );
};

export default Ticket;

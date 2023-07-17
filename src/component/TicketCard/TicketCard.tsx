import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/S7 Logo.png';
import Ticket from '../Ticket/Ticket';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './TicketCard.module.scss';

const TicketCard = () => {
  return (
    <div className={s.card}>
      <div className={s['card-info']}>
        <div className={s['card-price']}>13 400 Р</div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketCard;

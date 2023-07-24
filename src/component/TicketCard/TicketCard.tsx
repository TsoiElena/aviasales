import React from 'react';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/S7 Logo.png';
import Ticket from '../Ticket/Ticket';
import { tiketType } from '../../types/types';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import s from './TicketCard.module.scss';

type tiketCardType = {
  ticket: tiketType;
};

const TicketCard: React.FC<tiketCardType> = ({ ticket }) => {
  return (
    <div className={s.card}>
      <div className={s['card-info']}>
        <div className={s['card-price']}>{ticket.price} Р</div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <Ticket info={ticket.segments[0]} />
      <Ticket info={ticket.segments[1]} />
    </div>
  );
};

export default TicketCard;

import React from 'react';

import logo from '../../assets/S7 Logo.png';
import Ticket from '../Ticket/Ticket';
import { tiketType } from '../../types/types';

import s from './TicketCard.module.scss';

type tiketCardType = {
  ticket: tiketType;
};

const TicketCard: React.FC<tiketCardType> = ({ ticket }) => {
  console.log(ticket);
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

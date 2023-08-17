import React from 'react';
import add from 'date-fns/add';
import format from 'date-fns/format';

import s from './Ticket.module.scss';

type ticketInfo = {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
};

type TicketProps = {
  info: ticketInfo;
};

const Ticket: React.FC<TicketProps> = ({ info }) => {
  const after = add(new Date(info.date), {
    years: 0,
    months: 0,
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: info.duration,
    seconds: 0,
  });
  return (
    <div className={s.ticket}>
      <div>
        <div className={s['ticket-title']}>
          {info.origin} - {info.destination}
        </div>
        <div className={s['ticket-info']}>
          {format(new Date(info.date), 'hh')}:{format(new Date(info.date), 'mm')} - {format(new Date(after), 'hh')}:
          {format(new Date(after), 'mm')}
        </div>
      </div>
      <div>
        <div className={s['ticket-title']}>В пути</div>
        <div className={s['ticket-info']}>
          {Math.floor(info.duration / 60)}ч {Math.ceil(info.duration % 60)}м
        </div>
      </div>
      <div>
        <div className={s['ticket-title']}>{info.stops.length} пересадки</div>
        <div className={s['ticket-info']}>
          {info.stops.length
            ? info.stops.map((stop, index) => {
                if (index === info.stops.length - 1) return stop;
                return `${stop}, `;
              })
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Ticket;

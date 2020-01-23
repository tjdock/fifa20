import React from 'react';
import css from './LeagueItem.module.scss';
const LeagueItem = props => {
  return (
    <div className={css.item}>
      <img
        src="https://futhead.cursecdn.com/static/img/20/leagues/2012.png"
        alt="league"
      />
      <span className={css.title}>CLS</span>
      <a href="/" className={css.delete}>
        x
      </a>
    </div>
  );
};

export default LeagueItem;

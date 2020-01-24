import React from 'react';
import css from './LeagueItem.module.scss';
const LeagueItem = props => {
  return (
    <div className={css.item}>
      <img src={props.imgUrl} alt="league" onClick={props.select} />
      <span className={css.title} onClick={props.select}>
        [{props.abbrName}] <br />
        {props.name}
      </span>

      <a href="/" className={css.delete}>
        x
      </a>
    </div>
  );
};

export default LeagueItem;

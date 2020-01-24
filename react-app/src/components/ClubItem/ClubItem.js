import React from 'react';
import css from './ClubItem.module.scss';
const ClubItem = props => {
  return (
    <div className={css.item}>
      <img src={props.imgUrl} alt="club" onClick={props.select} />
      <span className={css.title} onClick={props.select}>
        {props.name}
      </span>
      <a href="/" className={css.delete}>
        x
      </a>
    </div>
  );
};

export default ClubItem;

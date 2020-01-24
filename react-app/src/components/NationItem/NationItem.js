import React from 'react';
import css from './NationItem.module.scss';
const NationItem = props => {
  return (
    <div className={css.item}>
      <img src={props.imgUrl} alt="nation" onClick={props.select} />
      <span className={css.title} onClick={props.select}>
        {props.name}
      </span>
      <a href="/" className={css.delete}>
        x
      </a>
    </div>
  );
};

export default NationItem;

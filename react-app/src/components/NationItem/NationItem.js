import React from 'react';
import css from './NationItem.module.scss';
const NationItem = props => {
  return (
    <div className={css.item}>
      <img
        src="https://futhead.cursecdn.com/static/img/20/nations/21.png"
        alt="nation"
      />
      <span className={css.title}>Germany</span>
      <a href="/" className={css.delete}>
        x
      </a>
    </div>
  );
};

export default NationItem;

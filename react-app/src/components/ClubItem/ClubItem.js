import React from 'react';
import css from './ClubItem.module.scss';
const ClubItem = props => {
  return (
    <div className={css.item}>
      <img
        src="https://futhead.cursecdn.com/static/img/20/clubs/111774.png"
        alt="club"
      />
      <span className={css.title}>Tianjin Teda</span>
      <a href="/" className={css.delete}>
        x
      </a>
    </div>
  );
};

export default ClubItem;

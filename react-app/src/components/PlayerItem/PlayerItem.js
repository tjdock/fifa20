import React from 'react';
import css from '../../pages/Players/Players.module.scss';

const PlayerItem = props => {
  const getQuality = () => {
    switch (props.player.quality) {
      case 'gold':
        return css.gold;
      case 'silver':
        return css.silver;
      case 'bronze':
        return css.bronze;
      default:
        return '';
    }
  };

  const getColors = value => {
    if (value >= 90) {
      return [css.rat, css.color90].join(' ');
    } else if (value >= 80 && value <= 89) {
      return [css.rat, css.color80].join(' ');
    } else if (value >= 70 && value <= 79) {
      return [css.rat, css.color70].join(' ');
    } else if (value >= 50 && value <= 69) {
      return [css.rat, css.color5060].join(' ');
    } else if (value <= 49) {
      return [css.rat, css.color40].join(' ');
    }
  };
  return (
    <tr
      onClick={() => props.onItemClick(props.player.id)}
      style={{ cursor: 'pointer' }}
    >
      <td className={css.fixed}>
        <img
          alt="avatar"
          className={css.avatar}
          src={props.player.headshot.imgUrl}
        />
      </td>
      <td>
        <div className={css.name}>{props.player.name}</div>
        <div className={css.tags}>
          <img
            alt="nation"
            className={css.nationImg}
            src={props.player.nation.imageUrls.small}
          />
          <img
            alt="league"
            className={css.leagueImg}
            src={props.player.league.imageUrls.light}
          />
          <img
            alt="club"
            className={css.clubImg}
            src={props.player.club.imageUrls.light.small}
          />
        </div>
      </td>
      <td className={css.fixed}>
        <span className={[css.rat, getQuality()].join(' ')}>
          {props.player.rating}
        </span>
      </td>
      <td className={css.fixed}>{props.player.position}</td>
      <td className={css.fixed}>
        <span className={getColors(props.player.attributes[0].value)}>
          {props.player.attributes[0].value}
        </span>
      </td>
      <td className={css.fixed}>
        <span className={getColors(props.player.attributes[1].value)}>
          {props.player.attributes[1].value}
        </span>
      </td>
      <td className={css.fixed}>
        <span className={getColors(props.player.attributes[2].value)}>
          {props.player.attributes[2].value}
        </span>
      </td>
      <td className={css.fixed}>
        <span className={getColors(props.player.attributes[3].value)}>
          {props.player.attributes[3].value}
        </span>
      </td>
      <td className={css.fixed}>
        <span className={getColors(props.player.attributes[4].value)}>
          {props.player.attributes[4].value}
        </span>
      </td>
      <td className={css.fixed}>
        <span className={getColors(props.player.attributes[5].value)}>
          {props.player.attributes[5].value}
        </span>
      </td>
      <td className={css.fixed}>{props.player.skillMoves}*</td>
      <td className={css.fixed}>{props.player.weakFoot}*</td>
      <td className={css.fixed}>{props.player.foot.substr(0, 1)}</td>
      <td className={css.fixed}>{props.player.height}cm</td>
      <td className={css.fixed}>{props.player.weight}kg</td>
      <td className={css.fixed}>{props.player.age}</td>
    </tr>
  );
};

export default PlayerItem;

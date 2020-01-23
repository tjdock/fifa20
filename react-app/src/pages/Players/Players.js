import React from 'react';
import css from './Players.module.scss';

const Players = props => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.fixed}></th>
          <th>Name</th>
          <th className={css.fixed}>RAT</th>
          <th className={css.fixed}>POS</th>
          <th className={css.fixed}>PAC</th>
          <th className={css.fixed}>SHO</th>
          <th className={css.fixed}>PAS</th>
          <th className={css.fixed}>DRI</th>
          <th className={css.fixed}>DEF</th>
          <th className={css.fixed}>PHY</th>
          <th className={css.fixed}>SKI</th>
          <th className={css.fixed}>WF</th>
          <th className={css.fixed}>W/R</th>
          <th className={css.fixed}>FOOT</th>
          <th className={css.fixed}>HEIGHT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={css.fixed}>
            <img
              alt="avatar"
              className={css.avatar}
              src="https://futhead.cursecdn.com/static/img/20/players/213013.png"
            />
          </td>
          <td>
            <div className={css.name}>Frank Acheampong</div>
            <div className={css.tags}>
              <img
                alt="nation"
                className={css.nationImg}
                src="https://futhead.cursecdn.com/static/img/20/nations/21.png"
              />
              <img
                alt="league"
                className={css.leagueImg}
                src="https://futhead.cursecdn.com/static/img/20/leagues/2012.png"
              />
              <img
                alt="club"
                className={css.clubImg}
                src="https://futhead.cursecdn.com/static/img/20/clubs/111774.png"
              />
            </div>
          </td>
          <td className={css.fixed}>
            <span className={[css.rat, css.bronze].join(' ')}>77</span>
          </td>
          <td className={css.fixed}>CF</td>
          <td className={css.fixed}>
            <span className={[css.rat, css.color90].join(' ')}>94</span>
          </td>
          <td className={css.fixed}>
            <span className={[css.rat, css.color80].join(' ')}>84</span>
          </td>
          <td className={css.fixed}>
            <span className={[css.rat, css.color70].join(' ')}>74</span>
          </td>
          <td className={css.fixed}>
            <span className={[css.rat, css.color5060].join(' ')}>55</span>
          </td>
          <td className={css.fixed}>
            <span className={[css.rat, css.color40].join(' ')}>44</span>
          </td>
          <td className={css.fixed}>
            <span className={[css.rat, css.color90].join(' ')}>94</span>
          </td>
          <td className={css.fixed}>4*</td>
          <td className={css.fixed}>3*</td>
          <td className={css.fixed}>H / L</td>
          <td className={css.fixed}>R</td>
          <td className={css.fixed}>168cm</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Players;

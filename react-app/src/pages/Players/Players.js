import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import css from './Players.module.scss';
import PlayerItem from '../../components/PlayerItem/PlayerItem';

const Players = props => {
  const players = useSelector(state => state.player.players);
  const selectedLeague = useSelector(state => state.league.selectedLeague);
  const selectedClub = useSelector(state => state.club.selectedClub);
  const selectedNation = useSelector(state => state.nation.selectedNation);

  const dispatch = useDispatch();
  const onGetPlayers = useCallback(
    (leagueId, clubId, nationId) =>
      dispatch(actions.getPlayers(leagueId, clubId, nationId)),
    [dispatch]
  );

  useEffect(() => {
    if (selectedLeague && selectedClub) {
      onGetPlayers(
        selectedLeague.id,
        selectedClub.id,
        selectedNation ? selectedNation.id : null
      );
    }
  }, [onGetPlayers, selectedLeague, selectedClub, selectedNation]);

  return selectedClub && selectedLeague ? (
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
          <th className={css.fixed}>AGE</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => {
          return <PlayerItem key={player.id} player={player} />;
        })}
      </tbody>
    </table>
  ) : (
    <p>please select a league and a club</p>
  );
};

export default Players;

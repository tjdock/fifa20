import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import css from './Players.module.scss';
import PlayerItem from '../../components/PlayerItem/PlayerItem';
import { withRouter } from 'react-router-dom';

const Players = props => {
  const [sortCol, setSortCol] = useState('name');
  const [sorting, setSorting] = useState('asc');
  const [attrSortCol, setAttrSortCol] = useState(null);
  const [attrSorting, setAttrSorting] = useState('asc');

  const players = useSelector(state => state.player.players);
  const selectedLeague = useSelector(state => state.league.selectedLeague);
  const selectedClub = useSelector(state => state.club.selectedClub);
  const selectedNation = useSelector(state => state.nation.selectedNation);

  const dispatch = useDispatch();
  const onGetPlayers = useCallback(
    (leagueId, clubId, nationId, sortCol, sorting) =>
      dispatch(
        actions.getPlayers(leagueId, clubId, nationId, sortCol, sorting)
      ),
    [dispatch]
  );

  useEffect(() => {
    if (selectedLeague && selectedClub) {
      onGetPlayers(
        selectedLeague.id,
        selectedClub.id,
        selectedNation ? selectedNation.id : null,
        sortCol,
        sorting
      );
    }
  }, [
    onGetPlayers,
    selectedLeague,
    selectedClub,
    selectedNation,
    sortCol,
    sorting
  ]);

  const itemClickHandler = id => {
    console.log(id);
    props.history.push('/players/' + id);
  };

  const thClickHandler = name => {
    if (name === sortCol) {
      sorting === 'desc' ? setSorting('asc') : setSorting('desc');
    } else {
      setSortCol(name);
      setSorting('asc');
    }
  };

  const getColStatus = name => {
    if (name === sortCol) {
      return sorting === 'asc'
        ? [css.asc, css.fixed].join(' ')
        : [css.desc, css.fixed].join(' ');
    } else {
      return css.fixed;
    }
  };

  const sortAttr = (index, name) => {
    if (name === attrSortCol) {
      if (attrSorting === 'desc') {
        setAttrSorting('asc');
        dispatch(actions.sortPlayers(index, 'asc'));
      } else {
        setAttrSorting('desc');
        dispatch(actions.sortPlayers(index, 'desc'));
      }
    } else {
      setAttrSortCol(name);
      setAttrSorting('asc');
      dispatch(actions.sortPlayers(index, 'asc'));
    }
  };
  const getAttrColStatus = name => {
    if (name === attrSortCol) {
      return attrSorting === 'asc'
        ? [css.asc, css.fixed].join(' ')
        : [css.desc, css.fixed].join(' ');
    } else {
      return css.fixed;
    }
  };

  //selectedClub && selectedLeague ?
  return players.length > 0 ? (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.fixed}></th>
          <th
            style={{ textAlign: 'left' }}
            className={getColStatus('name')}
            onClick={() => thClickHandler('name')}
          >
            Name
          </th>
          <th
            className={getColStatus('rating')}
            onClick={() => thClickHandler('rating')}
          >
            RAT
          </th>
          <th
            className={getColStatus('position')}
            onClick={() => thClickHandler('position')}
          >
            POS
          </th>
          <th
            className={getAttrColStatus('pac')}
            onClick={() => sortAttr(0, 'pac')}
          >
            PAC
          </th>
          <th
            className={getAttrColStatus('sho')}
            onClick={() => sortAttr(1, 'sho')}
          >
            SHO
          </th>
          <th
            className={getAttrColStatus('pas')}
            onClick={() => sortAttr(2, 'pas')}
          >
            PAS
          </th>
          <th
            className={getAttrColStatus('dri')}
            onClick={() => sortAttr(3, 'dri')}
          >
            DRI
          </th>
          <th
            className={getAttrColStatus('def')}
            onClick={() => sortAttr(4, 'def')}
          >
            DEF
          </th>
          <th
            className={getAttrColStatus('phy')}
            onClick={() => sortAttr(5, 'phy')}
          >
            PHY
          </th>
          <th
            className={getColStatus('skillMoves')}
            onClick={() => thClickHandler('skillMoves')}
          >
            SKI
          </th>
          <th
            className={getColStatus('weakFoot')}
            onClick={() => thClickHandler('weakFoot')}
          >
            WF
          </th>
          <th
            className={getColStatus('foot')}
            onClick={() => thClickHandler('foot')}
          >
            FOOT
          </th>
          <th
            className={getColStatus('height')}
            onClick={() => thClickHandler('height')}
          >
            HEIGHT
          </th>
          <th
            className={getColStatus('weight')}
            onClick={() => thClickHandler('weight')}
          >
            WEIGHT
          </th>
          <th
            className={getColStatus('age')}
            onClick={() => thClickHandler('age')}
          >
            AGE
          </th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => {
          return (
            <PlayerItem
              key={player.id}
              player={player}
              onItemClick={itemClickHandler}
            />
          );
        })}
      </tbody>
    </table>
  ) : (
    <p>please select a league and a club</p>
  );
};

export default withRouter(Players);

import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import LeagueItem from '../../components/LeagueItem/LeagueItem';

const Leagues = props => {
  const leagues = useSelector(state => state.league.leagues);

  const dispatch = useDispatch();
  const onGetLeagues = useCallback(() => dispatch(actions.getLeagues()), [
    dispatch
  ]);

  useEffect(() => {
    onGetLeagues();
  }, [onGetLeagues]);

  const selectHandler = league => {
    console.log(league);
    dispatch(actions.setSelectedLeague(league));
    dispatch(actions.setSelectedClub(null));
  };

  return (
    <div className="d-flex f-wrap">
      {leagues.map(league => {
        return (
          <LeagueItem
            key={league.id}
            abbrName={league.abbrName}
            name={league.name}
            imgUrl={league.imageUrls.light}
            select={() => selectHandler(league)}
          />
        );
      })}
    </div>
  );
};

export default Leagues;

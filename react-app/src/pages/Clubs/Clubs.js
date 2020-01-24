import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';

import ClubItem from '../../components/ClubItem/ClubItem';

const Clubs = props => {
  const clubs = useSelector(state => state.club.clubs);
  const selectedLeague = useSelector(state => state.league.selectedLeague);

  const dispatch = useDispatch();
  const onGetClubs = useCallback(
    leagueId => dispatch(actions.getClubs(leagueId)),
    [dispatch]
  );

  useEffect(() => {
    if (selectedLeague) {
      onGetClubs(selectedLeague.id);
    }
  }, [onGetClubs, selectedLeague]);

  const selectHandler = club => {
    console.log(club);
    dispatch(actions.setSelectedClub(club));
  };

  return (
    <div className="d-flex f-wrap">
      {selectedLeague ? (
        clubs.map(club => {
          return (
            <ClubItem
              key={club.id}
              name={club.name}
              imgUrl={club.imageUrls.light.small}
              select={() => selectHandler(club)}
            />
          );
        })
      ) : (
        <p>please select a league</p>
      )}
    </div>
  );
};

export default Clubs;

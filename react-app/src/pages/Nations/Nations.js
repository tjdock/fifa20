import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/action';
import NationItem from '../../components/NationItem/NationItem';

const Nations = props => {
  const nations = useSelector(state => state.nation.nations);

  const dispatch = useDispatch();
  const onGetNations = useCallback(() => dispatch(actions.getNations()), [
    dispatch
  ]);

  useEffect(() => {
    onGetNations();
  }, [onGetNations]);

  const selectHandler = nation => {
    console.log(nation);
    dispatch(actions.setSelectedNation(nation));
  };

  return (
    <div className="d-flex f-wrap">
      {nations.map(nation => {
        return (
          <NationItem
            key={nation.id}
            name={nation.name}
            imgUrl={nation.imageUrls.small}
            select={() => selectHandler(nation)}
          />
        );
      })}
    </div>
  );
};

export default Nations;

import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/action';

const Logout = props => {
  const dispatch = useDispatch();
  const onLogout = useCallback(() => dispatch(actions.logout()), [dispatch]);

  useEffect(() => {
    onLogout();
    window.location.href = '/';
  }, [onLogout]);
  return (
    <div>
      <p>Logout</p>
    </div>
  );
};

export default Logout;

import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/action';

const Login = props => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const doLogin = () => {
    dispatch(actions.login(emailRef.current.value, passwordRef.current.value));
  };

  return (
    <div>
      <input type="text" placeholder="email" ref={emailRef} value="admin" />
      <br />
      <input
        type="password"
        placeholder="password"
        ref={passwordRef}
        value="123"
      />
      <br />
      <button onClick={doLogin}>Login</button>
    </div>
  );
};

export default Login;

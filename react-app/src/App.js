import { Switch, Redirect, withRouter, NavLink } from 'react-router-dom';
import React, { Suspense } from 'react';
import AuthRoute from './hoc/AuthRoute';
import logo from './assets/images/logo.png';
import css from './App.module.scss';

//Login
const Login = React.lazy(() => {
  return import('./pages/Login/Login');
});
//Positions
const Positions = React.lazy(() => {
  return import('./pages/Positions/Positions');
});
//Nations
const Nations = React.lazy(() => {
  return import('./pages/Nations/Nations');
});
//Leagues
const Leagues = React.lazy(() => {
  return import('./pages/Leagues/Leagues');
});
//Clubs
const Clubs = React.lazy(() => {
  return import('./pages/Clubs/Clubs');
});
//Players
const Players = React.lazy(() => {
  return import('./pages/Players/Players');
});

//默认页高亮显示
const menuIsActive = (match, location) => {
  if (location.pathname === '/') {
    return true;
  } else {
    return match;
  }
};
const App = props => {
  //TODO
  let isAuthenticated = true;

  //路由设置
  let routes = (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/positions"
          component={Positions}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/nations"
          component={Nations}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/leagues"
          component={Leagues}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/clubs"
          component={Clubs}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/players"
          component={Players}
        ></AuthRoute>
        <AuthRoute
          exact
          isAuthenticated={isAuthenticated}
          path="/"
          component={Positions}
          unAuthenticatedComponent={Login}
        ></AuthRoute>
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );

  return isAuthenticated ? (
    <div id="app">
      <div className={css.leftMenu}>
        <div className={css.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={css.menu}>
          <ul>
            <li>
              <NavLink
                to="/positions"
                activeClassName={css.active}
                isActive={menuIsActive}
              >
                Positions
              </NavLink>
            </li>
            <li>
              <NavLink to="/nations" exact activeClassName={css.active}>
                Nations
              </NavLink>
            </li>
            <li>
              <NavLink to="/leagues" exact activeClassName={css.active}>
                Leagues
              </NavLink>
            </li>
            <li>
              <NavLink to="/clubs" exact activeClassName={css.active}>
                Clubs
              </NavLink>
            </li>
            <li>
              <NavLink to="/players" exact activeClassName={css.active}>
                Players
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className={css.rightContainer}>
        <div className={css.topBar}>
          <img
            alt="nation"
            className={css.filter}
            src="https://futhead.cursecdn.com/static/img/20/nations/21.png"
          />
          <img
            alt="league"
            className={css.filter}
            src="https://futhead.cursecdn.com/static/img/20/leagues/2012.png"
          />
          <img
            alt="club"
            className={css.filter}
            src="https://futhead.cursecdn.com/static/img/20/clubs/111774.png"
          />
          <div className={css.spacer}></div>
          <NavLink to="/logout">logout</NavLink>
        </div>
        <div className={css.content}>
          <div className={css.main}>{routes}</div>
        </div>
      </div>
    </div>
  ) : (
    routes
  );
};

export default withRouter(App);

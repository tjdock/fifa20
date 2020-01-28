import { Switch, Redirect, withRouter, NavLink, Route } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/action';
import AuthRoute from './hoc/AuthRoute';
import logo from './assets/images/logo.png';
import css from './App.module.scss';

//Login
const Login = React.lazy(() => {
  return import('./pages/Login/Login');
});
//Logout
const Logout = React.lazy(() => {
  return import('./pages/Logout/Logout');
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
const PlayerDetail = React.lazy(() => {
  return import('./pages/Players/PlayerDetail');
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
  const token = useSelector(state => state.user.token);
  const isAuthenticated = token != null;

  const loading = useSelector(state => state.main.loading);
  const snackbar = useSelector(state => state.main.snackbar);
  const selectedNation = useSelector(state => state.nation.selectedNation);
  const selectedLeague = useSelector(state => state.league.selectedLeague);
  const selectedClub = useSelector(state => state.club.selectedClub);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.tryAutoLogin());
  }, [dispatch]);

  //取消国籍过滤
  const deselectNation = () => {
    dispatch(actions.setSelectedNation(null));
  };

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
          exact
          isAuthenticated={isAuthenticated}
          path="/players"
          component={Players}
        ></AuthRoute>
        <AuthRoute
          isAuthenticated={isAuthenticated}
          path="/players/:playerId"
          component={PlayerDetail}
        ></AuthRoute>
        <Route path="/logout" component={Logout} />
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
              <NavLink to="/nations" exact activeClassName={css.active}>
                Nations
              </NavLink>
            </li>
            <li>
              <NavLink to="/players" activeClassName={css.active}>
                Players
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={css.rightContainer}>
        <div className={css.topBar}>
          {selectedLeague && (
            <img
              alt="league"
              className={css.filter}
              src={selectedLeague.imageUrls.light}
            />
          )}

          {selectedClub && (
            <img
              alt="club"
              className={css.filter}
              src={selectedClub.imageUrls.light.small}
            />
          )}

          {selectedNation && (
            <img
              alt="nation"
              className={css.filter}
              src={selectedNation.imageUrls.small}
              onClick={deselectNation}
            />
          )}

          <div className={css.spacer}></div>
          <NavLink to="/logout">logout</NavLink>
        </div>
        <div className={css.content}>
          <div className={css.main}>{routes}</div>
        </div>
      </div>

      {snackbar.type && (
        <div
          className={[
            css.snackBar,
            snackbar.type === 'error' ? css.error : css.success
          ].join(' ')}
        >
          {snackbar.msg}
        </div>
      )}

      {loading && (
        <div className={css.loading}>
          <div className={css.content}>Loading...</div>
        </div>
      )}
    </div>
  ) : (
    routes
  );
};

export default withRouter(App);

import React from 'react';
import { Route, Switch, Redirect } from 'react-router';

import Router from './class';

const Routes = ({ auth, routes }) => {

  const router = new Router(routes)

  const notFound = router.getNotFound();
  const { link:home } = router.getRoute();
  const isAuth = auth !== false;
  return (
    <Switch>
      {
        router.getKeys().map((i) => {
          const { isPrivate, id, link, component:Component } = router.getRoute(i);
          const params = { key: id, exact: true, path: link };
          if(isPrivate) {
            return (
              <Route
                { ...params }
                render={({ location:from }) => (
                  isAuth
                  ? (<Component />)
                  : (<Redirect to={{ pathname: home, state: { from } }} />)
                )}
              />
            );
          }
          return (
            <Route { ...params } component={Component} />
          );
        }).concat(<Route key={notFound.id} component={notFound.component} />)
      }
    </Switch>
  );
};

export default Routes

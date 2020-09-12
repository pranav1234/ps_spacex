import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Button, Container, AppBar, Typography } from '@material-ui/core';

import Head from './Head';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Home'),
  loading: () => <div>Loading...</div>
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './about/About'),
  loading: () => <div>Loading...</div>
});

const App = () => (
  <div className="app">
    <Head />

    <nav aria-label="main navigation">
      <AppBar position="static">
        <Typography variant="h6">SpaceX Launch Programs</Typography>
      </AppBar>
    </nav>

    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableHome} />
        <Route path="/about" component={LoadableAbout} />
      </Switch>
    </main>

    <footer />
  </div>
);

export default App;

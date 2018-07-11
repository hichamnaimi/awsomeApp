import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../logic/reducers/rootReducer';
import Navigation from './Navigation';
import MusicContainer from '../components/Music/MusicContainer';
import PrimeContainer from '../components/Prime/PrimeContainer';

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);

const Welcome = () => <h1>Welcome</h1>

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navigation>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/music' component={MusicContainer} />
            <Route path='/prime' component={PrimeContainer} />
          </Switch>
        </Navigation>
      </Router>
    </Provider>
  )
}

export default App;
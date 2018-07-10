import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../logic/reducers/rootReducer';
import MusicContainer from '../components/Music/MusicContainer';

const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    )
  )
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={MusicContainer} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App;
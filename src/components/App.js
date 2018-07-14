import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../logic/reducers/rootReducer';
import Header from './Header';
import MusicContainer from '../components/Music/MusicContainer';
import PrimeContainer from '../components/Prime/PrimeContainer';
import GraphContainer from '../components/Graph/GraphContainer';

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
        <Header>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/music' component={MusicContainer} />
            <Route path='/prime' component={PrimeContainer} />
            <Route path='/graph' component={GraphContainer} />
          </Switch>
        </Header>
      </Router>
    </Provider>
  )
}

export default App;
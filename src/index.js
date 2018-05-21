import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game';
import store from './store';

import { Provider } from 'react-redux';

// import { makeGuess, restartGame } from './actions'

import './reset.css';
import './index.css';

// og(store.getState());
// store.dispatch(makeGuess(25));
// console.log(store.getState());

// store.dispatch(makeGuess(75));
// console.log(store.getState());

// store.dispatch(makeGuess(43));
// console.log(store.getState());

// store.dispatch(makeGuess('trash'));
// console.log(store.getState());

// store.dispatch(makeGuess(49));
// console.log(store.getState());

// store.dispatch(restartGame());
// console.log(store.getState());



ReactDOM.render( 
  <Provider store={store}> 
    <Game />
  </Provider>,

  document.getElementById('root')
);

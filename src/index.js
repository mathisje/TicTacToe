import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import TicTacToe from './TicTacToe';
import rootReducer from './reducers'
import './index.css';

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <TicTacToe />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

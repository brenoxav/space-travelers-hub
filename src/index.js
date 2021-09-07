import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import './index.css';
import { getRocketsFromApi } from './redux/rockets/rockets';
import { getMissionsFromApi } from './redux/missions/missions';

store.dispatch(getRocketsFromApi());
store.dispatch(getMissionsFromApi());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

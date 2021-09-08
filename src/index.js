import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import { getRocketsFromApi } from './redux/rockets/rockets';

import 'bootstrap/dist/css/bootstrap.min.css';

store.dispatch(getRocketsFromApi());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

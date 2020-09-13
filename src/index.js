import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

import './index.css';
import { store, persistor } from '../src/redux/store'

ReactDOM.render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>,
  document.getElementById('root')
);


import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './ducks';
import Page from './Page/Page';
import './index.css';

render(
  <React.StrictMode>
    <Provider store={store}>
      <Page />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

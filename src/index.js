import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/sass';
import { Provider } from './components/AppContext';
import dotenv from 'dotenv';

dotenv.config();
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  rootElement
);

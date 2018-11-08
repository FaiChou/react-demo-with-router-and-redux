import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

window.onbeforeunload = () => {
  const jsObj = store.getState();
  sessionStorage.setItem('STORE_STORAGE_KEY', JSON.stringify(jsObj));
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

serviceWorker.unregister();

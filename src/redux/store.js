import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducers from './reducer';

const initState = {
  users: [
    {id: 0, name: 'Alice', avatar: 'http://cdn.v2ex.com/navatar/1fc2/1400/864_large.png?m=1497247521'},
    {id: 1, name: 'Bob', avatar: 'http://cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1541594964'},
    {id: 2, name: 'Clari', avatar: 'http://cdn.v2ex.com/navatar/d67d/8ab4/39_large.png?m=1540331201'},
    {id: 3, name: 'Dude', avatar: 'http://cdn.v2ex.com/navatar/6353/8fe6/519_large.png?m=1537099731'},
    {id: 4, name: 'Eli', avatar: 'http://cdn.v2ex.com/navatar/94f6/d7e0/300_large.png?m=1541594964'},
    {id: 5, name: 'Frank', avatar: 'http://cdn.v2ex.com/navatar/093f/65e0/59_large.png?m=1431019484'},
  ],
};

const storeInSession = sessionStorage.getItem('STORE_STORAGE_KEY');

let storeState = null;
if (storeInSession) {
  storeState = JSON.parse(storeInSession);
} else {
  storeState = initState;
}

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export default createStore(
  reducers,
  storeState,
  applyMiddleware(...middlewares)
);

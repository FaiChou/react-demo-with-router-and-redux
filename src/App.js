import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Create from './Create';
import List from './List';
import './App.css';
import Header from './header';

export default () => 
  <BrowserRouter>
    <div className="app">
      <Header />
      <Route exact path="/" component={List} />
      <Route path="/create" component={Create} />
    </div>
  </BrowserRouter>

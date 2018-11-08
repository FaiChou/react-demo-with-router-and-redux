import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(({history, location}) =>
  <div className="header">
    <img className="avatar" src={require('./logo.svg')} alt="logo" />
    <p className="name">触达号</p>
    {!location.pathname.includes('create') &&
      <button className="create-button" onClick={() => history.push('create')}>+</button>
    }
  </div>
);

import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(({history, location}) =>
  <div className="header">
    <img className="avatar" src={require('./TaoPaipai.jpeg')} alt="logo" />
    <p className="name">桃白白</p>
    {!location.pathname.includes('create') &&
      <button className="create-button" onClick={() => history.push('create')}>+</button>
    }
  </div>
);

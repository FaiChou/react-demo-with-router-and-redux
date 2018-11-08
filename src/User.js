import React from 'react';

export default ({ info, onRemove, onTap }) =>
  <div className="user-container">
    <img className="user-avatar" src={info.avatar} alt="avatar" />
    <div className="user-name">{info.name}</div>
    <button className="remove-user-btn" onClick={onRemove}>x</button>
  </div>

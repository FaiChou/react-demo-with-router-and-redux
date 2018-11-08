import React from 'react';
import { connect } from 'react-redux';
import User from './User';
import { removeUser } from './redux/actions';

class List extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.users.map(user =>
          <User key={user.id} info={user} onRemove={() => {
            this.props.dispatch(removeUser(user.id));
          }} />
        )}
      </div>
    );
  }
}

const mapState = state => ({ users: state.users });

export default connect(mapState)(List);

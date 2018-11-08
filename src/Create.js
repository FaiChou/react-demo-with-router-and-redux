import React from 'react';
import { connect } from 'react-redux';
import { addUser } from './redux/actions';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.value;
    if (!username) {
      alert('请输入用户名');
      return;
    }
    this.props.dispatch(addUser({
      id: Date.now(),
      name: username,
      avatar: 'https://www.v2ex.com/navatar/d67d/8ab4/39_large.png',
    }));
    this.props.history.goBack();
  }

  render() {
    return (
      <form className="create-container" onSubmit={this.handleSubmit}>
        <label>
          用户名:
          <input style={{marginLeft: 20, marginRight: 20}} value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default connect()(Create);

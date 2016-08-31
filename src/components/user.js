import React, { Component } from 'react';
import { Link } from 'react-router';

import Api from '../utils/api';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    Api.get(`/users/${this.props.params.id}`, function(json) {
      return this.setState({ user: json.data });
    }.bind(this));
  }

  displayUser() {
    if(this.state.user) {
      return(
        <tr>
          <td>{this.state.user.id}</td>
          <td>{this.state.user.name}</td>
          <td><Link to={`/channels/${this.state.user.channel_id}`}>Channel #{this.state.user.channel_id}</Link></td>
        </tr>
      );
    } else {
      return(<tr><td colSpan="3">Loading...</td></tr>);
    }
  }

  render() {
    return (
      <table className="table user-table">
        <caption>Slack User Details</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>Slack Name</th>
            <th>Channel</th>
          </tr>
        </thead>

        <tbody>
          {this.displayUser()}
        </tbody>
      </table>
    );
  }
}

export default User;

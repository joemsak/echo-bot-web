import React, { Component } from 'react';
import { Link } from 'react-router';

import Api from '../utils/api';

class Channel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: undefined,
    };
  }

  componentDidMount() {
    Api.get(`/channels/${this.props.params.id}`, function(json) {
      return this.setState({ channel: json.data });
    }.bind(this));
  }

  displayChannel() {
    if(this.state.channel) {
      return(
        <tr>
          <td>{this.state.channel.id}</td>
          <td>{this.state.channel.name}</td>
          <td><Link to={`/teams/${this.state.channel.team_id}`}>Team #{this.state.channel.team_id}</Link></td>
        </tr>
      );
    } else {
      return(<tr><td colSpan="3">Loading...</td></tr>);
    }
  }

  render() {
    return (
      <table className="table channel-table">
        <caption>Slack Channel Details</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>Slack Name</th>
            <th>Team</th>
          </tr>
        </thead>

        <tbody>
          {this.displayChannel()}
        </tbody>
      </table>
    );
  }
}

export default Channel;

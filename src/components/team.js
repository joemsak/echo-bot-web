import React, { Component } from 'react';

import Api from '../utils/api';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: undefined,
    };
  }

  componentDidMount() {
    Api.get(`/teams/${this.props.params.id}`, function(json) {
      return this.setState({ team: json.data });
    }.bind(this));
  }

  displayTeam() {
    if(this.state.team) {
      return(
        <tr>
          <td>{this.state.team.id}</td>
          <td>{this.state.team.name}</td>
        </tr>
      );
    } else {
      return(<tr><td colSpan="3">Loading...</td></tr>);
    }
  }

  render() {
    return (
      <table className="table team-table">
        <caption>Slack Team Details</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>Slack Name</th>
          </tr>
        </thead>

        <tbody>
          {this.displayTeam()}
        </tbody>
      </table>
    );
  }
}

export default Team;

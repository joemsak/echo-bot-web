import React, { Component } from 'react';
import { Link } from 'react-router';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: undefined,
    };
  }

  componentDidMount() {
    fetch(`https://echo-chmbr.herokuapp.com/teams/${this.props.params.id}`, {
      mode: 'cors',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
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
      return(<tr><td colspan="3">Loading...</td></tr>);
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

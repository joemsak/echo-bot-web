import React, { Component } from 'react';

import get from '../utils/api';
import TableView from './table-view';

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      team: undefined,
    };
  }

  componentDidMount() {
    get(`/teams/${this.props.params.id}`, (json) => {
      return this.setState({ team: json.data });
    });
  }

  render() {
    return (
      <TableView
        items={[this.state.team]}
        caption="Slack Team Details"
        headers={["id", "name"]}
      />
    );
  }
}

export default Team;

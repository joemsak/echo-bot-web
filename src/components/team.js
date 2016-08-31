import React, { Component } from 'react';

import Api from '../utils/api';
import TableView from './table-view';

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

  render() {
    return (<TableView items={[this.state.team]}
                       caption="Slack Team Details"
                       headers={["id", "name"]} />);
  }
}

export default Team;

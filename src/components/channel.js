import React, { Component } from 'react';

import Api from '../utils/api';
import TableView from './table-view';

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

  render() {
    return (<TableView items={[this.state.channel]}
                       caption="Slack Channel Details"
                       link_root="/teams"
                       link_name="Team"
                       headers={["id", "name", "team_id"]} />
    );
  }
}

export default Channel;

import React, { Component } from 'react';

import get from '../utils/api';
import TableView from './table-view';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }

  componentDidMount() {
    get(`/users/${this.props.params.id}`, (json) => {
      return this.setState({ user: json.data });
    });
  }

  render() {
    return (
      <TableView
        items={[this.state.user]}
        caption="Slack User Details"
        link_root="/channels"
        link_name="Channel"
        headers={["id", "name", "channel_id"]}
      />);
  }
}

export default User;

import React, { Component } from 'react';
import { Link } from 'react-router';

import Api from '../utils/api';
import TableView from './table-view';

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

  render() {
    return (<TableView items={[this.state.user]}
                       caption="Slack User Details"
                       link_root="/channels"
                       link_name="Channel"
                       headers={["id", "name", "channel_id"]} />);
  }
}

export default User;

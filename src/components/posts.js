import React, { Component } from 'react';

import TableView from './table-view';

class Posts extends Component {
  render() {
    return (
      <TableView items={this.props.posts}
        caption="Posts Echoed in Slack"
        link_root="/users"
        link_name="User"
        headers={["id", "url", "user_id"]}
      />
    );
  }
}

export default Posts;

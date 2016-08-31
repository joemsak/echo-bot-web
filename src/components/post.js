import React, { Component } from 'react';

import get from '../utils/api';
import TableView from './table-view';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined,
    };
  }

  componentDidMount() {
    get(`/posts/${this.props.params.id}`, function(json) {
      return this.setState({ post: json.data });
    }.bind(this));
  }

  render() {
    return (<TableView items={[this.state.post]}
                       caption="Post Details"
                       link_root="/users"
                       link_name="User"
                       headers={["id", "url", "user_id"]} />);
  }
}

export default Post;

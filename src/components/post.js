import React, { Component } from 'react';
import { Link } from 'react-router';

import Api from '../utils/api';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined,
    };
  }

  componentDidMount() {
    Api.get(`/posts/${this.props.params.id}`, function(json) {
      return this.setState({ post: json.data });
    }.bind(this));
  }

  displayPost() {
    if(this.state.post) {
      return(
        <tr>
          <td>{this.state.post.id}</td>
          <td>{this.state.post.url}</td>
          <td><Link to={`/users/${this.state.post.user_id}`}>User #{this.state.post.user_id}</Link></td>
        </tr>
      );
    } else {
      return(<tr><td colSpan="3">Loading...</td></tr>);
    }
  }

  render() {
    return (
      <table className="table post-table">
        <caption>Slack Post Details</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>User</th>
          </tr>
        </thead>

        <tbody>
          {this.displayPost()}
        </tbody>
      </table>
    );
  }
}

export default Post;

import React, { Component } from 'react';
import { Link } from 'react-router';

class Posts extends Component {
  render() {
    return (
      <table className="table posts-table">
        <caption>Posts Echoed in Slack</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>User ID</th>
          </tr>
        </thead>

        <tbody>
          {this.props.posts.map(function(post) {
            return(
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.url}</td>
                <td><Link to={`/users/${post.user_id}`}>{`User #${post.user_id}`}</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Posts;

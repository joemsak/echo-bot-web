import React, { Component } from 'react';
import { Link } from 'react-router';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: undefined,
    };
  }

  componentDidMount() {
    fetch(`https://echo-chmbr.herokuapp.com/posts/${this.props.params.id}`, {
      mode: 'cors',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
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
      return(<tr><td colspan="3">Loading...</td></tr>);
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

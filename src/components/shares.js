import React, { Component } from 'react';
import { Link } from 'react-router';
import Api from '../utils/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: [],
    };
  }

  componentDidMount() {
    Api.get("/shares", function(json) {
      return this.setState({ shares: json.data });
    }.bind(this))
  }

  displayShares() {
    if(this.state.shares.length === 0) {
      return "Loading...";
    } else {
      return(
        <table className="table items-table">
          <caption>Shares Echoed in Slack</caption>

          <thead>
            <tr>
              <th>ID</th>
              <th>Type</th>
              <th>User ID</th>
              <th>Post ID</th>
            </tr>
          </thead>

          <tbody>
            {this.state.shares.map(function(share) {
              return(
                <tr key={share.id}>
                  <td>{share.id}</td>
                  <td>{share.type}</td>
                  <td><Link to={`/users/${share.user_id}`}>{`User #${share.user_id}`}</Link></td>
                  <td><Link to={`/posts/${share.post_id}`}>{`Post #${share.post_id}`}</Link></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
  }

  render() {
    return (
      <div className="App">
        {this.displayShares()}
      </div>
    );
  }
}

export default App;

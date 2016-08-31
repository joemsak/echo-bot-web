import React, { Component } from 'react';
import { Link } from 'react-router';

class ItemsTable extends Component {
  render() {
    return (
      <table className="table items-table">
        <caption>Posts Echoed in Slack</caption>

        <thead>
          <tr>
            <th>ID</th>
            <th>URL</th>
            <th>User ID</th>
          </tr>
        </thead>

        <tbody>
          {this.props.items.map(function(item) {
            return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.url}</td>
                <td><Link to={`/users/${item.user_id}`}>{`User #${item.user_id}`}</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default ItemsTable;

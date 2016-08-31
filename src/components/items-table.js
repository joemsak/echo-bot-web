import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <table className="table items-table">
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
                <td>{item.user_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default App;

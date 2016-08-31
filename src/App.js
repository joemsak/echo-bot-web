import React, { Component } from 'react';
import ItemsTable from './components/items-table';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://echo-chmbr.herokuapp.com/posts", {
      mode: 'cors',
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      return this.setState({ posts: json.data });
    }.bind(this));
  }

  displayPosts() {
    if(this.state.posts.length === 0) {
      return "No posts.";
    } else {
      return(<ItemsTable items={this.state.posts} />);
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Echochamber Posts</h1>
        {this.displayPosts()}
      </div>
    );
  }
}

export default App;

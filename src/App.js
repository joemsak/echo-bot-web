import React, { Component } from 'react';
import Posts from './components/posts';

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
      return "Loading...";
    } else {
      return(<Posts posts={this.state.posts} />);
    }
  }

  render() {
    return (
      <div className="App">
        {this.displayPosts()}
      </div>
    );
  }
}

export default App;

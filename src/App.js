import React, { Component } from 'react';
import Posts from './components/posts';

import get from './utils/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    get("/posts", (json) => {
      return this.setState({ posts: json.data });
    });
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

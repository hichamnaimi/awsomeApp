import React, { Component } from 'react';
import fetch from 'cross-fetch';

class App extends Component {
  async componentDidMount() {
    const result = await fetch("http://localhost:4000/music").then(res => res.json());
    console.log(result);
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;

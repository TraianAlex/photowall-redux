import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
      <h1 className="font-face">
      <Link to="/">Photowall</Link>
      </h1>
      </div>
    );
  }
}

export default App;

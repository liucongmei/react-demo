import React, { Component } from 'react';
import logo from './logo.svg';

import Routes from './router'
class App extends Component {
  render() {
    return (
      <div className="wrap">
        <Routes />
      </div>
    );
  }
}

export default App;
 
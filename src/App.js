import React, { Component } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <WelcomeMessage />
        <Menu />
      </div>
    );
  }
}

export default App;

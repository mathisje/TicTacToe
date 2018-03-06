import React, { Component } from 'react';
import BoardContainer from './components/BoardContainer'
import ResetContainer from './components/ResetContainer'
import WinnerContainer from './components/WinnerContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ResetContainer/>
        <div className='flex'>
          <BoardContainer/>
        </div>
        <WinnerContainer/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Button} from 'antd';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
              Hello Otter! <Button>button</Button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;

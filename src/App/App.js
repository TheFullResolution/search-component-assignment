// @flow
import "./App.css"

import React, { Component } from 'react';
import {Input} from '../components/Input/Input'

class App extends Component<{}> {
  render() {
    return (
      <div className="app-container">
        <Input />
      </div>
    );
  }
}

export default App;

// @flow
import "./App.css"

import React, { Component } from 'react';
import {Input} from '../components/Input/Input'
import {Value} from '../components/Value/Value'

class App extends Component<{}> {
  render() {
    return (
      <div className="app-container">
        <Value>
          {(props) =>  <Input {...props}/>}
        </Value>
      </div>
    );
  }
}

export default App;

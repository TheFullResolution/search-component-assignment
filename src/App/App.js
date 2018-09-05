// @flow
import './App.css'

import React, { Component } from 'react'
import { Input } from '../components/Input/Input'
import { Value } from '../components/Value/Value'
import Downshift from 'downshift'
import { Autocomplete } from '../components/Autocomplete/Autocomplete'

class App extends Component<{}> {
  render() {
    return (
      <div className="app-container">
        <Value>
          {({ autoComplete, error, onChange, resetValue, value }) => (
            <Downshift onInputValueChange={onChange} inputValue={value}>
              {({
                getInputProps,
                getItemProps,
                highlightedIndex,
                inputValue,
                isOpen,
                clearSelection,
              }) => {
                const resetCombine = () => {
                  resetValue()
                  clearSelection()
                }
                return (
                  <div className="app-search-wrapper">
                    <Input
                      {...{ getInputProps, inputValue, reset: resetCombine }}
                    />
                    <Autocomplete
                      {...{
                        autoComplete,
                        getItemProps,
                        highlightedIndex,
                        inputValue,
                        show: isOpen && !error && inputValue.length > 2
                      }}
                    />
                  </div>
                )
              }}
            </Downshift>
          )}
        </Value>
      </div>
    )
  }
}

export default App

// @flow
import './App.css'

import React, { Component } from 'react'
import { Input } from '../components/Input/Input'
import { Value } from '../components/Value/Value'
import Downshift from 'downshift'
import Highlighter from 'react-highlight-words'

class App extends Component<{}> {
  render() {
    return (
      <div className="app-container">
        <Value>
          {({ onChange, value, resetValue, autoComplete }) => (
            <Downshift onInputValueChange={onChange} inputValue={value}>
              {({
                getInputProps,
                getItemProps,
                highlightedIndex,
                inputValue,
                isOpen,
                reset,
                selectedItem
              }) => {
                const resetCombine = () => {
                  resetValue()
                  reset()
                }
                return (
                  <div>
                    <Input
                      {...{ getInputProps, inputValue, reset: resetCombine }}
                    />
                    {isOpen && inputValue ? (
                      <div style={{ border: '1px solid #ccc' }}>
                        {autoComplete.map(({ searchterm }, index) => (
                          <div
                            {...getItemProps({ item: searchterm })}
                            key={searchterm}
                            style={{
                              backgroundColor:
                                highlightedIndex === index ? 'gray' : 'white',
                              fontWeight:
                                selectedItem === searchterm ? 'bold' : 'normal'
                            }}
                          >
                            <Highlighter
                              highlightClassName="YourHighlightClass"
                              searchWords={[inputValue]}
                              autoEscape={true}
                              textToHighlight={searchterm}
                            />
                          </div>
                        ))}
                      </div>
                    ) : null}
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

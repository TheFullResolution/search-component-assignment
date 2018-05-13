// @flow
import './Autocomplete.css'

import React from 'react'
import Highlighter from 'react-highlight-words'
import type { AutoCompleteItem } from '../Value/Value'
import { TransitionGroup } from 'react-transition-group'
import { DropDownAnimation } from '../Animations/DropDownAnimation'
import { FadeAnimation } from '../Animations/FadeAnimation'

type Props = {
  autoComplete: AutoCompleteItem[],
  getItemProps: (params: any) => any,
  highlightedIndex: number,
  show: boolean,
  inputValue: string
}

export const Autocomplete = ({
  autoComplete,
  getItemProps,
  highlightedIndex,
  inputValue,
  show
}: Props) => (
  <div className="autocomplete-container">
    <TransitionGroup>
      {show ? (
        <DropDownAnimation>
          <div className="autocomplete-wrapper">
            <TransitionGroup>
              {autoComplete.map((item, index) => (
                <FadeAnimation key={item.searchterm}>
                  <div
                    {...getItemProps({ item: item.searchterm })}
                    className={`autocomplete-item ${
                      highlightedIndex === index
                        ? 'autocomplete-highlighted'
                        : ''
                    }`}
                  >
                    <Highlighter
                      highlightClassName="autocomplete-highlight"
                      searchWords={[inputValue]}
                      className="autocomplete-searchterm"
                      autoEscape={true}
                      textToHighlight={item.searchterm}
                    />
                    <span> ({item.nrResults})</span>
                  </div>
                </FadeAnimation>
              ))}
            </TransitionGroup>
          </div>
        </DropDownAnimation>
      ) : null}
    </TransitionGroup>
  </div>
)

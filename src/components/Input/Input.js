// @flow
import './Input.css'
import React from 'react'
import { TransitionGroup } from 'react-transition-group'
import { FadeAnimation } from '../Animations/FadeAnimation'

type Props = {
  getInputProps: (params: any) => any,
  inputValue: string,
  reset: () => void
}

export const Input = (props: Props) => {
  return (
    <div className="input-container">
      <input
        {...props.getInputProps({
          'aria-label': 'Zoeken',
          placeholder: 'Zoeken',
          className: 'input-element',
          style: {
            backgroundImage: `url(${process.env.PUBLIC_URL ||
              ''}/images/magnifying-glass.svg)`
          }
        })}
      />
      <TransitionGroup className="input-reset-container">
        {props.inputValue && (
          <FadeAnimation>
            <button
              onClick={props.reset}
              className="input-reset"
              aria-label="Reset"
            >
              <img
                src={`${process.env.PUBLIC_URL || ''}/images/cancel.svg`}
                alt="Reset"
              />
            </button>
          </FadeAnimation>
        )}
      </TransitionGroup>
    </div>
  )
}

Input.displayName = 'Input'

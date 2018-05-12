// @flow
import './Input.css'
import React from 'react'
import type { ValueRenderProps } from '../Value/Value'
import { TransitionGroup } from 'react-transition-group'
import { FadeAnimation } from '../Animations/FadeAnimation'

type Props = ValueRenderProps

export const Input = (props: Props) => {
  const onChange = (ev: SyntheticInputEvent<HTMLInputElement>) => {
    props.onChange(ev.target.value)
  }
  return (
    <div className="input-container">
      <input
        aria-label="Zoeken"
        className="input-element"
        placeholder="Zoeken"
        value={props.state.value}
        onChange={onChange}
        type="text"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL ||
            ''}/images/magnifying-glass.svg)`
        }}
      />
      <TransitionGroup className="input-reset-container">
        {props.state.value && (
          <FadeAnimation>
            <button
              onClick={props.resetValue}
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

// @flow
import './Input.css'
import React from 'react'

type Props = {}

export const Input = (props: Props) => (
  <div className="input-container">
    <input
      aria-label="Zoeken"
      className="input-element"
      placeholder="Zoeken"
      type="text"
    />
  </div>
)

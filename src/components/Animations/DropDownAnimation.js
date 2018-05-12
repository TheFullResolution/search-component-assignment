// @flow
import './DropDownAnimation.css'

import React from 'react'
import type { Node } from 'react'
import { CSSTransition } from 'react-transition-group'

type Timeout = {
  enter: number,
  exit: number
}

type Props = {
  timeout?: number | Timeout,
  children: Node
}

export const DropDownAnimation = ({ children, timeout, ...props }: Props) => (
  <CSSTransition
    {...props}
    classNames={{
      enter: 'dropDownEnter',
      enterActive: 'dropDownEnterActive',
      exit: 'dropDownExit',
      exitActive: 'dropDownExitActive'
    }}
    timeout={timeout ? timeout : 400}
  >
    {children}
  </CSSTransition>
)

DropDownAnimation.displayName = 'DropDownAnimation'

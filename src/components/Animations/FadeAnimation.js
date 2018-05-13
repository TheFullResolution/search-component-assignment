// @flow


import './FadeAnimation.css'

import React from 'react'
import {CSSTransition} from 'react-transition-group'
import type { Node } from 'react'

type Timeout = {
  enter: number,
  exit: number
}

type Props = {
  timeout?: number | Timeout,
  children: Node
}

export const FadeAnimation = ({children, timeout, ...props}: Props) => (
  <CSSTransition
    {...props}
    classNames={{
      enter: 'fadeEnter',
      enterActive: 'fadeEnterActive',
      exit: 'fadeExit',
      exitActive: 'fadeExitActive',
    }}
    timeout={timeout ? timeout : 500}
  >
    {children}
  </CSSTransition>
)

FadeAnimation.displayName = 'FadeAnimation'

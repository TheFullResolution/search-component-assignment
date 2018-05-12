// @flow

import { Component } from 'react'
import type { Node } from 'react'

const initialState = {
  pristine: false,
  value: ''
}

type State = typeof initialState

export type ValueRenderProps = {
  onChange: (value: string) => void,
  state: State,
  resetValue: () => void
}

type Props = {
  children: (params: ValueRenderProps) => Node
}

export class Value extends Component<Props, State> {
  state = initialState
  render() {
    return this.props.children({
      onChange: this.onChange,
      resetValue: this.resetValue,
      state: this.state
    })
  }

  onChange = (value: string) => {
    this.setState((prevState: State) => updateValue(value, prevState))
  }

  resetValue = () => {
    this.setState(() => ({ value: '' }))
  }
}

const updateValue = (value: string, prevState: State) => ({
  ...(!prevState.pristine ? { pristine: true } : {}),
  value
})

// @flow

import { Component } from 'react'
import type { Node } from 'react'
import axios from 'axios'

export type AutoCompleteItem = {
  searchterm: string,
  nrResults: number
}

type State = {
  autoComplete: AutoCompleteItem[],
  error: boolean,
  pristine: boolean,
  value: string
}

export type ValueRenderProps = {
  onChange: (value: string) => void,
  resetValue: () => void,
  state: State
}

type Props = {
  children: (params: ValueRenderProps) => Node
}

export class Value extends Component<Props, State> {
  state = {
    autoComplete: [],
    error: false,
    pristine: false,
    value: ''
  }
  render() {
    return this.props.children({
      onChange: this.onChange,
      resetValue: this.resetValue,
      state: this.state
    })
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.value !== this.state.value && this.state.value.length > 2) {
      this.updateList()
    }
  }

  onChange = (value: string) => {
    this.setState((prevState: State) => updateValue(value, prevState))
  }

  resetValue = () => {
    this.setState(() => ({ value: '' }))
  }

  updateList = async () => {
    const fetchedData = await fetchData(this.state.value)

    if (fetchedData.error) {
      this.setState(() => ({ error: true }))
    } else if (fetchedData.suggestions) {
      this.setState((prevState: State) => ({
        autoComplete: fetchedData.suggestions
      }))
    }
  }
}

const updateValue = (value: string, prevState: State) => ({
  ...(!prevState.pristine ? { pristine: true } : {}),
  value
})

type FetchDataReturn =
  | {| suggestions: AutoCompleteItem[] |}
  | {| error: boolean |}

const fetchData = (value: string): FetchDataReturn => {
  return axios
    .get(`/search?q=${value}`)
    .then(response => ({ suggestions: response.data.suggestions }))
    .catch(error => ({ error: true }))
}

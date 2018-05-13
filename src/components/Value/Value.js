// @flow

import { Component } from 'react'
import type { Node } from 'react'
import axios from 'axios'
import matchSorter from 'match-sorter'
import throttle from 'lodash.throttle'
import equal from 'fast-deep-equal'

export type AutoCompleteItem = {
  searchterm: string,
  nrResults: number
}

interface State {
  autoComplete: AutoCompleteItem[];
  error: boolean;
  suggestions: AutoCompleteItem[];
  value: string;
}

export interface ValueRenderProps extends State {
  onChange: (value: string) => void;
  resetValue: () => void;
}

type Props = {
  children: (params: ValueRenderProps) => Node
}

export class Value extends Component<Props, State> {
  state = {
    suggestions: [],
    autoComplete: [],
    error: false,
    value: ''
  }
  render() {
    return this.props.children({
      ...this.state,
      onChange: this.onChange,
      resetValue: this.resetValue
    })
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.value !== this.state.value && this.state.value.length > 2) {
      this.throttledFetchSuggestions()
    }
  }

  onChange = (value: string) => {
    this.setState(
      (prevState: State) => ({ value }),
      () => {
        if (value) {
          this.updateAutoComplete()
        }
      }
    )
  }

  resetValue = () => {
    this.setState(() => ({ value: '' }))
  }

  throttledFetchSuggestions = throttle(
    () => {
      this.fetchSuggestions()
    },
    500,
    { leading: true }
  )

  fetchSuggestions = async () => {
    const fetchedData = await fetchData(this.state.value)

    if (fetchedData.error) {
      this.setState(() => ({ error: true }))
    } else if (
      fetchedData.suggestions &&
      !equal(this.state.suggestions, fetchedData.suggestions)
    ) {
      this.setState(
        () => ({
          suggestions: fetchedData.suggestions
        }),
        () => {
          this.updateAutoComplete()
        }
      )
    }
  }

  updateAutoComplete = () => {
    const autoComplete = matchSorter(this.state.suggestions, this.state.value, {
      keys: ['searchterm']
    })

    this.setState(() => ({
      autoComplete
    }))
  }
}

type FetchDataReturn =
  | {| suggestions: AutoCompleteItem[] |}
  | {| error: boolean |}

const fetchData = (value: string): FetchDataReturn => {
  return axios
    .get(`/search?q=${value}`)
    .then(response => ({ suggestions: response.data.suggestions }))
    .catch(error => ({ error: true }))
}

// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import {Autocomplete} from './Autocomplete.js'

const props = {
  autoComplete: [
    { searchterm: 'test', nrResults: 10 },
    { searchterm: 'try', nrResults: 10 },
    { searchterm: 'another', nrResults: 10 }
  ],
  getItemProps: params => params,
  highlightedIndex: 0,
  show: true,
  inputValue: 'test'
}

storiesOf('Autocomplete', module).add('default', () => <Autocomplete {...props}/>)

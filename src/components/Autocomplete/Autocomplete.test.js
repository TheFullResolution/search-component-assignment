// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import { Autocomplete } from './Autocomplete.js'

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

it('Autocomplete: default', () => {
  const component = renderer.create(<Autocomplete {...props} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

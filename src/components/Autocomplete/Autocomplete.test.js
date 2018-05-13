// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import {Autocomplete} from './Autocomplete.js'

it('Autocomplete: default', () => {
  const component = renderer.create(<Autocomplete />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

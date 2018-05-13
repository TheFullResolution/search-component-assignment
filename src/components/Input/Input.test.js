// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from './Input'

const props = {
  getInputProps: params => params,
  inputValue: 'test',
  reset: () => {}
}

it('Input: default', () => {
  const component = renderer.create(<Input {...props} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

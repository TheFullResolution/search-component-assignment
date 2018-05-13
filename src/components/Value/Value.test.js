// @flow
import React from 'react'
import renderer from 'react-test-renderer'
import { Value } from './Value.js'

it('Value: default', () => {
  const component = renderer.create(
    <Value>{props => <div>{JSON.stringify(props)}</div>}</Value>
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

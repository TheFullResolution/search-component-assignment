
import React from 'react'
import renderer from 'react-test-renderer'
import {Test} from './TEst.js'

it('Test: default', () => {
  const component = renderer.create(<Test />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

// @flow
import type { ValueRenderProps } from '../Value/Value'
import React from 'react'
import renderer from 'react-test-renderer'
import { Input } from './Input'

const props: ValueRenderProps = {
  state: {
    value: '',
    pristine: true
  },
  onChange: value => {},
  resetValue: () => {}
}

const propsFilled: ValueRenderProps = {
  state: {
    value: 'test',
    pristine: false
  },
  onChange: value => {},
  resetValue: () => {}
}

it('Input: default', () => {
  const component = renderer.create(<Input {...props} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

it('Input: with Value', () => {
  const component = renderer.create(<Input {...propsFilled} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

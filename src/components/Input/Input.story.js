//@flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from './Input.js'
import type { ValueRenderProps } from '../Value/Value'

const props: ValueRenderProps = {
  value: '',
  onChange: value => {},
  resetValue: () => {}
}

storiesOf('Input', module).add('default', () => <Input {...props} />)

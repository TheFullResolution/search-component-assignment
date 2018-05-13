//@flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from './Input.js'
import type { ValueRenderProps } from '../Value/Value'

const props: ValueRenderProps = {
  state: {
    value: '',
    pristine: true
  },
  onChange: value => {},
  resetValue: () => {}
}

storiesOf('Input', module).add('default', () => <Input {...props} />)

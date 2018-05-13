//@flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Input } from './Input.js'

const props = {
  getInputProps: params => params,
  inputValue: 'test',
  reset: () => {}
}

storiesOf('Input', module).add('default', () => <Input {...props} />)

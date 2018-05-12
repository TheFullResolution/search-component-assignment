import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import {Input} from './Input.js'

storiesOf('Input', module).add('default', () => <Input />)

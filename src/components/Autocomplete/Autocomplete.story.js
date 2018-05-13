// @flow

import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import {Autocomplete} from './Autocomplete.js'

storiesOf('Autocomplete', module).add('default', () => <Autocomplete />)

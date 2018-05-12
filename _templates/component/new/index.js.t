---
to: src/components/<%= name %>/<%= name %>.js
---
<% const comp = h.inflection.undasherize(name) -%>
// @flow

<% if(locals.stateful) { -%>
import React, { Component } from 'react'

type Props = {

}

type State = {

}

export class <%= comp %> extends Component<Props, State> {
  render() {
    return <div>edit me</div>
  }
}
<% } else { -%>
import React from 'react'

type Props = {

}

export const <%= comp %> = (props: Props) => <div>edit me</div>
<% } -%>

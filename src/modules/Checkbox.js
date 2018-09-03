import React, { Component } from 'react';
import {ListItem} from '../styles/layout';
import {Label, HiddenCheckBox, StyledCheckBox} from '../styles/forms';

export class Checkbox extends Component {

  onUpdate(e) {
    this.props.onUpdate({
      name: this.props.children,
      checked: e.target.checked
    })
  }

  render() {
    return (
      <ListItem>
        <Label>
          {this.props.children}
          <HiddenCheckBox onChange={this.onUpdate.bind(this)} />
          <StyledCheckBox />
        </Label>
      </ListItem>
    )
  }
}

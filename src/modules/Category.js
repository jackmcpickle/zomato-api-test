import React, { Component } from 'react';
import {ListItem} from '../styles/layout';
import {Label, HiddenCheckBox, StyledCheckBox} from '../styles/forms';



export class Category extends Component {
  render() {
    return (
      <ListItem>
        <Label>
          {this.props.children}
          <HiddenCheckBox />
          <StyledCheckBox/>
        </Label>
      </ListItem>
    )
  }
}

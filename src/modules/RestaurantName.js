import React, { Component } from 'react';
import {RestName} from '../styles/layout';

export class RestaurantName extends Component {

  onUpdate(e) {
    this.props.onUpdate({
      id: this.props.id,
    })
  }

  render() {
    return (
      <RestName onClick={this.onUpdate.bind(this)}>{this.props.children}</RestName>
    )
  }
}

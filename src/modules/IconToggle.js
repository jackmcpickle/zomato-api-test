
import React, {Component} from 'react';

import tick from '../images/check.svg';
import cross from '../images/times.svg';

export class IconToggle extends Component {

  getIcon() {
    return this.props.enabled ? tick : cross;
  }

  render() {
    return <img src={this.getIcon()} className="icon" />
  }

}

import React, { Component } from 'react';
import {SmallHeading} from '../styles/type';
import {StyledRange} from '../styles/forms';
// import {BLUE} from '../styles/colours';

const priceMarks = {
  1: '$',
  2: '$$',
  3: '$$$',
  4: '$$$$'
}

const ratingMarks = {
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5'
}

export class Filters extends Component {

  render() {
    return (
      <div>
        <SmallHeading>Rating</SmallHeading>
        <StyledRange min={1} max={5} marks={ratingMarks} step={1} defaultValue={[3,5]} />
        <SmallHeading>Price</SmallHeading>
        <StyledRange min={1} max={4} step={1} marks={priceMarks} defaultValue={[2,3]} />
      </div>
    );
  }
}

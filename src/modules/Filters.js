import React, { Component } from 'react';
import {SmallHeading} from '../styles/type';
import {StyledRange} from '../styles/forms';
import {appAction} from '../actions/appAction';
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

  constructor(props) {
    super(props);
    this.price = React.createRef();
    this.rating = React.createRef();
  } 
  

  componentDidMount() {
    appAction.emit('rating:update', this.rating.current.props.defaultValue)
    appAction.emit('price:update', this.price.current.props.defaultValue)
  }

  updateRating(data) {
    appAction.emit('rating:update', data)
  }
  
  updatePrice(data) {
    appAction.emit('price:update', data)
  }

  render() {
    return (
      <div>
        <SmallHeading>Rating</SmallHeading>
        <StyledRange ref={this.rating} min={1} max={5} onChange={this.updateRating} marks={ratingMarks} step={1} defaultValue={[3,5]} />
        <SmallHeading>Price</SmallHeading>
        <StyledRange ref={this.price} min={1} max={4} onChange={this.updatePrice} step={1} marks={priceMarks} defaultValue={[2,3]} />
      </div>
    );
  }
}

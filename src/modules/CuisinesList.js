import React, { Component } from 'react';
import {zomatoGet} from '../utils/api';
import {Category} from './Category';
import {List} from '../styles/layout';

const ADELAIDE_CITY_ID = '297';

export class CuisinesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cuisines: []
    }
  }

  componentDidMount() {
    zomatoGet(`cuisines?city_id=${ADELAIDE_CITY_ID}`)
    .then( data => this.setState({cuisines: data.cuisines}) )
  }

  mapCuisines() {
    return this.state.cuisines.slice(0, this.props.limit).map( (cat) =>
      <Category key={cat.cuisine.cuisine_id}>{cat.cuisine.cuisine_name}</Category>
    );
  }

  render() {
    const cuisinesList = this.mapCuisines();
    return (
      <List>
        {cuisinesList}
      </List>
    );
  }
}


import React, { Component } from 'react';
import {zomatoGet} from '../utils/api';
import {Category} from './Category';
import {List} from '../styles/layout';

export class CategoryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    zomatoGet('categories')
    .then( data => this.setState({
      categories: data.categories
    }) )
  }

  mapCategories() {
    return this.state.categories.slice(0, this.props.limit).map( (cat) =>
      <Category key={cat.categories.id}>{cat.categories.name}</Category>
    );
  }

  render() {
    const categoriesList = this.mapCategories();
    return (
      <List>
        {categoriesList}
      </List>
    );
  }
}


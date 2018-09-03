import React, { Component } from 'react';
import { Store } from '../stores/appStore';
import { Checkbox } from './Checkbox';
import { List } from '../styles/layout';
import { appAction } from '../actions/appAction';

export class CategoryList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      categories: Store.categories
    }
  }

  componentDidMount() {
    appAction.on('store:updated', this.update.bind(this))
  }

  componentWillUnmount() {
    appAction.off('store:updated', this.update.bind(this))
  }

  update(data) {
    this.setState({
      categories: Store.categories
    })
  }

  onUpdate(data) {
    appAction.emit('category:update', data)
  }

  mapCategories() {
    return this.state.categories.slice(0, this.props.limit).map( (item) =>
      <Checkbox key={item.categories.id} id={item.categories.id} onUpdate={this.onUpdate}>{item.categories.name}</Checkbox>
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


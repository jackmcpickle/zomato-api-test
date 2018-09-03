import React, { Component } from 'react';
import {Checkbox} from './Checkbox';
import {List} from '../styles/layout';
import {appAction} from '../actions/appAction';
import {Store} from '../stores/appStore';

export class CuisinesList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      cuisines: Store.cuisines
    }
  }

  componentDidMount() {
    appAction.on('store:updated', this.update.bind(this))
  }

  componentWillUnmount() {
    appAction.off('store:updated', this.update)
  }

  update(data) {
    this.setState({
      cuisines: Store.cuisines
    })
  }

  onUpdate(data) {
    appAction.emit('cuisines:update', data)
  }

  mapCuisines() {
    return this.state.cuisines.slice(0, this.props.limit).map( (item) =>
      <Checkbox key={item.cuisine.cuisine_id} onUpdate={this.onUpdate} id={item.cuisine.cuisine_id}>{item.cuisine.cuisine_name}</Checkbox>
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


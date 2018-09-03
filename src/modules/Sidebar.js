import React, {Component} from 'react';
import { appAction } from '../actions/appAction';
import {Store} from '../stores/appStore';
import {List} from '../styles/layout';
import {SmallListHeading} from '../styles/type';
import {RestaurantName} from './RestaurantName';


export class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurants: Store.restaurants
    }
  }

  componentDidMount() {
    appAction.on('store:updated', this.update.bind(this))
  }

  componentWillUnmount() {
    appAction.off('store:updated', this.update.bind(this))
  }

  update() {
    this.setState({
      restaurants: Store.restaurants
    })
  }

  selectRestaurant(data) {
    appAction.emit('restaurant:select', data)
  }

  listRestaurants() {
    return this.state.restaurants.map( (item) => 
      <RestaurantName onUpdate={this.selectRestaurant} id={item.restaurant.id} key={item.restaurant.id}>{item.restaurant.name}</RestaurantName>
    )
  }

  render() {
    return (
      <div>
        <SmallListHeading>Results</SmallListHeading>
        <List>
          {this.listRestaurants()}
        </List>
      </div>
    );
  }
} 
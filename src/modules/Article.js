import React, {Component} from 'react';
import {RestaurantShow, Grid} from '../styles/layout';
import {Title, SubTitle, SmallHeading} from '../styles/type';
import { appAction } from '../actions/appAction';
import {Store} from '../stores/appStore';
import {IconToggle} from './IconToggle';

export class Article extends Component {

  constructor(props){
    super(props)
    this.state = {
      restaurant: null
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
      restaurant: Store.restaurant
    })
  }

  render() {
    console.log(this.state.restaurant);
    
    if (this.state.restaurant) {
      const rest = this.showRestautant();
      return (rest)
    } else {
      return (<span></span>)
    }
  }

  showImage() {
    return this.state.restaurant.featured_image ? <Grid size="6">
      <img src={this.state.restaurant.featured_image} alt={this.state.restaurant.name} />
    </Grid> : ''
  }

  showDelivery() {
    return <IconToggle enabled={this.state.restaurant.has_online_delivery === 1} />;
  }

  showRestautant() {
    const rest = this.state.restaurant;
    return (
        <RestaurantShow>
          {this.showImage()}
          <Grid size="6" grow="true" style={{padding: '1rem 2rem'}}>
            <Title>{rest.name}</Title>
            <SubTitle>{rest.location.address}</SubTitle>
            <p>{this.showDelivery()} Delivery Available</p>
            <SmallHeading>Cuisines</SmallHeading>
            <p></p>
            <SmallHeading>Phone number</SmallHeading>
            <p></p>

            <SmallHeading>Opening Hours</SmallHeading>
            <p></p>
          </Grid>
        </RestaurantShow>
      );
  }
} 
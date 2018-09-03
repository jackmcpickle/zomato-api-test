import React, {Component} from 'react';
import {Row, Grid} from '../styles/layout';
import {Title} from '../styles/type';
import { appAction } from '../actions/appAction';
import {Store} from '../stores/appStore';

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

  update(data) {
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
      return (<span>No restaurant loaded...</span>)
    }
  }

  showRestautant() {
    const rest = this.state.restaurant;
    return (
        <Row>
        <Grid size="6">
          <img src={rest.featured_image} alt={rest.name} />
        </Grid>
        <Grid size="6">
          <Title>{rest.name}</Title>
          <p>{rest.location.address}</p>
          </Grid>
        </Row>
      );
  }
} 
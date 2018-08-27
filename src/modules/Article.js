import React, {Component} from 'react';
import { zomatoGet } from '../utils/api';
import {Row, Grid} from '../styles/layout';
import {Title} from '../styles/type';


export class Article extends Component {

  constructor(props){
    super(props)
    this.state = {
      restaurant: null
    }
  }

  componentDidMount() {
    zomatoGet(`restaurant?res_id=16774318`).then( data => this.setState({ restaurant: data }))
  }

  render() {
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
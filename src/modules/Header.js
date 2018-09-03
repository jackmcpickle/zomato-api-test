import React, { Component } from 'react';
import {SmallHeading} from '../styles/type';
import {HeaderWrap, Grid, HeaderLock} from '../styles/layout';
import {CategoryList} from './CategoryList';
import {CuisinesList} from './CuisinesList';
import {Filters} from './Filters';
import { appAction } from '../actions/appAction';
import {Store} from '../stores/appStore';

export class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lockFilters: Store.fetching
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
      lockFilters: Store.fetching
    })
  }

  renderLock() {
    return this.state.lockFilters ? <HeaderLock></HeaderLock> : '';
  }

  render() {
    return (
      <HeaderWrap>
        {this.renderLock()}
        <Grid size="3">
          <SmallHeading>Category</SmallHeading>
          <CategoryList limit="5"></CategoryList>
        </Grid>
        <Grid size="6">
          <SmallHeading>Cuisines</SmallHeading>
          <CuisinesList limit="12"></CuisinesList>
        </Grid>
        <Grid size="3">
          <Filters/>
        </Grid>
      </HeaderWrap>
    )
  }
}

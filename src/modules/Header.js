import React, { Component } from 'react';
import {SmallHeading} from '../styles/type';
import {HeaderWrap, Grid} from '../styles/layout';
import {CategoryList} from './CategoryList';
import {CuisinesList} from './CuisinesList';

export class Header extends Component {
  render() {
    return (
      <HeaderWrap>
        <Grid size="3">
          <SmallHeading>Category</SmallHeading>
          <CategoryList limit="5"></CategoryList>
        </Grid>
        <Grid size="6">
          <SmallHeading>Cuisines</SmallHeading>
          <CuisinesList limit="12"></CuisinesList>
        </Grid>
        <Grid size="3">
          here
        </Grid>
      </HeaderWrap>
    )
  }
}

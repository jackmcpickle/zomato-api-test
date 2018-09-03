import React from 'react';
import {Row, Grid, SideBarStyle} from '../styles/layout';
import { Sidebar } from './Sidebar';
import { Article } from './Article';


export const Body = () => (
  <Row>
    <SideBarStyle size="4">
      <Sidebar/>
    </SideBarStyle>
    <Grid size="8">
      <Article/>
    </Grid>
  </Row>
);

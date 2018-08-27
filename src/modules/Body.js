import React from 'react';
import {Row, Grid} from '../styles/layout';
import { Sidebar } from './Sidebar';
import { Article } from './Article';


export const Body = () => (
  <Row>
    <Grid size="4">
      <Sidebar/>
    </Grid>
    <Grid size="8">
      <Article/>
    </Grid>
  </Row>
);

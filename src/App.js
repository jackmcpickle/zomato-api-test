import React, { Component } from 'react';
import './index.css';
import {Header} from './modules/Header';
import {Body} from './modules/Body';
import {Container} from './styles/layout';

class App extends Component {
  render() {
    return (
      <Container>
        <Header></Header>
        <Body></Body>
      </Container>
    );
  }
}

export default App;

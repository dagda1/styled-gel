import React, { Component } from 'react';
import XRay from 'react-x-ray';
import styled from 'styled-components';
import { Grid, Row, Col, Bar } from './components';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      xray: false
    };
  }

  toggleXRay = () => {
    console.log(this.state.xray);
    this.setState({
      xray: !this.state.xray
    });
  }

  render() {
    const {
      xray
    } = this.state;

    return (
      <XRay
        disabled={!xray}
        style={{ transition: 'background-color .3s ease-out' }}
      >
        <Grid>
          <Row>
            <Col width={1}>
              <Bar>1 Column 100%</Bar>
            </Col>
          </Row>
        </Grid>
        <button type="button" onClick={this.toggleXRay}>Toggle XRAY</button>
      </XRay>
    );
  }
}

export default App;

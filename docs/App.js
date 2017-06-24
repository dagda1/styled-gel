import React, { Component } from 'react';
import XRay from 'react-x-ray';
import { Grid, Row, Col } from '../src/components';
import { Bar } from './Bar/Bar';

console.log(Col);

class App extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      xray: false
    };
  }

  toggleXRay = () => {
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
            <Col
              my={1}
            >
              <Bar>100%</Bar>
            </Col>
          </Row>
          <Row>
            <Col
              my={1}
              xs={12}
              md={6}
            >
              <Bar>50%</Bar>
            </Col>
            <Col
              my={1}
              xs={12}
              md={6}
            >
             <Bar>50%</Bar>
            </Col>
          </Row>
          <Row>
            <Col
              my={1}
              xs={12}>
              <button type="button" onClick={this.toggleXRay}>Toggle XRAY</button>
            </Col>
          </Row>
        </Grid>
      </XRay>
    );
  }
}

export default App;

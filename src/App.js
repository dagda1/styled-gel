import React, { Component } from 'react';
import XRay from 'react-x-ray';
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
            <Col
              px={2}
              my={1}
              width={1}
            >
              <Bar>100%</Bar>
            </Col>
          </Row>
          <Row>
            <Col
              width={[1, 1/2]}
              my={1}
              px={2}
            >
              <Bar>50%</Bar>
            </Col>
            <Col
              my={1}
              width={[1, 1/2]}
              px={2}
            >
             <Bar>50%</Bar>
            </Col>
          </Row>
          <Row>
            <Col
              my={1}
              px={2}
              width={1}>
              <button type="button" onClick={this.toggleXRay}>Toggle XRAY</button>
            </Col>
          </Row>
        </Grid>
      </XRay>
    );
  }
}

export default App;

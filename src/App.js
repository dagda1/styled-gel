import React, { Component } from 'react';
import XRay from 'react-x-ray';
import { Grid, Row, Col, Bar } from './components';

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
            <Col xs={12} sm={3} md={4} lg={5} xl={6}>Fuck</Col>
          </Row>
        </Grid>
      </XRay>
    );
  }
}

export default App;

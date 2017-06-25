const demo = `
  <Grid>
    <Row>
      <Col my={1}>
        <Bar>100% All devices</Bar>
      </Col>
    </Row>
    <Row>
      <Col xs={12} md={6} my={1}>
        <Bar>50% tablet - 100% mobile</Bar>
      </Col>
      <Col xs={12} md={6} my={1}>
        <Bar>50% tablet - 100% mobile</Bar>
      </Col>
    </Row>
    <Row flush>
      <Col xs={12} md={6} my={1}>
        <Bar>Flush column - no gutters 50%</Bar>
      </Col>
      <Col xs={12} md={6} my={1}>
        <Bar>Flush column - no gutters 50%</Bar>
      </Col>
    </Row>
  </Grid>
`
export default demo;

## Styled-Gel

[![Build Status](https://travis-ci.org/dagda1/styled-gel.svg?branch=master)](https://travis-ci.org/dagda1/styled-gel)

[BBC Gel Grid](https://github.com/bbc/gel-grid) over [Styled Components](https://www.styled-components.com/).

Lightweight bootstrap like grid system that uses [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

If like me, you still think about grids in terms of bootstrap, `Row`, `Col`, `xs`, `sm`, `md`, `lg` and `xl`, then look no further.

```sh
npm i styled-gel
```

### Usage

```js
import { Grid, Row, Col } from 'styled-gel';

export const MyComponent = () =>
  <Grid>
    <Row>
      <Col xs={12} md={3}>One</Col>
      <Col xs={12} md={3}>Two</Col>
      <Col xs={12} md={3}>Three</Col>
      <Col xs={12} md={3}>Four</Col>
    </Row>
  </Grid>;
```

### Dependencies
Built on top of and much `props` to:

- [styled-components](https://github.com/styled-components/styled-components)
- [styled-system](https://github.com/jxnblk/styled-system)

MIT License

import { injectGlobal } from 'styled-components';

// eslint-disable-next-line
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export { Grid } from './Grid/Grid';
export { Row } from './Row/Row';
export { Col } from './Col/Col';
export { Bar } from './Bar/Bar';

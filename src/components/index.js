import { injectGlobal } from 'styled-components';

if(process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line
  injectGlobal`
    html {
      box-sizing: border-box;
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;
}

export { breakPoints } from './constants';
export { media } from '../util/styles';

export { Grid } from './Grid/Grid';
export { Row } from './Row/Row';
export { Col } from './Col/Col';
export { Bar } from './Bar/Bar';

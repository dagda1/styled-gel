import { injectGlobal } from 'styled-components';

if (process.env.NODE_ENV !== 'test') {
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

export {
  breakpoints,
  default as breakPointValues,
  defaultColumns,
  gutterWidth
} from './constants';
export { media } from '../util/styles';
export { colAdapter } from '../util/colAdapter';

export { ThemeHOC } from './HOC/Theme';
export { Grid } from './Grid/Grid';
export { Row } from './Row/Row';
export { default as Col } from './Col/Col';

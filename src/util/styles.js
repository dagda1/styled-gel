import { css } from 'styled-components';
import { breakpoints } from '../components';

export const media = Object.keys(breakpoints)
  .reduce((acc, key) => {
      acc[key] = (...args) => css`
      @media (min-width: ${breakpoints[key]}) {
        ${ css(...args) }
      }
    `;

    return acc;
  }, {});

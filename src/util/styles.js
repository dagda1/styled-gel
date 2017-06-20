import { css } from 'styled-components';
import { breakPoints } from '../components';

export const media = Object.keys(breakPoints)
  .reduce((acc, key) => {
      acc[key] = (...args) => css`
      @media (min-width: ${breakPoints[key]}) {
        ${ css(...args) }
      }
    `;

    return acc;
  }, {});

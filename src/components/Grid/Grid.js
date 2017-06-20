import styled from 'styled-components';
import { media } from '..';

export const Grid = styled.div`
  max-width: 1008px;
  margin: 0 auto;
  padding-right: 8px;
  padding-left: 8px;
  ${media.xs`
     padding-left: 16px;
     padding-right: 16px;
  `}
  ${media.xl`
     max-width: 1280px;
  `}
`;

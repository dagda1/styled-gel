import styled from 'styled-components';
import { media } from '..';
import { key } from 'styled-theme';
import { breakpoints } from '../constants';

export const Grid = styled.div`
  position: relative;
  max-width: 1008px;
  margin: 0 auto;
  padding-right: 7.5px;
  padding-left: 7.5px;
  background-color: ${key('bodyBg', 'inherit')};
  color: ${key('textColor', 'inherit')};
  fontFamily: ${key('fontFamily', 'inherit')};
  ${media.sm`
    padding-left: 15px;
    padding-right: 15px;
  `} ${media.lg`
    max-width: ${breakpoints.lg};
  `} ${media.xl`
    max-width: ${breakpoints.xl};
  `};
`;

Grid.displayName = 'Grid';

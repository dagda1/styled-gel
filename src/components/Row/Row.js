import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { media } from '..';

const align = props => props.align ? `align-items:${props.align};` : null;
const justify = props => props.justify ? `justify-content:${props.justify};` : null;
const order = props => props.order ? `order:${props.order};` : null;
const wrap = props => props.wrap ? 'flex-wrap: wrap;' : null;
const column = props => props.column ? `flex-direction:column;` : null;
const grow = props => props.grow? `flex-grow: 1` : null;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin-right: 0;
  margin-left: -8px;
  padding-right: 0;
  padding-left: 0;
  ${props => props.flush && `margin-left: 0`};
  ${wrap};
  ${align};
  ${justify};
  ${order};
  ${column};
  ${grow};
  ${media.sm`
    margin-left: -16px;
  `};
`;

export const Row = ({ children, ...rest }) =>
  <StyledRow {...rest}>{children}</StyledRow>

Row.displayName = 'Row';

Row.propTypes = {
  align: PropTypes.string,
  justify: PropTypes.string,
  order: PropTypes.string,
  wrap: PropTypes.bool,
  column: PropTypes.bool,
  grow: PropTypes.bool,
  flush: PropTypes.bool
}

Row.defaultProps = {
  wrap: true,
  grow: true
};

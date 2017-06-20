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
  grow: PropTypes.bool
}

Row.defaultProps = {
  wrap: true,
  grow: true
};

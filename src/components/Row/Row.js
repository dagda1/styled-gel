import React, { Children, isValidElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { media } from '..';
import { ifProp } from 'styled-tools';

const wrap = props => props.wrap ? 'flex-wrap: wrap;' : null;
const column = props => props.column ? `flex-direction:column;` : null;
const grow = props => props.grow? `flex-grow: 1` : null;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin-left: ${ifProp('flush', '0', '-7.5px')};
  margin-right: ${ifProp('flush', '0', '-7.5px')};
  ${wrap};
  ${column};
  ${grow};
  ${props => !props.flush && media.sm`
    margin-left: -15px;
    margin-right: -15px;
  `};
`;

export const Row = ({ children, flush, ...rest }) =>
  <StyledRow flush={flush} {...rest}>{children && Children.map(
    children, child => isValidElement(child) ? cloneElement(child, {flush }) : child
  )}</StyledRow>

Row.displayName = 'Row';

Row.propTypes = {
  wrap: PropTypes.bool,
  column: PropTypes.bool,
  grow: PropTypes.bool,
  children: PropTypes.node
};

Row.defaultProps = {
  wrap: true,
  grow: true,
  column: false,
  flush: false
};

Row.displayName = 'Row';
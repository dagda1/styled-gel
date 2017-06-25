import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { media } from '..';
const wrap = props => props.wrap ? 'flex-wrap: wrap;' : null;
const column = props => props.column ? `flex-direction:column;` : null;
const grow = props => props.grow? `flex-grow: 1` : null;

const StyledRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin-right: 0;
  margin-left: -7.5px;
  margin-right: -7.5px;
  ${wrap};
  ${column};
  ${grow};
  ${media.sm`
    margin-left: -15px;
    margin-right: -15px;
  `};
`;

export const Row = ({ children, ...rest }) =>
  <StyledRow {...rest}>{children}</StyledRow>

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
  column: false
};

Row.displayName = 'Row';
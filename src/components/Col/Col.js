import React from 'react';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import PropTypes from 'prop-types';
import { media } from '..';
import { colAdapter } from '../../util/colAdapter';

const align = props => props.align ? `align-items:${props.align};` : null;
const justify = props => props.justify ? `justify-content:${props.justify};` : null;
const order = props => props.order ? `order:${props.order};` : null;

const StyledCol = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding-left: 8px;
  text-align: left;
  vertical-align: top;
  box-sizing: border-box;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  ${props => !props.flush && media.sm`
    padding-left: 16px;
  `}
  ${props => props.flush && 'padding-left: 0;'}
  ${align};
  ${justify};
  ${order};
  ${width};
  ${space};
`;

StyledCol.displayName = 'StyledCol';

const Col = ({ tag, width, children, ...rest }) => {
  const Tag = StyledCol.withComponent(tag);

  const widthProps = colAdapter(rest);

  return (
    <Tag {...widthProps} {...rest}>{children}</Tag>
  );
}

Col.propTypes = {
  tag: PropTypes.string,
  w: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  align: PropTypes.string,
  justify: PropTypes.string,
  order: PropTypes.string,
  flush: PropTypes.bool,
  children: PropTypes.node
}

Col.defaultProps = {
  tag: 'div'
};

Col.displayName = 'Col';

export default Col;

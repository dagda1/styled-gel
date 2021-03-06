import React from 'react';
import styled, { withTheme } from 'styled-components';
import { space, width } from 'styled-system';
import PropTypes from 'prop-types';
import { media } from '..';
import { colAdapter } from '..';
import { ThemeHOC } from '..';

const align = props => (props.align ? `align-items:${props.align};` : null);
const justify = props =>
  props.justify ? `justify-content:${props.justify};` : null;
const order = props => (props.order ? `order:${props.order};` : null);

const StyledCol = styled.div`
  position: relative;
  box-sizing: border-box;
  padding-left: ${props =>
    props.flush ? '0' : `${Number(props.theme.gutterWidth / 4)}px`};
  padding-right: ${props =>
    props.flush ? '0' : `${Number(props.theme.gutterWidth / 4)}px`};
  min-height: 1px;
  box-sizing: border-box;
  width: 100%;
  ${props =>
    !props.flush &&
    media.sm`
    padding-left: ${Number(props.theme.gutterWidth) / 2}px;
    padding-right: ${Number(props.theme.gutterWidth) / 2}px;
  `} ${props => props.flush && 'padding-left: 0;padding-right: 0'} ${align};
  ${justify};
  ${order};
  ${width};
  ${space};
`;

StyledCol.displayName = 'StyledCol';

export const Col = ({ tag, children, ...rest }) => {
  const Tag = StyledCol.withComponent(tag);

  const widthProps = colAdapter(rest);

  return (
    <Tag {...widthProps} {...rest}>
      {children}
    </Tag>
  );
};

Col.propTypes = {
  tag: PropTypes.string,
  w: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  align: PropTypes.string,
  justify: PropTypes.string,
  order: PropTypes.string,
  flush: PropTypes.bool,
  children: PropTypes.node,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
};

Col.defaultProps = {
  tag: 'div'
};

Col.displayName = 'Col';

export default ThemeHOC(withTheme(Col));

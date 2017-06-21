import React from 'react';
import styled from 'styled-components';
import { space, width } from 'styled-system';
import PropTypes from 'prop-types';
import { media } from '..';

const hoc = Comp => ({ width, ...props }) => <Comp {...props} w={width} />;

const StyledCol = styled.div`
  boxSizing: 'border-box';
  display: inline-block;
  padding-left: 8px;
  text-align: left;
  vertical-align: top;
  box-sizing: border-box;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  ${width};
  ${space};
  ${media.sm`
    padding-left: 16px;
  `}
`;

const Col = ({ tag, width, children, ...rest }) => {
  const Tag = StyledCol.withComponent(tag);

  return (
    <Tag {...rest}>{children}</Tag>
  );
}

Col.propTypes = {
  tag: PropTypes.string,
    w: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.array
    ]),
  children: PropTypes.node
}

Col.defaultProps = {
  w: 1,
  tag: 'div'
};

Col.displayName = 'Col';

export default hoc(Col);

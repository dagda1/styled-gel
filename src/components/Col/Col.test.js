import React from 'react';
import { shallow } from 'enzyme';
import { default as Col } from './Col';

const wrap = (props = {}) => shallow(<Col {...props} />).dive();

describe('Col', () => {
  it('should render a 100% wide div by default', () => {
    const wrapper = wrap();

    expect(wrapper.props().w).toBe(1);
    expect(wrapper.type().target).toBe('div');
  });

  it('should render different widths at different resolutions', () => {
    const wrapper = wrap({xs: 12, sm: 4, md: 3, lg: 2, xl: 2});

    expect(wrapper.props().w).toBe([1, 0.23, 0.3333333333333333, 0.25, 0.5, 0.5]);
  });
});
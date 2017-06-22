import React from 'react';
import { shallow } from 'enzyme';
import { Col } from './Col';

const wrap = (props = {}) => shallow(<Col {...props} />);

describe('Col', () => {
  it('should render a 100% wide div by default', () => {
    const wrapper = wrap();

    expect(wrapper.node.type.target).toBe('div');

    expect(wrapper.node.props.w).toBe(1);
  });

  it('should render different widths at different resolutions', () => {
    const wrapper = wrap({xs: 12, sm: 4, md: 3, lg: 6, xl: 6});

    expect(wrapper.node.props.w).toEqual([1, 0.3333333333333333, 0.25, 0.5, 0.5]);
  });

  it('should render different element types', () => {
    const wrapper = wrap({ tag: 'span' });

    expect(wrapper.node.type.target).toBe('span');
  })
});
import React from 'react';
import { shallow } from 'enzyme';
import { getCSSFromDom } from '../../util/testUtils';
import { default as Col } from './Col';

const wrap = (props = {}) => shallow(<Col {...props} />).dive();

it('should render a 100% wide div by default', () => {
  const wrapper = wrap();

  const css = getCSSFromDom();

  console.log(css);

  //expect(wrapper.type().target).toBe('div');
});
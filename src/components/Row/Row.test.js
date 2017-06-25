import React from 'react';
import { shallow } from 'enzyme';
import { Row, Col } from '..';
import { getCSSFromDom } from '../../util/testUtils';
import renderer from 'react-test-renderer';

const wrap = (props = {}) => shallow(<Row {...props} />).dive();

it('should render a div with display flexbox and flex-wrap', () => {
  wrap();

  const css = getCSSFromDom();

  expect(css.includes('display: flex')).toBe(true);
  expect(css.includes('flex-wrap: wrap')).toBe(true);
});

it('should remove gutter with flush prop', () => {
  wrap({ flush: true });

  const css = getCSSFromDom();

  expect(css.includes('margin-left: 0'));
  expect(css.includes('margin-right: 0'));
});

it('should pass flush property to children', () => {
  const wrapper = wrap({ flush: true, children: <Col>Foo Bar</Col> });

  const col = wrapper.find(Col);

  expect(col.props().flush).toBe(true);
});

it('renders correctly', () => {
  const row = renderer.create(<Row>Foo</Row>);

  expect(row).toMatchSnapshot();
});
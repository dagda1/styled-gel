import React from 'react';
import { Grid } from './Grid';
import renderer from 'react-test-renderer';

describe('Grid', () => {
  it('renders correctly', () => {
    const grid = renderer.create(
      <Grid/>
    ).toJSON();

    expect(grid).toMatchSnapshot();
  });
});
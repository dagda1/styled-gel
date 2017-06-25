import React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakPointValues, defaultColumns, gutterWidth as defaultGutter } from '..';

const constructTheme = (theme = {}) => {
  const gutterWidth = theme.gutterWidth || defaultGutter;
  const breakpoints = theme.breakpoints || breakPointValues;
  const columns = theme.columns || defaultColumns;

  return {
    gutterWidth,
    breakpoints,
    columns
  }
};

export const ThemeHOC = Comp => ({ theme, ...rest }) =>
  <ThemeProvider theme={constructTheme(theme)}>
    <Comp {...rest}/>
  </ThemeProvider>;

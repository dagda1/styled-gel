import React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakPointValues, defaultColumns } from '..';

const constructTheme = (theme = {}) => {
  const breakpoints = theme.breakpoints || breakPointValues;
  const columns = theme.columns || defaultColumns;

  return {
    breakpoints,
    columns
  }
};

export const ThemeHOC = Comp => ({ theme, ...rest }) =>
  <ThemeProvider theme={constructTheme(theme)}>
    <Comp {...rest}/>
  </ThemeProvider>;

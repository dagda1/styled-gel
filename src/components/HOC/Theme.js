import React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakPointValues, defaultColumns, gutterWidth as defaultGutter } from '..';

const defaultBg = 'inherit';
const defaultTextColor = 'inherit';

const constructTheme = (theme = {}) => {
  const gutterWidth = theme.gutterWidth || defaultGutter;
  const breakpoints = theme.breakpoints || breakPointValues;
  const columns = theme.columns || defaultColumns;
  const bodyBg = theme.bodyBg || defaultBg;
  const textColor = theme.textColor || defaultTextColor;

  return {
    bodyBg,
    textColor,
    gutterWidth,
    breakpoints,
    columns
  }
};

export const ThemeHOC = Comp => ({ theme, ...rest }) =>
  <ThemeProvider theme={constructTheme(theme)}>
    <Comp {...rest}/>
  </ThemeProvider>;

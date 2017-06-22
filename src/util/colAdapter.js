import { breakPoints, defaultColumns } from '../components/constants';
import { findLastIndex } from 'lodash';

export const colAdapter = (props) => {
  const noOfColumns = (props.theme && props.theme.columns) || defaultColumns;

  const widths = Object.keys(breakPoints)
        .map((breakPoint) => {
          const value = props[breakPoint];

          if(!value) return null;

          return Number(value) / noOfColumns;
        });

  const endIndex = findLastIndex(widths, x => !!x);

  if(endIndex === -1) {
    return { w: 1 };
  }

  const w = [];

  for(var i = 0; i <= endIndex;i++) {
    w.push(widths[i]);
  }

  return { w };
};
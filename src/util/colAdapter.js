import { breakPoints, columns } from '../components/constants';
import { findLastIndex } from 'lodash';

export const colAdapter = (props) => {
  const noOfColumns = (props.theme && props.theme.columns) || columns;

  const widths = Object.keys(breakPoints)
        .reduce((acc, breakPoint) => {
          const value = props[breakPoint];

          if(!value) {
            acc.push(null);

            return acc;
          }

          const width = Number(value) / noOfColumns;

          acc.push(width);

          return acc;
        }, []);

  const endIndex = findLastIndex(widths, x => !!x);

  const w = [];

  for(var i = 0; i <= endIndex;i++) {
    w.push(widths[i]);
  }

  return { w };
};
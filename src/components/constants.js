import { values } from 'lodash';

export const breakpoints = {
  xs:  '25em',    // 400px
  sm:  '37.5em',  // 600px
  md:  '56.25',   // 900px
  lg:  '63em',    // 1008px
  xl:  '80em'     // 1280px
};

export default values(breakpoints).map(v => Number(v.replace(/em$/g, '')));

export const defaultColumns = 12;
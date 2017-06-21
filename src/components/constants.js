import { values } from 'lodash';

export const breakPoints = {
  xs:  '25em',    // 400px
  sm:  '37.5em',  // 600px
  md:  '56.25',   // 900px
  lg:  '63em',    // 1008px
  xl:  '80em'     // 1280px
};

export default values(breakPoints);

export const defaultColumns = 12;
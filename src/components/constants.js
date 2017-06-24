import { values } from 'lodash';

export const breakpoints = {
  sm:  '36em',    // > 576px - Small screen / phone
  md:  '48em',    // > 768px - Medium screen / tablet
  lg:  '62em',    // > 992px - Large screen / desktop
  xl:  '75em'     // > 1200px
};

export default values(breakpoints).map(v => Number(v.replace(/em$/g, '')));

export const defaultColumns = 12;

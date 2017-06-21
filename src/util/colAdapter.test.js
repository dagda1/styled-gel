import { colAdapter } from './colAdapter';
const columns = 12;

const createColumns = props =>
      colAdapter(Object.assign(props, { theme: {columns} }));

describe('colAdapter', () => {
  it('should convert xs={1} to 100%', () => {
    const props = { xs: 12 };

    const result = createColumns(props);

    expect(result.w).toEqual([1]);
  });


  it('should convert multiple widths', () => {
    const props = { xs: 12, md: 6 };

    const result = createColumns(props);

    expect(result.w).toEqual([1, null, 1/2]);
  });

  it('should convert all widths', () => {
    const props = {xs: 12, xl: 4};

    const result = createColumns(props);

    expect(result.w).toEqual([ 1, null, null, null, 0.3333333333333333 ]);
  });
});
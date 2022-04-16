import addItem from './add.js';

describe('Example Tests', () => {
  test('Should add 1 + 2 to equal 3', () => {
    const result = addItem(1, 2);
    expect(result).toBe(3);
  });

  test('Should equal to {}', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

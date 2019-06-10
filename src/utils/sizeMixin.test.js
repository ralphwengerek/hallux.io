import calculateRelativeSize from './sizeMixin';

describe('calculateRelativeSize', () => {
  describe('default base size', () => {
    it('returns 1rem when px is same as default base size', () => {
      expect(calculateRelativeSize(16)).toBe('1rem');
    });

    it('returns 2rem when px is double default base size', () => {
      expect(calculateRelativeSize(32)).toBe('2rem');
    });

    it('returns -1rem when px is negative default base size', () => {
      expect(calculateRelativeSize(-16)).toBe('-1rem');
    });
  });

  describe('custom base size', () => {
    it('returns 1rem when px is same as custom base size', () => {
      expect(calculateRelativeSize(17, { base: 17 })).toBe('1rem');
    });

    it('returns 2rem when px is double custom base size', () => {
      expect(calculateRelativeSize(34, { base: 17 })).toBe('2rem');
    });

    it('returns -1rem when px is negative custom base size', () => {
      expect(calculateRelativeSize(-17, { base: 17 })).toBe('-1rem');
    });
  });

  describe('rounding', () => {
    it('rounds to a maximum of 5 decimals', () => {
      expect(calculateRelativeSize(16, { base: 17 })).toBe('0.94118rem');
    });

    it('rounds to less than 5 decimals when applicable', () => {
      expect(calculateRelativeSize(24)).toBe('1.5rem');
    });
  });

  describe('custom unit', () => {
    it('uses the custom size unit when passed in', () => {
      expect(calculateRelativeSize(16, { unit: 'em' })).toBe('1em');
    });
  });
});

import React from 'react';
import styled from 'styled-components';
import { render } from './testUtils';
import media from './mediaQuery';

describe('media', () => {
  const createDiv = (query) => {
    const Elm = styled.div.attrs({
      'data-testid': 'media-test',
    })`
      ${query`
        color: red;
      `}
    `;
    return render(<Elm />);
  };

  describe('media.down', () => {
    it('should have functions for each size', () => {
      expect(media.down).toHaveProperty('desktop');
      expect(media.down).toHaveProperty('tablet');
      expect(media.down).toHaveProperty('phone');
    });

    it('creates a media query for below desktop', () => {
      const { getByTestId } = createDiv(media.down.desktop);
      expect(getByTestId('media-test')).toHaveStyleRule('color', 'red', {
        media: 'only screen and (max-width: 62em)',
      });
    });

    it('creates a media query for below tablet', () => {
      const { getByTestId } = createDiv(media.down.tablet);
      expect(getByTestId('media-test')).toHaveStyleRule('color', 'red', {
        media: 'only screen and (max-width: 48em)',
      });
    });

    it('creates a media query for below phone', () => {
      const { getByTestId } = createDiv(media.down.phone);
      expect(getByTestId('media-test')).toHaveStyleRule('color', 'red', {
        media: 'only screen and (max-width: 36em)',
      });
    });
  });

  describe('media.up', () => {
    it('should have functions for each size', () => {
      expect(media.up).toHaveProperty('desktop');
      expect(media.up).toHaveProperty('tablet');
      expect(media.up).toHaveProperty('phone');
    });

    it('creates a media query for above desktop', () => {
      const { getByTestId } = createDiv(media.up.desktop);
      expect(getByTestId('media-test')).toHaveStyleRule('color', 'red', {
        media: 'only screen and (min-width: 62em)',
      });
    });

    it('creates a media query for above tablet', () => {
      const { getByTestId } = createDiv(media.up.tablet);
      expect(getByTestId('media-test')).toHaveStyleRule('color', 'red', {
        media: 'only screen and (min-width: 48em)',
      });
    });

    it('creates a media query for above phone', () => {
      const { getByTestId } = createDiv(media.up.phone);
      expect(getByTestId('media-test')).toHaveStyleRule('color', 'red', {
        media: 'only screen and (min-width: 36em)',
      });
    });
  });
});

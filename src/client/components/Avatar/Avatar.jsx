import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const Avatar = styled.div`
  ${({
    theme, picture, size, shadow,
  }) => css`
    display: inline-block;
    background-image: url(${picture});
    background-size: ${(size && `${size} ${size}`) || '32px 32px'};
    border-radius: 50%;
    overflow: hidden;
    height: ${(size && `${size}`) || '32px'};
    width: ${(size && `${size}`) || '32px'};
    min-width: ${(size && `${size}`) || '32px'};
    z-index: 0;

    /* modifier */
    ${shadow && css`
      box-shadow: 0 0 5px ${theme.colors.shadow};
    `}
  `}
`;

Avatar.propTypes = {
  picture: PropTypes.string.isRequired,
  size: PropTypes.string,
  border: PropTypes.bool,
};

Avatar.defaultProps = {
  size: '32px',
  border: false,
};

export default Avatar;

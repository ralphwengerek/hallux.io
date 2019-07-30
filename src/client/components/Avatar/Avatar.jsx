import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Avatar = styled.div`
  display: inline-block;
  background-image: url(${({ picture }) => picture});
  background-size: ${({ size }) => (size && `${size} ${size}`) || '32px 32px'};
  border-radius: 50%;
  overflow: hidden;
  height: ${({ size }) => (size && `${size}`) || '32px'};
  width: ${({ size }) => (size && `${size}`) || '32px'};
  z-index: 0;
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

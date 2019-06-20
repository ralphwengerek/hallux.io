import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
`;

const Button = ({ onClick, children }) => (
  <StyledButton onClick={onClick}>
    { children}
  </StyledButton>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  onClick: Button.onClick,
};

export default Button;

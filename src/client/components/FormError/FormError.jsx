import React from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { px } from '../../utils/pixel';

const ErrorContainer = styled.div`
  position:absolute;
  right: ${px(16)};
  font-size: ${({ theme }) => theme.typography.small};
  color: ${({ theme }) => theme.colors.error};
`;

export const FormError = ({ msg }) => (
  <ErrorContainer>
    <span>{`* ${msg}`}</span>
  </ErrorContainer>
);

FormError.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default FormError;

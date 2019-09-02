import React from 'react';
import styled from 'styled-components';
import { FaWindowMinimize } from 'react-icons/fa';
import { px } from '../../utils/pixel';

const StyledDivider = styled.div`
  display: block;
  text-align: center;
  margin-bottom: ${px(8)};
`;

export const Divider = () => (
  <StyledDivider>
    <FaWindowMinimize />
  </StyledDivider>
);

export default Divider;

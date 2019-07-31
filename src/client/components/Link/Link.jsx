import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
  &:active {
    color: ${({ theme }) => theme.colors.buttonActive};
  }

  &:hover{
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default Link;

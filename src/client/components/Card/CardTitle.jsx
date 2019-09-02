import styled from 'styled-components';

export const CardTitle = styled.h3`
  display: block;
  margin-bottom: 0px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;
`;

export default CardTitle;

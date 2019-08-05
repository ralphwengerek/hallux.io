import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { media } from '../../utils/mediaQuery';
import * as loginActions from '../../redux/actions/userActions';
import { Button } from '../Button/Button';

const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footerBackground};
    color: ${({ theme }) => theme.colors.footer};
    min-height: 40px;
    transition: all 0.5s ease;

    ${media.up.tablet`
      min-height: 60px;
    `}
`;

export const Footer = () => {
  const dispatch = useDispatch();
  return (
    <StyledFooter>
      <h3>footer</h3>
      <Button onClick={() => dispatch(loginActions.login())}>Login</Button>
    </StyledFooter>
  );
};

export default Footer;

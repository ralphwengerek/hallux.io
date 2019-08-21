import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaGithub, FaLinkedin, FaCaretDown } from 'react-icons/fa';
import { media } from '../../utils/mediaQuery';
import * as loginActions from '../../redux/actions/userActions';
import { px } from '../../utils/pixel';

const StyledFooter = styled.footer`

  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.footer};
  min-height: 40px;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.up.tablet`
    min-height: 60px;
  `}
`;

const FooterLink = styled.a`
  margin: ${px(24)};
  font-size: ${px(32)};

  > svg {
    transition: all 0.2s;
    &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const Footer = () => {
  const dispatch = useDispatch();
  return (
    <StyledFooter>
      <div>
        <FooterLink href="https://github.com/ralphwengerek" target="_blank" rel="noopener noreferrer" title="Github">
          <FaGithub />
        </FooterLink>

        <FooterLink href="https://www.linkedin.com/in/ralph-wengerek/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </FooterLink>
      </div>
      <div>&copy; Ralph Wengerek</div>
      <FaCaretDown onClick={() => dispatch(loginActions.login())} />
    </StyledFooter>
  );
};

export default Footer;

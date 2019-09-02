import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { FaGithub, FaLinkedin, FaCaretDown } from 'react-icons/fa';
import { media } from '../../utils/mediaQuery';
import * as loginActions from '../../redux/actions/userActions';
import { px } from '../../utils/pixel';

const StyledFooter = styled.footer`
  position: relative;
  background-color: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.footer};
  min-height: 40px;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: ${px(16)};

  ${media.up.tablet`
    min-height: 60px;
  `}
`;

const FooterLinksContainer = styled.div`
  display: flex;
`;

const FooterLink = styled.a`
  margin: 0 ${px(24)};
  font-size: ${px(32)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  > span {
    font-size: 12px;
  }

  &:hover {
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.accent};
  }

`;

const AdminLink = styled(FaCaretDown)`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: -6px;
  color: white;
`;

export const Footer = () => {
  const dispatch = useDispatch();
  return (
    <StyledFooter>
      <FooterLinksContainer>
        <FooterLink href="https://github.com/ralphwengerek" target="_blank" rel="noopener noreferrer" title="Github">
          <FaGithub />
          <span>Github</span>
        </FooterLink>

        <FooterLink href="https://www.linkedin.com/in/ralph-wengerek/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
          <span>LinkedIn</span>
        </FooterLink>
      </FooterLinksContainer>

      <AdminLink onClick={() => dispatch(loginActions.login())} />
    </StyledFooter>
  );
};

export default Footer;

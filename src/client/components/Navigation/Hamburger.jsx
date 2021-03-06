import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { media } from '../../utils/mediaQuery';
import { getMenuState } from '../../redux/reducers/uiReducer';
import { toggleMenu } from '../../redux/actions/ui/menuActions';

const HamburgerContainer = styled.div`
  ${({ open, theme }) => css`
    height: 20px;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.up.phone`
      display: none;
    `}

    .menu-button,
    .menu-button::before,
    .menu-button::after {
      display: block;
      background:linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.accent} 100%);
      position: absolute;
      height: 4px;
      width: 30px;
      transition: all 400ms cubic-bezier(0.23, 1, 0.32, 1);
      border-radius: 1px;
    }

    .menu-button {
      ${open && css`
        background:none;
      `}
    }

    .menu-button::after {
      content: '';
      margin-top: 8px;
      ${open && css`
        transform: rotate(-45deg) translate(1px, 1px);
      `}
    }
    .menu-button::before {
      content: '';
      margin-top: 16px;
      ${open && css`
        transform: rotate(45deg) translate(-5px, -7px);
      `}
    }

  `}
`;

export const Hamburger = () => {
  const open = useSelector(getMenuState);
  const dispatch = useDispatch();

  const onHamburgerClick = (event) => {
    event.stopPropagation();
    dispatch(toggleMenu());
  };

  return (
    <HamburgerContainer open={open} onClick={onHamburgerClick}>
      <div className="menu-button" />
    </HamburgerContainer>
  );
};

export default Hamburger;

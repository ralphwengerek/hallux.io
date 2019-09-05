import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';

const LoaderWrapper = styled.div.attrs({
  'data-testid': 'loader',
})`
  top: -40px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  transition: all .4s cubic-bezier(0.42, 0.01, 0.21, 1);
  opacity: 1;
  height:100%;
  width: 100%;

    &.fade-enter {
      opacity: 0;
    }
    &.fade-enter-active {
      opacity: 1;
    }
    &.fade-exit {
      opacity: 1;
    }
    &.fade-exit-active {
      opacity: 0;
    }

  .sk-folding-cube {
    margin: 20px auto;
    width: 40px;
    height: 40px;
    position: relative;
    transform: rotateZ(45deg);

    ${({ size }) => size && css`
      width: ${px(size)};
      height: ${px(size)};
    `}
  }

  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    transform: scale(1.1);
  }
  .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.loader};
    animation: sk-foldCubeAngle 2.4s infinite linear both;
    transform-origin: 100% 100%;
  }
  .sk-folding-cube .sk-cube2 {
    transform: scale(1.1) rotateZ(90deg);
  }
  .sk-folding-cube .sk-cube3 {
    transform: scale(1.1) rotateZ(180deg);
  }
  .sk-folding-cube .sk-cube4 {
    transform: scale(1.1) rotateZ(270deg);
  }
  .sk-folding-cube .sk-cube2:before {
    animation-delay: 0.3s;
  }
  .sk-folding-cube .sk-cube3:before {
    animation-delay: 0.6s;
  }
  .sk-folding-cube .sk-cube4:before {
    animation-delay: 0.9s;
  }
  @keyframes sk-foldCubeAngle {
    0%, 10% {
      transform: perspective(140px) rotateX(-180deg);
      opacity: 0;
    } 25%, 75% {
      transform: perspective(140px) rotateX(0deg);
      opacity: 1;
    } 90%, 100% {
      transform: perspective(140px) rotateY(180deg);
      opacity: 0;
    }
  }
`;

export const Loader = ({ size, show }) => (
  <CSSTransition
    in={show}
    classNames="fade"
    timeout={400}
    unmountOnExit
  >
    <LoaderWrapper size={size}>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    </LoaderWrapper>
  </CSSTransition>

);

Loader.propTypes = {
  size: PropTypes.number,
  show: PropTypes.bool,
};

Loader.defaultProps = {
  size: 40,
  show: true,
};

export default Loader;

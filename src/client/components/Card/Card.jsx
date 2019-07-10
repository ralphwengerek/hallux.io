import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';


const CardContainer = styled.div`
  background-color: white;
  margin: ${px(16)};
  border-radius: ${px(3)};
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  position: relative;

  &:hover {
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  }
`;

const Card = ({ children }) => (
  <CardContainer>
    {children}
  </CardContainer>
);

Card.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Card;

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { px } from '../../utils/pixel';

const TagContainer = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.87);
  border: none;
  cursor: pointer;
  height: 32px;
  display: inline-flex;
  outline: none;
  padding: 0;
  margin: 2px;
  font-size: ${px(14)};
  box-sizing: border-box;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  align-items: center;
  white-space: nowrap;
  border-radius: 16px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: #e0e0e0;

  &:hover {
    background-color: #929292;
    box-shadow: 0px 3px 6px 0px rgba(0,0,0,0.2);
  }
`;

const TagValue = styled.span`
    cursor: inherit;
    display: flex;
    align-items: center;
    user-select: none;
    white-space: nowrap;
    padding-left: 12px;
    padding-right: 12px;
`;

const Tag = ({ value }) => (
  <TagContainer>
    <TagValue>
      { value }
    </TagValue>
  </TagContainer>
);

Tag.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Tag;

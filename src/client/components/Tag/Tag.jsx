import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaTimes } from 'react-icons/fa';
import { px } from '../../utils/pixel';

const TagLink = styled(Link).attrs({ className: 'tag' })`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.body};
  border: none;
  cursor: pointer;
  height: 32px;
  display: inline-flex;
  outline: none;
  padding: 0;
  font-size: ${px(14)};
  box-sizing: border-box;
  align-items: center;
  white-space: nowrap;
  border-radius: 16px;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.tagBackground};
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 3px 6px 0px ${({ theme }) => theme.colors.shadow};
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

export const Tag = ({ value, onClick }) => (
  onClick ? (
    <TagLink
      as="button"
      type="button"
      onClick={onClick}
    >
      <TagValue>
        { value }
        <FaTimes />
      </TagValue>
    </TagLink>
  ) : (
    <TagLink
      to={`/tag/${value.toLowerCase()}`}
    >
      <TagValue>
        { value }
      </TagValue>
    </TagLink>
  )
);

Tag.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Tag.defaultProps = {
  onClick: Tag.onClick,
};

export default Tag;

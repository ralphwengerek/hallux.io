import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Tag } from './Tag';

const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  &:first-child .tag {
    margin-left: 0px;
  }
  > .tag {
    margin: 8px;
  }
`;

export const TagList = ({ tags }) => (
  <TagsContainer>
    {tags.map((t) => <Tag key={t} value={t} />)}
  </TagsContainer>
);

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TagList.defaultProps = {
  tags: [],
};

export default TagList;

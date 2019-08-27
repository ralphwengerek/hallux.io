import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { px } from '../../utils/pixel';

const TagBrowserContainer = styled.div`
    width: max-content;
    margin: 32px 0px;
    padding: 0px;
`;

const TagLink = styled(Link)`
  display: block;
  margin: ${px(32)};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const TagBrowser = ({ tags }) => (
  <TagBrowserContainer>
    {tags.map((t) => <TagLink key={t.value} to={`/tag/${t.value.toLowerCase()}`}>{`${t.value} (${t.count})`}</TagLink>)}
  </TagBrowserContainer>
);

TagBrowser.propTypes = {
  tags: PropTypes.array,
};

TagBrowser.defaultProps = {
  tags: [],
};

export default TagBrowser;

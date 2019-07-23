import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TagBrowserContainer = styled.div``;

const TagLink = styled(Link)`
`;

export const TagBrowser = ({ tags }) => (
  <TagBrowserContainer>
    {tags.map(t => <TagLink key={t.value} to="/tags/t.value">{`${t.value} (${t.count})`}</TagLink>)}
  </TagBrowserContainer>
);

TagBrowser.propTypes = {
  tags: PropTypes.array,
};

TagBrowser.defaultProps = {
  tags: [],
};

export default TagBrowser;

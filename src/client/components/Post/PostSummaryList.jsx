import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PostSummary } from './PostSummary';
import { Loader } from '../Loader/Loader';

const ListContainer = styled.div`
  &:first-child div {
    margin-top: 0px;
  }
`;

export const PostSummaryList = ({
  entities, error, isLoading,
}) => (
  <>
    <Loader show={isLoading} />
    <ListContainer>
      { entities.length > 0 && entities.map(post => (
        <PostSummary
          key={post.slug}
          slug={post.slug}
          title={post.title}
          image={post.image}
          published={post.published}
          summary={post.summary}
          tags={post.tags}
        />
      ))}
    </ListContainer>
    {error && (
      <h2>
      Error:
        {' '}
        {error}
      </h2>
    )}

  </>
);

export default PostSummaryList;


PostSummaryList.propTypes = {
  entities: PropTypes.array,
  error: PropTypes.any,
  isLoading: PropTypes.bool,
};

PostSummaryList.defaultProps = {
  entities: [],
  error: undefined,
  isLoading: false,
};

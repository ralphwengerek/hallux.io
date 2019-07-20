import React from 'react';
import PropTypes from 'prop-types';
import { PostSummary } from './PostSummary';


export const PostSummaryList = ({
  postIds, postEntities, isLoading, error,
}) => (
  <>
    { isLoading && <h2>LOADING...</h2> }
    { postIds.length > 0 ? postIds.map(slug => (
      <PostSummary
        key={slug}
        slug={slug}
        title={postEntities[slug].title}
        image={postEntities[slug].image}
        published={postEntities[slug].published}
        summary={postEntities[slug].summary}
        tags={postEntities[slug].tags}
      />
    )) : <h2>No data...</h2>}
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
  postEntities: PropTypes.object.isRequired,
  postIds: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.any,
};

PostSummaryList.defaultProps = {
  isLoading: false,
  error: undefined,
};

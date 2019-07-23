import React from 'react';
import PropTypes from 'prop-types';
import { PostSummary } from './PostSummary';

export const PostSummaryList = ({
  postIds, postEntities, error,
}) => (
  <>
    { postIds.length > 0 && postIds.map(slug => (
      <PostSummary
        key={slug}
        slug={slug}
        title={postEntities[slug].title}
        image={postEntities[slug].image}
        published={postEntities[slug].published}
        summary={postEntities[slug].summary}
        tags={postEntities[slug].tags}
      />
    ))}
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
  error: PropTypes.any,
};

PostSummaryList.defaultProps = {
  error: undefined,
};

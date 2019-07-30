import React from 'react';
import PropTypes from 'prop-types';
import { PostSummary } from './PostSummary';

export const PostSummaryList = ({
  ids, entities, error,
}) => (
  <>
    { ids.length > 0 && ids.map(slug => (
      <PostSummary
        key={slug}
        slug={slug}
        title={entities[slug].title}
        image={entities[slug].image}
        published={entities[slug].published}
        summary={entities[slug].summary}
        tags={entities[slug].tags}
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
  entities: PropTypes.object.isRequired,
  ids: PropTypes.array.isRequired,
  error: PropTypes.any,
};

PostSummaryList.defaultProps = {
  error: undefined,
};

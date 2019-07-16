import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostSummary from '../../components/Post/PostSummary';
import { fetchPosts } from '../../redux/actions/post';
import { getAllPosts } from '../../redux/reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, error, items } = useSelector(getAllPosts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      { isLoading ? <h2>LOADING...</h2>
        : items.map(({
          id, title, image, publishDate, tags, summary,
        }) => (
          <PostSummary
            key={id}
            title={title}
            image={image}
            publishDate={publishDate}
            summary={summary}
            tags={tags}
          />
        ))}
      {error && (
      <h2>
      Error:
        {' '}
        {error}
      </h2>
      )}

    </div>
  );
};

export default Home;

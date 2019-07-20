import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PostSummaryList } from '../../components/Post/PostSummaryList';
import { fetchPosts } from '../../redux/actions/post';
import { getAllPosts } from '../../redux/reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const {
    error,
    isLoading,
    postEntities,
    postIds,
  } = useSelector(getAllPosts);

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <PostSummaryList
      isLoading={isLoading}
      postEntities={postEntities}
      postIds={postIds}
      error={error}
    />
  );
};

export default Home;
